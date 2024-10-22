import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="Footer-container">
      <h1>Feel free To contact me</h1>
      <ul className="footer-list">
        <li className="footer-link">
          <SocialIcon network="email" /> sebastian.ivanoff19@gmail.com
        </li>
        <li>
          <SocialIcon url="https://www.linkedin.com/in/sebastian-ivanoff-b764a2211/" />{" "}
          <a
            href="https://www.linkedin.com/in/sebastian-ivanoff-b764a2211/"
            className="footer-link"
          >
            Linkedin.com/SebastianIvanoff
          </a>
        </li>
        <li>
          <SocialIcon url="https://github.com/SebastianIvanoff" />{" "}
          <a href="https://github.com/SebastianIvanoff" className="footer-link">
            Github.com/SebastianIvanoff
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
