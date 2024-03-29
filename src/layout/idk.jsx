import { useState } from "react"

const idk = {
    Footer : () => {
        return(
            <>
            <footer>
            </footer>
            </>
        )
    },
    Header : () => {
        return(
            <>
            <header>

            </header>
            </>
        )
    },
    Menu : () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        const toggleMenu = () => {
           setIsMenuOpen(!isMenuOpen);
        };
       
        return (
        <nav style={{ height: isMenuOpen ? '79.1vh' : '', width: isMenuOpen ? '20vh': ''}}>
                <div className={`hamburguer-menu ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
                    <span className="line first-line"></span>
                    <span className="line second-line"></span>
                </div>
                <div className={`menu-expanded`}>
                <ul>
                    <li><a href="#AboutMe">About Me</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
        </nav>
        );
    }
}


export default idk