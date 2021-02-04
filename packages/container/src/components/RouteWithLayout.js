import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { AppLayout, Box, Link } from '@awsui/components-react';

function RouteWithLayout({ Component, ...rest }) {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <Route
      {...rest}
      render={() => {
        return (
          <AppLayout
            navigation={
              <Box margin={{ top: 'xxl' }}>
                <ul style={{ listStyle: 'none' }}>
                  <li>
                    <Link href="#">Link One</Link>
                  </li>
                  <li>
                    <Link href="#">Link Two</Link>
                  </li>
                  <li>
                    <Link href="#">Link Three</Link>
                  </li>
                </ul>
              </Box>
            }
            tools={
              <Box margin={{ top: 'xxl' }}>
                <ul style={{ listStyle: 'none' }}>
                  <li>Tool One</li>
                  <li>Tool Two</li>
                  <li>Tool Three</li>
                </ul>
              </Box>
            }
            navigationOpen={showNavigation}
            onNavigationChange={() => setShowNavigation(!showNavigation)}
            content={<Component />}
          />
        );
      }}
    />
  );
}

export default RouteWithLayout;
