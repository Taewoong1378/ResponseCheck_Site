import React, { useEffect } from 'react';
import ResponseCheck from '../components/ResponseCheck';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Home = () => {
    const { nicknameDone } = useSelector((state) => state.user);
    useEffect(() => {
        if (nicknameDone) {
            alert('다른 사람들의 점수를 확인하러 이동합니다!');
            Router.replace('/record');
        }
    }, [nicknameDone]);
    
    return (
        <AppLayout>
            <ResponseCheck />
        </AppLayout>
    );
};

export default Home;