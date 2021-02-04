import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Button } from '@awsui/components-react';

export default () => {
  const history = useHistory();

  function goHome() {
    history.push('/');
  }

  return (
    <>
      <Header variant="h1">Workshop Created!</Header>
      <Button type="primary" onClick={goHome}>
        Go Home
      </Button>
    </>
  );
};
