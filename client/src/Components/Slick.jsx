import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="hm-ryt-img w-[400px]" style={{ backgroundImage: 'url(https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt2.png)' }} />
      <div className="hm-ryt-img" style={{ backgroundImage: 'url(https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt3.png)' }} />
      <div className="hm-ryt-img" style={{ backgroundImage: 'url(https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt4.png)' }} />
      <div className="hm-ryt-img" style={{ backgroundImage: 'url(https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/bnr-ryt1.png)' }} />
    </Slider>
  );
};

export default SlickCarousel;