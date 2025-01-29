import React, { useState, useEffect } from 'react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Kiran',
      service: 'Dog Training In Banjara Hills',
      quote: '5000/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-quot4.png'
    },
    {
      name: 'Amulya',
      service: 'Dog Grooming In Greater kailash',
      quote: '399/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-09.png'
    },
    {
      name: 'Kartika',
      service: 'Dog Walking In Vashi',
      quote: '3999/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-01.png'
    },
    {
      name: 'Karthik',
      service: 'Pet Boarding In Korman',
      quote: '1299/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-07.png'
    },
    {
      name: 'Kiran',
      service: 'Dog Training In Banjara Hills',
      quote: '5000/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-05.png'
    },
    {
      name: 'Kiran',
      service: 'Dog Training In Banjara Hills',
      quote: '5000/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/grm-quot4.png'
    },
    {
      name: 'Amulya',
      service: 'Dog Grooming In ',
      quote: '399/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-09.png'
    },
    {
      name: 'Kartika',
      service: 'Dog Walking In Vashi',
      quote: '3999/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-01.png'
    },
    {
      name: 'Karthik',
      service: 'Pet Boarding In Korman',
      quote: '1299/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-07.png'
    },
    {
      name: 'Kiran',
      service: 'Dog Training In Banjara Hills',
      quote: '5000/-',
      image: 'https://www.petsfolio.com/in/wp-content/themes/petsfolio/images/Slide-05.png'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= testimonials.length - 2 ? 0 : prevIndex + 2
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    
      <div className="w-full p-4  bg-gray-50   overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="min-w-1/2 md:min-w-[30%] flex items-center justify-center px-2 md:px-2"
            >
              <div className="flex items-center bg-white rounded-lg shadow-xl p-4 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 md:w-20 md:h-20 rounded-full mr-4"
                />
                <p className="text-[8px] text-left md:text-sm">
                  <span className="font-medium">{item.name}</span>
                  {' just Quoted '}
                  <span className="text-green-500 font-medium">{item.quote}</span>
                  {' for '}
                  <span className="font-medium">{item.service}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default TestimonialSlider;