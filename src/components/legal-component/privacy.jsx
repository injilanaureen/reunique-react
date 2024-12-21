import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-gray-100 mt-32 mb-2 text-gray-800 font-sans">
      <div className="text-center my-16 p-8">
        <h5 className="text-5xl font-bold text-green-600">Privacy Policy</h5>
      </div>

      <div className="bg-white max-w-5xl mx-auto p-8 rounded-lg shadow-md border-l-4 border-green-500">
        <p className="font-bold">Latest Update</p>
        <p>
          SRS Live Technologies Private Limited (PeUnique, “we”, “us”, “our”) respects every
          individual’s right to privacy and it is our endeavour to protect their personal and
          Sensitive personal data or information (defined below).
        </p>
        <p>
          This Privacy Policy (“Policy”) applies to all visitors (i.e. those who do not have an
          Account with PeUnique) and users (i.e. those who have an Account with PeUnique)
          (collectively referred to as “User”) who share their personal and Sensitive personal data
          with us, while visiting, accessing, browsing, and using our website{' '}
          <a
            href="https://www.peunique.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            www.peunique.com/
          </a>{' '}
          (the “Website”). The purpose of this Policy is to inform Users regarding collection, use,
          storage, transfer, and disclosure of their data. Before submitting any information to us,
          please carefully read this Policy to understand how we shall treat your information.
        </p>
        <p>
          The User acknowledges that this Policy is a part of PeUnique's Terms & Conditions and all
          the terms defined therein shall have the same meaning here in this Policy. Access,
          browsing, and continuous use of the Website constitute the User’s unconditional consent to
          this Policy read together with the Terms of Use. If the User does not agree with the terms
          of this Policy, please do not visit and use our Website. This Policy can be easily
          accessed at various places on our Website, including but not limited to when Users create
          an account with us on our Website.
        </p>
        <p>
          PeUnique reserves its right to modify, alter, and update this Policy at any time, with or
          without prior notice. Although, Users shall be notified of material changes through their
          registered email address or any other mode of communication available with us, it is
          advised that they consult this Policy regularly to be updated about the changes. If a User
          continues to use or avail the services of the Website after any modification, amendment,
          alteration, or change of this Policy, irrespective of whether notice was sent to the User
          or published on the Website, such User is hereby deemed to provide consent to this Policy
          and PeUnique's other Policies and practices existing at the time of visiting, accessing,
          and/or using the Website.
        </p>
      </div>

      <div className="bg-white max-w-5xl mx-auto p-8 rounded-lg shadow-md border-l-4 border-blue-500 mt-6">
        <p className="font-bold text-lg mb-4">DEFINITIONS</p>
        <div className="mb-6">
          <p className="font-bold">1. PERSONAL INFORMATION</p>
          <p>
            SPI Rules define “Personal Information” as any information that relates to a natural
            person, which, either directly or indirectly, in combination with other information
            available or likely to be available with a body corporate, is capable of identifying
            such person. Such information includes name, address, mobile number, etc.
          </p>
        </div>

        <div className="mb-6">
          <p className="font-bold">2. SENSITIVE PERSONAL DATA OR INFORMATION</p>
          <p>
            SPI Rules define “Sensitive personal data or information” of a person as personal
            information which consists of information relating to:
          </p>
          <ul className="list-disc pl-5">
            <li>Passwords</li>
            <li>Financial information such as bank accounts or credit card or debit card or other payment instrument details</li>
            <li>Physical, physiological, and mental health condition</li>
            <li>Sexual orientation</li>
            <li>Medical records and history</li>
            <li>Biometric information</li>
            <li>
              Any of the information received under the above clauses by a body corporate for
              processing or storage under lawful contract or otherwise
            </li>
          </ul>
          <p>
            Information which is freely available in the public domain or furnished under the Right
            to Information Act, 2005, or any other law shall not be regarded as sensitive personal
            data or information.
          </p>
        </div>
      </div>

      <div className="bg-white max-w-5xl mx-auto p-8 rounded-lg shadow-md border-l-4 border-red-500 mt-6">
        <p className="font-bold text-lg mb-4">CONSENT FOR COLLECTION OF PERSONAL INFORMATION</p>
        <p>
          Users provide their consent to the use, disclosure, storage, possession, receiving,
          dealing, or handling of their Personal Information by accessing, browsing, or availing
          services on the Website.
        </p>
        <p>
          In accordance with Rule 5 of SPI Rules, Users provide their specific consent to the use,
          disclosure, storage, possession, receiving, dealing, or handling of their Sensitive
          personal data or information for lawful purposes enumerated in this policy through
          checking the box affirming such consent appearing at the time of creation of their Account
          on the Website.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
