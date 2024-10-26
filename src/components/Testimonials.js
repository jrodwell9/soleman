import React from 'react';

function Testimonials() {
  const testimonials = [
    { id: 1, text: 'Great service! My shoes look brand new.', author: 'John D.' },
    { id: 2, text: 'I\'m impressed with the quality of work.', author: 'Sarah M.' },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <p>"{testimonial.text}"</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;