import React from 'react';

function Services() {
  const services = [
    { id: 1, name: 'Shoe Repair', description: 'Fix worn soles and heels' },
    { id: 2, name: 'Leather Restoration', description: 'Bring your leather items back to life' },
    { id: 3, name: 'Custom Orthotics', description: 'Personalized insoles for maximum comfort' },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;