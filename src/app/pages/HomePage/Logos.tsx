import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectThemeKey } from 'styles/theme/slice/selectors';

import styled from 'styled-components/macro';
import { ReactComponent as GrassLogoBlack } from './assets/grass_black_48dp.svg';
import { ReactComponent as FlowerLogoBlack } from './assets/yard_black_48dp.svg';
import { ReactComponent as GrassLogoWhite } from './assets/grass_white_48dp.svg';
import { ReactComponent as FlowerLogoWhite } from './assets/yard_white_48dp.svg';
import { ReactComponent as PlusSign } from './assets/plus-sign.svg';

export function Logos() {
  const theme = useSelector(selectThemeKey);

  return (
    <Wrapper>
      {theme === 'light' ? (
        <GrassLogoBlack className="logo" />
      ) : (
        <GrassLogoWhite className="logo" />
      )}
      <PlusSign className="sign" />
      {theme === 'light' ? (
        <FlowerLogoBlack className="logo" />
      ) : (
        <FlowerLogoWhite className="logo" />
      )}
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
