import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import Temperature from '@/components/Charts/Temperature';

export default () => (
  <PageContainer>
    <Card style={{ width: 700 }}>
      <Temperature />
    </Card>
  </PageContainer>
);
