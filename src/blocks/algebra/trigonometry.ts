import * as Blockly from "blockly";


/*
 * SIN
 */
export function registerSinBlock() {
  Blockly.Blocks["math_sin"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("sin");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Calculate the sine of an angle."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * COS
 */
export function registerCosBlock() {
  Blockly.Blocks["math_cos"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("cos");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Calculate the cosine of an angle."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * TAN
 */
export function registerTanBlock() {
  Blockly.Blocks["math_tan"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("tan");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Calculate the tangent of an angle."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * DEGREES
 */
export function registerDegreesBlock() {
  Blockly.Blocks["math_degrees"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Degrees");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Convert an angle to degrees."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * RADIANS
 */
export function registerRadiansBlock() {
  Blockly.Blocks["math_radians"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Radians");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Convert an angle to radians."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ARCSIN
 */
export function registerArcSinBlock() {
  Blockly.Blocks["math_arcsin"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("sin⁻¹");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Calculate inverse sine."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ARCCOS
 */
export function registerArcCosBlock() {
  Blockly.Blocks["math_arccos"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("cos⁻¹");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Calculate inverse cosine."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * ARCTAN
 */
export function registerArcTanBlock() {
  Blockly.Blocks["math_arctan"] = {
    init: function () {
      this.appendValueInput("VALUE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("tan⁻¹");

      this.setOutput(true, "Number");
      this.setColour(280);

      this.setTooltip(
        "Calculate inverse tangent."
      );

      this.setHelpUrl("");
    },
  };
}


export function registerTrigonometryBlocks() {
  registerSinBlock();
  registerCosBlock();
  registerTanBlock();

  registerDegreesBlock();
  registerRadiansBlock();

  registerArcSinBlock();
  registerArcCosBlock();
  registerArcTanBlock();
}