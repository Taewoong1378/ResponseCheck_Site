import React from 'react';
import PropTypes from 'prop-types';
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import HeaderNav from '../HeaderNav';
import { Footer, Github, Instagram, Facebook, Ul, Li } from './styles';

const AppLayout = ({ children }) => (
        <div>
            <div>
                <HeaderNav />
                {children}
                <Footer>
                    <Ul>
                        <Li>
                            <a href="https://github.com/Taewoong1378" target="_blank" rel="noreferrer noopener">
                                <Github icon={faGithub} />
                            </a>
                        </Li>
                        <Li>
                            <a href="https://www.instagram.com/tae_coding/" target="_blank" rel="noreferrer noopener">
                                <Instagram icon={faInstagram} />
                            </a>
                        </Li>
                        <Li>
                            <a href="https://www.facebook.com/profile.php?id=100008233455158" target="_blank" rel="noreferrer noopener">
                                <Facebook icon={faFacebook} />
                            </a>
                        </Li>
                    </Ul>
                </Footer>
            </div>
        </div>
    );

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
