import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/hamburger.css";
import AuthButtons from "../auth/AuthButtons";

const Hamburger = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const animehubLink = "https://exopolit.github.io/anime/"
    const projectsLink = "https://exopolit.github.io/kaanPortfolio/#projects"


    function openMenu ()  {
        document.body.classList.add("menu--open");
    };

    function closeMenu (){
        // Add your code for closing the menu here
        document.body.classList.remove("menu--open");
        setIsModalOpen(false);
    };


    function toggleModal() {
if(isModalOpen){
    closeMenu();
}        
else{
    openMenu();
}
    }
    

    return (
        <>
        <div className="container">
            <div className="hamburger">
                <button className="btn__menu" onClick={openMenu}>
                <FontAwesomeIcon icon={faBars} style={{fontSize:'var(--font-size-big)'}}  />
                </button>
                <div className="menu__backdrop" >
                    <button className="btn__menu btn__menu--close" onClick={closeMenu} >
                    <FontAwesomeIcon icon={faTimes} style={{fontSize:'var(--font-size-big)'}}  />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <a
                                href="/"
                                className="menu__link"
                                onClick={(closeMenu, toggleModal)}
                            >
                                Welcome
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href={animehubLink} className="menu__link" onClick={closeMenu}>
                                Original
                            </a>
                        </li>
                        <li className="menu__list">
                            <a href={projectsLink} className="menu__link" onClick={closeMenu}>
                               My Projects
                            </a>
                        </li>
                       
            <AuthButtons />
                    </ul>

                </div>
            </div>
            </div>
        </>
    );
};

export default Hamburger;
   