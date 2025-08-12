import leftPlayer from "../assets/left_player.png"
import rightPlayer from "../assets/right_player.png"
import Sprite from "./Sprite";
import { forwardRef, useEffect, useState } from "react";

const Fighter = forwardRef(({ name, isAttacking, isDead }, ref) => {
    const [frame, setFrame] = useState(0);

    const playerFrames = {
        idle: 2,
        attack: [0, 1],
        death: 3,
    };

    
    useEffect(() => {
        let interval;

        if (isDead) {
            setTimeout(() => {
                setFrame(playerFrames.death);
            }, 800);
        } else if ( isAttacking && !isDead ) {
            let i = 0;
            interval = setInterval(() => {
                setFrame(playerFrames.attack[i]);
                i = (i + 1) % playerFrames.attack.length;
            }, 450);

        } else {
            setFrame(playerFrames.idle);
        }

        return () => clearInterval(interval);
    }, [isDead, isAttacking]);



    return(
        <div ref={ref}>
            <Sprite index={frame} player={name === 'Left Player' ? leftPlayer : rightPlayer}/>
        </div>
    )
});

export default Fighter;