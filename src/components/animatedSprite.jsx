import { useEffect, useState } from "react";
import Sprite from "./Sprite";


function AnimatedSprite() {
    const [frame, setFrame] = useState(0);
    const [health, setHealth] = useState(100);
    const attackFrames = 2;

    const deathFrame = 3


    useEffect(() => {
        const interval = setInterval(() => {
            if (health > 0){
                setFrame((prev) => (prev + 1) % attackFrames);
            } else {
                console.log('Health at 0')
                setFrame(deathFrame)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [health]);

    return <Sprite index={frame} />;
}

export default AnimatedSprite;