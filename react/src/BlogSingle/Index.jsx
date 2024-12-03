import React from 'react';

const Index = () => {
  return (
    <div className="py-10 px-5 md:px-20 lg:px-32">
      {/* Section 1: Title and description */}
      <div className="text-left mb-10">
        <h1 className="text-3xl font-bold mb-4">Best Business Consulting Services</h1>
        <p className="text-gray-600 leading-relaxed">
          Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
        </p>
      </div>

      {/* Larger Image in the middle */}
      <div className="flex justify-center mb-10">
        <img src='/public/Images/C1.png' alt="Business Consultation" className="rounded-md shadow-md object-cover w-full max-w-4xl" />
      </div>

      {/* Section 2: Text and bullet points */}
      <div className="text-left">
        <h2 className="text-2xl font-bold mb-4">The Digital Assets For All</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Appropriately empower dynamic leadership skills after business portals. Globally my carminate interactive supply chains with distinctive quality vectors global sources services. Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Dynamically target high-payoff intellectual capital for customized</li>
          <li>Interactively procrastinate high-payoff content</li>
          <li>Credibly reintermediate backend ideas for cross-platform models</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
