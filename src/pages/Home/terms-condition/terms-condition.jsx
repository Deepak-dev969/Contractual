import React from "react";
import termsconditionicon from "../../../assets/svg/Terms and Conditions.svg";

const TermsAndConditions = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="mx-auto max-w-full p-10 flex flex-col justify-center  items-center">
        {/*  <h1 className="text-4xl font-bold text-center mb-10 capitalize leading-[3.5rem] bg-[linear-gradient(to_right,#eb19cc,#14e8dd)] bg-clip-text text-transparent">
          Terms and Conditions
        </h1>*/}
        <img
          src={termsconditionicon}
          alt="Privacy Policy"
          className="w-[25vw]  object-fit mb-8"
        />

        <div className="space-y-6 text-base leading-[2.2rem]">
          <section>
            <h2 className="font-bold text-2xl mb-2">1. Definitions</h2>
            <p className="text-base leading-[2rem]">
              “<strong>Company</strong>” refers to [Your Company Name], located
              at [Your Address].
              <br />“<strong>Recipient</strong>” refers to the individual or
              entity entering into this Agreement with the Company.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">2. Agreement Scope</h2>
            <p className="text-base">
              The Company grants the Recipient [specific rights or licenses,
              e.g., the right to use the Company Name] under the terms set forth
              in this Agreement.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">3. Duration</h2>
            <p className="text-[1.2rem] font-[400] ">
              This Agreement will commence on [Insert Start Date] and will
              remain in effect until [Insert End Date] or until terminated by
              either party in accordance with these terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">4. Payment Terms</h2>
            <p className="text-base">
              The Recipient agrees to pay the Company [insert payment amount] in
              accordance with the following schedule: [insert payment terms].
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">
              5. Obligations of the Recipient
            </h2>
            <ul className="list-disc list-inside ml-4  ">
              <li>
                Use the Company Name in accordance with the Company's branding
                guidelines.
              </li>
              <li>
                Comply with all applicable laws and regulations in connection
                with their use of the Company Name.
              </li>
              <li>
                Maintain the confidentiality of any proprietary information
                received from the Company.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">6. Termination</h2>
            <p>
              Either party may terminate this Agreement upon [Insert notice
              period, e.g., 30 days] written notice. Upon termination, the
              Recipient shall cease all use of the Company Name and return or
              destroy any confidential information.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">7. Indemnification</h2>
            <p>
              The Recipient agrees to indemnify and hold harmless the Company
              from any claims, losses, or damages arising out of the Recipient’s
              use of the Company Name or breach of this Agreement.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">
              8. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, the Company shall not be
              liable for any indirect, incidental, or consequential damages
              arising from this Agreement.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">9. Governing Law</h2>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of [insert jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">10. Amendments</h2>
            <p>
              Any amendments to this Agreement must be made in writing and
              signed by both parties.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">
              11. Entire Agreement
            </h2>
            <p>
              This Agreement constitutes the entire understanding between the
              parties regarding the subject matter herein and supersedes all
              prior discussions and agreements.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
