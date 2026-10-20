import * as Blockly from "blockly";

export function registerParenthesesBlock() {
  Blockly.Blocks["math_parentheses"] = {
    init() {
      this.appendValueInput("EXPRESSION")
        .setCheck(["Number", "Variable", "Expression"])
        .appendField("(");

      this.appendDummyInput()
        .appendField(")");

      this.setOutput(true, "Expression");

      this.setColour(180);
    },
  };
}
