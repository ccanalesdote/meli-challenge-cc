import { useState } from 'react';
import * as Style from './style';

const Home = () => {

  const [title, setTitle] = useState('Product Detail');

  return (
    <div>
      <Style.Title>{title}</Style.Title>
    </div>
  );
};

export default Home;