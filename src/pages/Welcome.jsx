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
      <h1>Welcome Mitri</h1>
    
        <iframe
          className="my-5 video-player"
          src={GaiVKakashi}
          frameBorder="0"
          width={500}
          height={300}
          style={iFrameStyles}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
        ></iframe>
      <div>
        <h1> Auth with Firebase</h1>
        <p style={paraStyles}>
          Authentication works just fine. <br /> SignIn, LogIn and SignOut all
          work properly.
        </p>
        <p style={paraStyles}>
          However since i ran into Cookie issues, and gettin over 200-(peak)3k
          warnings,
           <br />
          after you did search for a Anime or just a letter, u should
          not click on LogIn or Register,
          <br/>
           i noticed that it can cause the issue
          to freeze the site and ull have to reload.
        </p>
      </div>
      <h2>Styling Methods:</h2>
      <ul style={{ listStyle: "none" }}>
        <li>Inline Styling</li>
        <li>Styling with CSS</li>
        <li>Styling with Bootstrap</li>
        <li>Styling with React-Bootstrap</li>
      </ul>
      <button className="m-4 welcome-btn" style={btnStyles}>
        <a
          href="/Main"
          style={{ textDecoration: "none", fontSize: "var(--font-size-lg)" }}
        >
          Go to Main
        </a>
      </button>
    </div>
  );
};

export default Welcome;
