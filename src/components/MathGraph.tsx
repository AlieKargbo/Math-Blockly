import type { Expression } from "./mathParser";
import { evaluateExpression } from "./mathParser";

type MathGraphProps = {
  expression: Expression;
  variable: string;
};

const WIDTH = 400;
const HEIGHT = 260;
const LEFT = 28;
const RIGHT = 388;
const TOP = 16;
const BOTTOM = 244;
const MIN = -10;
const MAX = 10;

export default function MathGraph({ expression, variable }: MathGraphProps) {
  const xToPixel = (x: number) => LEFT + ((x - MIN) / (MAX - MIN)) * (RIGHT - LEFT);
  const yToPixel = (y: number) => BOTTOM - ((y - MIN) / (MAX - MIN)) * (BOTTOM - TOP);
  const segments: string[] = [];
  let points: string[] = [];

  for (let index = 0; index <= 400; index++) {
    const x = MIN + (index / 400) * (MAX - MIN);
    const y = evaluateExpression(expression, { [variable]: x });
    if (y === null || Math.abs(y) > 20) {
      if (points.length > 1) segments.push(points.join(" "));
      points = [];
      continue;
    }
    points.push(`${xToPixel(x).toFixed(2)},${yToPixel(y).toFixed(2)}`);
  }
  if (points.length > 1) segments.push(points.join(" "));

  return (
    <section className="math-graph-panel" aria-label={`Graph of ${variable}`}>
      <h3>Graph: y = f({variable})</h3>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-label={`Plot of the expression against ${variable}`}>
        <defs>
          <clipPath id="math-graph-clip">
            <rect x={LEFT} y={TOP} width={RIGHT - LEFT} height={BOTTOM - TOP} />
          </clipPath>
        </defs>
        {Array.from({ length: 21 }, (_, index) => MIN + index).map((value) => (
          <g key={value}>
            <line x1={xToPixel(value)} y1={TOP} x2={xToPixel(value)} y2={BOTTOM} className="math-graph-gridline" />
            <line x1={LEFT} y1={yToPixel(value)} x2={RIGHT} y2={yToPixel(value)} className="math-graph-gridline" />
          </g>
        ))}
        <line x1={LEFT} y1={yToPixel(0)} x2={RIGHT} y2={yToPixel(0)} className="math-graph-axis" />
        <line x1={xToPixel(0)} y1={TOP} x2={xToPixel(0)} y2={BOTTOM} className="math-graph-axis" />
        <g clipPath="url(#math-graph-clip)">
          {segments.map((segment, index) => (
            <polyline key={index} points={segment} className="math-graph-curve" />
          ))}
        </g>
        <text x={RIGHT - 3} y={yToPixel(0) - 5} className="math-graph-label">x</text>
        <text x={xToPixel(0) + 5} y={TOP + 10} className="math-graph-label">y</text>
      </svg>
      <p>Showing x values from −10 to 10.</p>
    </section>
  );
}
