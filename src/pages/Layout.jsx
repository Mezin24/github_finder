import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container mx-auto px-3 pb-12'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
