import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

const Check = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>반응속도체크</title>
            </Head> 
            <Component />
        </>
    );
};

Check.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default Check;