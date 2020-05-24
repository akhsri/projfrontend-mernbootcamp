import React, { Fragment } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Menu from './Menu';
import Footer from './Footer';

const photos = [
    {
        name: "photo1",
        url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/4/8d96cf6e-62c5-4fda-b3ff-1291cf1f9f911588574101923-wildcraft-desktop-banner.jpg"
    },
    {
        name: "photo2",
        url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/4/29/2800198a-5b1e-44af-b59a-60d8521eb9aa1588170588288-DK.jpg"
    },
    {
        name: "photo1",
        url: "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/5/5/a34d9efa-34aa-415a-84e6-314dc1f63d701588697841207-desktop-Banner.jpg"
    }

]
const LandingPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        className: "slides"
    };
    return (
        <Fragment>
            <Menu />
            <div id="landing-page">
                <div className="row" id="row">
                    <div className="col-12">
                        <h2>
                            Our shop is now open for you!
                     <br />
                            <h4>
                                As per the Govt guidelines, we are now serving all products in Orange &
                                Green Zones and only essentials in Red Zones
                </h4>
                        </h2>
                    </div>
                </div>
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div>
                                <img width="100%" src={photo.url}></img>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <Footer />

            <style>
                {`
                #landing-page{
                    padding: 0px;
                    margin: 0px;
                    
                }
                #row{
                    margin: 15px;
                    background-color: whitesmoke;
                    padding: 5%;
                }
                .slides{
                    width: 100%;
                }
            `}
            </style>
        </Fragment>
    )
}

export default LandingPage
