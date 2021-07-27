import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderNav from './HeaderNav';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = styled.div`
    width: 100%;
    height: 50px;
    background: black;
    position: absolute;
    bottom: 0;
`;

const Github = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: white;
`;

const Instagram = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: white;
`;

const Facebook = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: white;
`;

const Ul = styled.ul`
    width: 100%;
    height: 50px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
`;

const Li = styled.li`
    flex: 1;
    text-align: center;
`;

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <HeaderNav/>
                {children}
                <Footer>
                    <Ul>
                        <Li>
                            <a href="https://github.com/Taewoong1378" target="_blank" rel="noreferrer noopener">
                                <Github icon={faGithub}></Github>
                            </a>
                         </Li>
                        <Li>
                            <a href="https://www.instagram.com/tae_coding/" target="_blank" rel="noreferrer noopener">
                                <Instagram icon={faInstagram}></Instagram>
                            </a>
                        </Li>
                        <Li>
                            <a href="https://www.facebook.com/profile.php?id=100008233455158" target="_blank" rel="noreferrer noopener">
                                <Facebook icon={faFacebook}></Facebook>
                            </a>
                        </Li>
                    </Ul>
                </Footer>
            </div>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;