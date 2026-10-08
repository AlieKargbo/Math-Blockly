import * as Blockly from "blockly";


/*
 * ==========================================
 * FUNCTION
 * ==========================================
 *
 * Example:
 *
 * f(x) = 2x + 3
 */
export function registerFunctionBlock() {
  Blockly.Blocks["math_function"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Function")
        .appendField(
          new Blockly.FieldTextInput("f"),
          "NAME"
        )
        .appendField("(")
        .appendField(
          new Blockly.FieldTextInput("x"),
          "VARIABLE"
        )
        .appendField(")");

      this.appendValueInput("BODY")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("=");

      this.setOutput(true, "Function");
      this.setColour(180);

      this.setTooltip(
        "Define a mathematical function."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * EVALUATE FUNCTION
 * ==========================================
 *
 * Example:
 *
 * f(5)
 */
export function registerEvaluateFunctionBlock() {
  Blockly.Blocks["math_evaluate_function"] = {
    init: function () {
      this.appendValueInput("FUNCTION")
        .setCheck("Function")
        .appendField("Evaluate");

      this.appendValueInput("INPUT")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("at");

      this.setOutput(true, "Number");
      this.setColour(180);

      this.setTooltip(
        "Evaluate a function at a specific input."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * DOMAIN
 * ==========================================
 */
export function registerDomainBlock() {
  Blockly.Blocks["math_domain"] = {
    init: function () {
      this.appendValueInput("FUNCTION")
        .setCheck("Function")
        .appendField("Domain of");

      this.setOutput(true, "Domain");
      this.setColour(180);

      this.setTooltip(
        "Find or describe the domain of a function."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * RANGE
 * ==========================================
 */
export function registerRangeBlock() {
  Blockly.Blocks["math_range"] = {
    init: function () {
      this.appendValueInput("FUNCTION")
        .setCheck("Function")
        .appendField("Range of");

      this.setOutput(true, "Range");
      this.setColour(180);

      this.setTooltip(
        "Find or describe the range of a function."
      );

      this.setHelpUrl("");
    },
  };
}


export function registerFunctionBlocks() {
  registerFunctionBlock();
  registerEvaluateFunctionBlock();
  registerDomainBlock();
  registerRangeBlock();
}