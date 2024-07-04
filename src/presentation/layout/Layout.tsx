import { Navbar } from '../components/organisms/Navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
