import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "James Wilson",
      role: "Master Barber",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "With over 10 years of experience, James specializes in classic cuts and precision fades.",
      socialMedia: {
        instagram: "#",
        facebook: "#",
        twitter: "#"
      }
    },
    {
      id: 2,
      name: "Miguel Fernandez",
      role: "Senior Barber",
      image: "https://images.pexels.com/photos/2811089/pexels-photo-2811089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Miguel is known for his creative styling and beard grooming expertise.",
      socialMedia: {
        instagram: "#",
        facebook: "#"
      }
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Style Specialist",
      image: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Sarah brings her artistic vision to every haircut, specializing in modern trends.",
      socialMedia: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Junior Barber",
      image: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Alex is passionate about men's grooming and contemporary hair designs.",
      socialMedia: {
        instagram: "#",
        facebook: "#"
      }
    },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle">
            Our skilled barbers are dedicated to providing you with the best grooming experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-red-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {member.socialMedia.instagram && (
                    <a href={member.socialMedia.instagram} className="text-gray-500 hover:text-red-700">
                      <Instagram className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialMedia.facebook && (
                    <a href={member.socialMedia.facebook} className="text-gray-500 hover:text-red-700">
                      <Facebook className="h-5 w-5" />
                    </a>
                  )}
                  {member.socialMedia.twitter && (
                    <a href={member.socialMedia.twitter} className="text-gray-500 hover:text-red-700">
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;