import GaiVKakashi from "../videos/GaiVKakashi.mp4";
import "../styles/buttons.css";
import "../styles/welcome.css";

const mainStyles = {
  backgroundColor: "var(--color-bg-dark)",
  height:"100vh",
  color: "white",
};
const iFrameStyles = {
  boxShadow: "0 0 8px 8px rgba(255, 255, 255, .4)",
  borderRadius: "1rem",
};
const btnStyles = {
  padding: "1rem",
  textDecoration: "none",
  border: "1px solid white",
  borderRadius: "4rem",
  backgroundColor: "black",
};
const paraStyles = {
  fontSize: "var(--font-size-md)",
  color: "white",
  margin: "1rem",
  whiteSpace: "pre-wrap",
};
const Welcome = () => {
  return (
        <div className="d-flex flex-column align-items-center text-center" style={mainStyles} >
      <h1 className="m-4">Welcome Mitri</h1>
      <button className="m-4 welcome-btn" style={btnStyles}>
        <a
          href="/Main"
          style={{ textDecoration: "none", fontSize: "var(--font-size-lg)" }}
        >
          Go to Main
        </a>
      </button>
      <p>Scene From Naruto:</p>
        <iframe
          className="my-5 mt-0 video-player"
          src={GaiVKakashi}
          frameBorder="0"
          width={500}
          height={300}
          style={iFrameStyles}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
        ></iframe>
      <div>
       <h1>Some Informations:</h1>
       <ul>
        <li> Detailed Card is deactivated on Smaller Devices.</li>
        <li> For testing LogIn use: email@email.com  // test123</li>
        <li> Third-Party cookies are gettin very high , couldnt solve why.<br/> Believe that the Trailers are causing that.</li>
       </ul>
       
     
      <h2>Styling Methods:</h2>
      <p style={paraStyles}>I was playing around with diffrent styling methods to check what works best. At least for me^^</p>
      <ul>
        <li>Inline Styling</li>
        <li>Styling with CSS</li>
        <li>Styling with Bootstrap</li>
        <li>Styling with React-Bootstrap</li>
      </ul>
      </div>
    </div>
  );
};

export default Welcome;
