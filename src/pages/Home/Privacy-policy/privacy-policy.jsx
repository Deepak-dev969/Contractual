import React from "react";
import PrivacyPolicyicon from "../../../assets/svg/Privacy Policy.svg";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black  min-h-screen text-white px-6 py-12">
      <div className="max-w-full  mx-auto p-10 flex flex-col justify-center  items-center ">
        {/*  <h1 className="text-4xl flex justify-center font-bold text-center mb-10 bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] bg-clip-text text-transparent leading-[3.5rem]">
          Privacy Policy
        </h1>*/}
        <img
          src={PrivacyPolicyicon}
          alt="Privacy Policy"
          className="w-[15vw]  object-fit mb-8"
        />

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold text-lg">1. Introduction</h2>
            <p>
              This Privacy Policy explains how [Your Company Name] ("Company",
              "we", or "us") collects, uses, and protects your personal
              information when you use our services or interact with our
              website.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Personal identification information (Name, email address, phone
                number, etc.)
              </li>
              <li>
                Usage data (pages visited, time spent, interactions, etc.)
              </li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside ml-4">
              <li>To provide and maintain our services</li>
              <li>To improve user experience and our website</li>
              <li>
                To communicate with you regarding updates, promotions, or
                support
              </li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg">
              4. Sharing Your Information
            </h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Service providers and partners assisting in our operations
              </li>
              <li>
                Law enforcement or regulatory authorities if required by law
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience, track
              usage patterns, and improve functionality. You may choose to
              disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal data. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Access, correct, or delete your personal information</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg">8. Third-Party Links</h2>
            <p>
              Our website may contain links to other sites. We are not
              responsible for the privacy practices or content of such websites.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">
              10. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We encourage
              you to review it periodically. Continued use of our services after
              any changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at [insert contact information].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
