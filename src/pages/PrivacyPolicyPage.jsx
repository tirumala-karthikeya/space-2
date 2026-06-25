import { Link } from "react-router-dom";
import styles from "./LegalPage.module.css";

const sections = [
  {
    title: "Introduction",
    paragraphs: [
      `BrainWave World Inc. (collectively referred to in this policy as "we," "us," or "our") is committed to protecting the privacy of every individual or businesses who uses our platform and services. Our platform is designed to help users manage rent, bill payments, and earn rewards on everyday expenses. This Privacy Policy ("Policy") outlines the types of information we collect from individuals or businesses who use our website and related online services ("Users"), how that information is used, and how it is protected.`,
      `This Policy does not govern information you submit directly to third-party platforms or services you may access through our website. Please read this Policy carefully alongside our Terms of Use, which are incorporated herein by reference.`,
    ],
  },
  {
    title: "Scope of This Policy",
    paragraphs: [`This Policy covers the following:`],
    list: [
      `The personal data we collect whether provided by you directly, gathered automatically, or received from third parties; the reasons we collect and process that information; and the legal basis on which we do so when you visit our website at www.brainwaveworld.com or use any of our associated services.`,
      `Throughout this Policy, "personal data" or "personal information" refers to any information that identifies or could reasonably be used to identify a specific individual.`,
      `Your continued use of our website and services indicates your acceptance of this Policy. Any disputes regarding privacy are subject to both this Policy and our applicable Terms of Use, including any limitations on liability and mechanisms for dispute resolution outlined therein.`,
    ],
  },
  {
    title: "Types of Information We Gather",
    paragraphs: [`We gather two categories of data from Users: personal information and general usage data.`],
    list: [
      `"Personal Information" is any information that has been provided to us, or generated through interaction with our platform, that directly identifies or could be linked to a specific individual such as a name, email address, or financial account details.`,
      `"General Usage Data" refers to information that does not on its own identify a specific person. Where we combine usage data with personal information, the combined dataset is treated as personal information.`,
      `We may also combine data we hold about you with information gathered through other points of contact such as emails, customer service interactions, or feedback you provide. In those cases, the combined information is handled as personal information.`,
    ],
    afterList: [`The specific categories of personal information we may collect include the following.`],
    secondList: [
      `Identity and Contact Details: Full name, email address, phone number, billing and mailing address, date of birth, IP address, national identification numbers, and identity documents including government-issued photo identification.`,
      `Financial and Transaction Details: Bank account and credit account information, as well as details of any transactions conducted through our platform.`,
      `Professional Background Information: Where applicable, name and contact details, professional credentials, work and educational history, salary information, evaluations, references, interview records, certifications, disciplinary history, and similar information typically found in a resume or employment application.`,
      `Platform and Device Activity: Data collected via cookies and other tracking technologies, including browsing behavior on our platform, as described in further detail below.`,
      `Voluntary Submissions: Any additional information you choose to share with us, including through email correspondence or other direct communications.`,
    ],
  },
  {
    title: "How Your Information Is Collected",
    paragraphs: [
      `We collect personal data through three primary channels: directly from you when you use our services, automatically through your interactions with our platform, and from third-party sources where applicable.`,
      `Automatic collection occurs through our platform and the tools we use to operate it. This may include your IP address, domain name, internet service provider, date and time of your visit, session activity such as pages viewed and files downloaded, the URLs of websites you navigated from or to, your browser and operating system type, hardware and software attributes, search terms used, and your approximate geographic location.`,
      `We and our third-party service providers use the following technologies to collect this information automatically.`,
      `Server Logs: Each time you access our platform, our servers automatically record technical information about your device and session, which we use for security, diagnostics, and service improvement purposes.`,
      `Cookies: Cookies are small files placed on your device by your browser. They allow our platform to recognize returning visitors and store preferences between sessions. You may configure your browser to refuse cookies or to notify you when a cookie is being set. Note that disabling cookies may affect the functionality of certain features. You may also delete cookies from your device at any time through your browser settings.`,
      `Third-Party Tracking Tools: We may work with third-party providers who use tracking technologies including tags, scripts, software development kits (SDKs), or server-to-server connections to collect and analyze usage data on our behalf.`,
    ],
  },
  {
    title: "Why We Collect and How We Use Your Information",
    paragraphs: [
      `We collect and use your personal information for the following purposes:`,
      `Account Creation and Management: To access certain features of our platform, you will be required to register an account by providing an email address and password, or by signing in through a linked third-party account. Your login information is used to create and maintain your account and to deliver the services you have requested.`,
      `Service Delivery and Administration: To provide, manage, and improve our services, process your requests, administer your account, and fulfill any agreements you have entered into with us.`,
      `Payment and Transaction Processing: To facilitate financial transactions on your behalf, which may involve securely sharing relevant data with banks, payment processors, or other financial service providers.`,
      `Customer Support and Live Chat: We provide online support through third-party tools that enable real-time communication between you and our team. These tools may collect information such as your name, email address, phone number, and IP address, as well as usage activity on pages where the tools are active. Support interactions, including live chat conversations, may be logged for quality assurance and training purposes. By using our support features, you consent to this collection and use of your information. You are solely responsible for the content you share during support interactions.`,
      `Responding to Enquiries and Complaints: When you contact us with a question, comment, or complaint, we may collect identifying information to verify your identity and respond effectively. We retain this information to assist you in the future and to help us improve our services.`,
      `Third-Party Data Exchange: We may share relevant information with our trusted third-party partners to facilitate the delivery of our services. We are not responsible for the privacy practices of third-party services you may interact with through our platform.`,
      `Payment Information: Where required for transaction processing, we collect payment details such as credit card information. This data is handled by our third-party payment processors, and we do not store full credit card numbers or sensitive payment credentials on our own servers. We encourage you to review the privacy policies of our payment partners.`,
      `Marketing and Promotional Communications: Where you have opted in, we may use your contact information to send you emails, SMS messages, or other communications containing updates, tips, or promotional content. You may withdraw your consent and opt out at any time by using the unsubscribe link in any marketing communication or by contacting us directly. Please note that transactional and account-related communications are separate from marketing messages and will continue regardless of your marketing preferences.`,
    ],
  },
  {
    title: "When and With Whom We Share Your Data",
    paragraphs: [
      `We do not sell your personal information. We may, however, share your data with the following categories of recipients for the purposes described in this Policy.`,
      `Third-Party Service Providers: We engage external providers to assist in delivering and maintaining our services. These may include payment processors, cloud infrastructure providers, analytics platforms, customer support tools, and other technology vendors. These providers are authorized to use your information only as necessary to perform their designated functions on our behalf.`,
      `Corporate Affiliates: We may share information within our group of affiliated companies for purposes consistent with this Policy.`,
      `Research and Development Partners: We may use your data internally or share it with trusted third parties to support research, product development, and service improvements. Non-identifying or aggregated data may be used for the same purpose without restriction.`,
      `Third-Party Integrations and Plugins: Our platform may incorporate third-party widgets, plugins, or integrations. These components may independently collect data such as your IP address or page activity, and may set or access cookies. Each such integration is governed by its own privacy policy.`,
      `Legal and Regulatory Requirements: We may disclose your information when required to do so by law, court order, or government authority, or when we reasonably believe disclosure is necessary to protect the rights, safety, or property of our users or the public. Where permitted by law, we will notify the affected user in such circumstances.`,
      `Business Transfers: In the event of a merger, acquisition, restructuring, or sale of assets, your personal information may be transferred to the acquiring entity as part of that transaction, subject to applicable privacy law.`,
      `Aggregated or De-Identified Data: We may publish or share summary or anonymized data about our user base, such as platform usage trends, in a form that cannot be used to identify any individual.`,
      `If you have previously opted in to marketing communications and wish to withdraw your consent, please contact us through the channels listed in the final section of this Policy or use the unsubscribe function included in our marketing emails.`,
    ],
  },
  {
    title: "Where Your Data Is Stored",
    paragraphs: [
      `All personal information is stored on the servers of our cloud service providers. We take reasonable steps to ensure these providers maintain appropriate security standards. Our service providers' servers are predominantly located in Canada and the United States. Some providers may also operate in other jurisdictions outside of your home country.`,
      `While we take appropriate measures to safeguard your data in transit and at rest, laws governing data privacy in other jurisdictions may differ from those in your own country, and local authorities may have the right to access your data under their applicable laws.`,
      `Where you have been issued a password to access your account, you are responsible for maintaining the confidentiality of that password. We ask that you do not share it with anyone.`,
    ],
  },
  {
    title: "Our Approach to Data Security",
    paragraphs: [
      `Protecting your personal information is a priority for us. We have put in place commercially reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, or disclosure of data under our care.`,
      `However, no method of transmitting or storing data over the internet can be guaranteed as fully secure. While we make every effort to protect your information, any data you transmit to our platform is done so at your own risk. Once we receive your data, we apply rigorous procedures and security features to prevent unauthorized access.`,
    ],
  },
  {
    title: "Your Data Rights and Choices",
    paragraphs: [
      `Subject to applicable privacy law in your jurisdiction, you may have the following rights with respect to your personal information.`,
      `You have the right to be informed about how your data is collected and used; to access a copy of the personal information we hold about you; to request corrections to inaccurate or incomplete data; to request the deletion of your personal data; to restrict or object to certain forms of processing; to receive your data in a portable, machine-readable format; to withdraw consent at any time where our processing is based on consent; and to lodge a complaint with a relevant data protection authority.`,
      `To exercise any of these rights, you may log into your account and update your information directly through your profile settings, or contact us using the details provided at the end of this Policy. We may request that you verify your identity before fulfilling your request. We aim to respond to all requests within 10 to 15 business days.`,
      `We are not responsible for the data handling practices of our third-party service providers. Where your request relates to data processed by a third party on our behalf, we will communicate with that provider to the extent permitted by law and keep you informed of the status of your request.`,
    ],
  },
  {
    title: "External Links and Third-Party Platforms",
    paragraphs: [
      `Our website may contain links to third-party websites and platforms that we do not own or operate. We provide these links for your convenience only; they do not constitute an endorsement of or referral to those sites. Each linked site maintains its own independent privacy practices, which we encourage you to review. We have no control over and accept no responsibility for how third parties collect, use, or disclose your personal information.`,
      `We may also offer you the ability to engage with our content via third-party social media platforms and integrations. When you do so, you may grant us access to certain information associated with your social media profile, which may be used to personalize your experience on our platform.`,
    ],
  },
  {
    title: "Analytics Tools We Use",
    paragraphs: [
      `We use web analytics services including but not limited to Google Analytics, Zoho tools and similar platforms to analyze how visitors interact with our website.`,
      `These tools may use cookies and similar technologies to collect standard technical data such as IP addresses, page visits, and session duration. The data collected is used to evaluate website performance, generate activity reports, and improve the user experience.`,
      `You may opt out of Google Analytics data collection by installing the browser opt-out add-on available at https://tools.google.com/dlpage/gaoptout. Further information about Google's data practices is available at https://policies.google.com/technologies/partner-sites.`,
    ],
  },
  {
    title: "Online Advertising and Remarketing",
    paragraphs: [
      `We work with third-party advertising networks and marketing services to display relevant advertisements on our website and on other platforms. These providers may use cookies, web beacons, JavaScript, and similar tracking technologies to serve personalized ads based on your browsing activity. Their use of tracking technologies is governed by their own privacy policies, not this one. We may share aggregated or non-identifying information about website visitors and users with these advertising partners to help evaluate the effectiveness of our campaigns.`,
    ],
  },
  {
    title: "How Long We Retain Your Data",
    paragraphs: [
      `We retain personal information for as long as it is necessary to fulfill the purposes for which it was collected, or as required or permitted by applicable law or contractual obligation, which may extend beyond the end of your relationship with us.`,
      `In general, personal information is retained for your active engagement with our services and for a period of up to one year following our last meaningful contact with you. Retention beyond this period may be necessary for legitimate business purposes such as auditing and account recovery; compliance with applicable federal, provincial, or other laws; fraud prevention; or fulfillment of contractual obligations with partners. All retained personal data is handled in accordance with this Policy.`,
      `If you request the removal of your personal data from our records, it may not be technically possible to delete every instance of that information due to backup systems or legal requirements. In such cases, we will take all reasonable steps to anonymize securely or de-identify the data so that it can no longer be linked back to you.`,
    ],
  },
  {
    title: "Protection of Minors",
    paragraphs: [
      `Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are under 16, please do not use our services. We encourage parents and guardians to monitor their children's use of online services and to help enforce this restriction.`,
      `If you have reason to believe that a child under the age of 16 has submitted personal information to us, please contact us immediately. We will take prompt steps to remove that information from our records.`,
    ],
  },
  {
    title: "Applicable Law and Jurisdiction",
    paragraphs: [
      `We have taken commercially reasonable steps to ensure that our data handling practices comply with applicable privacy legislation, including the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada, and any other relevant laws in the jurisdictions where we operate. We leverage appropriate technical safeguards, including encryption and security features embedded within our third-party service providers, to protect your data.`,
      `From time to time, your personal information may be accessed by authorized personnel or service providers operating in other countries. We implement contractual and technical measures to ensure compliance with applicable law in those circumstances.`,
      `All matters relating to the interpretation, application, and enforcement of this Privacy Policy shall be governed by the laws of the Province and the federal laws of Canada applicable therein, unless otherwise required by the laws of your jurisdiction.`,
      `To exercise any of your privacy rights under applicable law, please contact us at support@brainwaveworld.com.`,
    ],
  },
  {
    title: "Updates to This Policy",
    paragraphs: [
      `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or service offerings. Any material updates will be posted on our website, and where appropriate, we will notify you by email. We encourage you to review this page periodically to stay informed.`,
      `We will not materially reduce your rights under this Policy without clearly communicating those changes to you in advance.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Link to="/" className={styles.backButton}>
          ← Back to Home
        </Link>

        <div className={styles.heroInner}>
          <p className={styles.badge}>Legal</p>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last Updated: June 23, 2026</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          {sections.map((section) => (
            <section className={styles.policySection} key={section.title}>
              <h2>{section.title}</h2>

              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {section.list && (
                <ul className={styles.policyList}>
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {section.afterList &&
                section.afterList.map((paragraph, index) => (
                  <p key={`after-${index}`}>{paragraph}</p>
                ))}

              {section.secondList && (
                <ul className={styles.policyList}>
                  {section.secondList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className={styles.contactBox}>
            <h2>How to Reach Us</h2>

            <p>
              If you have questions, concerns, or requests related to your personal information or this Policy, we invite you to get in touch with us. You may update your personal information at any time by logging into your account or by contacting us directly using the details below.
            </p>
            <p>
              Please reach out if you have questions or comments about this Policy; if you wish to access, correct, or delete your personal information and are unable to do so through your account settings; or if you have a concern about how we or any of our service providers handle your data.
            </p>
            <p>You may contact us by email at:</p>

            <div className={styles.contactMethods}>
              <a href="mailto:support@brainwaveworld.com" className={styles.contactLink}>
                support@brainwaveworld.com
              </a>
              <span className={styles.orSep}>(or)</span>
              <Link to="/raise-complaint" className={styles.contactLink}>
                Request Form
              </Link>
              <span className={styles.orSep}>(or)</span>
              <a href="tel:+16047205021" className={styles.contactLink}>
                +1 604 720 5021
              </a>
            </div>

            <p className={styles.address}>
              BrainWave World Inc, 1708-60 Absolute Mississauga, ON, L4Z 0A9 Canada
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
