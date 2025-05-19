import React from 'react';
import { Scissors, Bean as Beard, Brush, Sparkles } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'Haircut',
      description: 'Professional haircut tailored to your style preference with consultation.',
      price: '$25-35',
      icon: <Scissors className="h-10 w-10 text-red-700" />,
    },
    {
      id: 2,
      title: 'Beard Trim',
      description: 'Expert beard shaping and trim to maintain or create your perfect look.',
      price: '$15-25',
      icon: <Beard className="h-10 w-10 text-red-700" />,
    },
    {
      id: 3,
      title: 'Hot Towel Shave',
      description: 'Relaxing traditional hot towel shave with premium products.',
      price: '$30-40',
      icon: <Brush className="h-10 w-10 text-red-700" />,
    },
    {
      id: 4,
      title: 'Hair Coloring',
      description: 'Custom hair coloring services to refresh or transform your look.',
      price: '$50+',
      icon: <Sparkles className="h-10 w-10 text-red-700" />,
    },
    {
      id: 5,
      title: 'Kids Haircut',
      description: 'Gentle and patient haircuts for children in a friendly environment.',
      price: '$15-20',
      icon: <Scissors className="h-10 w-10 text-red-700" />,
    },
    {
      id: 6,
      title: 'Hair & Beard Treatment',
      description: 'Nourishing treatments to improve hair and beard health and appearance.',
      price: '$35-45',
      icon: <Sparkles className="h-10 w-10 text-red-700" />,
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Experience the finest cuts and grooming services tailored to your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="mb-6 flex justify-center items-center w-16 h-16 rounded-full bg-red-100 group-hover:bg-red-200 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 flex justify-between">
                <span>{service.title}</span>
                <span className="text-red-700">{service.price}</span>
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#booking" className="btn btn-primary">
            Book Your Service Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;