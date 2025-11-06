import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Last updated on <strong>04-11-2025 14:55:09</strong>
        </p>

        <p className="text-gray-700 mb-4 text-center">
          You may contact us using the information below:
        </p>

        <div className="space-y-3 text-gray-800 text-[1.05rem] leading-relaxed">
          <p>
            <strong>Merchant Legal Entity Name:</strong>{" "}
            <span className="text-indigo-600">DEVANDRA YADAV</span>
          </p>
          <p>
            <strong>Registered Address:</strong> C-179 Srinath Puram, Kota,
            Rajasthan, PIN: 324010
          </p>
          <p>
            <strong>Operational Address:</strong> C-179 Srinath Puram, Kota,
            Rajasthan, PIN: 324010
          </p>
          <p>
            <strong>Telephone No:</strong>{" "}
            <a
              href="tel:9352080233"
              className="text-blue-600 hover:text-blue-800"
            >
              9352080233
            </a>
          </p>
          <p>
            <strong>E-Mail ID:</strong>{" "}
            <a
              href="mailto:spiritualclubofficial@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              spiritualclubofficial@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="mailto:spiritualclubofficial@gmail.com"
            className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Send Us an Email
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© 2025 Spiritual Activity Club, Rajasthan Technical University</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
