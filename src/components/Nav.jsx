import AuthButtons from "../auth/AuthButtons";
import { Container } from "react-bootstrap";
import AnimeHubV2_logo from "../img/AnimeHubV2_logo.png";
import "../styles/nav.css";
import Hamburger from "./Hamburger";



const Nav = () => {
    const backgroundImageUrl = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20130226005246%2Fhoradeaventura%2Fes%2Fimages%2Fd%2Fd6%2FCcca.jpg&f=1&nofb=1&ipt=b420c177946befb83d29d311a7db0a00e9059e54ee7f027d328617a5e482c476&ipo=images";
    const logo = AnimeHubV2_logo;
    const projectsLink = "https://exopolit.github.io/kaanPortfolio/#projects"
   
    
    const imageStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 40%",
        backgroundRepeat: "no-repeat",
        height: "20rem",
       
    };
    const navStyle = {
        display: "flex",
        justifyContent: "space-between",
    };
    const buttonStyle = {
        marginTop: "1rem"
    }
    const animehubLink = "https://exopolit.github.io/anime/"
   
    return (
        
       <Container fluid style={imageStyle}>
        <div style={navStyle}>
            <div className="d-flex align-items-center justify-content-center mt-2">
        <figure >
            <img src={logo} alt="logo" width={100}  style={{borderRadius:"10rem", margin:".8rem .5rem 0 1rem"}} />
        </figure>
        <div className="container link-container">
            <a href={animehubLink} className="links">Original</a>
            <a href="/" className="links">Welcome</a>
            <a href={projectsLink} className="links">
                               My Projects
                            </a>
            </div>
        </div>
       
        <div className="auth-btn" style={buttonStyle} >
            <AuthButtons  />
        </div>
            </div>
       </Container>
    )
};

export default Nav;