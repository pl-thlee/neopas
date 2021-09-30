import { css } from '@emotion/react';

const reset = css`
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans CJK KR';
  }

  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    min-width: 768px;
    width: auto !important;
    width: 100%;
    height: 100% !important;
    /* overflow: initial !important; */
    font-size: 15px;
    line-height: 1.46668;
    font-weight: 400;
    font-variant-ligatures: common-ligatures;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default reset;
