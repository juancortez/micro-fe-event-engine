import React, { useState } from 'react';
import { Header, Button, Tabs, Box, Alert } from '@awsui/components-react';
import { useHistory } from 'react-router-dom';

import WorkshopTable from './WorkshopTable';
import PopularServices from './PopularServices';

import ContactPage from './ContactPage';

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const history = useHistory();

  function onCreate() {
    history.push('/create');
  }

  return (
    <>
      <Header variant="h1">Event Engine</Header>

      <Box margin={{ top: 'm', bottom: 'm' }}>
        {isVisible && (
          <Alert type={'info'} buttonText={'Acknowledge'} onButtonClick={() => setIsVisible(false)}>
            Maintenance Period starts at 9pm CST
          </Alert>
        )}
      </Box>

      <Box margin={{ top: 'm', bottom: 'm' }}>
        <Button variant="primary" onClick={onCreate}>
          Create Workshop
        </Button>
      </Box>

      <Box>
        <Tabs
          tabs={[
            {
              id: '1',
              label: 'Workshop Catalog',
              content: <WorkshopTable />,
            },
            {
              id: '2',
              label: 'Popular Workshops',
              content: <PopularServices />,
            },
            {
              id: '3',
              label: 'Contact Us',
              content: <ContactPage />,
            },
          ]}
        />
      </Box>
    </>
  );
};

export default Home;
