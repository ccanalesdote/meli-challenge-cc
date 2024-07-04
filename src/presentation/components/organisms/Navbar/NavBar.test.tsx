import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { PayloadAction } from '@reduxjs/toolkit';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { resetSearch } from '../../../../redux/states/search';

import Navbar from './Navbar';

// definición del tipo de estado
interface RootState {
  search: {
    value: string;
  };
}

type TypedMockStore = MockStoreEnhanced<RootState, PayloadAction<any>>;

// Mock store con tipos definidos
const mockStore = configureStore<RootState, PayloadAction<any>>([]);

// Mock de useNavigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('Navbar', () => {

  let store: TypedMockStore;
  const placeholder = 'Nunca dejes de buscar';
  let mockNavigate: ReturnType<typeof useNavigate>;

  beforeEach(() => {

    store = mockStore({ search: { value: '' } })

    mockNavigate = vi.mocked(useNavigate);
    mockNavigate = vi.fn().mockImplementation((to, options) => { });

    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    
  });

  it('renders logo and search bar', () => {

    const container = render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // Obtenemos los elementos del contenedor
    const { getByPlaceholderText, getByAltText } = container;

    // Verificamos que se renderice el input y el logo
    expect(getByPlaceholderText(placeholder)).toBeDefined();
    expect(getByAltText('Logo_ML')).toBeDefined();

  });

  it('redirects to home on logo click', async () => {

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // Simulamos hacer click en el logo
    const logo = screen.getByAltText('Logo_ML');
    fireEvent.click(logo);

    // Verificamos que se haya redirigido a la home
    expect(mockNavigate).toHaveBeenCalledWith('/');

  });

  it('redirects to search results when searchState has a value', async () => {

    // Seteamos el valor de búsqueda
    store.getState().search = { value: 'televisor' };
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // Verificamos que se haya redirigido a la página de resultados
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/items?search=televisor'));

  });

  it('resets search state when logo is clicked and searchState has a value', () => {

    // Reseteamos el valor de búsqueda
    store.dispatch(resetSearch());    

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );

    // Simulamos hacer click en el logo
    const logo = screen.getByAltText('Logo_ML');
    fireEvent.click(logo);

    // Verificamos que el valor de búsqueda se haya reseteado
    expect(store.getState().search.value).toBe('');

  });
});