import React, { CSSProperties, useContext, useState, useEffect } from 'react';
import { Space, Typography } from 'antd';
import { UserContext } from '../contexts/UserContext';
import { useNavigate, useParams } from 'react-router-dom';
import { UserType, getUser } from '../services/users';
import { ReservationType, getReservations } from '../services/reservations';
import { ArrowLeftOutlined } from '@ant-design/icons';
import UserInfoCard from '../components/UserInfoCard';
import ReservationCard from '../components/ReservationCard';

const { Title, Text } = Typography;

function Reservation() {
  const { uid } = useParams();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [filteredReservations, setFilteredReservations] = useState<ReservationType[]>([]);
  const [loadedUser, setLoadedUser] = useState<UserType>();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    (async () => {
      try {
        const reservations = await getReservations();
        setFilteredReservations(reservations.filter((reservation: ReservationType) => reservation.userId === uid));
      } catch (e) {
        setError(true);
      }
      if (user) {
        setLoadedUser(user);
        setLoading(false);
        return;
      }
      try {
        const user = await getUser(uid);
        setLoadedUser(user);
        setLoading(false);
      } catch (e) {
        setError(true);
      }
    })();
  }, [user, uid]);

  if (error) return <div>something wrong...</div>;
  else if (loading) return <div>loading...</div>;
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
      <div style={frameStyles}>
        <UserInfoCard
          id={loadedUser?.id}
          name={loadedUser?.name}
          depart={loadedUser?.depart}
          avatar={loadedUser?.avatar}
        />
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {filteredReservations.length ? filteredReservations.map((reservation: ReservationType) => (
          <div key={reservation.id} style={frameStyles}>
            <ReservationCard
              id={reservation.id}
              roomId={reservation.roomId}
              userId={reservation.userId}
              time={reservation.time}
            />
          </div>
        )) : <div style={frameStyles}>
          <Title level={3}>예약 내역이 없습니다.</Title>
        </div>}
      </div>
    </div>
  );
}

export default Reservation;

const containerStyles: CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginTop: 50,
};

const frameStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
  margin: 30,
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
};
