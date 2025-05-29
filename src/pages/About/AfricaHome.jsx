import React from 'react';
 
function AfricaHome() {
  return (
    <section
      className="py-20 px-6 md:px-16 text-white font-[Montserrat] mt-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 82, 84, 0.9), rgba(255, 82, 84, 0.9)), url('../images/socs-bg.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Africa is our second home.
        </h2>
        <p className="text-xl font-light">
          Chin is very well known in Africa as a Safari Mentor.
        </p>
      </div>
 
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6">
        {/* Left Text Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <div className="px-6 text-left font-sans text-[18px] leading-relaxed text-white">
            <p className="pb-4 tracking-wider">
              As Africa is our second home, we don’t take clients to do only
              marketing, we understand the whole eco-system of the safari to
              serve the clients amazingly from their operations to their sales.
              <br /><br />
              If you don’t know where Serengeti is, how will you bring customers
              to Serengeti?
              <br /><br />
              So, we make sure to sit down with the clients and thoroughly check
              them from the ground level up until they connect to a customer.
              It’s not just about marketing, where we bring customers to them;
              we are also part of the process where they convert the customers
              or checking whether they are following up or not.
              <br /><br />
              That’s why Chin is committed to giving them face-to-face meetings
              to bring value from every angle.
            </p>
            <p>Putting a smile on someone’s face is worth a million dollars to us.</p>
          </div>
        </div>
 
        {/* Right Image Section */}
        <div className="lg:w-1/2 w-full flex items-center justify-center">
          <img
            src="https://safarimarketingpro.com/images/ayrtjsyc-slide-fig-3.jpg"
            alt="Safari Event"
            className="w-full h-full max-h-[500px] object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
 
export default AfricaHome;