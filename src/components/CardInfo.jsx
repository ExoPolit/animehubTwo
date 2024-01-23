const CardInformation = ({ anime }) => {   
    const filterTrailer = (anime) => {
        return anime.trailer && anime.trailer.embed_url;
    };
    
    const cardOnClick = (anime) => {
        if (filterTrailer(anime)) {
        console.log("Clicked on card");
        console.log(`<div>${anime.trailer.embed_url}</div>`);}
    };
    
    return (
        <div className="card" style={{ width: "18rem" }}>
        <img
            src={anime.image_url}
            className="card-img-top"
            alt={anime.title}
            onClick={() => cardOnClick(anime)}
        />
        <div className="card-body">
            <h5 className="card-title">{anime.title}</h5>
            <p className="card-text">{anime.synopsis}</p>
            <a href={anime.url} className="btn btn-primary">
            Go to Anime
            </a>
        </div>
        </div>
    );
    };
    export default CardInformation;