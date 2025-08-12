import { forwardRef } from "react";
import "../main.css"

const sprite_width = 256
const sprite_height = 376

const Sprite = forwardRef(({ index, player }, ref) => {
    const yOffset = -index * sprite_height

    const style = {
        width: sprite_width,
        height: sprite_height,
        backgroundImage: `url(${player})`,
        backgroundPosition: `0px ${yOffset}px`,
        backgroundRepeat: "no-repeat",
        position: 'relative',
    };

    return (
        <div className="sprite" ref={ref} style={style}></div>
    )
});

export default Sprite;