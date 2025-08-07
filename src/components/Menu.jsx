import Fight from "./Fight";

function Menu(){
    return(
        <>
            <h1>This is the Menu</h1>
            {/* Local Lobby */}
            <div className="row m-2">
                <button className="btn-primary" onClick={<Fight/>}>Local</button>
            </div>
            {/* Online Lobby */}
            <div className="row m-2">
                <button className="btn-danger">Online</button>
            </div>
        </>
    )
}

export default Menu;