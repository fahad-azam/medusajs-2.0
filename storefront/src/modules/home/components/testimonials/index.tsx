import React from 'react'
interface TestimonialProps {
    testimonials: {
      id: string;
      comment: string;
      avatar: string;
      name: string;
      location: string;
    }[];
  }

function Testimonial({
   testimonials
}: TestimonialProps) {
  return (
    <>
       <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">{testimonial.comment}</p>
              <div className="mt-4 flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Testimonial