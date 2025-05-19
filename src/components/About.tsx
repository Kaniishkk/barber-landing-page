import React from 'react';
import { Award, Clock, Users, Scissors } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to <span className="text-red-700">Fama Barber Shop</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Established with a passion for exceptional grooming, Fama Barber Shop and Beauty Salon 
              has been serving the Denton community with pride. Our team of skilled barbers combines 
              traditional techniques with modern styles to give you the perfect look.
            </p>
            <p className="text-gray-700 mb-8">
              We believe that a great haircut is more than just a service—it's an experience. 
              That's why we focus on creating a welcoming atmosphere where clients can relax, 
              unwind, and leave looking and feeling their best.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Quality Service</h3>
                  <p className="text-gray-600 text-sm">Premium haircuts and grooming</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Convenient Hours</h3>
                  <p className="text-gray-600 text-sm">Open daily until 7 pm</p>
                </div>
              </div>
              <div className="flex items-start mt-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Expert Staff</h3>
                  <p className="text-gray-600 text-sm">Professional barbers</p>
                </div>
              </div>
              <div className="flex items-start mt-4">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Scissors className="h-6 w-6 text-red-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Modern Techniques</h3>
                  <p className="text-gray-600 text-sm">Latest styles and trends</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barber shop interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mt-12">
              <img 
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barber cutting hair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg -mt-12">
              <img 
                src="https://images.pexels.com/photos/3356170/pexels-photo-3356170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Barber tools"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Client getting haircut"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;