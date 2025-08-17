import { useState, useRef } from "react";
import Fighter from "./Fighter";
import '../hitsplat.css';
import '../main.css';

function Fight() {
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
        { id, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, damage }
        ]);
        setTimeout(() => {
        setHitSplats((prev) => prev.filter((s) => s.id !== id));
        }, 800);
    };

    const resetDuel = () => {
        setLeftHealth(99);
        setRightHealth(99);
        setTurn(null);
        setDuelActive(false);
        setPid('Start duel');
        setHitSplats([]);
    };

    const startDuel = () => {
        setDuelActive(true);
        let attacker = Math.floor(Math.random() * 2) + 1;
        setPid(attacker === 1 ? 'Player One' : 'Player Two');
        setTurn(attacker);

        const interval = setInterval(() => {
        const damage = Math.floor(Math.random() * 24) + 1;

        if (attacker === 1) {
            setRightHealth((hp) => {
            showHitSplat(rightPlayerRef, damage);
            const newHp = hp - damage;
            if (newHp <= 0) {
                clearInterval(interval);
                return 0;
            }
            return newHp;
            });
        } else {
            setLeftHealth((hp) => {
            showHitSplat(leftPlayerRef, damage);
            const newHp = hp - damage;
            if (newHp <= 0) {
                clearInterval(interval);
                return 0;
            }
            return newHp;
            });
        }

        attacker = attacker === 1 ? 2 : 1;
        setTurn(attacker);
        }, 2200);
        
    };

    return (
        <div className="container vh-100 d-flex flex-column justify-content-start">
        
        {/* Top HUD */}
        <div className="top-ui text-center mt-4">
            {leftHealth <= 0 || rightHealth <= 0 ? (
                <button className="btn btn-warning w-25 mb-2" onClick={resetDuel}>
                Rematch
                </button>
            ) : (
                duelActive ? (<div><h2>First Hit: {pid}</h2></div>) :

                (<button className="btn btn-danger w-25 mb-2" onClick={startDuel}>
                Fight!
                </button>
                )
            )}
        </div>

        {/* spacing */}
        <div className="flex-grow-1"></div>

        {/* Players + health bars */}
        <div className="row align-items-end" style={{marginBottom: '10%'}}>
            {/* Left Player */}
            <div className="col-6 d-flex flex-column align-items-end">
                <h5>HP: {leftHealth}</h5>
                <div className="health-bar-wrapper mb-2">
                    <div
                    className={`health-bar ${leftHealth > 50 ? 'high' : leftHealth > 20 ? 'medium' : 'low'}`}
                    style={{ width: `${(leftHealth / 99) * 100}%` }}
                    ></div>
                </div>
                <Fighter
                    ref={leftPlayerRef}
                    name="Left Player"
                    isAttacking={turn === 1 && duelActive}
                    isDead={leftHealth <= 0}
                />
            </div>

            {/* Right Player */}
            <div className="col-6 d-flex flex-column align-items-start">
                <h5>HP: {rightHealth}</h5>
                <div className="health-bar-wrapper mb-2">
                    <div
                    className={`health-bar ${rightHealth > 50 ? 'high' : rightHealth > 20 ? 'medium' : 'low'}`}
                    style={{ width: `${(rightHealth / 99) * 100}%` }}
                    ></div>
                </div>
                <Fighter
                    ref={rightPlayerRef}
                    name="Right Player"
                    isAttacking={turn === 2 && duelActive}
                    isDead={rightHealth <= 0}
                />
            </div>
        </div>

        {/* Hit splats */}
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
