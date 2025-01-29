import { Link } from "react-router-dom";
import "./Footer.css";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-sm dark:bg-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <AcmeLogo />
            <span
              style={{ marginLeft: "-0.5rem" }}
              className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#000] hover:text-gray-600"
            >
              Flowbite
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#000] sm:mb-0 dark:text-[#000]">
            <li>
              <Link to="/about" className="hover:text-gray-600 me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-600 me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-[#000] lg:my-8" />
        <span className="block text-sm text-[#000] sm:text-center dark:text-[#000]">
          ©{currentYear} . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
