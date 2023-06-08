import React from 'react';
import { Card as AntdCard, CardProps } from 'antd';
import { CardMetaProps } from 'antd/es/card';

const { Meta: AntdMeta } = AntdCard;

export default function Card(
  props: CardProps & CardMetaProps & { src?: string }
) {
  return (
    <AntdCard
      style={{ width: 240 }}
      cover={<img alt='user' src={props?.src} />}
      hoverable
      onClick={props?.onClick}
    >
      {<AntdMeta title={props?.title} description={props?.description} />}
    </AntdCard>
  );
}
