import { render, screen } from '@testing-library/react';
import ProductCard from './ProductDetailCard';
import { Product } from '../../../../models';

// Mock para Image y DescriptionCard
vi.mock('../../atoms/Image', () => ({
  Image: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} data-testid="mocked-image" />,
}));

vi.mock('../../molecules/DescriptionCard', () => ({
  DescriptionCard: ({ description }: { description: string }) => <div data-testid="mocked-description">{description}</div>,
}));

describe('ProductDetailCard', () => {

  // Mock de un producto
  const mockProduct: Product = {
    id: 'MLA123456',
    title: 'Producto de Ejemplo',
    price: {
      currency: 'ARS',
      amount: 100,
      decimals: 0,
    },
    picture: 'https://example.com/imagen.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 10,
    description: 'Descripción del producto',
    categories: ['Electrónica', 'Celulares y Teléfonos'],
    location: 'Capital Federal',
  };

  it('renders product information correctly', () => {
    
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByTestId('mocked-image');
    expect(image).toHaveProperty('src', mockProduct.picture);
    expect(image).toHaveProperty('alt', mockProduct.title);

    const description = screen.getByTestId('mocked-description');
    expect(description.textContent).toBe(mockProduct.description);
    
  });

});
