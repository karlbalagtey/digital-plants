import * as React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ReactComponent as AccountIconBlack } from './assets/account_circle_black_24dp.svg';
import { ReactComponent as AccountIconWhite } from './assets/account_circle_white_24dp.svg';
import { ReactComponent as ParkWhiteIcon } from './assets/park_white_24dp.svg';
import { ReactComponent as ParkBlackIcon } from './assets/park_black_24dp.svg';
import { ReactComponent as SettingsWhiteIcon } from './assets/settings_white_24dp.svg';
import { ReactComponent as SettingsBlackIcon } from './assets/settings_black_24dp.svg';

import { selectThemeKey } from 'styles/theme/slice/selectors';

export function Nav() {
  const theme = useSelector(selectThemeKey);

  return (
    <Wrapper>
      <Item to="/plants">
        {theme === 'light' ? (
          <ParkBlackIcon className="icon" />
        ) : (
          <ParkWhiteIcon className="icon" />
        )}
        Plants
      </Item>
      <Item to="/wallet">
        {theme === 'light' ? (
          <AccountIconBlack className="icon" />
        ) : (
          <AccountIconWhite className="icon" />
        )}
        Connect Wallet
      </Item>
      <Item to="/settings">
        {theme === 'light' ? (
          <SettingsBlackIcon className="icon" />
        ) : (
          <SettingsWhiteIcon className="icon" />
        )}
        Settings
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled(Link)`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 14px;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 5px;
  }
`;
