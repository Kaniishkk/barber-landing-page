import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' 
      }}
    >
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-up">
            Expert Barbers for Your <span className="text-red-500">Perfect Style</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-up stagger-1">
            Experience premium grooming services at Fama Barber Shop and Beauty Salon.
            Our professional team delivers excellent cuts, styles, and grooming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-2">
            <a href="#booking" className="btn btn-primary flex items-center justify-center sm:justify-start">
              <Calendar className="h-5 w-5 mr-2" />
              Book Appointment
            </a>
            <a href="#services" className="btn btn-outline flex items-center justify-center sm:justify-start">
              Our Services
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </div>
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-fade-up stagger-3">
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">4.6</h3>
                <p className="text-yellow-400 text-sm">★★★★★</p>
                <p className="text-gray-300 text-xs">116+ reviews</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">10+</h3>
                <p className="text-gray-300 text-sm">Expert Barbers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">5+</h3>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;