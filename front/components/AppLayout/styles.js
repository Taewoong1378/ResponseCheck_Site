import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const GlobalFont = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
    font-family: 'Jua', sans-serif;
  }
`;

export const Footer = styled.div`
    width: 100%;
    height: 50px;
    background: black;
    position: absolute;
    bottom: 0;
`;

export const Github = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: white;
`;

export const Instagram = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: white;
`;

export const Facebook = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: white;
`;

export const Ul = styled.ul`
    width: 100%;
    height: 50px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
`;

export const Li = styled.li`
    flex: 1;
    text-align: center;
`;