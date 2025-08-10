import specAttack from '../assets/Energy_Drain.gif'
function Fight(){




    return(
        <>
            <button className="btn-success">Fight!</button>
            <div className="row">
                {/* Player 1 */}
                <div className="col">
                    <h1>Left Player</h1>
                    <img src={specAttack} alt="player1" />
                </div>
                {/* Player 2 */}
                <div className="col">
                    <h1>Right Player</h1>
                </div>
            </div>
        </>
    )
}

export default Fight;