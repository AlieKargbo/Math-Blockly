import * as Blockly from "blockly";

export function registerSolveBlock() {
  Blockly.Blocks["math_solve"] = {
    init: function () {

      this.appendValueInput(
        "EQUATION"
      )
        .setCheck("Equation")
        .appendField(
          "Solve"
        );

      this.appendDummyInput()
        .appendField(
          "for"
        )
        .appendField(
          new Blockly.FieldTextInput(
            "x"
          ),
          "VARIABLE"
        );

      this.setOutput(
        true,
        "Number"
      );

      this.setColour(290);

      this.setTooltip(
        "Solve a linear equation for a variable."
      );

      this.setHelpUrl("");
    },
  };
}