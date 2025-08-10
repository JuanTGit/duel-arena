import Fight from "./Fight";
import { useNavigate } from "react-router-dom";

function Menu(){
    const navigate = useNavigate();
    const handleClick = (idSwitch) => {
        navigate(idSwitch === 'local' ? '/local':'/online')
    }

    return(
        <>
            <h1>This is the Menu</h1>
            {/* Local Lobby */}
            <div className="row m-2">
                <button className="btn-primary" onClick={() => handleClick('local')}>Local</button>
            </div>
            {/* Online Lobby */}
            <div className="row m-2">
                <button className="btn-danger" onClick={() => handleClick('online')}>Online</button>
            </div>
        </>
    )
}

export default Menu;