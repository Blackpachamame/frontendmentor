import "./Footer.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return <footer className="footer">
        <img src='/logoOrg.png' alt='logo org' />
        <p>Desarrollado por Blackpachamame</p>
        <div className="redes">
            <a href='https://www.linkedin.com/in/marcos-travaglini/' aria-label="Enlace a linkedin" >
                <AiFillLinkedin style={{ fontSize: '32px', color: "#fff" }} />
            </a>
            <a href='https://github.com/Blackpachamame' aria-label="Enlace a github" >
                <AiFillGithub style={{ fontSize: '32px', color: "#fff" }} />
            </a>
        </div>
    </footer>
}
export default Footer;