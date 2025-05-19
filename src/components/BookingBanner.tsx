import React from 'react';
import { Calendar, Clock, Phone } from 'lucide-react';

const BookingBanner: React.FC = () => {
  return (
    <section id="booking" className="bg-gradient-to-r from-blue-900 to-blue-950 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready for a Fresh Cut?
            </h2>
            <p className="text-gray-300">
              Book your appointment now or walk in today!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
            <div className="flex items-center text-gray-200">
              <Clock className="h-5 w-5 mr-2 text-yellow-400" />
              <span>Open ⋅ Closes 7 pm</span>
            </div>
            <div className="flex items-center text-gray-200">
              <Phone className="h-5 w-5 mr-2 text-yellow-400" />
              <span>+1 940-612-9127</span>
            </div>
          </div>
          
          <a 
            href="#contact" 
            className="btn bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold flex items-center justify-center"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingBanner;