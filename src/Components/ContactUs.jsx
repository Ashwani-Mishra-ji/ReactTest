import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <>
      <div className="flex  h-screen imgmain">
        <div className="w-1/2 p-2  mt-16">
          <div className="mb-8">
            <h2 className="text-2xl  mb-2 text-white">Newslleter</h2>
            <p className="text-2xl  mb-2 text-white">
              Get news about article and updats in your inbox .
            </p>
          </div>
          <div className=" mt-64 p-4"></div>
          <img
            className="get"
            src="src/assets/Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco (2).png"
            alt=""
          />
        </div>

        <div className="w-2/2 p-4 ">
          <div className="mb-4">
            <form>
              <div className="mb-16">
                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class="mt-8 block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="NAME "
                  required
                />
                <br />
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="EMAIL "
                  required
                />
                <br />
                <input
                  type="message"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-64 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="MESSAGE "
                  required
                />
                <br />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  id="submit"
                  className="w-32 h-32 mr-1 rounded-full border border-orange-500 hover:border-orange-700 focus:outline-none text-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p class="text-center ...  bg-black h-12 text-white ">
        <p className="p-2">© 2023. All Rights Reserved. Ashwani Mishra </p>{" "}
      </p>
    </>
  );
};

export default ContactUs;
