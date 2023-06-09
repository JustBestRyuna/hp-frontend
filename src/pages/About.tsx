import React, { CSSProperties } from 'react';
import { Divider, Space, Typography } from 'antd';
import logo from '../assets/images/hopae-logo.png';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

const data = [
  {
    title: '회사명',
    subtitle: '주식회사 호패',
  },
  {
    title: '주소',
    subtitle: '서울특별시 강남구 역삼로 172 (역삼동, 마루360) 8층 C셀',
  },
];

function About() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div style={containerStyles}>
      <div
        style={{ position: 'absolute', top: 20, left: 20, cursor: 'pointer' }}
        onClick={goBack}
      >
        <Space>
          <ArrowLeftOutlined style={{ color: '#2F54EB' }} />
          <Text style={{ color: '#2F54EB' }}>이전화면으로</Text>
        </Space>
      </div>
      <Space size={80}>
        <img style={{ width: 300 }} alt='hopae-logo' src={logo} />
        <div
          style={{ display: 'flex', flexDirection: 'column', minWidth: 400 }}
        >
          {data.map((d, index) => (
            <Meta key={index} title={d.title} subtitile={d.subtitle} />
          ))}
        </div>
      </Space>
    </div>
  );
}
export default About;

const Meta = (props: { title: string; subtitile: string }) => {
  return (
    <div>
      <Title level={3}>{props?.title}</Title>
      <Text style={{ fontSize: 16 }}>{props?.subtitile}</Text>
      <Divider style={dividerStyle} />
    </div>
  );
};

const containerStyles: CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
};

const dividerStyle: CSSProperties = {
  backgroundColor: '#000000',
  height: 2,
};
