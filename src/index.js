import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { Provider } from "react-redux";
import store from "./helpers/store";

// Additional entry point imports (e.g. Fonts)
import "typeface-roboto";
import "typeface-montserrat";
import "typeface-dm-sans";

// Sentry monitoring
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn:
    "https://fc88e1f9e8c046ca816c4855045eac15@o495499.ingest.sentry.io/5568329",
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()],
  // (Sentry recommends adjusting this value in production)
  // 1.0 sends every issue notifcation
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
