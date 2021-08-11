import React, { useMemo } from 'react';
import AppLayout from '../components/AppLayout';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Button, Divider, List } from 'antd'; 

const H1 = styled.h1`
    text-align: center;
    font-family: 'Jua', sans-serif;
`;

const Record = () => {
    // const dispatch = useDispatch();
    const { nickname, score } = useSelector((state) => state.user);

    const style = useMemo(() => ({ fontFamily: `'Jua', sans-serif`, textAlign: 'center' }));

    const data = nickname.length >=10 ? [
        `1등 : ${nickname[0]} - ${score[0]}`,
        `2등 : ${nickname[1]} - ${score[1]}`,
        `3등 : ${nickname[2]} - ${score[2]}`,
        `4등 : ${nickname[3]} - ${score[3]}`,
        `5등 : ${nickname[4]} - ${score[4]}`,
        `6등 : ${nickname[5]} - ${score[5]}`,
        `7등 : ${nickname[6]} - ${score[6]}`,
        `8등 : ${nickname[7]} - ${score[7]}`,
        `9등 : ${nickname[8]} - ${score[8]}`,
        `10등 : ${nickname[9]} - ${score[9]}`,
      ] : null;

    return (
            <AppLayout>
                <div style={style}>
                    <H1>전체 순위</H1>
                    <Divider orientation="center">전체 10등까지!</Divider>
                    <List
                    style={{ textAlign: 'center' }}
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item style={{ display: 'flex', justifyContent: 'center' }}>{item}</List.Item>}
                    />
                    <Button type="primary" style={{ display: 'block', margin: 'auto', marginTop: '20px' }}><Link href="/"><a>게임 다시 시작하기!</a></Link></Button>
                </div>
            </AppLayout>
    );
};

export default Record;