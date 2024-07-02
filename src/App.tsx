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
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product-list" element={<ProductList />} />
              <Route path="/product-detail" element={<ProductDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </Style.ContainerStyled>
    </>
  )
}

export default App
