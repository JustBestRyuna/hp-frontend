import React, { useContext } from 'react';
import { Typography } from 'antd';
import { UserContext } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';
const { Title } = Typography;

function Reservation() {
  const { uid } = useParams();
  const { user } = useContext(UserContext);

  return (
    <div>
      <Title>Reservation Page</Title>
    </div>
  );
}

export default Reservation;
