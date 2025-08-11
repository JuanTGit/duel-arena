
const sprite_width = 256
const sprite_height = 376

function Sprite({ index, player }) {
    const yOffset = -index * sprite_height

    const style = {
        width: sprite_width,
        height: sprite_height,
        backgroundImage: `url(${player})`,
        backgroundPosition: `0px ${yOffset}px`,
        backgroundRepeat: "no-repeat",
    };

    return <div style={style}></div>
}

export default Sprite;