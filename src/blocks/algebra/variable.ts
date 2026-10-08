import * as Blockly from "blockly";

export function registerVariableBlock() {
  Blockly.Blocks["math_variable_custom"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Variable")
        .appendField(
          new Blockly.FieldTextInput("x"),
          "NAME"
        );

      this.setOutput(true, "Variable");

      this.setColour(210);

      this.setTooltip(
        "A mathematical variable such as x or y."
      );

      this.setHelpUrl("");
    },
  };
}