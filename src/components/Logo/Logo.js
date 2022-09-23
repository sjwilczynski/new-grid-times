import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';

const Logo = (props) => {
  return (
    <Wrapper>
      <Link href="/" {...props}>
        New Grid Times
      </Link>
      <TodaysDate>
        {format(new Date(), 'EEEE, MMMM do, yyyy')}
      </TodaysDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: -1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: 3rem;

  @media ${p => p.theme.queries.tabletAndUp} {
    font-size: 4rem;
  }
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;
`;

export default Logo;
