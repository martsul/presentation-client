import { Stage, Layer, Line, Text } from "react-konva";
import { useWorkScreen } from "./use-draw-screen";
import { useToolbar } from "../../contexts/toolbar-context/use-toolbar";

export const DrawScreen = () => {
    const { handleMouseDown, handleMouseMove, handleMouseUp } = useWorkScreen();
    const { lines } = useToolbar();

    return (
        <Stage
            width={1000}
            height={500}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <Layer>
                {lines.map((line, ind) => (
                    <CustomLine key={ind} line={line} />
                ))}
            </Layer>
        </Stage>
    );
};

const CustomLine = ({ line }) => {
    return (
        <Line
            points={line.points}
            stroke={line.color}
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
            globalCompositeOperation={
                line.tool === "eraser" ? "destination-out" : "source-over"
            }
        />
    );
};
