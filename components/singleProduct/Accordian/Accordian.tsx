import React from "react";

export default function Accordian() {
  return (
    <div className="hs-accordion-group md:w-[60%] w-full">
      <div
        className="hs-accordion border-y py-2"
        id="hs-basic-with-arrow-heading-one"
      >
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-normal text-start text-gray-800 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
          aria-expanded="true"
          aria-controls="hs-basic-with-arrow-collapse-one"
        >
          <svg
            className="hs-accordion-active:hidden block size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          <svg
            className="hs-accordion-active:block hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
          Delivery & Returns
        </button>
        <div
          id="hs-basic-with-arrow-collapse-one"
          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
          role="region"
          aria-labelledby="hs-basic-with-arrow-heading-one"
        >
          <p className="text-gray-800 font-light">
            All purchases are subject to delivery fees. Standard delivery 4–9
            business days Orders are processed and delivered Monday–Friday
            (excluding public holidays) Nike Members enjoy free returns.
          </p>
        </div>
      </div>
      <div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full  text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
          aria-expanded="false"
          aria-controls="hs-basic-with-arrow-collapse-two"
        >
          <svg
            className="hs-accordion-active:hidden block size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          <svg
            className="hs-accordion-active:block hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
          Reviews (0)
        </button>
        <div
          id="hs-basic-with-arrow-collapse-two"
          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          role="region"
          aria-labelledby="hs-basic-with-arrow-heading-two"
        >
          <p className="text-gray-800">
            <em>This is the third item's accordion body.</em> It is hidden by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>
      <div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
          aria-expanded="false"
          aria-controls="hs-basic-with-arrow-collapse-three"
        >
          <svg
            className="hs-accordion-active:hidden block size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
          <svg
            className="hs-accordion-active:block hidden size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
          Product Information
        </button>
        <div
          id="hs-basic-with-arrow-collapse-three"
          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          role="region"
          aria-labelledby="hs-basic-with-arrow-heading-three"
        >
          <p className="text-gray-800">
            Declaration of Importer: Direct import by the individual customer
            Marketed by: Nike Global Trading B.V. Singapore Branch, 30 Pasir
            Panjang Road, #10-31/32, Mapletree Business City, Singapore 117 440
            Net Quantity: 1 Pair
          </p>
        </div>
      </div>
    </div>
  );
}
