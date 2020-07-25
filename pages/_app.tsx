import React from 'react';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import withRedux from 'next-redux-wrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../redux/store/store';

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
