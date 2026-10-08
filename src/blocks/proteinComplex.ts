import * as Blockly from "blockly";

export function registerProteinComplexBlock() {
  if (Blockly.Blocks["protein_complex"]) return;

  Blockly.Blocks["protein_complex"] = {
    init: function () {
      this.setColour(210);

      this.appendDummyInput()
        .appendField("protein complex");

      this.appendValueInput("CHAIN0")
        .setCheck("PEPTIDE_CHAIN")
        .appendField("peptide A");

      this.setTooltip(
        "Combine multiple peptide chains into a protein complex."
      );
      this.setOutput(true, "PROTEIN_COMPLEX");
    },

    onchange: function (event: Blockly.Events.Abstract) {
      if (!this.workspace) return;

      if (event.type !== Blockly.Events.BLOCK_MOVE) {
        return;
      }

      this.updateChainInputs();
    },

    updateChainInputs: function () {
      let index = 0;

      // Find the last existing input
      while (this.getInput(`CHAIN${index}`)) {
        index++;
      }

      const lastIndex = index - 1;
      const lastInput = this.getInput(`CHAIN${lastIndex}`);

      if (
        lastInput?.connection?.targetBlock()
      ) {
        this.appendValueInput(`CHAIN${index}`)
          .setCheck("PEPTIDE_CHAIN")
          .appendField(
            `peptide ${String.fromCharCode(65 + index)}`
          );

        this.render();
      }
    },
  };
}