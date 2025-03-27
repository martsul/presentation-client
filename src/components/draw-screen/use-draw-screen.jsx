import { useState } from "react";
import { useToolbar } from "../../contexts/toolbar-context/use-toolbar";

export const useWorkScreen = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    const { task, color, setLines, lines } = useToolbar();

    const handleMouseDown = (e) => {
        setIsDrawing(true);
        const pos = e.target.getStage().getPointerPosition();
        setLines([
            ...lines,
            {
                points: [pos.x, pos.y],
                tool: task,
                color,
            },
        ]);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing) return;
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
        let lastLine = lines[lines.length - 1];
        lastLine.points = lastLine.points.concat([point.x, point.y]);
        lines.splice(lines.length - 1, 1, lastLine);
        setLines(lines.concat());
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
    };
};
