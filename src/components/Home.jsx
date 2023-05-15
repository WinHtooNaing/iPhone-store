import Product from "./Product";

const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/R.82458be1c70320d7d1eecfc8cea44d45?rik=ve83OrlChXadyw&pid=ImgRaw&r=0" className="d-block w-100" alt="IPhone" height='500px'/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.d490aeaf13f73f754c842d55aa28450e?rik=pa71dylZkwjIVg&pid=ImgRaw&r=0" className="d-block w-100" alt="IPhone" height="500px"/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.5be687dfd269c4c0b6b5b5da29aa48cf?rik=Xto2Umvtm7ngFA&pid=ImgRaw&r=0" className="d-block w-100" alt="IPhone" height="500px"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<Product />
        </>
    )
}


export default Home;