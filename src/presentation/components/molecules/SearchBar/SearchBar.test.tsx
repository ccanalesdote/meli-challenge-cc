import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { updateSearch } from '../../../../redux/states/search';

import SearchBar from './SearchBar';

// Mock store
const mockStore = configureStore([]);

describe("SearchBar", () => {

  let store: MockStoreEnhanced<unknown, {}>;
  const placeholder = 'Nunca dejes de buscar';

  beforeEach(() => {
    store = mockStore({
      search: { value: '' }
    });
  });

  test("should render correctly", async () => {

    const container = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    // Verificamos que el contenedor no sea nulo
    expect(container).toBeTruthy();

  });

  test('SearchBar component should render correctly', () => {

    const container = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    // Obtenemos los elementos del contenedor
    const { getByPlaceholderText, getByAltText } = container;

    // Verificamos que se renderice el input y el icono de búsqueda
    expect(getByPlaceholderText(placeholder)).toBeDefined();
    expect(getByAltText('ic_Search')).toBeDefined();

  });

  test('action dispatch updateSearch on icon click', () => {

    const container = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    // Simulamos hacer click en el icono de búsqueda
    const iconElement = container.getByAltText('ic_Search');
    fireEvent.click(iconElement);

    // Verificamos que se haya despachado la acción con el valor actualizado
    expect(store.getActions()).toEqual([updateSearch({ value: '' })]);

  });

  test('Call handleSearch and blur the input when enter is pressed', () => {

    const container = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    // Obtenemos el input del contenedor
    const inputElement = container.getByPlaceholderText(placeholder) as HTMLInputElement;

    // Simulamos escribir un nuevo valor en el input
    fireEvent.change(inputElement, { target: { value: 'apple' } });
    
    // Simulamos presionar la tecla enter
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    console.log(store.getActions());

    // Verificamos que se haya despachado la acción con el valor actualizado
    expect(store.getActions()).toEqual([updateSearch({ value: 'apple' })]);

  });

});