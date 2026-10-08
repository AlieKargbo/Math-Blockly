import * as Blockly from "blockly";

export type Expression =
  | {
    type: "number";
    value: number;
  }
  | {
    type: "variable";
    name: string;
  }
  | {
    type: "operation";
    operator: string;
    left: Expression;
    right: Expression;
  }
  | {
    type: "unary";
    operator: string;
    value: Expression;
  }
  | {
    type: "function";
    name: string;
    value: Expression;
  };

//BLOCKLY BLOCK → EXPRESSION
export function blockToExpression(
  block: Blockly.Block | null
): Expression | null {
  if (!block) {
    return null;
  }

  //NUMBER
  if (block.type === "math_number_custom") {
    const value = Number(
      block.getFieldValue("VALUE")
    );

    if (!Number.isFinite(value)) {
      return null;
    }

    return {
      type: "number",
      value,
    };
  }

  //VARIABLE
  if (block.type === "math_variable_custom") {
    const name =
      String(
        block.getFieldValue("NAME")
      ).trim() || "x";

    return {
      type: "variable",
      name,
    };
  }

  //BASIC OPERATION
  if (block.type === "math_operation") {
    const leftBlock = block.getInputTargetBlock("LEFT");
    const rightBlock = block.getInputTargetBlock("RIGHT");
    const left = blockToExpression(leftBlock);
    const right = blockToExpression(rightBlock);

    if (!left || !right) {
      return null;
    }

    return {
      type: "operation",
      operator: String(
        block.getFieldValue("OP")
      ),
      left,
      right,
    };
  }

  //PHASE 1

  //EXPONENT
  if (block.type === "math_exponent") {
    const baseBlock = block.getInputTargetBlock("BASE");
    const powerBlock = block.getInputTargetBlock("POWER");
    const base = blockToExpression(baseBlock);
    const power = blockToExpression(powerBlock);

    if (!base || !power) {
      return null;
    }

    return {
      type: "operation",
      operator: "POWER",
      left: base,
      right: power,
    };
  }

  //SQUARE ROOT

  if (block.type === "math_square_root") {
    const valueBlock = block.getInputTargetBlock("VALUE");
    const value = blockToExpression(valueBlock);

    if (!value) {
      return null;
    }

    return {
      type: "unary",
      operator: "SQRT",
      value,
    };
  }

  //ABSOLUTE VALUE
  if (block.type === "math_absolute") {
    const valueBlock = block.getInputTargetBlock("VALUE");

    const value = blockToExpression(valueBlock);

    if (!value) {
      return null;
    }

    return {
      type: "unary",
      operator: "ABS",
      value,
    };
  }

  //MODULO
  if (block.type === "math_modulo") {
    const leftBlock = block.getInputTargetBlock("LEFT");
    const rightBlock = block.getInputTargetBlock("RIGHT");
    const left = blockToExpression(leftBlock);
    const right = blockToExpression(rightBlock);

    if (!left || !right) {
      return null;
    }

    return {
      type: "operation",
      operator: "MODULO",
      left,
      right,
    };
  }


  //NEGATIVE
  if (block.type === "math_negative") {
    const valueBlock = block.getInputTargetBlock("VALUE");
    const value = blockToExpression(valueBlock);

    if (!value) {
      return null;
    }

    return {
      type: "unary",
      operator: "NEGATIVE",
      value,
    };
  }


  //FRACTION


  if (block.type === "math_fraction") {
    const numeratorBlock = block.getInputTargetBlock(
      "NUMERATOR"
    );
    const denominatorBlock = block.getInputTargetBlock(
      "DENOMINATOR"
    );
    const numerator = blockToExpression(numeratorBlock);
    const denominator = blockToExpression(denominatorBlock);

    if (!numerator || !denominator) {
      return null;
    }

    return {
      type: "operation",
      operator: "DIVIDE",
      left: numerator,
      right: denominator,
    };
  }


  //TRIGONOMETRY
  if (
    block.type === "math_sin" ||
    block.type === "math_cos" ||
    block.type === "math_tan" ||
    block.type === "math_arcsin" ||
    block.type === "math_arccos" ||
    block.type === "math_arctan"
  ) {
    const valueBlock = block.getInputTargetBlock("VALUE");
    const value = blockToExpression(valueBlock);

    if (!value) {
      return null;
    }

    const operators: Record<string, string> = {
      math_sin: "SIN",
      math_cos: "COS",
      math_tan: "TAN",
      math_arcsin: "ARCSIN",
      math_arccos: "ARCCOS",
      math_arctan: "ARCTAN",
    };

    return {
      type: "unary",
      operator: operators[block.type],
      value,
    };
  }

  if (block.type === "math_calculate") {
    return blockToExpression(
      block.getInputTargetBlock("EXPRESSION")
    );
  }

  return null;
}


//EXPRESSION → READABLE STRING
export function expressionToString(expression: Expression | null): string {
  if (!expression) {
    return "";
  }

  if (expression.type === "number") {
    return String(expression.value);
  }

  if (expression.type === "variable") {
    return expression.name;
  }

  if (expression.type === "operation") {
    const operators: Record<string, string> = {
      ADD: "+",
      SUBTRACT: "−",
      MULTIPLY: "×",
      DIVIDE: "÷",
      MODULO: "%",
      POWER: "^",
    };

    const left = expressionToString(
      expression.left
    );

    const right = expressionToString(
      expression.right
    );

    const operator = operators[expression.operator];

    if (!operator) {
      return `(${left} ? ${right})`;
    }

    return `(${left} ${operator} ${right})`;
  }

  if (expression.type === "unary") {
    const value = expressionToString(
      expression.value
    );

    switch (expression.operator) {
      case "SQRT":
        return `√(${value})`;

      case "ABS":
        return `|${value}|`;

      case "NEGATIVE":
        return `−(${value})`;

      case "SIN":
        return `sin(${value})`;

      case "COS":
        return `cos(${value})`;

      case "TAN":
        return `tan(${value})`;

      case "ARCSIN":
        return `sin⁻¹(${value})`;

      case "ARCCOS":
        return `cos⁻¹(${value})`;

      case "ARCTAN":
        return `tan⁻¹(${value})`;

      default:
        return `?(${value})`;
    }
  }

  if (expression.type === "function") {
    return `${expression.name}(${expressionToString(
      expression.value
    )})`;
  }

  return "";
}


//EVALUATE EXPRESSION


export function evaluateExpression(
  expression: Expression | null
): number | null {
  if (!expression) {
    return null;
  }

  //NUMBER
  if (expression.type === "number") {
    return expression.value;
  }

  //VARIABLE
  if (expression.type === "variable") {
    return null;
  }


  //OPERATIONS
  if (expression.type === "operation") {
    const left = evaluateExpression(
      expression.left
    );

    const right = evaluateExpression(
      expression.right
    );

    if (left === null || right === null) {
      return null;
    }

    switch (expression.operator) {
      case "ADD":
        return left + right;

      case "SUBTRACT":
        return left - right;

      case "MULTIPLY":
        return left * right;

      case "DIVIDE":
        if (right === 0) {
          return null;
        }

        return left / right;

      case "MODULO":
        if (right === 0) {
          return null;
        }

        return left % right;

      case "POWER":
        return Math.pow(left, right);

      default:
        return null;
    }
  }

  //UNARY OPERATIONS
  if (expression.type === "unary") {
    const value =
      evaluateExpression(
        expression.value
      );

    if (value === null) {
      return null;
    }

    switch (expression.operator) {
      case "SQRT":
        if (value < 0) {
          return null;
        }

        return Math.sqrt(value);

      case "ABS":
        return Math.abs(value);

      case "NEGATIVE":
        return -value;

      case "SIN":
        return (
          Math.sin(
            (value * Math.PI) / 180
          )
        );

      case "COS":
        return (
          Math.cos(
            (value * Math.PI) / 180
          )
        );

      case "TAN":
        return (
          Math.tan(
            (value * Math.PI) / 180
          )
        );

      case "ARCSIN":
        if (value < -1 || value > 1) {
          return null;
        }

        return (
          (Math.asin(value) * 180) /
          Math.PI
        );

      case "ARCCOS":
        if (value < -1 || value > 1) {
          return null;
        }

        return (
          (Math.acos(value) * 180) /
          Math.PI
        );

      case "ARCTAN":
        return (
          (Math.atan(value) * 180) /
          Math.PI
        );

      default:
        return null;
    }
  }

  //FUNCTION

  if (expression.type === "function") {
    return null;
  }

  return null;
}