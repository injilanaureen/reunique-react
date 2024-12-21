import React from 'react';

const Terms = () => {
  return (
    <section className="bg-gray-50 text-gray-900 p-6 md:p-12">
      <div className="condition-container max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="condition-header border-b border-gray-300 pb-6">
          <h5 className="text-xl md:text-2xl font-extrabold text-gray-800">Terms & Conditions</h5>
        </div>

        {/* Sections */}
        {/* Introduction */}
        <div className="condition-section p-6 bg-white rounded-lg shadow-sm" id="introduction">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
          <p className="text-base leading-7 text-gray-700">
            <span className="block mb-2">Latest Updated:</span>
            <strong>
              These terms and conditions (“Terms of Use” or “Terms of Service” or “Terms”) are a computer-generated
              electronic record published under Rule 3 of the Information Technology (Intermediary Guidelines and
              Digital Media Ethics Code) Rules, 2021...
            </strong>
            <br />
            <br />
            Notwithstanding anything contained elsewhere, PeUnique reserves the right to modify, alter, amend, revise
            these Terms...
          </p>
        </div>

        {/* Acceptance */}
        <div className="condition-section p-6 bg-white rounded-lg shadow-sm" id="acceptance">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Acceptance</h3>
          <p className="text-base leading-7 text-gray-700">
            By accessing, signing-up and/or accepting or using the Platform...
          </p>
        </div>

        {/* Definitions */}
        <div className="condition-section p-6 bg-white rounded-lg shadow-sm" id="definitions">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Definitions</h2>
          <p className="text-base leading-7 text-gray-700">
            For the purpose of these General Terms and Conditions, the following words and phrases shall have the
            meaning assigned to them...
          </p>
        </div>

        {/* Disclaimer */}
        <div className="condition-section p-6 bg-white rounded-lg shadow-sm" id="disclaimer">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Disclaimer</h2>
          <p className="text-base leading-7 text-gray-700">
            To the fullest extent permissible pursuant to Applicable Law, PeUnique and its officers, directors,
            employees, and agents disclaim all warranties...
          </p>
        </div>

        {/* Fraudulent Transactions */}
        <div className="condition-section p-6 bg-white rounded-lg shadow-sm" id="fraudulent-transactions">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fraudulent Transactions</h2>
          <ol className="list-decimal pl-6 text-base leading-7 text-gray-700 space-y-3">
            <li>
              If PeUnique is intimated, by the bank, that a customer has reported an unauthorized debit/chargeback...
            </li>
            <li>
              The User agrees and acknowledges that:
              <ul className="list-disc pl-6 space-y-2">
                <li>If the User is unable to furnish Chargeback Documents...</li>
                <li>If the bank is not satisfied with the Chargeback documents...</li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Miscellaneous */}
        <div className="condition-section p-6 bg-white rounded-lg shadow-sm" id="miscellaneous">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Miscellaneous</h2>
          <ol className="list-decimal pl-6 text-base leading-7 text-gray-700 space-y-3">
            <li>
              <strong>Severability:</strong> If any provision of this Terms of Use is held to be unlawful, void,
              invalid...
            </li>
            <li>
              <strong>Assignment:</strong> These Terms of Use and any rights granted hereunder shall not be assignable
              by the User...
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Terms;
