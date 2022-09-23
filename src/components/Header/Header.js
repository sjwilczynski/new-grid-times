import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  const searchAndMenuGroup = (
    <>
      <ActionGroup>
        <button>
          <Search size={24} />
        </button>
        <button>
          <Menu size={24} />
        </button>
      </ActionGroup>
    </>
  );

  return (
    <header>
      <SuperHeader>
        <Row>
          {searchAndMenuGroup}
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopAndUpContainer>{searchAndMenuGroup}</LaptopAndUpContainer>
        <Logo />
        <ButtonContainer>
          <Button>Subscribe</Button>
          <Link href="/">Already a subscriber?</Link>
        </ButtonContainer>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${(p) => p.theme.queries.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LaptopAndUpContainer = styled.div`
  display: none;
  @media ${(p) => p.theme.queries.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media ${(p) => p.theme.queries.tabletAndUp} {
    margin-top: 3rem;
    margin-bottom: 4.5rem;
  }

  @media ${(p) => p.theme.queries.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: baseline;

    margin-top: 1rem;
  }
`;

const ButtonContainer = styled(LaptopAndUpContainer)`
  justify-self: end;
  align-self: end;
  text-align: center;
  flex-direction: column;
  gap: 8px;
`;

const Link = styled.a`
  font-style: italic;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
  text-decoration: underline;
`;

export default Header;
