import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeSwitch } from '..';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Store } from '@reduxjs/toolkit';
import { ThemeProvider } from 'styles/theme/ThemeProvider';

const renderThemeSwitch = (store: Store) =>
  render(
    <Provider store={store}>
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    </Provider>,
  );
describe('<ThemeSwitch />', () => {
  let store: ReturnType<typeof configureAppStore>;

  beforeEach(() => {
    store = configureAppStore();
  });

  it('should have a button', () => {
    const themeSwitch = renderThemeSwitch(store);
    expect(themeSwitch.queryAllByRole('button').length).toBe(1);
  });

  it('should switch theme on click', () => {
    const themeSwitch = renderThemeSwitch(store);
    const button = themeSwitch.queryAllByRole('button') as HTMLInputElement[];

    expect(button[0].checked).toBe(true);

    fireEvent.click(button[1]);

    expect(button[1].checked).toBe(true);
  });
});
