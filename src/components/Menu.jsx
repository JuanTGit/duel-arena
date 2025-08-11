import Fight from "./Fight";
import { useNavigate } from "react-router-dom";

function Menu(){
    const navigate = useNavigate();
    const handleClick = (idSwitch) => {
        navigate(idSwitch === 'local' ? '/local':'/online')
    }

    return(
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <h1 className="text-center">This is the Menu</h1>
            {/* Local Lobby */}
            <div className="row m-2 w-100 justify-content-center">
                <div className="col-5">
                    <button className="btn btn-primary w-100" onClick={() => handleClick('local')}>Local</button>
                </div>
            </div>
            {/* Online Lobby */}
            <div className="row m-2 w-100 justify-content-center">
                <div className="col-5">
                    <button className="btn btn-danger w-100" onClick={() => handleClick('online')}>Online</button>
                </div>
            </div>
        </div>
    )
}

export default Menu;