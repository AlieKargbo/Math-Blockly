import * as Blockly from "blockly";

export function registerCalculateBlock() {
  Blockly.Blocks["math_calculate"] = {
    init: function () {
      this.appendValueInput("EXPRESSION")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
          "Inequality",
          "Function",
          "Point",
          "Line",
          "Shape",
          "Domain",
          "Range",
        ])
        .appendField("Calculate");

      this.setOutput(true, "Number");

      this.setColour(160);

      this.setTooltip(
        "Evaluate a mathematical block."
      );

      this.setHelpUrl("");
    },
  };
}