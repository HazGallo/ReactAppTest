import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import App from './App';

Sentry.init({
  dsn: 'https://a8497a30ae5c456d935468ee97507086@o730087.ingest.sentry.io/4505483200036864',
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', 'newmanager.int.iseazyengage.com'],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 0.8, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <h1>hola</h1>
    </App>
  </React.StrictMode>
);
