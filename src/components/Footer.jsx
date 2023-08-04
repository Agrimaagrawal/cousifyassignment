import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8 w-full mt-14">
    <div className="max-w-4xl mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Hire</h3>
          <p className="text-sm">We are a software developer hiring company dedicated to connecting top tech talent with great opportunities.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <p className="text-sm">123 Main St</p>
          <p className="text-sm">City, Country</p>
          <p className="text-sm">contact@hire.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-800 my-4" />
      <p className="text-center text-sm">© {new Date().getFullYear()} Hire. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
