import React from 'react';
import { Link } from 'react-router-dom';

const PlutusScrapper = () => (
  <section className="section plutus-scrapper-page">
    <div className="container-sm">
      <div className="section-inner">
        <p className="text-xxs text-color-primary fw-600 tt-u mb-8">Nyxordinal · Free tool</p>
        <h1 className="mt-0 mb-16">Plutus Scrapper</h1>
        <p className="plutus-scrapper-lead">
          A self-hosted tool that turns supported bank and service transaction emails into expense records in your Plutus account.
        </p>
        <p>
          The tool checks unread Gmail inbox messages, extracts transaction details from supported email formats, and sends those details to the Plutus backend configured by the person running it. Expense categories may be predicted automatically. The tool is free to use; you run it with your own Google account and backend configuration.
        </p>
        <p>
          Nyxordinal does not receive or use your Gmail messages or transaction data through this tool. The software sends extracted transaction details to the Plutus backend you configure. Gmail access is authorized by you through Google OAuth.
        </p>
        <div className="plutus-scrapper-links">
          <Link to="/plutus-scrapper/privacy">Privacy policy</Link>
          <Link to="/plutus-scrapper/terms">Terms of service</Link>
          <a href="https://github.com/nyxordinal">Project and contact</a>
        </div>
      </div>
    </div>
  </section>
);

export default PlutusScrapper;
