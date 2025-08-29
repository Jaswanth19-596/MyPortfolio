import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import AIBackground from '../components/AIBackground/AIBackground';

const RootLayout = () => {
  return (
    <>
      <AIBackground />
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
