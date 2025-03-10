import React from 'react'

function NewsLetter() {
  return (
    <>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest updates and exclusive offers straight to your inbox.</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-r-lg "
            >
              Subscribe
            </button>
          </form>
        </div>
    </>
  )
}

export default NewsLetter