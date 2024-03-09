import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black mt-2 py-6 md:py-12">
      <div className="mx-auto w-full max-w-screen-xl flex justify-center">
        <div className="grid grid-cols-2 gap-10 md:gap-20 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Investor Relations
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Speed
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Help Centre
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Jobs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Cookie Preferences
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Account
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Way to Watch
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Media Centre
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
