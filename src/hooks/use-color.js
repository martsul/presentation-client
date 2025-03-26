const colors = ["#13a3b5", "#0ba84a", "#ff6105", "#ff3b4b", "#e950f7"];

const randomColorIndex = () => {
    return Math.floor(Math.random() * colors.length);
};

export const useColor = () => {
    return colors[randomColorIndex()];
};
