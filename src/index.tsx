import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';
import AppRoutes from './routes/routes';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe/stripe.utils';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Elements stripe={stripePromise}>
          <AppRoutes />
        </Elements>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
