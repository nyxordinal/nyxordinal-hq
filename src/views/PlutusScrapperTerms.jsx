import React from 'react';
import { Link } from 'react-router-dom';

const PlutusScrapperTerms = () => (
  <section className="section plutus-scrapper-page">
    <div className="container-sm">
      <div className="section-inner">
        <p className="text-xxs text-color-primary fw-600 tt-u mb-8">Nyxordinal · Plutus Scrapper</p>
        <h1 className="mt-0 mb-8">Terms of service</h1>
        <p className="plutus-scrapper-muted">Last updated: November 8, 2026</p>

        <h2>About the tool</h2>
        <p>Plutus Scrapper is free software that helps import transaction details from supported Gmail notifications into a Plutus backend. You may use and run it in accordance with the license included with the software. These terms do not replace or change that license.</p>

        <h2>Your account and configuration</h2>
        <p>You are responsible for authorizing Gmail access, protecting your Google and backend credentials, selecting the backend URL, and ensuring you are permitted to process the emails and financial information you configure the tool to access. You are also responsible for reviewing imported records for accuracy before relying on them.</p>

        <h2>Expense information and operational metadata</h2>
        <p>The expense details extracted from a supported email are the item name, price, and date. The current software also sends the Gmail message ID, configured user ID, and expense category/type to the Plutus backend as operational fields. For messages it skips, it stores the Gmail message ID and subject in its local database so it can avoid processing them again. Therefore, it would not be accurate to say that no metadata is ever saved. See the <Link to="/plutus-scrapper/privacy">Privacy Policy</Link> for more detail about data handling.</p>

        <h2>Free availability</h2>
        <p>The tool is provided free of charge. No fee is charged by Nyxordinal for using the software. Google, hosting, email, or Plutus services that you choose to use may have their own costs and terms.</p>

        <h2>Third-party services</h2>
        <p>The software relies on services such as Google Gmail and the Plutus backend you configure. Their availability, functionality, privacy practices, and terms are controlled by their respective operators. Nyxordinal is not responsible for those third-party services or for data retained by a backend after submission.</p>

        <h2>No warranty</h2>
        <p>To the extent permitted by law, the software is provided “as is” and without warranties or guarantees of any kind. Transaction parsing and automatic category predictions can be incomplete or incorrect. Nyxordinal does not guarantee uninterrupted operation, successful delivery, or the accuracy or suitability of imported records.</p>

        <h2>Limitation of liability</h2>
        <p>To the extent permitted by law, Nyxordinal will not be liable for indirect, incidental, special, or consequential loss arising from use of the software, including inaccurate imports, missed messages, loss of data, or service interruptions. Nothing in these terms excludes liability that cannot legally be excluded.</p>

        <h2>Changes</h2>
        <p>These terms may be updated as the project changes. Continued use after an updated version is published means you accept the updated terms, to the extent permitted by applicable law.</p>

        <h2>Contact</h2>
        <p>For questions about these terms or the project, visit the <a href="https://github.com/nyxordinal">Nyxordinal GitHub page</a>.</p>
        <p><Link to="/plutus-scrapper">Back to Plutus Scrapper</Link> · <Link to="/plutus-scrapper/privacy">Privacy policy</Link></p>
      </div>
    </div>
  </section>
);

export default PlutusScrapperTerms;
