import { Link } from "react-router-dom"
import swastika from "../media/icons/swastika.gif"

const Nav = () => {
    return (
        <>
            <nav className="bg-black  flex">
                <div id="nav-logo text-[1vw]">विवेक्</div>
                <div id="music-control">
                </div>
                <div id="nav-links"><ul>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Donation">Donation</Link></li>

                </ul></div>
            </nav>
        </>
    )
}

export default Nav
