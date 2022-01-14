import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">wrestlers</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>097 597 07 23</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>vallymal2020@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
