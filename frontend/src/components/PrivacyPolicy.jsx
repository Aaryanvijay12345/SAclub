import React from "react";
import { ScrollText } from "lucide-react";

const TermsConditions = () => {
return ( <div className="terms-container"> <div className="terms-card"> <div className="terms-header"> <ScrollText size={40} className="terms-icon" /> <h1>Terms & Conditions</h1> </div> <p className="last-updated">
Last updated on <strong>06-11-2025 15:08:13</strong> </p>

```
    <p className="intro">
      These Terms and Conditions, along with privacy policy or other terms
      ("Terms") constitute a binding agreement by and between{" "}
      <strong>DEVANDRA YADAV</strong> ("Website Owner") and you ("user")
      relating to your use of our website and services.
    </p>

    <h2>Usage of Services</h2>
    <ul>
      <li>
        You agree to provide true, accurate, and complete information while
        registering or using our Services.
      </li>
      <li>
        We and our third-party partners make no warranties regarding
        accuracy, performance, or suitability of the website information.
      </li>
      <li>
        Your use of the Services is at your own risk. You are responsible
        for ensuring the Services meet your requirements.
      </li>
      <li>
        The contents and design of this website are proprietary to us. You
        have no rights to reproduce or distribute them without written
        consent.
      </li>
      <li>
        You agree not to use the website for unlawful, illegal, or
        prohibited purposes.
      </li>
      <li>
        Transactions initiated imply acceptance of these Terms and form a
        legally binding contract.
      </li>
      <li>
        Refunds may be claimed if the service was not provided within the
        committed time, as per our refund policy.
      </li>
      <li>
        Disputes shall be subject to the exclusive jurisdiction of the
        courts in <strong>Kota, Rajasthan</strong>.
      </li>
    </ul>

    <h2>Intellectual Property</h2>
    <p>
      All materials, designs, and content on this website are owned by{" "}
      <strong>DEVANDRA YADAV</strong> and protected under applicable
      intellectual property laws. Any unauthorized reproduction or use may
      result in legal action.
    </p>

    <h2>Disclaimer</h2>
    <p>
      We do not guarantee that the Services will be uninterrupted or
      error-free. In no event shall we be liable for damages resulting from
      the use or inability to use the Services.
    </p>

    <h2>Force Majeure</h2>
    <p>
      We shall not be held liable for any failure to perform obligations due
      to circumstances beyond our control, such as natural disasters,
      strikes, or internet outages.
    </p>

    <h2>Contact Information</h2>
    <p>
      For any concerns related to these Terms, please contact us at:{" "}
      <strong>spiritualclubofficial@gmail.com</strong>
    </p>
  </div>

  <style jsx>{`
    .terms-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #eef2f3, #dfe9f3);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px 20px;
      animation: fadeIn 0.7s ease-in-out;
    }

    .terms-card {
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      max-width: 900px;
      width: 100%;
      padding: 40px;
      color: #333;
      line-height: 1.6;
    }

    .terms-header {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #004aad;
      border-bottom: 2px solid #004aad;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    .terms-icon {
      color: #004aad;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
    }

    .last-updated {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 15px;
    }

    .intro {
      margin-bottom: 20px;
      color: #444;
    }

    h2 {
      margin-top: 25px;
      color: #004aad;
      font-size: 1.3rem;
      border-left: 4px solid #004aad;
      padding-left: 10px;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-top: 10px;
    }

    ul li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 10px;
      font-size: 0.97rem;
    }

    ul li::before {
      content: "✔";
      position: absolute;
      left: 0;
      top: 0;
      color: #004aad;
      font-weight: bold;
    }

    p {
      font-size: 0.96rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .terms-card {
        padding: 25px;
      }
      h1 {
        font-size: 1.6rem;
      }
      h2 {
        font-size: 1.1rem;
      }
    }
  `}</style>
</div>


);
};

export default TermsConditions;
