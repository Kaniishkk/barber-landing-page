import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 5,
      name: "Thomas Brown",
      avatar: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 3,
      text: "Costly compared to other barbershops with better haircuts, but the service is professional and the shop is clean.",
      date: "September 5, 2023"
    },
    {
      id: 1,
      name: "John Doe",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "Absolutely fantastic service! The barber took his time to understand exactly what I wanted and delivered perfectly. Definitely coming back!",
      date: "May 15, 2023"
    },
    {
      id: 2,
      name: "Robert Smith",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      text: "Great atmosphere and professional service. My haircut looks amazing and the hot towel shave was so relaxing. Highly recommend!",
      date: "June 3, 2023"
    },
    {
      id: 3,
      name: "Michael Johnson",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "I've been going to Fama for years now. They never disappoint and always keep up with the latest trends. Best barbers in Denton!",
      date: "July 22, 2023"
    },
    {
      id: 4,
      name: "David Williams",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      text: "The attention to detail is impressive. They take pride in their work and it shows. Every visit is consistently good.",
      date: "August 10, 2023"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + displayCount >= testimonials.length ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - displayCount : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="section-padding bg-blue-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Our Happy Clients</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : i < 5 ? 'text-yellow-400 fill-yellow-400 fill-opacity-60' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xl font-bold">4.6</span>
            <span className="text-gray-300">(116+ reviews)</span>
          </div>
          <p className="section-subtitle text-blue-200">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / displayCount)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`px-4 flex-none w-full md:w-1/2 lg:w-1/3`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col text-gray-800">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 flex-grow">{testimonial.text}</p>
                    <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-red-700 hover:bg-red-800 text-white rounded-full p-2 focus:outline-none hidden md:block"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-red-700 hover:bg-red-800 text-white rounded-full p-2 focus:outline-none hidden md:block"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 md:hidden space-x-2">
          <button 
            className="bg-red-700 hover:bg-red-800 text-white rounded-full p-2 focus:outline-none"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            className="bg-red-700 hover:bg-red-800 text-white rounded-full p-2 focus:outline-none"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://maps.app.goo.gl/1SZEER5Tj2YV6wEP9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn bg-transparent border-2 border-white hover:bg-white hover:text-blue-900"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;