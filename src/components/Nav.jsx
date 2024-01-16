import AuthButtons from "../auth/AuthButtons";


const Nav = () => {
    return (
        <div className="d-flex justify-content-between">
            <h1 style={{fontSize: "var(--font-size-big)"}}>AnimeHub V2</h1>
            <AuthButtons />	
        </div>
    )
};

export default Nav;