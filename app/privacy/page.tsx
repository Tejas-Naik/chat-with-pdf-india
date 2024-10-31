"use client";
import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl overflow-y-scroll mx-auto py-16 px-6 sm:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Privacy Policy
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900">1. Data Collection</h2>
        <p className="mt-4 text-gray-700">
          We collect minimal personal information including your name and email address. This information is used solely for business purposes, such as facilitating account management, and to contact you if needed.
        </p>
        <p className="mt-2 text-gray-700">
          Additionally, we store user-uploaded documents securely on Google Cloud Storage to allow our application to process documents safely and efficiently.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900">2. Purpose of Data Collection</h2>
        <p className="mt-4 text-gray-700">
          The information we collect, including uploaded documents, is used exclusively to provide you with the functionality of our app. We store and handle your documents to ensure they are accessible and safe within our system, backed by Google Cloud Storage.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900">3. Data Sharing</h2>
        <p className="mt-4 text-gray-700">
          We do not share your data with any third parties. All information you provide, including your documents, remains securely stored and accessible only to you through your account.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900">4. Data Retention and Deletion</h2>
        <p className="mt-4 text-gray-700">
          Users have complete control over their data. You can delete your documents and account information at any time. We do not retain data for our use beyond what is necessary to operate the app.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900">5. User Rights</h2>
        <p className="mt-4 text-gray-700">
          You have the right to view, edit, and delete your personal information and uploaded documents. We respect your privacy rights and provide tools within your account for data management.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900">6. Security Measures</h2>
        <p className="mt-4 text-gray-700">
          We prioritize the security of your data by utilizing Google Firebase for secure storage. Our platform adheres to best practices to protect your information and uploaded documents.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900">7. Policy Updates</h2>
        <p className="mt-4 text-gray-700">
          We may update this Privacy Policy from time to time. If there are significant changes, we will notify you via email. You can always refer to this page for the latest updates.
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;

