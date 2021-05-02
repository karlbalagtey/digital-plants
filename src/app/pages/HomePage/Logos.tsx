import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as GrassLogo } from './assets/grass_black_48dp.svg';
import { ReactComponent as FlowerLogo } from './assets/yard_black_48dp.svg';
import { ReactComponent as RPLogo } from './assets/rp-logo.svg';
import { ReactComponent as PlusSign } from './assets/plus-sign.svg';

export function Logos() {
  return (
    <Wrapper>
      <GrassLogo className="logo" />
      <PlusSign className="sign" />
      <FlowerLogo className="logo" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${p => p.theme.border};

  .logo {
    width: 4.5rem;
    height: 4.5rem;
  }

  .sign {
    width: 2rem;
    height: 2rem;
    margin: 0 2rem;
  }
`;
