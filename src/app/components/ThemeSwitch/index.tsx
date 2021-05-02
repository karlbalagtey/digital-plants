import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { themeActions } from 'styles/theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'styles/theme/utils';
import { selectThemeKey } from 'styles/theme/slice/selectors';

import { ReactComponent as DarkModeIcon } from './assets/dark_mode_black_24dp.svg';
import { ReactComponent as LightModeIcon } from './assets/light_mode_white_24dp.svg';

export function ThemeSwitch() {
  const [selected, setSelected] = useState('light');
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeKey);

  const handleThemeChange = value => {
    console.log(value);
    setSelected(value);
    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  useEffect(() => {
    setSelected(theme);
  }, [selected, theme]);

  return (
    <>
      {selected === 'light' ? (
        <Button onClick={() => handleThemeChange('dark')} title="Dark mode">
          <DarkModeIcon />
          Dark mode
        </Button>
      ) : (
        <Button onClick={() => handleThemeChange('light')} title="Light mode">
          <LightModeIcon />
          Light mode
        </Button>
      )}
    </>
  );
}

const Button = styled.button`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-align: left;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${p => p.theme.primary};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  svg {
    margin-right: 5px;
  }
`;
