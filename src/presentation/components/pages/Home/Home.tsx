import { useState } from 'react';

import { Navbar } from '../../organisms/Navbar';

import * as Style from './style';

const Home = () => {

  const [title, setTitle] = useState('Home');

  return (
    <div>
      <Style.Title>{title}</Style.Title>
    </div>
  );
};

export default Home;