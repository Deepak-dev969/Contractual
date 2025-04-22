import React from "react";
import UserAgreementicon from "../../../assets/svg/User Agreement.svg";

const UserAgreement = () => {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-12">
      <div className="max-w-full  mx-auto p-10 flex flex-col justify-center  items-center ">
        {/* <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
          User Agreement
        </h1>*/}
        <img
          src={UserAgreementicon}
          alt="Privacy Policy"
          className="w-[15vw]  object-fit mb-8"
        />

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold text-lg">Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to comply with and
              be bound by this Agreement. If you do not agree with any part of
              this Agreement, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Services Provided</h2>
            <p>
              The Company offers [describe services/products, e.g., consulting
              services, software products, etc.]. The specific terms of service
              for each product may be outlined in separate documents, which will
              be incorporated by reference into this Agreement.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">User Obligations</h2>
            <ul className="list-disc list-inside ml-4">
              <li>
                Provide accurate, current, and complete information when
                creating an account or using our services.
              </li>
              <li>
                Maintain the confidentiality of your account credentials and
                restrict access to your account.
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account or
                any other breach of security.
              </li>
              <li>
                Use our services in compliance with all applicable laws and
                regulations.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Payment Terms</h2>
            <p>
              You agree to pay all fees associated with the services you select.
              Payment terms will be outlined in your service agreement and may
              include [insert payment methods, due dates, etc.].
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Intellectual Property</h2>
            <p>
              All content, trademarks, and other intellectual property related
              to our services are owned by the Company. You may not use,
              reproduce, or distribute any of this content without our prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, the Company shall not be
              liable for any indirect, incidental, or consequential damages
              arising from your use of our services. Our total liability to you
              shall not exceed the amount you paid for the specific service that
              gave rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our
              services at any time, without notice, for conduct that we believe
              violates this Agreement or is harmful to other users or our
              business.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of [insert jurisdiction]. Any disputes arising under
              this Agreement shall be resolved in the courts of [insert
              jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-lg">Changes to This Agreement</h2>
            <p>
              We may update this Agreement from time to time. We will notify you
              of any changes by posting the new Agreement on our website. Your
              continued use of our services after any changes constitutes your
              acceptance of the new terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;
