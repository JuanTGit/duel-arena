import { useState } from "react";
import Sprite from "./Sprite";
import Fighter from "./Fighter";

function Fight(){

    const [leftHealth, setLeftHealth] = useState(99);
    const [rightHealth, setRightHealth] = useState(99);
    const [turn, setTurn] = useState(null);
    const [duelActive, setDuelActive] = useState(false);

    const [pid, setPid] = useState('Start duel');

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
                    const newHp = hp - damage;
                    if (newHp <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return newHp;
                });
            } else {
                setLeftHealth((hp) => {
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

// 103 , 225
        };

    return(
        <div className="container">
                <h2 className="text-center">PID: {pid}</h2>
                <div className="row justify-content-center">
                    <button className="btn btn-success w-25" onClick={startDuel}>Fight!</button>
                </div>
                {/* Player 1 */}
                <div className="row justify-content-center d-flex">
                    <div className="col">
                        <h5 className="text-end">Left Player — HP: {Math.max(0, leftHealth)}</h5>
                    </div>
                    <div className="col">
                        <h5 className="text-start">Right Player — HP: {Math.max(0, rightHealth)}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col justify-content-end d-flex">
                        <Fighter
                            name="Left Player"
                            isAttacking={turn === 1 && duelActive}
                            isDead={leftHealth <= 0}
                        />
                    </div>
                    {/* Player 2 */}
                    <div className="col">
                        <Fighter
                            name="Right Player"
                            isAttacking={turn === 2 && duelActive}
                            isDead={rightHealth <= 0}
                        />
                    </div>
                </div>
        </div>
    )
}

export default Fight;