// import React, { useState } from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
      

//       const data = await res.json();

//       if (res.ok) {
//         setStatus('Message Recieved See In A Short Time!');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setStatus(data.message || 'Something went wrong.');
//       }
//     } catch (err) {
//       setStatus('Failed to send message.');
//     }
//   };

//   return (
//     <div id="contact" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="bg-purple-50 p-8 rounded-xl">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <Mail className="h-6 w-6 text-purple-600 mr-4" />
//                 <span className="text-gray-600">spiritualclubofficial@gmail.com</span>
//               </div>
//               <div className="flex items-center">
//                 <Phone className="h-6 w-6 text-purple-600 mr-4" />
//                 <span className="text-gray-600">+91 9352080233</span>
//               </div>
//               <div className="flex items-center">
//                 <MapPin className="h-6 w-6 text-purple-600 mr-4" />
//                 <span className="text-gray-600">RTU, Akelgarh, Kota, 324010</span>
//               </div>
//             </div>
//           </div>

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
//             >
//               Send Message
//             </button>

//             {status && <p className="text-center text-sm text-green-600 mt-2">{status}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message Received! We’ll get back to you shortly.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (err) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-purple-50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-purple-600 mr-4" />
                <span className="text-gray-600">
                  spiritualclubofficial@gmail.com
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-purple-600 mr-4" />
                <span className="text-gray-600">+91 9352080233</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                <span className="text-gray-600">
                  RTU, Akelgarh, Kota, 324010
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-6 mt-8">
              <a
                href="https://www.instagram.com/spiritualclub_official/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-purple-600 hover:text-purple-800 transition duration-300" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCOpTMKny1TmYdUkmnTWTWxA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6 text-purple-600 hover:text-purple-800 transition duration-300" />
              </a>
              <a
                href="https://www.facebook.com/spiritualclubofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6 text-purple-600 hover:text-purple-800 transition duration-300" />
              </a>
            </div>

           
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm text-green-600 mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mt-8 text-center text-purple-700 font-semibold text-lg">
              Hare Krishna🙏
            </div>
      
        {/* Copyright */}
        <div className="mt-16 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Spiritual Activity Club. All rights reserved.
      </div>

     

      
    </div>

    
  );
};

export default Contact;
