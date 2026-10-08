//BlocklyWorkspace.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import * as Blockly from "blockly";


// Blockly blocks
import { registerNumberBlock } from "../blocks/number";
import { registerVariableBlock } from "../blocks/variable";
import { registerOperationBlock } from "../blocks/operator";
import { registerEquationBlock } from "../blocks/equation";
import { registerCalculateBlock } from "../blocks/algebra/calculate";
import { registerSolveBlock } from "../blocks/algebra/solve";
import { registerAdvancedArithmeticBlocks, } from "../blocks/algebra/advancedArithmetic";
import { registerAlgebraBlocks, } from "../blocks/algebra/algebra";
import { registerFunctionBlocks, } from "../blocks/algebra/functions";
import { registerGraphingBlocks, } from "../blocks/algebra/graphing";
import { registerGeometryBlocks, } from "../blocks/algebra/geometry";
import { registerTrigonometryBlocks, } from "../blocks/algebra/trigonometry";

import { registerAminoAcidResidueBlock } from "../blocks/aminoAcidResidue";
import { registerPeptideChainBlock } from "../blocks/peptideChain";
import { registerProteinComplexBlock } from "../blocks/proteinComplex";
import {
    blockToExpression,
    evaluateExpression,
    expressionToString,
} from "./mathParser";

function workspaceToMath(workspace: Blockly.WorkspaceSvg): string {
    return workspace
        .getTopBlocks(true)
        .filter((block) => !block.isShadow())
        .map((block) => {
            const parsedExpression = blockToExpression(block);
            const math = expressionToString(parsedExpression);

            if (block.type !== "math_calculate" || !parsedExpression) {
                return math;
            }

            const result = evaluateExpression(parsedExpression);
            if (result === null || !Number.isFinite(result)) {
                return math;
            }

            return `${math} = ${Number(result.toPrecision(12))}`;
        })
        .filter(Boolean)
        .join("\n");
}

// // Math engines
// import { blockToExpression, expressionToString, evaluateExpression, } from "../lib/mathParser";
// import { solveEquation } from "../lib/equationSolver";
// import {
//     evaluateInequality,
//     simplifyExpression,
//     getCoefficient,
//     getConstantTerm,
// } from "../lib/algebraCalculator";

// Props
// type MathWorkspaceProps = {
//     challengeId?: Id<"challenges">;
//     userId?: Id<"users">;
//     question?: string;
//     expectedAnswer?: number;
// };

export default function BlocklyWorkspace() {
    const blocklyDiv = useRef<HTMLDivElement | null>(null);
    const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);
    const [expression, setExpression] = useState("");

    // UI state
    // const [result, setResult] = useState("");
    // const [studentAnswer, setStudentAnswer] = useState<number | null>(null);
    // const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
    // const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    // const [studentSolution, setStudentSolution] = useState("");
    // const [showTutor, setShowTutor] = useState(false);
    useEffect(() => {
        // Make sure the Blockly container exists
        if (!blocklyDiv.current) {
            return;
        }

        // Register Blockly blocks
        registerNumberBlock();
        registerVariableBlock();
        registerOperationBlock();
        registerEquationBlock();
        registerCalculateBlock();
        registerSolveBlock();

        registerAdvancedArithmeticBlocks();
        registerAlgebraBlocks();
        registerFunctionBlocks();
        registerGraphingBlocks();
        registerGeometryBlocks();
        registerTrigonometryBlocks();

        // Blockly toolbox
        const toolbox = {
            kind: "categoryToolbox",
            contents: [
                // Numbers
                {
                    kind: "category",
                    name: "Numbers",
                    colour: "#3976A8",
                    contents: [
                        {
                            kind: "block",
                            type: "math_number_custom",
                        },
                        {
                            kind: "block",
                            type: "math_variable_custom",
                        },
                    ],
                },

                // Arithmetic
                {
                    kind: "category",
                    name: "Arithmetic",
                    colour: "#32836F",
                    contents: [
                        {
                            kind: "block",
                            type: "math_operation",
                        },
                        {
                            kind: "block",
                            type: "math_exponent",
                        },
                        {
                            kind: "block",
                            type: "math_square_root",
                        },
                        {
                            kind: "block",
                            type: "math_absolute",
                        },
                        {
                            kind: "block",
                            type: "math_negative",
                        },
                        {
                            kind: "block",
                            type: "math_modulo",
                        },
                        {
                            kind: "block",
                            type: "math_fraction",
                        },
                    ],
                },

                // Algebra
                {
                    kind: "category",
                    name: "Algebra",
                    colour: "#B56845",
                    contents: [
                        {
                            kind: "block",
                            type: "math_equation",
                        },
                        {
                            kind: "block",
                            type: "math_solve",
                        },
                        {
                            kind: "block",
                            type: "math_inequality",
                        },
                        {
                            kind: "block",
                            type: "math_simplify",
                        },
                        {
                            kind: "block",
                            type: "math_coefficient",
                        },
                        {
                            kind: "block",
                            type: "math_constant_term",
                        },
                    ],
                },

                // Functions
                {
                    kind: "category",
                    name: "Functions",
                    colour: "#8063A8",
                    contents: [
                        {
                            kind: "block",
                            type: "math_function",
                        },
                        {
                            kind: "block",
                            type: "math_evaluate_function",
                        },
                        {
                            kind: "block",
                            type: "math_domain",
                        },
                        {
                            kind: "block",
                            type: "math_range",
                        },
                    ],
                },

                // Graphing
                {
                    kind: "category",
                    name: "Graphing",
                    colour: "#407E9A",
                    contents: [
                        {
                            kind: "block",
                            type: "math_point",
                        },
                        {
                            kind: "block",
                            type: "math_slope",
                        },
                        {
                            kind: "block",
                            type: "math_line",
                        },
                        {
                            kind: "block",
                            type: "math_y_intercept",
                        },
                        {
                            kind: "block",
                            type: "math_graph",
                        },
                    ],
                },

                // Geometry
                {
                    kind: "category",
                    name: "Geometry",
                    colour: "#A57A36",

                    contents: [
                        {
                            kind: "block",
                            type: "geometry_rectangle",
                        },
                        {
                            kind: "block",
                            type: "geometry_triangle",
                        },
                        {
                            kind: "block",
                            type: "geometry_circle",
                        },
                        {
                            kind: "block",
                            type: "geometry_area",
                        },
                        {
                            kind: "block",
                            type: "geometry_perimeter",
                        },
                        {
                            kind: "block",
                            type: "geometry_circumference",
                        },
                        {
                            kind: "block",
                            type: "geometry_volume",
                        },
                    ],
                },

                // Trigonometry
                {
                    kind: "category",
                    name: "Trigonometry",
                    colour: "#AD5671",
                    contents: [
                        {
                            kind: "block",
                            type: "math_sin",
                        },
                        {
                            kind: "block",
                            type: "math_cos",
                        },
                        {
                            kind: "block",
                            type: "math_tan",
                        },
                        {
                            kind: "block",
                            type: "math_arcsin",
                        },
                        {
                            kind: "block",
                            type: "math_arccos",
                        },
                        {
                            kind: "block",
                            type: "math_arctan",
                        },
                        {
                            kind: "block",
                            type: "math_degrees",
                        },
                        {
                            kind: "block",
                            type: "math_radians",
                        },
                    ],
                },

                // Calculate
                {
                    kind: "category",
                    name: "Calculate",
                    colour: "#588647",

                    contents: [
                        {
                            kind: "block",
                            type: "math_calculate",
                        },
                    ],
                },
            ],
        };

        // Create Blockly workspace
        const workspace = Blockly.inject(blocklyDiv.current, {
        
            toolbox,
            trashcan: true,

            grid: {
                spacing: 20,
                length: 3,
                colour: "#ddd",
                snap: true,
            },

            zoom: {
                controls: true,
                wheel: true,
                startScale: 1,
                maxScale: 2,
                minScale: 0.5,
                scaleSpeed: 1.1,
            },

        });

        workspaceRef.current = workspace;

        // Listen for Blockly changes
        const changeListener = (
            event: Blockly.Events.Abstract
        ) => {
            // Ignore clicks and viewport movement
            if (
                event.type === Blockly.Events.CLICK ||
                event.type === Blockly.Events.VIEWPORT_CHANGE
            ) {
                return;
            }

            setExpression(workspaceToMath(workspace));
        };

        // IMPORTANT: Actually register the listener
        workspace.addChangeListener(changeListener);
        setExpression(workspaceToMath(workspace));

        return () => {
            workspace.removeChangeListener(changeListener);
            workspace.dispose();
            workspaceRef.current = null;
        };
    }, []);

    return (
        <div className="math-workspace-layout">
            <div ref={blocklyDiv}
                className="math-workspace-blockly"
            />
            <aside className="math-expression-panel">
                <h2>MATH EXPRESSION</h2>
                <div className="math-expression-output" aria-live="polite">
                    {expression || "Build an expression with blocks."}
                </div>
            </aside>
        </div>
    );
}