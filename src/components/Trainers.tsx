import React from 'react';

const trainers = [
  {
    name: "John Smith",
    specialty: "Strength & Conditioning",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    experience: "10+ years"
  },
  {
    name: "Sarah Johnson",
    specialty: "Yoga & Flexibility",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    experience: "8+ years"
  },
  {
    name: "Mike Williams",
    specialty: "CrossFit Expert",
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    experience: "12+ years"
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Expert Trainers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-gray-600 mb-2">{trainer.specialty}</p>
                <p className="text-sm text-gray-500">Experience: {trainer.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;