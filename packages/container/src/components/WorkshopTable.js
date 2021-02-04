import React from 'react';
import { Table } from '@awsui/components-react';

const WorkshopTable = () => {
  return (
    <Table
      header={'Workshops'}
      items={[
        {
          workshop: "Juan's Workshop",
          description: 'Salsa dancing 101',
          attendees: 100,
        },
        {
          workshop: "Young's Workshop",
          description: 'Peloton 101',
          attendees: 20,
        },
        {
          workshop: "Jeff's Workshop",
          description: 'Customer Obsession',
          attendees: 1000000,
        },
      ]}
      columnDefinitions={[
        {
          id: 'workshop',
          header: 'Workshop Name',
          cell: (e) => e.workshop,
        },
        {
          id: 'description',
          header: 'Description',
          cell: (e) => e.description,
        },
        {
          id: 'attendees',
          header: '# of Max Attendees',
          cell: (e) => e.attendees,
        },
      ]}
    />
  );
};

export default WorkshopTable;
