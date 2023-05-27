import Carousel from 'react-bootstrap/Carousel';
import './Carrusel.css';

export default function Carrusel() {
  return (
    <div className='Carouselmain'>
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.xtrafondos.com/wallpapers/resoluciones/20/rick-y-morty-fanart-2020_1920x1080_6344.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Morty's Anime World</h3>
          <p>Latest News</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.zerochan.net/Cowboy.Bebop.full.1107118.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Morty's Anime World</h3>
          <p>Latest News</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fondosmil.com/fondo/27334.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Morty's Anime World</h3>
          <p>Latest News</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

