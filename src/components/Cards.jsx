const Cards = () => {

    return (
        <div className="container text-center">
        <div className="cards ">
            <div className="row   d-flex justify-content-center align-items-center">
                <div className="col-4">
            <div className="card">
                <div className="card-content">
                    <h1 className="card-title">Anime 1</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    <button className="btn btn-primary">Read More</button>
            </div>
            </div>
            </div>
            
                <div className="col-2">
            <div className="card">
                <div className="card-content">
                    <h1 className="card-title">Anime 2</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
            </div>
                <div className="col-5">
            <div className="card">
                <div className="card-content">
                    <h1 className="card-title">Anime 3</h1>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
            </div>
            </div>



                </div>
                </div>
                </div>

    )
}

export default Cards;