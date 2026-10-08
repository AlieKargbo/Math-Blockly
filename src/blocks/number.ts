import * as Blockly from "blockly";

export function registerNumberBlock() {
  Blockly.Blocks["math_number_custom"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Number")
        .appendField(
          new Blockly.FieldNumber(0),
          "VALUE"
        );

      this.setOutput(true, "Number");

      this.setColour(230);

      this.setTooltip(
        "A number used in a mathematical expression."
      );

      this.setHelpUrl("");
    },
  };
}