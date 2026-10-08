import * as Blockly from "blockly";

/*
 * ==========================================
 * EXPONENT
 * ==========================================
 *
 * Example:
 *
 *      2 ^ 3
 *
 *       ↓
 *
 *       8
 */
export function registerExponentBlock() {
  Blockly.Blocks["math_exponent"] = {
    init: function () {
      this.appendValueInput("Exponent")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Exponent");

      this.appendValueInput("Base")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("Base");

      this.setOutput(true, "Expression");
      this.setColour(120);

      this.setTooltip(
        "Raise a number or expression to a power."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * SQUARE ROOT
 * ==========================================
 *
 * Example:
 *
 * √25
 *
 * = 5
 */
export function registerSquareRootBlock() {
  Blockly.Blocks["math_square_root"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("√");

      this.setOutput(true, "Expression");
      this.setColour(120);

      this.setTooltip(
        "Find the square root of a number."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * ABSOLUTE VALUE
 * ==========================================
 *
 * Example:
 *
 * |-5| = 5
 */
export function registerAbsoluteBlock() {
  Blockly.Blocks["math_absolute"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("|");

      this.appendDummyInput()
        .appendField("|");

      this.setOutput(true, "Expression");
      this.setColour(120);

      this.setTooltip(
        "Find the absolute value."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * MODULO
 * ==========================================
 *
 * Example:
 *
 * 10 % 3 = 1
 */
export function registerModuloBlock() {
  Blockly.Blocks["math_modulo"] = {
    init: function () {
      this.appendValueInput("LEFT")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Left");

      this.appendDummyInput()
        .appendField("%");

      this.appendValueInput("RIGHT")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Right");

      this.setOutput(true, "Expression");
      this.setColour(120);

      this.setTooltip(
        "Find the remainder after division."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * NEGATIVE
 * ==========================================
 *
 * Example:
 *
 * -5
 */
export function registerNegativeBlock() {
  Blockly.Blocks["math_negative"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Variable",
          "Expression",
        ])
        .appendField("-");

      this.setOutput(true, "Expression");
      this.setColour(120);

      this.setTooltip(
        "Make a number or expression negative."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ==========================================
 * FRACTION
 * ==========================================
 *
 * Example:
 *
 *   3
 *   -
 *   4
 *
 * = 0.75
 */
export function registerFractionBlock() {
  Blockly.Blocks["math_fraction"] = {
    init: function () {
      this.appendValueInput("NUMERATOR")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Numerator");

      this.appendValueInput("DENOMINATOR")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Denominator");

      this.setOutput(true, "Expression");
      this.setColour(120);

      this.setTooltip(
        "Create a fraction."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * Register every advanced arithmetic block.
 */
export function registerAdvancedArithmeticBlocks() {
  registerExponentBlock();
  registerSquareRootBlock();
  registerAbsoluteBlock();
  registerModuloBlock();
  registerNegativeBlock();
  registerFractionBlock();
}
