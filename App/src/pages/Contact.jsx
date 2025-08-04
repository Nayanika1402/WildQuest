import React from 'react';

const Contact = () => {
  return (
    <section className='flex justify-center items-center min-h-screen bg-[url(/path-to-wildlife-bg.jpg)] bg-cover bg-center'>
      <div className='px-6 py-8 mx-auto max-w-screen-md'>
        <h2 className='heading text-center text-green-900 font-bold text-6xl'>Contact Us🌐</h2>
        <br></br>
        <p className='mb-8 lg:mb-16 font-light text-center text-gray-700'>
          Have questions about endangered species, adoption, or donations? Reach out to us!
        </p>
        <form action="#" className='space-y-6'>
          <div>
            <label htmlFor="email" className='form_label text-green-900 font-semibold'>
              Your Email
            </label>
            <input 
            type="email"
            id="email"
            placeholder="example123@gmail.com"
            className='form_input mt-1 w-full border border-green-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700'></input>
          </div>
          <div>
            <label htmlFor="subject" className='form_label text-green-900 font-semibold'>
              Subject
            </label>
            <input 
            type="text"
            id="subject"
            placeholder="Let us know how we can help you"
            className='form_input mt-1 w-full border border-green-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700'></input>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form_label text-green-900 font-semibold'>
              Your Message
            </label>
            <textarea 
            rows="6" 
            type="text"
            id="message"
            placeholder="Leave a comment..."
            className='form_input mt-1 w-full border border-green-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-700'
            />
          </div>
          <button type="submit" className='btn rounded sm:w-fit bg-green-700 hover:bg-green-800 text-white px-6 py-2 font-semibold transition duration-300 ease-in-out transform hover:scale-105'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
