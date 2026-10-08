import * as Blockly from "blockly";

export function registerAminoAcidResidueBlock() {
  Blockly.common.defineBlocksWithJsonArray([
    {
      type: "amino_acid_residue",
      message0: "amino acid residue %1",
      args0: [
        {
          type: "field_dropdown",
          name: "AMINO_ACID",
          options: [
            ["Alanine (Ala)", "ALA"],
            ["Arginine (Arg)", "ARG"],
            ["Asparagine (Asn)", "ASN"],
            ["Aspartic acid (Asp)", "ASP"],
            ["Cysteine (Cys)", "CYS"],
            ["Glutamine (Gln)", "GLN"],
            ["Glutamic acid (Glu)", "GLU"],
            ["Glycine (Gly)", "GLY"],
            ["Histidine (His)", "HIS"],
            ["Isoleucine (Ile)", "ILE"],
            ["Leucine (Leu)", "LEU"],
            ["Lysine (Lys)", "LYS"],
            ["Methionine (Met)", "MET"],
            ["Phenylalanine (Phe)", "PHE"],
            ["Proline (Pro)", "PRO"],
            ["Serine (Ser)", "SER"],
            ["Threonine (Thr)", "THR"],
            ["Tryptophan (Trp)", "TRP"],
            ["Tyrosine (Tyr)", "TYR"],
            ["Valine (Val)", "VAL"],
          ],
        },
      ],
      output: "AMINO_ACID_RESIDUE",
      colour: 260,
      tooltip: "An amino acid residue in a peptide or protein chain.",
      helpUrl: "",
    },
  ]);
}