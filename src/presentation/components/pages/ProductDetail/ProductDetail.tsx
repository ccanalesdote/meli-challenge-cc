import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumb } from '../../molecules/Breadcrumb';
import { ProductDetailCard } from '../../organisms/ProductDetailCard';

import { getProductService } from '../../../../services/search.service';

import * as Style from './style';
import { Product } from '../../../../models';

const initialState: Product = {
  id: '',
  title: '',
  price: {
    currency: '',
    amount: 0,
    decimals: 0,
  },
  picture: '',
  condition: '',
  free_shipping: false,
  location: '',
  sold_quantity: 0,
  description: '',
  categories: [],
};

const ProductDetail = () => {

  const { id } = useParams();
  const productId = id ?? '';

  const [product, setProduct] = useState<Product>(initialState);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await getProductService(productId);        
        setProduct(response.item);
        setCategories(response.item.categories);
      } catch (error) {
        console.error(error);
      }
    }

    if (id) getProducts();
  }, [])

  return (
    <>
      <Style.Container>
        <Breadcrumb items={categories} />
        <Style.ProductCard>
          <ProductDetailCard product={product} />
        </Style.ProductCard>
      </Style.Container>
    </>
  );
};

export default ProductDetail;