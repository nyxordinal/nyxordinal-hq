import React from 'react';
import { Link } from 'react-router-dom';

const PlutusScrapperPrivacy = () => (
  <section className="section plutus-scrapper-page">
    <div className="container-sm">
      <div className="section-inner">
        <p className="text-xxs text-color-primary fw-600 tt-u mb-8">Nyxordinal · Plutus Scrapper</p>
        <h1 className="mt-0 mb-8">Privacy policy</h1>
        <p className="plutus-scrapper-muted">Last updated: November 8, 2026</p>

        <h2>Overview</h2>
        <p>Plutus Scrapper is free software intended to help you import transaction details from supported email notifications into a Plutus account. It is designed to run under your control. Nyxordinal does not receive, sell, or use your Gmail messages or transaction details for its own benefit through this software.</p>

        <h2>Information the software accesses</h2>
        <p>When you configure and run Plutus Scrapper, it uses Google OAuth to access your Gmail account with the <code>gmail.modify</code> permission. It checks unread messages in your inbox and reads message headers and content to identify supported transaction notifications. For a recognized message, it may process the sender, subject, transaction description, amount, and transaction date.</p>
        <p>When a transaction is submitted successfully, the message is marked as read. Email messages that have no content or do not match a supported processor may have their message ID and subject recorded in the local SQLite database so they can be skipped on later runs. If the optional email-file setting is enabled, message content may also be written to local HTML files.</p>

        <h2>Where information goes</h2>
        <p>For recognized expenses, the software sends the extracted transaction date, description, amount, category, Gmail message ID, and configured user ID to the Plutus backend URL you set. That backend is responsible for handling the submitted information under its own privacy practices. Nyxordinal does not operate a separate analytics or data collection service for this tool.</p>
        <p>The software also communicates with Google to access Gmail. If email notifications are configured, it may send an authentication failure notice through the SMTP server you specify. Those services process information under their own terms and privacy policies.</p>

        <h2>Storage and security</h2>
        <p>OAuth tokens, the skipped-email database, and any optional saved email files are stored wherever you deploy the software, commonly on your own machine or server. You are responsible for restricting access to those files, protecting credentials, choosing a trusted Plutus backend, and deciding how long local records are retained. Do not publish OAuth tokens, credentials, or transaction email files.</p>

        <h2>Your choices</h2>
        <p>You can stop the software, revoke its Gmail access from your Google Account, remove its local database and saved email files, or configure a different Plutus backend. Deleting local records does not remove records already submitted to the Plutus backend; contact that backend operator for its retention or deletion options.</p>

        <h2>Children and changes</h2>
        <p>This tool is not directed to children. This policy may be updated when the software or its data handling changes. The date above indicates the latest revision published here.</p>

        <h2>Contact</h2>
        <p>For questions about this policy or the project, visit the <a href="https://github.com/nyxordinal">Nyxordinal GitHub page</a>.</p>
        <p><Link to="/plutus-scrapper">Back to Plutus Scrapper</Link> · <Link to="/plutus-scrapper/terms">Terms of service</Link></p>
      </div>
    </div>
  </section>
);

export default PlutusScrapperPrivacy;
