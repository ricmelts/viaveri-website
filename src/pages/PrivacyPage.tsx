import React from 'react';
import Container from '../components/ui/Container';

export default function PrivacyPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last Updated: February 10, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              ViaVeri ("we," "us," or "our") respects your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website or use our services, including ViaLearn, ViaRAG, and ViaStaff.
            </p>
            <p className="text-gray-600 mb-4">
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that
              you have read, understood, and agree to be bound by the terms of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">1.1 Personal Information You Provide</h3>
            <p className="text-gray-600 mb-3">We collect information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name, email address, and contact information when you create an account or contact us</li>
              <li>Payment and billing information when you purchase our services</li>
              <li>Content you upload, submit, or store through our services</li>
              <li>Communications with us, including customer support inquiries</li>
              <li>Educational information (for ViaLearn users, such as course enrollment and academic progress)</li>
              <li>Business information (for ViaStaff users)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">1.2 Information Collected Automatically</h3>
            <p className="text-gray-600 mb-3">When you access our services, we automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Device information (IP address, browser type, operating system, device identifiers)</li>
              <li>Usage data (pages viewed, features used, time spent, click patterns)</li>
              <li>Location information (general geographic location based on IP address)</li>
              <li>Cookies and similar tracking technologies (see our Cookie Policy below)</li>
              <li>Log data (server logs, error reports, system activity)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4">1.3 Information from Third Parties</h3>
            <p className="text-gray-600 mb-4">
              We may receive information about you from third-party services you connect to our platform,
              such as authentication providers, payment processors, and analytics services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information (confirmations, invoices, support messages)</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Send technical notices, updates, security alerts, and administrative messages</li>
              <li>Communicate about products, services, offers, and events we think may interest you</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve your experience with our services</li>
              <li>Develop new products, services, and features</li>
              <li>Comply with legal obligations and enforce our terms and policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
            <p className="text-gray-600 mb-3">We may share your information in the following circumstances:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (hosting, analytics, payment processing, customer support)</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, reorganization, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process, protect rights, or ensure safety</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated data that cannot identify you</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer
              need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. These measures include encryption,
              secure servers, access controls, and regular security assessments.
            </p>
            <p className="text-gray-600 mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we
              strive to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-600 mb-3">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to our processing of your personal information</li>
              <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent where we rely on consent to process your information</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@viaveri.co" className="text-viapurple-600 hover:underline">privacy@viaveri.co</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-600 mb-4">
              We use cookies and similar tracking technologies to collect information about your browsing activities.
              Cookies are small data files stored on your device. You can control cookies through your browser settings,
              but disabling cookies may limit your ability to use certain features of our services.
            </p>
            <p className="text-gray-600 mb-3">We use the following types of cookies:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Necessary for the operation of our services</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our services</li>
              <li><strong>Functionality Cookies:</strong> Remember your preferences and personalize your experience</li>
              <li><strong>Marketing Cookies:</strong> Track your activity to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links and Services</h2>
            <p className="text-gray-600 mb-4">
              Our services may contain links to third-party websites or services that are not operated by us.
              We are not responsible for the privacy practices of these third parties. We encourage you to review
              their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-4">
              Our services are not directed to children under the age of 13 (or 16 in certain jurisdictions).
              We do not knowingly collect personal information from children. If you believe we have collected
              information from a child, please contact us immediately, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. International Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              Your information may be transferred to and processed in countries other than your country of residence.
              These countries may have different data protection laws. When we transfer your information, we take
              appropriate safeguards to ensure your information remains protected in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
              We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated"
              date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">ViaVeri</p>
              <p className="text-gray-600">Email: <a href="mailto:privacy@viaveri.co" className="text-viapurple-600 hover:underline">privacy@viaveri.co</a></p>
              <p className="text-gray-600">General Inquiries: <a href="mailto:info@viaveri.co" className="text-viapurple-600 hover:underline">info@viaveri.co</a></p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}