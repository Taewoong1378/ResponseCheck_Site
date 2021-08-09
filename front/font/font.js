import { createGlobalStyle } from "styled-components";
import GmarketSansTTFMedium from "./GmarketSansTTFMedium.ttf";

export const Global = createGlobalStyle`
    @font-face {
        font-family: "GmarketSansTTFMedium";
        src: local("GmarketSansTTFMedium"),
        url(${GmarketSansTTFMedium}) format('tff');
        font-weight: 300;
        font-style: normal;
    }
`;