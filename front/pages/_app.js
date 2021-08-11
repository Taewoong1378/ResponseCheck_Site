import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import Helmet from 'react-helmet';

import wrapper from '../store/configureStore';

const App = ({ Component }) => (
    <>
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
        </Helmet>
        <Head>
            <meta charSet="utf-8"/>
            <title>반응속도체크</title>
        </Head> 
        <Component />
    </>
);

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(App);