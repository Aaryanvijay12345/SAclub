// import React from 'react';
// import '../styles/TestimonialMarquee.css'; // We'll define custom animation here

// const testimonials = [
//   { name: 'भागवद गीता', username: 'Shloka 2.20', message: "न जायते म्रियते वा कदाचि-न्नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणोन हन्यते हन्यमाने शरीरे॥" },
//   { name: 'भागवद गीता', username: '@john', message: "I'm at a loss for words. This is amazing. I love it." },
//   { name: 'भागवद गीता', username: '@james', message: "I'm at a loss for words. This is amazing. I love it." },
//   { name: 'भागवद गीता', username: '@jane', message: "I'm at a loss for words. This is amazing. I love it." },
//   { name: 'Jenny', username: '@jenny', message: "I'm at a loss for words. This is amazing. I love it." },
// ];

// const TestimonialMarquee = () => {
//   const doubled = [...testimonials, ...testimonials]; // Double for seamless scroll

//   return (
//     <div className="overflow-hidden relative w-full py-8">
//       <div className="marquee flex w-max space-x-6">
//         {doubled.map((testimonial, idx) => (
//           <div
//             key={idx}
//             className="flex-none w-96 h-58 bg-white shadow-lg rounded-xl p-4 border border-gray-200 transition-transform hover:scale-105"
//           >
//             <div className="flex items-center space-x-4 mb-3">
//               <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500" />
//               <div>
//                 <p className="font-semibold text-gray-800">{testimonial.name}</p>
//                 <p className="text-gray-500 text-sm">{testimonial.username}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 text-sm">{testimonial.message}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialMarquee;



import React from 'react';
import '../styles/TestimonialMarquee.css';

const testimonials = [
  {
    name: 'भगवद गीता',
    username: 'अध्याय 2, श्लोक 20',
    message: `न जायते म्रियते वा कदाचि-न्नायं भूत्वा भविता वा न भूयः।
अजो नित्यः शाश्वतोऽयं पुराणो
न हन्यते हन्यमाने शरीरे॥`,
    transliteration: `na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato ’yaṁ purāṇo\nna hanyate hanyamāne śarīre`,
    meaning: `The soul is neither born, nor does it die; it has not come into being, does not come into being, and will not come into being. It is unborn, eternal, permanent, and primeval. The soul is not destroyed when the body is destroyed.`,
  },
  {
    name: 'भगवद गीता',
    username: 'अध्याय 2, श्लोक 47',
    message: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥`,
    transliteration: `karmaṇy-evādhikāras te mā phaleṣhu kadāchana\nmā karma-phala-hetur bhūr mā te saṅgo ’stvakarmaṇi`,
    meaning: `You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.`,
  },
  {
    name: 'भगवद गीता',
    username: 'अध्याय 4, श्लोक 7-8',
    message: `यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
अभ्युत्थानमधर्मस्य तदाऽअत्मानं सृजाम्यहम्॥
परित्राणाय साधूनां विनाशाय च दुष्कृताम्।
धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥`,
    transliteration: `yadā yadā hi dharmasya glānir bhavati bhārata\nabhyutthānam adharmasya tadā ’tmānaṁ sṛijāmy aham\nparitrāṇāya sādhūnāṁ vināśhāya cha duṣhkṛitām\ndharma-saṁsthāpanārthāya sambhavāmi yuge yuge`,
    meaning: `Whenever there is a decline in righteousness and an increase in unrighteousness, I manifest Myself. To protect the righteous, annihilate the wicked, and reestablish Dharma, I appear in every age.`,
  }
];

const TestimonialMarquee = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden relative w-full py-10">
      <div className="marquee flex w-max space-x-8 px-4">
        {doubled.map((testimonial, idx) => (
          <div
            key={idx}
            className="flex-none w-[30rem] bg-[#F5E6CC] shadow-2xl rounded-2xl p-6 border border-yellow-300 transition-transform hover:scale-105"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 shadow-md" />
              <div>
                <p className="font-bold text-xl text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm italic">{testimonial.username}</p>
              </div>
            </div>

            <p className="text-lg font-medium text-gray-900 whitespace-pre-line mb-3">{testimonial.message}</p>
            <p className="text-sm text-purple-700 font-semibold whitespace-pre-line mb-2">
              <span className="block text-gray-600">Transliteration:</span> {testimonial.transliteration}
            </p>
            <p className="text-sm text-gray-700 italic">
              <span className="font-semibold text-green-700">Meaning: </span>{testimonial.meaning}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
