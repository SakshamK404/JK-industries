import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Get in touch</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">Name *</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email address *</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg" rows="4" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
