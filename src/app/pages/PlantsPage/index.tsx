import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

export function PlantsPage() {
  return (
    <>
      <Helmet>
        <title>Plants Page</title>
        <meta name="description" content="Settings page for DigiPlants" />
      </Helmet>
      <NavBar />
      <PageWrapper>
        <h1>Plants</h1>
      </PageWrapper>
    </>
  );
}
