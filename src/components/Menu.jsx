import Fight from "./Fight";
import { useNavigate } from "react-router-dom";
import "../main.css"
import localBtn from "../assets/local-btn.png"
import onlineBtn from "../assets/online-btn.png"

function Menu(){
    const navigate = useNavigate();
    const handleClick = (idSwitch) => {
        navigate(idSwitch === 'local' ? '/local':'/online')
    }

    return(
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <h1 className="text-center">Main Menu</h1>
            {/* Local Lobby */}
            <div className="row m-2 w-100 justify-content-center">
                <div className="col-5 justify-content-center d-flex">
                    <img src={localBtn} className="w-50" id="menu-btn" onClick={() => handleClick('local')} />
                </div>
            </div>
            {/* Online Lobby */}
            <div className="row m-2 w-100 justify-content-center">
                <div className="col-5 justify-content-center d-flex">
                    <img src={onlineBtn} className="w-50" id="menu-btn" onClick={() => handleClick('online')} />
                </div>
            </div>
        </div>
    )
}

export default Menu;