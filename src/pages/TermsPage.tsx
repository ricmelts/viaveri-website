import React from 'react';
import Container from '../components/ui/Container';

export default function TermsPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last Updated: February 10, 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-600 mb-4">
              These Terms of Service ("Terms") govern your access to and use of ViaVeri's website, products,
              and services (collectively, the "Services"), including ViaLearn, ViaRAG, and ViaStaff.
              By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="text-gray-600 mb-4">
              If you do not agree to these Terms, you may not access or use our Services. If you are using
              the Services on behalf of an organization, you represent and warrant that you have the authority
              to bind that organization to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-gray-600 mb-4">
              You must be at least 18 years old to use our Services. If you are under 18, you may only use
              our Services with the consent and supervision of a parent or legal guardian. By using our Services,
              you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration and Security</h2>
            <p className="text-gray-600 mb-4">
              To access certain features of our Services, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
            <p className="text-gray-600 mb-4">
              You may not share your account credentials, transfer your account to another person, or
              create multiple accounts without our permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree to use our Services only for lawful purposes and in accordance with these Terms.
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Use the Services for any illegal, harmful, or fraudulent purpose</li>
              <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
              <li>Attempt to gain unauthorized access to any portion of the Services or other systems</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Harvest or collect information about users without their consent</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Use automated systems (bots, scrapers) without our prior written consent</li>
              <li>Reverse engineer, decompile, or disassemble any aspect of the Services</li>
              <li>Remove or alter any proprietary notices or labels</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.1 Your Content</h3>
            <p className="text-gray-600 mb-4">
              You retain ownership of any content you submit, upload, or store through our Services ("User Content").
              By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use,
              reproduce, modify, and display your User Content solely for the purpose of providing and improving
              our Services.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.2 Responsibility for Content</h3>
            <p className="text-gray-600 mb-4">
              You are solely responsible for your User Content and the consequences of posting it. You represent
              and warrant that you own or have the necessary rights to submit your User Content and that it does
              not violate any laws or third-party rights.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">5.3 Content Monitoring</h3>
            <p className="text-gray-600 mb-4">
              We reserve the right (but have no obligation) to monitor, review, or remove User Content that
              violates these Terms or is otherwise objectionable, without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-4">
              The Services and all content, features, and functionality (including but not limited to software,
              text, graphics, logos, and designs) are owned by ViaVeri or its licensors and are protected by
              copyright, trademark, patent, and other intellectual property laws.
            </p>
            <p className="text-gray-600 mb-4">
              You may not copy, modify, distribute, sell, or lease any part of our Services without our
              express written permission. Unauthorized use of our intellectual property may violate copyright,
              trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Payment Terms</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.1 Fees</h3>
            <p className="text-gray-600 mb-4">
              Certain features of our Services may require payment of fees. You agree to pay all applicable fees
              as described at the time of purchase. All fees are non-refundable unless otherwise stated or
              required by law.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.2 Billing</h3>
            <p className="text-gray-600 mb-4">
              For subscription services, you authorize us to charge your payment method on a recurring basis.
              You are responsible for keeping your payment information current and accurate.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">7.3 Price Changes</h3>
            <p className="text-gray-600 mb-4">
              We reserve the right to change our fees at any time. We will provide you with reasonable notice
              of any fee changes, and you will have the opportunity to cancel your subscription before the
              new fees take effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Service Availability and Modifications</h2>
            <p className="text-gray-600 mb-4">
              We strive to provide reliable Services, but we do not guarantee that the Services will be
              uninterrupted, secure, or error-free. We may modify, suspend, or discontinue any aspect of
              the Services at any time without liability.
            </p>
            <p className="text-gray-600 mb-4">
              We may perform scheduled or emergency maintenance that temporarily interrupts access to the Services.
              We will make reasonable efforts to notify you of any significant service disruptions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services and Links</h2>
            <p className="text-gray-600 mb-4">
              Our Services may contain links to third-party websites, applications, or services that are not
              owned or controlled by ViaVeri. We are not responsible for the content, privacy policies, or
              practices of any third-party services. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">10.1 Termination by You</h3>
            <p className="text-gray-600 mb-4">
              You may terminate your account at any time by contacting us or using the account closure
              feature in your account settings.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">10.2 Termination by Us</h3>
            <p className="text-gray-600 mb-4">
              We may suspend or terminate your access to the Services at any time, with or without cause,
              with or without notice, including if we believe you have violated these Terms. Upon termination,
              your right to use the Services will immediately cease.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">10.3 Effect of Termination</h3>
            <p className="text-gray-600 mb-4">
              Upon termination, we may delete your account and User Content. We are not obligated to retain
              or provide you with copies of your User Content after termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Disclaimers</h2>
            <p className="text-gray-600 mb-4 uppercase font-semibold">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER
              EXPRESS OR IMPLIED.
            </p>
            <p className="text-gray-600 mb-4">
              To the fullest extent permitted by law, ViaVeri disclaims all warranties, express or implied,
              including but not limited to implied warranties of merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>The Services will meet your requirements or expectations</li>
              <li>The Services will be uninterrupted, timely, secure, or error-free</li>
              <li>The results obtained from using the Services will be accurate or reliable</li>
              <li>Any errors in the Services will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
            <p className="text-gray-600 mb-4 uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIAVERI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>
            <p className="text-gray-600 mb-4">
              Our total liability to you for any claims arising from or related to these Terms or the Services
              shall not exceed the greater of (a) the amount you paid us in the 12 months preceding the claim,
              or (b) $100.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
            <p className="text-gray-600 mb-4">
              You agree to indemnify, defend, and hold harmless ViaVeri and its officers, directors, employees,
              and agents from any claims, liabilities, damages, losses, and expenses (including reasonable
              attorneys' fees) arising from:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your User Content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">14.1 Informal Resolution</h3>
            <p className="text-gray-600 mb-4">
              Before filing a formal claim, you agree to contact us and attempt to resolve any dispute informally.
              Contact us at <a href="mailto:legal@viaveri.co" className="text-viapurple-600 hover:underline">legal@viaveri.co</a> to
              initiate the informal dispute resolution process.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">14.2 Arbitration</h3>
            <p className="text-gray-600 mb-4">
              If we cannot resolve the dispute informally, any dispute arising from these Terms or the Services
              shall be resolved through binding arbitration in accordance with the rules of the American Arbitration
              Association, rather than in court, except that you may assert claims in small claims court if your
              claims qualify.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">14.3 Class Action Waiver</h3>
            <p className="text-gray-600 mb-4">
              You agree that any arbitration or proceeding shall be conducted on an individual basis and not as
              a class action, consolidated action, or representative action. You waive your right to participate
              in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Governing Law and Jurisdiction</h2>
            <p className="text-gray-600 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Michigan, United States, without regard to its conflict of law provisions. Any legal action
              or proceeding arising under these Terms will be brought exclusively in the courts located in
              Michigan, and you hereby consent to personal jurisdiction in such courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Changes to These Terms</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of material changes
              by posting the updated Terms on our website with a new "Last Updated" date. Your continued use
              of the Services after such changes constitutes your acceptance of the modified Terms.
            </p>
            <p className="text-gray-600 mb-4">
              If you do not agree to the modified Terms, you must stop using the Services and terminate your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. General Provisions</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4">17.1 Entire Agreement</h3>
            <p className="text-gray-600 mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and
              ViaVeri regarding the Services and supersede all prior agreements.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">17.2 Severability</h3>
            <p className="text-gray-600 mb-4">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
              will remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">17.3 Waiver</h3>
            <p className="text-gray-600 mb-4">
              Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such
              right or provision.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4">17.4 Assignment</h3>
            <p className="text-gray-600 mb-4">
              You may not assign or transfer these Terms or your rights under these Terms without our prior
              written consent. We may assign these Terms without restriction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold mb-2">ViaVeri</p>
              <p className="text-gray-600">Legal Inquiries: <a href="mailto:legal@viaveri.co" className="text-viapurple-600 hover:underline">legal@viaveri.co</a></p>
              <p className="text-gray-600">General Inquiries: <a href="mailto:info@viaveri.co" className="text-viapurple-600 hover:underline">info@viaveri.co</a></p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
}