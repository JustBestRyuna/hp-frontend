import React, { CSSProperties } from 'react';
import { Image, Typography, Col, Row } from 'antd';
import { UserType } from '../services/users';

const { Title } = Typography;

export default function Card(
  props: UserType
) {
  return (
    <div style={containerStyles}>
      <Title level={2}>직원 정보</Title>
      <Image 
        width={240}
        src={props?.avatar} 
      />
      <div style={frameStyles}>
        <Row>
          <Col span={12}>
            <Title level={5}>ID</Title>
          </Col>
          <Col span={12}>
            <Title level={5}>{props?.id}</Title>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Title level={5}>이름</Title>
          </Col>
          <Col span={12}>
            <Title level={5}>{props?.name}</Title>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Title level={5}>부서</Title>
          </Col>
          <Col span={12}>
            <Title level={5}>{props?.depart}</Title>
          </Col>
        </Row>
        </div>
    </div>
  );
}

const containerStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  
};

const frameStyles: CSSProperties = {
  display: 'block',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 300,
};
