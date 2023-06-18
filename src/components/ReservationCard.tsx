import React, { CSSProperties } from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { ReservationType } from '../services/reservations';

const { Title } = Typography;

export default function Card(
  props: ReservationType
) {
  return (
    <div style={containerStyles}>
      <Title level={2}>[{props.roomId}] 회의실</Title>
      <Title level={5}>예약 ID: {props.id}</Title>
      <Title level={5}>예약 시간:
        {props.time?.map((time: string) => (
          ` ${parseInt(time) + 8}:00`
        )).join(',')}
      </Title>
    </div>
  );
}

const containerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minWidth: 300,
};
