import * as Blockly from "blockly";

export function registerCalculateBlock() {
  Blockly.Blocks["math_calculate"] = {
    init: function () {
      this.appendValueInput("EXPRESSION")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Calculate");

      this.setPreviousStatement(true);

      this.setColour(160);

      this.setTooltip(
        "Evaluate a mathematical block."
      );

      this.setHelpUrl("");
    },
  };
}
