import React, { ReactNode } from 'react';
import { Card as AntdCard } from 'antd';

export default function Card({ children }: { children: ReactNode }) {
  return <AntdCard>{children}</AntdCard>;
}
