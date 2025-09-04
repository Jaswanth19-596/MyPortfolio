import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AIBackground from '../components/AIBackground/AIBackground';

const RootLayout = () => {
  return (
    <>
      <AIBackground />
      <Header />
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
