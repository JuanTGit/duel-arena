import { useState, useRef } from "react";
import Fighter from "./Fighter";
import '../hitsplat.css'
import '../main.css'

function Fight(){
    const leftPlayerRef = useRef(null);
    const rightPlayerRef = useRef(null);


    const [leftHealth, setLeftHealth] = useState(99);
    const [rightHealth, setRightHealth] = useState(99);
    const [turn, setTurn] = useState(null);
    const [duelActive, setDuelActive] = useState(false);
    const [pid, setPid] = useState('Start duel');
    const [hitSplats, setHitSplats] = useState([]);


    const showHitSplat = (ref, damage) => {
        if (!ref.current) return;
        const spriteEl = ref.current.querySelector(".sprite");
        if (!spriteEl) return;

        const rect = spriteEl.getBoundingClientRect();
        const id = Date.now();
        setHitSplats((prev) => [
            ...prev,
            {
                id,
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                damage
            }
        ]);
        setTimeout(() => {
            setHitSplats((prev) => prev.filter((s) => s.id !== id));
        }, 800);
    };


    const startDuel = () => {
        setDuelActive(true);
        let attacker = Math.floor(Math.random() * 2) + 1;
        if (attacker === 1) {
            setPid('Player One');
        } else {
            setPid('Player Two');
        }
        setTurn(attacker)

        const interval = setInterval(() => {
            const damage = Math.floor(Math.random() * 24) + 1;
            
            if (attacker === 1) {
                setRightHealth((hp) => {
                    showHitSplat(rightPlayerRef, damage)
                    const newHp = hp - damage;
                    if (newHp <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return newHp;
                });
            } else {
                setLeftHealth((hp) => {
                    showHitSplat(leftPlayerRef, damage)
                    const newHp = hp - damage;
                    if (newHp <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return newHp;
                });
            }

            attacker = attacker === 1 ? 2 : 1;
            setTurn(attacker);;

        }, 2200);

        };

    return(
        <div className="container vh-100">
                <div className="row justify-content-center">
                    <button className="btn btn-success w-25" onClick={startDuel}>Fight!</button>
                </div>

                {/* HitPoints */}
                <h2 className="text-center">PID: {pid}</h2>
                <div className="row">
                    <div className="col-6">
                        <h5 className="text-end">Left Player — HP: {Math.max(0, leftHealth)}</h5>
                    </div>
                    <div className="col-6">
                        <h5 className="text-start">Right Player — HP: {Math.max(0, rightHealth)}</h5>
                    </div>
                </div>

                {/* Player 1 */}
                <div className="row">
                    <div className="col-6 col-md-6 d-flex justify-content-end">
                            <Fighter
                                ref={leftPlayerRef}
                                name="Left Player"
                                isAttacking={turn === 1 && duelActive}
                                isDead={leftHealth <= 0}
                            />
                    </div>
                    {/* Player 2 */}
                    <div className="col-6 col-md-6 d-flex justify-content-start">
                            <Fighter
                                ref={rightPlayerRef}
                                name="Right Player"
                                isAttacking={turn === 2 && duelActive}
                                isDead={rightHealth <= 0}
                            />
                    </div>
                </div>

                {hitSplats.map((splat) => (
                <div
                    key={splat.id}
                    className="hitsplat"
                    style={{
                        left: splat.x,
                        top: splat.y,
                    }}
                >
                    {splat.damage}
                </div>
            ))}
        </div>
    );
}

export default Fight;