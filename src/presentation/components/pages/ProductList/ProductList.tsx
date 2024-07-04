import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Product } from '../../../../models';
import { getProductsService } from '../../../../services/search.service';

import { Breadcrumb } from '../../molecules/Breadcrumb';
import { ProductCard } from '../../molecules/ProductCard';
import { NoResults } from '../../molecules/NoResults';

import * as Style from './style';

const ProductList = () => {

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") ?? '';
  const navigate = useNavigate();

  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log(searchTerm);

    const getProducts = async () => {
      try {
        const response = await getProductsService(searchTerm);
        console.log('response', response);
        setCategories(response.categories);
        setProducts(response.items);
      } catch (error) {
        console.error(error);
      }
    }

    if (searchTerm) getProducts();

  }, [searchTerm])

  const openDetail = (id: string) => {
    navigate(`/items/${id}`);
  }

  return (
    <>
      <Style.Container>
        <Breadcrumb data-testid="breadcrumb" items={categories} />
        <Style.ProductListCard>
          {
            (products && products.length > 0) && products.map((item, index) => {
              return (
                <div key={index}>
                  <ProductCard data-testid="product-card" product-card openDetail={openDetail} product={item} />
                  {index < products.length - 1 && <Style.Divider />}
                </div>
              )
            })
          }
          {
            (products && products.length < 1) && <NoResults />
          }
        </Style.ProductListCard>
      </Style.Container>
    </>
  );
};

export default ProductList;