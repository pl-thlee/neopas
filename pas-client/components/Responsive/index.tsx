import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

const ResponsiveWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  // width: 1024;
  margin: 0 auto;

  @media (max-width: 1024px) {
    min-width: 768px;

  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }: PropsWithChildren<{}>) => {
  return <ResponsiveWrapper {...rest}>{children}</ResponsiveWrapper>;
};

export default Responsive;
