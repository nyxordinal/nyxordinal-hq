import React, { useRef, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import PageNotFound from './views/404-page';
import PlutusScrapper from './views/PlutusScrapper';
import PlutusScrapperPrivacy from './views/PlutusScrapperPrivacy';
import PlutusScrapperTerms from './views/PlutusScrapperTerms';

// Initialize Google Analytics
const analyticsId = import.meta.env.VITE_GA_CODE;
if (analyticsId && !document.querySelector(`script[data-ga-id="${analyticsId}"]`)) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', analyticsId, { send_page_view: false });
  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
  analyticsScript.dataset.gaId = analyticsId;
  document.head.appendChild(analyticsScript);
}

const trackPage = page => {
  if (analyticsId && window.gtag) window.gtag('event', 'page_view', { page_path: page });
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current?.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Routes>
          <Route path="/" element={<LayoutDefault><Home /></LayoutDefault>} />
          <Route path="/plutus-scrapper" element={<LayoutDefault><PlutusScrapper /></LayoutDefault>} />
          <Route path="/plutus-scrapper/privacy" element={<LayoutDefault><PlutusScrapperPrivacy /></LayoutDefault>} />
          <Route path="/plutus-scrapper/terms" element={<LayoutDefault><PlutusScrapperTerms /></LayoutDefault>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )} />
  );
}

export default App;
