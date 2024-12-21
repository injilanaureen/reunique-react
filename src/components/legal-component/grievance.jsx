import React from 'react';

const Grievance = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 p-8 mt-36 bg-white rounded-2xl shadow-lg">
      <div className="text-center mb-12 bg-primary-color text-bg-color py-6 rounded-lg">
        <h5 className="text-3xl font-bold">Grievance Redressal</h5>
      </div>

      <div className="text-lg text-gray-700">
        <p className="mb-6">
          <strong>Last Updated Date:</strong> 15/04/2024
        </p>
        <h6 className="text-xl font-semibold text-tertiary-color mb-4">
          Grievance Reporting Channels
        </h6>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left text-sm text-gray-600">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="px-4 py-2 font-semibold">Sr No.</th>
                <th className="px-4 py-2 font-semibold">Channels</th>
                <th className="px-4 py-2 font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">Website</td>
                <td className="px-4 py-2">
                  <a
                    href="https://PeUnique.in/support/"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    https://PeUnique.in/support/
                  </a>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">Email</td>
                <td className="px-4 py-2">
                  <a
                    href="mailto:support@PeUnique.in"
                    className="text-blue-500 underline"
                  >
                    support@PeUnique.in
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">3</td>
                <td className="px-4 py-2">Landline</td>
                <td className="px-4 py-2">
                  +91 – 11- 41733223, 42548401
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h6 className="text-xl font-semibold text-tertiary-color mt-8 mb-4">
          Redressal Mechanism for Grievances
        </h6>

        <h6 className="text-lg font-semibold mt-12 mb-4">Level 1</h6>
        <ul className="list-disc list-inside mb-6">
          <li>Online queries via email/Landline/website ticketing.</li>
          <li>
            <strong>First response time:</strong> 4 working days.
          </li>
          <li>
            <strong>Resolution Time:</strong> PeUnique’s internal resolution
            time – 4 working days (excluding customer’s time to provide
            documentation).
          </li>
          <li>
            If additional time is required, PeUnique will notify the customer.
          </li>
        </ul>

        <h6 className="text-lg font-semibold mt-12 mb-4">Level 2 (Escalation)</h6>
        <p className="mb-6">
          If no response or unsatisfactory response is received at Level 1, the
          customer can escalate their grievance:
        </p>
        <p className="mb-6">
          <strong>Grievance Officer:</strong>
          <br />
          Nadeem Jairajpuri,
          <br />
          SRS Live Technologies Private Limited,
          <br />
          Delhi Office: E-1/B-1, 1st Floor, Mohan Cooperative Industrial Area,
          Mathura Road, New Delhi, 110044
          <br />
          Email:{" "}
          <a
            href="mailto:grievances@PeUnique.in"
            className="text-blue-500 underline"
          >
            grievances@PeUnique.in
          </a>
        </p>

        <h6 className="text-lg font-semibold mt-12 mb-4">Level 3 (Complaints)</h6>
        <p>
          If unresolved, customers can contact the Nodal Officer:
        </p>
        <p>
          <strong>Nodal Officer:</strong>
          <br />
          Rajiv Moti,
          <br />
          SRS Live Technologies Private Limited,
          <br />
          Delhi Office: E-1/B-1, 1st Floor, Mohan Cooperative Industrial Area,
          Mathura Road, New Delhi, 110044
          <br />
          Email:{" "}
          <a
            href="mailto:nodalofficer@srslive.in"
            className="text-blue-500 underline"
          >
            nodalofficer@srslive.in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Grievance;
