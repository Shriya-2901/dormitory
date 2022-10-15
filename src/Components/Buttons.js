import { Link } from "react-router-dom";

const Buttons=()=>{
    return(
        <div>
            <Link to='/'>Secretary</Link>
            <Link to='/hof'>Hall of fame</Link>
            <button>Button3</button>
        </div>
    )
}
export default Buttons;