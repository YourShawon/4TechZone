import React from "react";
import Container from "../container";

const Footer = () => {
  return (
    <footer className="bg-white my-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-8">
          <div>
            <h3 className="font-semibold mb-3">4TechZone</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Core Services</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Latest Projects</a></li>
              <li><a href="#">Pricing Plans</a></li>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Advertising</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Libero quisque and massa</a></li>
              <li><a href="#">Aliquam auris dapibus libero</a></li>
              <li><a href="#">Purus justo lacus ligula</a></li>
              <li><a href="#">Tortor sagittis lacinia</a></li>
              <li><a href="#">Gravida aliquet ipsum ultrices</a></li>
              <li><a href="#">Lacinia molestie egestas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Discover</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Our Blog</a></li>
            </ul>
            <h3 className="font-semibold mt-6 mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-semibold mb-3">About Us</h3>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Follow the Best</h3>
              <form className="flex items-center bg-gray-50 rounded px-2 py-1 w-full">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent outline-none flex-1 py-2 px-2"
                />
                <button type="submit" className="text-gray-400 hover:text-blue-600">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2024 SolTech. All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-gray-600">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2.1C16.4 2 15.8 2 15.2 2H8.8C8.2 2 7.6 2 7 2C4.2 2.6 2 4.8 2 7.6V16.4C2 19.2 4.2 21.4 7 21.9C7.6 22 8.2 22 8.8 22H15.2C15.8 22 16.4 22 17 21.9C19.8 21.4 22 19.2 22 16.4V7.6C22 4.8 19.8 2.6 17 2.1ZM15 8H13C12.4 8 12 8.4 12 9V11H15L14.5 13H12V18H10V13H8V11H10V9C10 7.3 11.3 6 13 6H15V8Z" /></svg>
            </a>
            <a href="#" aria-label="X" className="text-gray-400 hover:text-gray-600">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 1 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-600">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-600">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" /><path d="M16.8 2H7.2C4.4 2 2 4.4 2 7.2v9.6C2 19.6 4.4 22 7.2 22h9.6c2.8 0 5.2-2.4 5.2-5.2V7.2C22 4.4 19.6 2 16.8 2zm-4.8 15.2A5.2 5.2 0 1 1 17.2 12a5.2 5.2 0 0 1-5.2 5.2zm6.4-9.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" /></svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
