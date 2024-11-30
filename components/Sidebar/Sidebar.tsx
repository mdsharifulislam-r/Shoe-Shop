'use client'
import Brands from './Brands/Brands'
import Genders from './Gender/Genders'
import Colors from './Colors/Colors'
import Price from './price/Price'
import { useAppSelector } from '@/lib/hooks/hooks'

export default function Sidebar() {
  const sideState = useAppSelector(state=>state.cartReduicer.sideBar)
  return (
    <>
  {/* ========== MAIN CONTENT ========== */}
  {/* Breadcrumb */}
  <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden">
    <div className="flex items-center py-2">
      {/* Navigation Toggle */}
      <button
        type="button"
        className="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-application-sidebar"
        aria-label="Toggle navigation"
        data-hs-overlay="#hs-application-sidebar"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="shrink-0 size-4"
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
          <rect width={18} height={18} x={3} y={3} rx={2} />
          <path d="M15 3v18" />
          <path d="m8 9 3 3-3 3" />
        </svg>
      </button>
      {/* End Navigation Toggle */}
      {/* Breadcrumb */}
      <ol className="ms-3 flex items-center whitespace-nowrap">
        <li className="flex items-center text-sm text-gray-800">
          Application Layout
          <svg
            className="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </li>
        <li
          className="text-sm font-semibold text-gray-800 truncate"
          aria-current="page"
        >
          Dashboard
        </li>
      </ol>
      {/* End Breadcrumb */}
    </div>
  </div>
  {/* End Breadcrumb */}
  {/* Sidebar */}
  <div
    id="hs-application-sidebar"
    className={`hs-overlay  [--auto-close:lg]
      
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  ${sideState?'w-[260px]':"w-0"} h-screen
  hidden
  fixed
  lg:relative
  inset-y-0 start-0 z-[20]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
 `}
    role="dialog"
    tabIndex={-1}
    aria-label="Sidebar"
  >
    <div className="relative flex flex-col h-full max-h-full">
   
      {/* Content */}
      <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <nav
          className="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open=""
        >
          <ul className="flex flex-col space-y-1 mt-20 md:mt-0">
        
            <li className="hs-accordion" id="account-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                aria-expanded="true"
                aria-controls="account-accordion-child"
              >
               
                Brands
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4"
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
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4"
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
              </button>
              <div
                id="account-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                role="region"
                aria-labelledby="account-accordion"
              >
               <Brands/>
              </div>
            </li>
            <li className="hs-accordion" id="projects-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                aria-expanded="true"
                aria-controls="projects-accordion-child"
              >
               
                Gender
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4"
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
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4"
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
              </button>
              <div
                id="projects-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                role="region"
                aria-labelledby="projects-accordion"
              >
          <Genders/>
              </div>
            </li>
              <li className="hs-accordion" id="projects-accordion">
              <button
                type="button"
                className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                aria-expanded="true"
                aria-controls="projects-accordion-child"
              >
            
                Colors
                <svg
                  className="hs-accordion-active:block ms-auto hidden size-4"
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
                <svg
                  className="hs-accordion-active:hidden ms-auto block size-4"
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
              </button>
              <div
                id="projects-accordion-child"
                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                role="region"
                aria-labelledby="projects-accordion"
              >
          <Colors/>
              </div>
            </li>
            <li className="" id="projects-accordion">
              <Price/>
            </li>
            
 
          </ul>
        </nav>
      </div>
      {/* End Content */}
    </div>
  </div>
  {/* End Sidebar */}
  {/* Content */}

  {/* End Content */}
  {/* ========== END MAIN CONTENT ========== */}
</>

  )
}
