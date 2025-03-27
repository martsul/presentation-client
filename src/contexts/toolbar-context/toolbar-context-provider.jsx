import { useState } from "react";
import { ToolbarContext } from ".";

export const ToolbarContextProvider = ({ children }) => {
    const [lines, setLines] = useState([]);
    const [task, setTask] = useState("");
    const [color, setColor] = useState("#000");
    const [countTexts, setCountTexts] = useState(0);

    const addText = () => {
        setCountTexts(countTexts + 1);
    };
    const onDraw = () => setTask("pen");
    const onErase = () => setTask("eraser");

    return (
        <ToolbarContext.Provider
            value={{
                countTexts,
                addText,
                lines,
                setLines,
                color,
                setColor,
                task,
                onDraw,
                onErase,
            }}
        >
            {children}
        </ToolbarContext.Provider>
    );
};
