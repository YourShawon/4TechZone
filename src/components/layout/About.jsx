import React from 'react'

function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full min-h-[300px] flex flex-col items-center justify-center bg-gradient-to-br from-[#a78bfa] to-[#8b5cf6] text-white text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About us</h1>
        <div className="flex items-center justify-center space-x-2 text-base md:text-lg font-medium">
          <span className="hover:underline cursor-pointer">HOME</span>
          <span className="mx-1">/</span>
          <span className="opacity-80">ABOUT US</span>
        </div>
      </div>
      {/* Collaboration Section */}
      <section className="w-full bg-[#f7f7ff] py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          {/* Illustration */}
          <div className="flex-1 flex justify-center">
            <img src="/about.png" alt="Team Collaboration" className="max-w-[420px] w-full" />
          </div>
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block bg-[#ede9fe] text-[#7c3aed] font-semibold px-4 py-1 rounded mb-4">Collaboration</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#23235f] mb-4 leading-tight">Team Members Collaboration<br />in real time life</h2>
            <p className="text-gray-500 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor</p>
            <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur!</p>
            <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-8 py-3 rounded transition">READ MORE</button>
          </div>
        </div>
      </section>
      {/* Reporting Section */}
      <section className="w-full bg-[#f7f7ff] py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          {/* Content */}
          <div className="flex-1 order-2 md:order-1">
            <span className="inline-block bg-[#ede9fe] text-[#7c3aed] font-semibold px-4 py-1 rounded mb-4">Reporting</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#23235f] mb-4 leading-tight">Right people, Right tools</h2>
            <p className="text-gray-500 mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor</p>
            <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!</p>
            <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-8 py-3 rounded transition">READ MORE</button>
          </div>
          {/* Illustration */}
          <div className="flex-1 flex justify-center order-1 md:order-2">
            <img src="/reporting.png" alt="Reporting" className="max-w-[420px] w-full" />
          </div>
        </div>
      </section>
      {/* Free Trial Section */}
      <section className="w-full bg-gradient-to-br from-[#a78bfa] to-[#8b5cf6] py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          {/* Illustration */}
          <div className="flex-1 flex justify-center mb-10 md:mb-0">
            <img src="/trial.png" alt="Free Trial" className="max-w-[420px] w-full" />
          </div>
          {/* Content */}
          <div className="flex-1">
            <span className="inline-block bg-[#ede9fe] text-[#7c3aed] font-semibold px-4 py-1 rounded mb-4">Free Trial</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Get started with a free trail</h2>
            <p className="text-white/80 mb-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore cum dolore temporibus esse explicabo magni excepturi.</p>
            <form className="bg-white/20 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 max-w-xl">
              <div className="flex items-center bg-white rounded-full px-4 py-2 w-full md:w-auto flex-1">
                <svg className="w-5 h-5 text-[#8b5cf6] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="6" width="20" height="12" rx="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="bg-transparent outline-none flex-1 py-2 px-2 text-[#23235f] placeholder-[#a78bfa]"
                />
              </div>
              <button type="submit" className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-8 py-3 rounded-lg transition w-full md:w-auto">SUBSCRIBE</button>
            </form>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="w-full bg-[#f7f7ff] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#ede9fe] text-[#7c3aed] font-semibold px-4 py-1 rounded mb-4">Working Steps</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#23235f] mb-4">How It Works</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <img src="/h1.png" alt="Add Your Team Members" className="h-32 mb-6" />
              <h3 className="font-semibold text-lg mb-2">Add Your Team Members</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla neque quam</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <img src="/h2.png" alt="Analysis Work Results" className="h-32 mb-6" />
              <h3 className="font-semibold text-lg mb-2">Analysis Work Results</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla neque quam</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center">
              <img src="/h3.png" alt="Assign and Monitor Tasks" className="h-32 mb-6" />
              <h3 className="font-semibold text-lg mb-2">Asign and Monitor Tasks</h3>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla neque quam</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-full bg-[#f7f7ff] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#ede9fe] text-[#7c3aed] font-semibold px-4 py-1 rounded mb-4">Our Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#23235f] mb-4">Loved By Our Clients</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl border p-8 flex flex-col items-center text-center shadow-sm">
              <img src="/1.jpg" alt="Client 1" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis magni, quisquam, accusantium dolores atque, doloribus odit minus maiores sunt mollitia consequatur, soluta quasi.</p>
              <div>
                <div className="font-semibold text-[#23235f]">Sunny Khan</div>
                <div className="text-gray-400 text-sm">Head of Design, Company CEO</div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl border p-8 flex flex-col items-center text-center shadow-sm">
              <img src="/2.jpg" alt="Client 2" className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nostrum adipisci porro quisquam. Rem, earum, tenetur? Architecto et, earum repudiandae.</p>
              <div>
                <div className="font-semibold text-[#23235f]">Ajoy Das</div>
                <div className="text-gray-400 text-sm">Head of Idea, Company CEO</div>
              </div>
            </div>
          </div>
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2 ">
            <button className="w-8 h-8 rounded-full bg-[#34d399] text-white font-bold flex items-center justify-center">01</button>
            <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center">02</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About