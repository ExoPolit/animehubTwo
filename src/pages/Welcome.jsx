import Naruto from "../videos/Naruto.mp4";
import "../styles/buttons.css";

const mainStyles = {
  backgroundColor: "var(--color-bg-dark)",
  height: "100vh",
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
};
const Welcome = () => {
  return (
    <div className="container-fluid text-center " style={mainStyles}>
      <h1>Welcome Mitri</h1>
      <button className="m-4 welcome-btn" style={btnStyles}>
        <a
          href="/"
          style={{ textDecoration: "none", fontSize: "var(--font-size-lg)" }}
        >
          Go to Main
        </a>
      </button>
      <div className="container-fluid text-center mb-5">
        <p>Feel Free to watch one of my Favorite fights from Boruto! </p>
        <iframe
          src={Naruto}
          frameborder="0"
          width={1500}
          height={500}
          style={iFrameStyles}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
      <p>You will notice that i used diffrent styling methods such as:</p>
      <ul style={{ listStyle: "none" }}>
        <li>Inline Styling</li>
        <li>Styling with CSS</li>
        <li>Styling with Bootstrap</li>
        <li>Styling with React-Bootstrap</li>
      </ul>
    </div>
  );
};

export default Welcome;
