// pages/profile.js

import React from 'react';
import AppLayout from '../components/AppLayout';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
    font-family: 'Jua', sans-serif;
`;

const Record = () => {
    return (
        <AppLayout>
            <H1>전체 순위</H1>
        </AppLayout>
    );
};

export default Record;