import React, { CSSProperties, useEffect, useState } from 'react';
import Card from '../components/Card';
import { Divider, Space, Typography } from 'antd';
import { UserType, getUsers } from '../services/users';

const { Title } = Typography;

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [users, setUsers] = useState<UserType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const users = await getUsers();
        setUsers(users);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    })();
  }, []);

  if (error) return <div>something wrong...</div>;
  else if (loading) return <div>loading...</div>;
  return (
    <div style={containerStyles}>
      <div style={frameStyles}>
        <Title>호패 예약 조회</Title>
        <Divider />
        <Space direction='horizontal'>
          {users.map((user, index) => (
            <Card
              key={index}
              title={user.name}
              description={user.depart}
              src={user.avatar}
              onClick={() => console.log(user.id)}
            />
          ))}
        </Space>
      </div>
    </div>
  );
}

export default Home;

const containerStyles: CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
};

const frameStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 40,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
};
