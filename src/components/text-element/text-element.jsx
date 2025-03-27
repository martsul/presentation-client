import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import Markdown from "react-markdown";

export const TextElement = () => {
    const nodeRef = useRef(null);
    const [text, setText] = useState("");
    const [active, setActive] = useState(1);

    const handlerDoubleClick = () => {
        setActive(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                nodeRef.current &&
                !nodeRef.current.contains(event.target) &&
                active === true
            ) {
                setActive(false);
            } else if (active === 1) {
                setActive(true);
            }
        };

        if (active) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [active]);

    return (
        <Draggable nodeRef={nodeRef}>
            <div
                className="position-absolute"
                onDoubleClick={handlerDoubleClick}
                ref={nodeRef}
            >
                {!active && <Markdown>{text}</Markdown>}
                {active && (
                    <input
                    className="border"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                )}
            </div>
        </Draggable>
    );
};
