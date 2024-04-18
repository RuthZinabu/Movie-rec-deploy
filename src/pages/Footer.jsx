import React from 'react';

const Footer = () => {
  return (
    <footer className="left-0 w-full  bottom-0   bg-opacity-20 p-5 mt-20 bg-blue-900 text-white py-8  ">
      <div className="containerf mx-auto flex flex-wrap justify-around">
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="mailto:contact@teamten.com" className="text-blue-200">contact@teamten.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-blue-200">+1234567890</a></p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">Facebook</a></p>
          <p><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">Twitter</a></p>
          <p><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-300">Instagram</a></p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-blue-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor eros nec turpis tincidunt, ut volutpat nulla sodales.</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-blue-200">&copy; {new Date().getFullYear()} Movie Recommendation System</p>
      </div>
    </footer>
  );
};

export default Footer;