import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function RemindersPage() {
  return (
    <div className="reminders-page">
       <Carousel infiniteLoop className="ey">
                <div>
                    <img src={process.env.PUBLIC_URL + '/assets/one.jpg'} />
                    <p className="legend">Tus contactos</p>
                </div>
                <div>
                <img src={process.env.PUBLIC_URL + '/assets/two.jpg'} />
                    <p className="legend">Tu información</p>
                </div>
                <div>
                <img src={process.env.PUBLIC_URL + '/assets/three.jpg'} />
                </div>
            </Carousel>
    </div>
  );
}
export default RemindersPage;