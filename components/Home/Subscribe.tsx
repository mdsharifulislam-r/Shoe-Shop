import React from 'react'
import Heading from '../common/Heading'

export default function Subscribe() {
  return (
    <>
<>
  {/* Subscribe */}
  <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto">
    <div className="max-w-xl text-center mx-auto">
      <div className="mb-5 flex justify-center">
        <Heading sub1='Sign Up to Our' sub2='Website'/>
      </div>
      <form>
        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="w-full">
            <label htmlFor="hero-input" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="hero-input"
              name="hero-input"
              className="py-3 border px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Enter your email"
            />
          </div>
          <a
            className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-orange-500 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            Subscribe
          </a>
        </div>
      </form>
    </div>
  </div>
  {/* End Subscribe */}
</>


</>

  )
}
