import { useToolbar } from "../../contexts/toolbar-context/use-toolbar";
import { TextElement } from "../text-element/text-element";

export const TextScreen = () => {
    const { countTexts } = useToolbar();

    return (
        <>
            {[...new Array(countTexts)].map((_, ind) => (
                <TextElement key={ind} />
            ))}
        </>
    );
};
