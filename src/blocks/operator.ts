import * as Blockly from "blockly";

export function registerOperationBlock() {
  Blockly.Blocks["math_operation"] = {
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
            ["+", "ADD"],
            ["−", "SUBTRACT"],
            ["×", "MULTIPLY"],
            ["÷", "DIVIDE"],
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

      this.setOutput(true, "Expression");
      this.setColour(120);

      this.setTooltip(
        "Combine two mathematical values using addition, subtraction, multiplication, or division."
      );

      this.setHelpUrl("");
    },
  };
}
