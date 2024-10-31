"use client";
import React from "react";

function RefundPolicyPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Refund Policy</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Refund & Cancellation Policy
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl text-gray-600 px-6 leading-7 text-lg">
        <p className="mt-6">
          This cancellation policy outlines how you can cancel or seek a refund for a service purchased through Tezcode.tech. 
          Please read it carefully to understand your rights and obligations regarding cancellations and refunds.
        </p>

        <h3 className="text-2xl font-semibold mt-8 text-gray-900">Cancellation Policy</h3>
        <p className="mt-4">
          Cancellations will only be considered if the request is made within <span className="font-semibold">3 days</span> of placing the order. 
          As this is a digital SaaS product, once the service is active and delivered, cancellations may not be possible. 
          However, you may contact our customer service for further assistance.
        </p>

        <h3 className="text-2xl font-semibold mt-8 text-gray-900">Damaged or Defective Services</h3>
        <p className="mt-4">
          If you encounter issues with the service that do not meet expectations, please contact our customer service team within 
          <span className="font-semibold">5 days</span> of using the service. The request will be reviewed by our team to determine the next steps.
        </p>

        <h3 className="text-2xl font-semibold mt-8 text-gray-900">Refund Policy</h3>
        <p className="mt-4">
          Approved refunds will be processed within <span className="font-semibold">3-4 business days</span> and will be credited back to the original payment method. 
          Once processed, you will receive an email confirmation of the refund.
        </p>

        <h3 className="text-2xl font-semibold mt-8 text-gray-900">Customer Service</h3>
        <p className="mt-4">
          For any questions or further clarification regarding our cancellation and refund policy, please reach out to our customer service team via the contact 
          information available on Tezcode.tech.
        </p>
      </div>
    </div>
  );
}

export default RefundPolicyPage;

