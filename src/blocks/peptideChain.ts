import * as Blockly from "blockly";
//import { AMINO_ACIDS } from "../biology/aminoAcids";

export function registerPeptideChainBlock() {
  Blockly.common.defineBlocksWithJsonArray([
    {
      type: "peptide_chain",
      message0: "peptide chain",
      args0: [],
      output: "PEPTIDE_CHAIN",
      colour: 290,
      tooltip: "A chain of amino acid residues.",
      helpUrl: "",
    },
  ]);

  const peptideChain =
    Blockly.Blocks["peptide_chain"];

  if (!peptideChain) return;

  const originalInit = peptideChain.init;

  peptideChain.init = function (this: Blockly.Block) {
    originalInit?.call(this);

    // Add the first residue connector
    addResidueInput(this, 0);

    // Watch for connections
    this.setOnChange(function (this: Blockly.Block, event: Blockly.Events.Abstract) {
      if (this.isInFlyout) return;
      if (this.isDeadOrDying()) return;

      updateResidueInputs(this);
    });
  };
}


// --------------------------------------------------
// Add a residue connector
// --------------------------------------------------

function addResidueInput(
  block: Blockly.Block,
  index: number
) {
  const inputName = `RESIDUE${index}`;

  if (block.getInput(inputName)) {
    return;
  }

  block
    .appendValueInput(inputName)
    .setCheck("AMINO_ACID_RESIDUE")
    .appendField(`residue ${index + 1}`);
}


// --------------------------------------------------
// Automatically grow the chain
// --------------------------------------------------

function updateResidueInputs(
  block: Blockly.Block
) {
  let index = 0;

  // Find the last existing input
  while (block.getInput(`RESIDUE${index}`)) {
    index++;
  }

  const lastIndex = index - 1;

  if (lastIndex < 0) {
    addResidueInput(block, 0);
    return;
  }

  const lastInput =
    block.getInput(`RESIDUE${lastIndex}`);

  const lastConnected =
    lastInput?.connection?.targetBlock();

  // If the last connector is occupied,
  // create another connector.
  if (lastConnected) {
    addResidueInput(block, index);
  }
}

export function getPeptideSequence(
  block: Blockly.Block
) {
  const residues: string[] = [];

  let index = 0;

  while (true) {
    const input = block.getInput(`RESIDUE${index}`);

    if (!input) {
      break;
    }

    const residueBlock =
      input.connection?.targetBlock();

    if (residueBlock) {
      const aminoAcid =
        residueBlock.getFieldValue("AMINO_ACID");

      if (aminoAcid) {
        residues.push(aminoAcid);
      }
    }

    index++;
  }

  return residues;
}