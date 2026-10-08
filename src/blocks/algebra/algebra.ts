import * as Blockly from "blockly";


/*
 * ==========================================
 * INEQUALITY
 * ==========================================
 *
 * Supports:
 *
 * <
 * >
 * ≤
 * ≥
 */
export function registerInequalityBlock() {
  Blockly.Blocks["math_inequality"] = {
    init: function () {
      this.appendValueInput("LEFT")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Left");

      this.appendDummyInput()
        .appendField(
          new Blockly.FieldDropdown([
            ["<", "LESS"],
            [">", "GREATER"],
            ["≤", "LESS_EQUAL"],
            ["≥", "GREATER_EQUAL"],
          ]),
          "OP"
        );

      this.appendValueInput("RIGHT")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Right");

      this.setOutput(true, "Inequality");
      this.setColour(60);

      this.setTooltip(
        "Create a mathematical inequality."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * SIMPLIFY
 * ==========================================
 */
export function registerSimplifyBlock() {
  Blockly.Blocks["math_simplify"] = {
    init: function () {
      this.appendValueInput("EXPRESSION")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Simplify");

      this.setOutput(true, "Expression");
      this.setColour(60);

      this.setTooltip(
        "Simplify a mathematical expression."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * COEFFICIENT
 * ==========================================
 *
 * Example:
 *
 * 5x
 *
 * coefficient = 5
 */
export function registerCoefficientBlock() {
  Blockly.Blocks["math_coefficient"] = {
    init: function () {
      this.appendValueInput("EXPRESSION")
        .setCheck([
          "Variable",
          "Expression",
        ])
        .appendField("Coefficient of");

      this.setOutput(true, "Number");
      this.setColour(60);

      this.setTooltip(
        "Find the coefficient of a variable."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * CONSTANT
 * ==========================================
 *
 * Example:
 *
 * 3x + 7
 *
 * constant = 7
 */
export function registerConstantBlock() {
  Blockly.Blocks["math_constant_term"] = {
    init: function () {
      this.appendValueInput("EXPRESSION")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Constant in");

      this.setOutput(true, "Number");
      this.setColour(60);

      this.setTooltip(
        "Find the constant term."
      );

      this.setHelpUrl("");
    },
  };
}


export function registerAlgebraBlocks() {
  registerInequalityBlock();
  registerSimplifyBlock();
  registerCoefficientBlock();
  registerConstantBlock();
}