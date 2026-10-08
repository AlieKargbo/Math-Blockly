import * as Blockly from "blockly";

/*
 * POINT
 *
 * (x, y)
 */
export function registerPointBlock() {
  Blockly.Blocks["math_point"] = {
    init: function () {
      this.appendValueInput("X")
        .setCheck(["Number", "Expression"])
        .appendField("x");

      this.appendValueInput("Y")
        .setCheck(["Number", "Expression"])
        .appendField("y");

      this.setOutput(true, "Point");
      this.setColour(200);

      this.setTooltip(
        "Create a point on the coordinate plane."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * SLOPE
 *
 * m = (y2-y1)/(x2-x1)
 */
export function registerSlopeBlock() {
  Blockly.Blocks["math_slope"] = {
    init: function () {
      this.appendValueInput("POINT1")
        .setCheck("Point")
        .appendField("Point 1");

      this.appendValueInput("POINT2")
        .setCheck("Point")
        .appendField("Point 2");

      this.setOutput(true, "Number");
      this.setColour(200);

      this.setTooltip(
        "Calculate the slope between two points."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * Y-INTERCEPT
 */
export function registerYInterceptBlock() {
  Blockly.Blocks["math_y_intercept"] = {
    init: function () {
      this.appendValueInput("LINE")
        .setCheck("Expression")
        .appendField("Line");

      this.setOutput(true, "Number");
      this.setColour(200);

      this.setTooltip(
        "Find the y-intercept of a line."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * LINE
 *
 * y = mx + b
 */
export function registerLineBlock() {
  Blockly.Blocks["math_line"] = {
    init: function () {
      this.appendValueInput("SLOPE")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Slope");

      this.appendValueInput("INTERCEPT")
        .setCheck([
          "Number",
          "Expression",
        ])
        .appendField("Y-intercept");

      this.setOutput(true, "Line");
      this.setColour(200);

      this.setTooltip(
        "Create a line using slope-intercept form."
      );

      this.setHelpUrl("");
    },
  };
}


/*
 * GRAPH
 */
export function registerGraphBlock() {
  Blockly.Blocks["math_graph"] = {
    init: function () {
      this.appendValueInput("FUNCTION")
        .setCheck([
          "Function",
          "Expression",
          "Line",
        ])
        .appendField("Graph");

      this.setPreviousStatement(true);
      this.setNextStatement(true);

      this.setColour(200);

      this.setTooltip(
        "Graph a mathematical function or line."
      );

      this.setHelpUrl("");
    },
  };
}


export function registerGraphingBlocks() {
  registerPointBlock();
  registerSlopeBlock();
  registerYInterceptBlock();
  registerLineBlock();
  registerGraphBlock();
}