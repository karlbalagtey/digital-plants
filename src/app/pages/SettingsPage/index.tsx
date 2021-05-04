import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { Features } from './Features';
import { PageWrapper } from 'app/components/PageWrapper';

export function SettingsPage() {
  return (
    <>
      <Helmet>
        <title>Settings Page</title>
        <meta name="description" content="Settings page for DigiPlants" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <Features />
      </PageWrapper>
    </>
  );
}
