import React, { useRef, useState, useEffect } from 'react';
import coordinatorImg from '../assets/coordinatorImg.png';
import clubSecretary from '../assets/clubSecretary.png';
import Navbar from './Navbar';
import { motion, useInView } from 'framer-motion';
import culturalBg from '../assets/culturalBg.png';
import { coreTeamData } from '../data/coreTeamData'; // Adjust path as needed
import { AnimatePresence } from 'framer-motion';
import Contact from './Contact';



const Team = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);

const [formData, setFormData] = useState({
  name: '',
  branch: '',
  mobile: '',
  message: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/members', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result);
    alert('Form submitted successfully!');
    setIsModalOpen(false);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Something went wrong. Please try again.');
  }
};


const openModal = () => {
  setFormData(defaultFormData); // Reset form data when modal opens
  setIsModalOpen(true);
};

  const coordinatorRef = useRef(null);
  const secretaryRef = useRef(null);
  const isCoordinatorInView = useInView(coordinatorRef, { once: false, margin: '-100px' });
  const isSecretaryInView = useInView(secretaryRef, { once: false, margin: '-100px' });

  return (
    <>
        <div
        className="pt-[100px] px-6 md:px-10 min-h-screen pb-20 bg-cover bg-center bg-no-repeat text-white space-y-20"
        style={{
          backgroundImage: `url(${culturalBg})`,
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Faculty Coordinator */}
        <motion.div
          ref={coordinatorRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isCoordinatorInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white/40"
        >
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={
              isCoordinatorInView
                ? { x: 0, opacity: 1 }
                : { x: -40, opacity: 0 }
            }
            transition={{ delay: 0.3, duration: 1 }}
            className="md:w-2/3 text-gray-800 space-y-5"
          >
            <h2 className="text-xl font-semibold">
              Our Esteemed Faculty Coordinator
            </h2>
            <h3 className="text-2xl font-bold text-gray-900">
              Dr. Biswajit Acharya Sir
            </h3>
            <p>
              The <span className="font-semibold">Spiritual Activity Club</span>{" "}
              thrives under the expert guidance and unwavering support of our
              Faculty Coordinator,{" "}
              <span className="font-semibold">Dr. Biswajit Acharya Sir</span>.
              With a profound understanding of spirituality and a passion for
              fostering holistic development, Dr. Acharya Sir has been
              instrumental in shaping the club's activities and vision.
            </p>
            <p>
              Under his leadership, the club organizes a variety of events,
              including festivals, workshops, and weekly sessions, aimed at
              nurturing students' spiritual growth, moral values, and personal
              development.
            </p>
            <p>
              Dr. Acharya's dedication continues to inspire students to achieve
              balance, purpose, and fulfillment in their academic and personal
              lives.
            </p>
            <div className="mt-6">
              <p className="text-base italic">Dr. Biswajit Acharya</p>
              <p className="text-sm font-medium">Faculty Co-ordinator</p>
              <p className="text-sm font-medium">Spiritual Activity Club</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={
              isCoordinatorInView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }
            }
            transition={{ delay: 0.4, duration: 1 }}
            className="md:w-1/3 text-center"
          >
            <img
              src={coordinatorImg}
              alt="Dr. Biswajit Acharya"
              className="rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border-4 border-white"
            />
          </motion.div>
        </motion.div>

        {/* Club Secretary */}
        <motion.div
          ref={secretaryRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isSecretaryInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-white/40"
        >
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={
              isSecretaryInView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }
            }
            transition={{ delay: 0.3, duration: 1 }}
            className="md:w-2/3 text-gray-800 space-y-5"
          >
            <h2 className="text-xl font-semibold">Meet Our Club Secretary</h2>
            <h3 className="text-2xl font-bold text-gray-900">Ayush Sharma</h3>
            <p className="font-medium italic text-indigo-800">
              “Whatever action a great leader performs, common men follow. And
              whatever standards he sets by exemplary acts, all the world
              pursues.”
            </p>
            <p>
              As the Secretary of the Spiritual Activity Club, I (Ayush Sharma,
              Final Year Information Technology) am dedicated to inspiring a
              journey where devotion and motivation unite. By nurturing
              spiritual growth and academic excellence, I strive to empower
              every individual to reach their full potential.
            </p>
            <p>
              I also affirm that one should follow in the footsteps of great
              alumnis, and that is the way of progress on the path of spiritual
              community.
            </p>
            <div className="mt-4 text-orange-800 text-xl font-extrabold">
              “Learn, Grow & Serve”
            </div>
            <div className="text-black font-bold text-lg">be happy…</div>
            <div className="mt-4">
              <p className="text-base italic text-black">Ayush Sharma</p>
              <p className="text-sm font-medium">Club Secretary</p>
              <p className="text-sm font-medium">Spiritual Activity Club</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={
              isSecretaryInView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }
            }
            transition={{ delay: 0.4, duration: 1 }}
            className="md:w-1/3 text-center"
          >
            <img
              src={clubSecretary}
              alt="Ayush Sharma"
              className="rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 border-4 border-white"
            />
          </motion.div>
        </motion.div>
        {/* Core Team Members */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8 border border-white/40"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Core Team Members
          </h2>
          <p className="text-center text-gray-700 max-w-3xl">
            Meet the vibrant and dedicated students who form the backbone of the
            Spiritual Activity Club. These talented individuals from the Final
            and Third Year are the force behind the successful execution of club
            initiatives and events.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            <AnimatePresence>
              {coreTeamData.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl hover:scale-95 transition-transform duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-white shadow"
                  />
                  <h3 className="text-md font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {member.title}
                  </p>
                </motion.div>
                
              ))}

              {/* Show More Button */}
<motion.div
  className="col-span-full text-center"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6 }}
>
  <button
    onClick={() => setShowMoreModal(true)}
    className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-all duration-300 shadow-lg"
  >
    Show More
  </button>
</motion.div>

            </AnimatePresence>

          </div>
        </motion.div>
        {/* Become a Member Section */}
        <div className="max-w-4xl mx-auto text-center mt-12 p-8 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/40">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Want to Become a Member?
          </h2>
          <p className="text-gray-700 mb-6">
            Join us on a journey of growth, devotion, and positive impact. Be a
            part of a community that fosters spirituality and service.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Click Here
          </button>
        </div>
      </div>
  
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-6">Join the Club</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Your Branch"
                required
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-xl"
              />
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

<AnimatePresence>
        {showMoreModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-indigo-900 to-black bg-opacity-80 flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-3xl relative overflow-hidden border-4 border-indigo-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setShowMoreModal(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6 underline decoration-wavy decoration-orange-400">
                🌟 Other Team Members 🌟
              </h2>

              <div className="space-y-8 max-h-[60vh] overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-indigo-400 scrollbar-track-indigo-100">
                {/* 2nd Year Section */}
                <div className="bg-indigo-50 rounded-2xl p-4 shadow-inner">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-3 flex items-center gap-2">
                    🎓 2nd Year Students
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800 text-base">
                    {[
                      "Surbhit Parashar",
                      "Yash Yogi",
                      "Subodh Agarwal",
                      "Vivek Kumawat",
                      "Kuldeep Saini",
                      "Kuldeep Rajpurohit",
                      "Durgesh Jangid",
                    ].map((name, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="bg-white rounded-xl py-2 px-4 shadow border-l-4 border-indigo-400"
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* 1st Year Section */}
                <div className="bg-orange-50 rounded-2xl p-4 shadow-inner">
                  <h3 className="text-xl font-semibold text-orange-700 mb-3 flex items-center gap-2">
                    🌱 1st Year Students
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-800 text-base">
                    {[
                      "Aman Prajapat",
                      "Anand Suthar",
                      "Arindam",
                      "Bhavya Galav",
                      "Daksh Samberwal",
                      "Durlabh Jiyani",
                      "Harsh Yadav",
                      "Himanshu",
                      "Lucky Gurjar",
                      "Nishant Meena",
                    ].map((name, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i }}
                        className="bg-white rounded-xl py-2 px-4 shadow border-l-4 border-orange-400"
                      >
                        {name}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>





      <Contact />
    </>
  );
};

export default Team;
