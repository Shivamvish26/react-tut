import React from "react";
import { Carousel} from "react-bootstrap";
import ExampleCarouselImage1 from '../Assests/Images/carousel1.jpg';
import ExampleCarouselImage2 from '../Assests/Images/carousel2.jpg';
import ExampleCarouselImage3 from '../Assests/Images/carousel3.jpg';

export default function Home() {
  return (
    <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ExampleCarouselImage1}
              alt="First slide"
            />
            {/* <Carousel.Caption>
              <h3>First Slide Label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ExampleCarouselImage2}
              alt="Second slide"
            />
            {/* <Carousel.Caption>
              <h3>Second Slide Label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ExampleCarouselImage3}
              alt="Third slide"
            />
            {/* <Carousel.Caption>
              <h3>Third Slide Label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
    </div>
  );
}
