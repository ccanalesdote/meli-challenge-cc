import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Home } from './presentation/components/pages/Home';
import { ProductList } from './presentation/components/pages/ProductList';
import { ProductDetail } from './presentation/components/pages/ProductDetail';
import { Layout } from './presentation/layout';
import * as Style from './style';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

function App() {

  return (
    <>
      <GlobalStyle />
      <Style.ContainerStyled>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/items" element={<ProductList />} />
              <Route path="/items/:id" element={<ProductDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Style.ContainerStyled>
    </>
  )
}

export default App
