import React from 'react';
import { PieChart } from '@awsui/components-react';

const PopularServices = () => {
  return (
    <PieChart
      hideFilter={true}
      variant="pie"
      size={'large'}
      statusType={'finished'}
      data={[
        { title: 'Amazon S3', value: 30 },
        { title: 'Amazon ECS', value: 20 },
        { title: 'Amazon Kinesis', value: 50 },
      ]}
      hideLegend={true}
    />
  );
};

export default PopularServices;
