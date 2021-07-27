import React from 'react';
import styled from 'styled-components';
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

const Header = styled.div`
    width: 100%;
    height: 50px;
    background: black;
    color: gold;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 30px;
`;

const Style = styled.span`
    position: absolute;
    right: 5%;
`;

const Wrapper = styled(FontAwesomeIcon)`
    margin-left: 5%;
    font-size: 20px;
`;


const Center = styled.span`
    margin-left: 10px;
    font-size: 20px;
`;

const A = styled.a`
    color: gold;
`;

const HeaderNav = () => {
    return (
        <Header>
            <Wrapper icon={faHandPointUp} />
            <Center>
                <Link href="/"><A>반응속도 테스트</A></Link>
                <Style> 
                    By Taewoong 
                </Style>
            </Center>
        </Header>
    );
}

export default HeaderNav;