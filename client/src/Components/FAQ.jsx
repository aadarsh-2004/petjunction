import React from 'react';

const FAQ = () => {
  return (
    <div className="max-w-4xl mt-24 mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-cyan-700">Frequently Asked Questions</h1>
        <p className="text-gray-600">Find answers to common questions about Pet Junction</p>
      </div>

      <div className="space-y-4">
        {/* FAQ Item 1 */}
        <details className="group bg-white shadow-lg rounded-lg p-4">
          <summary className="text-lg font-semibold cursor-pointer list-none flex justify-between items-center">
            What services does Pet Junction offer?
            <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="text-gray-700 mt-2">
            Pet Junction offers pet adoption services, veterinary consultations, grooming services,
            pet supplies, and educational resources for pet owners. We also provide ongoing support
            for all our adopted pets and their families.
          </p>
        </details>

        {/* FAQ Item 2 */}
        <details className="group bg-white shadow-lg rounded-lg p-4">
          <summary className="text-lg font-semibold cursor-pointer list-none flex justify-between items-center">
            How does the adoption process work?
            <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="text-gray-700 mt-2">
            Our adoption process involves filling out an application, a home visit, meeting the pet,
            and a consultation with our pet specialists. We ensure both the pet and family are a perfect
            match before finalizing the adoption.
          </p>
        </details>

        {/* FAQ Item 3 */}
        <details className="group bg-white shadow-lg rounded-lg p-4">
          <summary className="text-lg font-semibold cursor-pointer list-none flex justify-between items-center">
            What support do you offer after adoption?
            <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="text-gray-700 mt-2">
            We provide post-adoption support including veterinary consultations, behavior training
            advice, and regular check-ins. Our team is always available to answer questions and
            provide guidance for new pet parents.
          </p>
        </details>

        {/* FAQ Item 4 */}
        <details className="group bg-white shadow-lg rounded-lg p-4">
          <summary className="text-lg font-semibold cursor-pointer list-none flex justify-between items-center">
            Do you offer emergency veterinary services?
            <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="text-gray-500 mt-2">
            Yes, we have a 24/7 emergency veterinary helpline for urgent situations. For serious
            cases, we can refer you to our network of emergency animal hospitals in your area.
          </p>
        </details>

        {/* FAQ Item 5 */}
        <details className="group bg-white shadow-lg rounded-lg p-4">
          <summary className="text-lg font-semibold cursor-pointer list-none flex justify-between items-center">
            What are your business hours?
            <span className="text-red-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="text-gray-500 mt-2">
            We are open Monday through Friday from 9 AM to 7 PM, and weekends from 10 AM to 5 PM.
            Our emergency services are available 24/7 for urgent situations.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQ;