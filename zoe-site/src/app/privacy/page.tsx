'use client'

export default function PrivacyPolicyPage() {
  return (
    <main className="relative isolate py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(106,226,255,0.12),transparent_70%)]" aria-hidden="true" />
      <div className="container prose prose-invert max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        <p>
          ZOE Diagnostics (&ldquo;ZOE&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy describes how we collect,
          use, and safeguard information when you interact with our website, diagnostics, and related services (collectively, the &ldquo;Services&rdquo;).
        </p>
        <h2>Information We Collect</h2>
        <ul>
          <li>Contact details (such as name, email, company, and role) when you request a diagnostic or meeting.</li>
          <li>Diagnostic materials voluntarily supplied by investors or operators to run assessments.</li>
          <li>Usage data (such as analytics or log information) generated when you access our website.</li>
        </ul>
        <h2>How We Use Information</h2>
        <ul>
          <li>To deliver diagnostics, workshops, and related advisory services.</li>
          <li>To respond to inquiries, schedule meetings, and provide support.</li>
          <li>To improve, secure, and monitor the performance of our Services.</li>
          <li>To comply with legal obligations or enforce agreements.</li>
        </ul>
        <h2>How We Share Information</h2>
        <p>
          We do not sell your information. We may share limited data with trusted service providers who perform work on our behalf (for example, hosting and
          analytics). All vendors are bound by confidentiality obligations. We may also disclose information if required by law or to protect our rights.
        </p>
        <h2>Security</h2>
        <p>
          We implement technical and organizational measures designed to protect the information we process. No method of transmission or storage is fully
          secure, so we encourage you to share only what is necessary to run the diagnostic.
        </p>
        <h2>Retention</h2>
        <p>
          We retain diagnostic materials only for as long as needed to deliver the engagement and comply with legal or contractual requirements. Upon request,
          we will delete or return submitted data.
        </p>
        <h2>Your Choices</h2>
        <p>
          You may request access, correction, or deletion of your information by contacting us at{' '}
          <a href="mailto:privacy@zoe.ai" className="text-cyan">
            privacy@zoe.ai
          </a>
          . We will respond in accordance with applicable laws.
        </p>
        <h2>International Users</h2>
        <p>
          If you access our Services from outside the United States, you understand that your information may be processed in the United States or other
          jurisdictions where we or our vendors operate.
        </p>
        <h2>Updates</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above. Continued use of the Services
          constitutes acceptance of the updated policy.
        </p>
        <h2>Contact</h2>
        <p>
          If you have questions about this Privacy Policy or our data practices, email{' '}
          <a href="mailto:privacy@zoe.ai" className="text-cyan">
            privacy@zoe.ai
          </a>
          .
        </p>
      </div>
    </main>
  )
}
