import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import { Row, Col} from 'antd';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = styled.div`
    width: 100%;
    height: 50px;
    background: black;
    color: gold;
    font-weight: bold;
    position: absolute;
    bottom: 0;
`;

const Github = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: white;
`;

const Instagram = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    left: 47%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: white;
`;

const Facebook = styled(FontAwesomeIcon)`
    position: absolute;
    top: 50%;
    left: 53%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: white;
`;

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <HeaderNav/>
                {children}
                <Footer>
                    <a href="https://github.com/Taewoong1378" target="_blank" rel="noreferrer noopener">
                        <Github icon={faGithub}></Github>
                    </a>
                    <a href="https://www.instagram.com/tae_coding/" target="_blank" rel="noreferrer noopener">
                        <Instagram icon={faInstagram}></Instagram>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100008233455158" target="_blank" rel="noreferrer noopener">
                        <Facebook icon={faFacebook}></Facebook>
                    </a>
                </Footer>
                <Row gutter={8}>
                    <Col xs={24} md={24}>
                        
                    </Col>
                    <Col xs={24} md={24}>
                        {children}
                    </Col>
                    <Col xs={24} md={24}>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;