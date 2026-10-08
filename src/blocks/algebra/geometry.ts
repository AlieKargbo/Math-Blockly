import * as Blockly from "blockly";


/*
 * RECTANGLE
 */
export function registerRectangleBlock() {
  Blockly.Blocks["geometry_rectangle"] = {
    init: function () {
      this.appendValueInput("LENGTH")
        .setCheck("Number")
        .appendField("Length");

      this.appendValueInput("WIDTH")
        .setCheck("Number")
        .appendField("Width");

      this.setOutput(true, "Shape");
      this.setColour(250);

      this.setTooltip(
        "Create a rectangle."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * TRIANGLE
 */
export function registerTriangleBlock() {
  Blockly.Blocks["geometry_triangle"] = {
    init: function () {
      this.appendValueInput("BASE")
        .setCheck("Number")
        .appendField("Base");

      this.appendValueInput("HEIGHT")
        .setCheck("Number")
        .appendField("Height");

      this.setOutput(true, "Shape");
      this.setColour(250);

      this.setTooltip(
        "Create a triangle."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * CIRCLE
 */
export function registerCircleBlock() {
  Blockly.Blocks["geometry_circle"] = {
    init: function () {
      this.appendValueInput("RADIUS")
        .setCheck("Number")
        .appendField("Radius");

      this.setOutput(true, "Shape");
      this.setColour(250);

      this.setTooltip(
        "Create a circle."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * AREA
 */
export function registerAreaBlock() {
  Blockly.Blocks["geometry_area"] = {
    init: function () {
      this.appendValueInput("SHAPE")
        .setCheck("Shape")
        .appendField("Area of");

      this.setOutput(true, "Number");
      this.setColour(250);

      this.setTooltip(
        "Calculate the area of a shape."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * PERIMETER
 */
export function registerPerimeterBlock() {
  Blockly.Blocks["geometry_perimeter"] = {
    init: function () {
      this.appendValueInput("SHAPE")
        .setCheck("Shape")
        .appendField("Perimeter of");

      this.setOutput(true, "Number");
      this.setColour(250);

      this.setTooltip(
        "Calculate the perimeter of a shape."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * CIRCUMFERENCE
 */
export function registerCircumferenceBlock() {
  Blockly.Blocks["geometry_circumference"] = {
    init: function () {
      this.appendValueInput("SHAPE")
        .setCheck("Shape")
        .appendField("Circumference of");

      this.setOutput(true, "Number");
      this.setColour(250);

      this.setTooltip(
        "Calculate the circumference of a circle."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * VOLUME
 */
export function registerVolumeBlock() {
  Blockly.Blocks["geometry_volume"] = {
    init: function () {
      this.appendValueInput("SHAPE")
        .setCheck("Shape")
        .appendField("Volume of");

      this.setOutput(true, "Number");
      this.setColour(250);

      this.setTooltip(
        "Calculate the volume of a three-dimensional shape."
      );

      this.setHelpUrl("");
    },
  };
}


export function registerGeometryBlocks() {
  registerRectangleBlock();
  registerTriangleBlock();
  registerCircleBlock();
  registerAreaBlock();
  registerPerimeterBlock();
  registerCircumferenceBlock();
  registerVolumeBlock();
}