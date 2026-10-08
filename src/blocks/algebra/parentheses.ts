import * as Blockly from "blockly";

export function registerParenthesesBlock() {
  Blockly.Blocks["math_parentheses"] = {
    init() {
      this.appendValueInput("EXPRESSION")
        .setCheck(null)
        .appendField("(");

      this.appendDummyInput()
        .appendField(")");

      this.setOutput(true);

      this.setColour(180);
    },
  };
}