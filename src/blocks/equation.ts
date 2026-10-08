import * as Blockly from "blockly";

export function registerEquationBlock() {
  Blockly.Blocks["math_equation"] = {
    init: function () {
      this.appendValueInput("LEFT")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Left side");

      this.appendDummyInput()
        .appendField("=");

      this.appendValueInput("RIGHT")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Right side");

      this.setOutput(true, "Equation");
      this.setColour(60);

      this.setTooltip(
        "Create a mathematical equation with two sides."
      );

      this.setHelpUrl("");
    },
  };
}