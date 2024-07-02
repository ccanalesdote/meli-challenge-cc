import { Navbar } from '../components/organisms/Navbar';

import * as Style from './style';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {

  return (
    <Style.LayoutStyled>
      <Navbar />
      {children}
    </Style.LayoutStyled>
  );
};

export default Layout;
