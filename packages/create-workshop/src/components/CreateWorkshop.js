import React from 'react';
import { useHistory } from 'react-router-dom';
import { Header, Button, Grid } from '@awsui/components-react';

export default () => {
  const history = useHistory();

  function onCreate() {
    history.push('/create/workshop-created');
  }

  function onCancel() {
    history.push('/');
  }

  return (
    <div>
      <Header variant="h1">Create Workshop</Header>

      <Grid>
        <Button variant="primary" onClick={onCreate}>
          Create
        </Button>
        <Button variant="normal" onClick={onCancel}>
          Cancel
        </Button>
      </Grid>
    </div>
  );
};
