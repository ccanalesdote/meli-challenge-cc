import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { updateSearch } from '../../../../redux/states/search';

import SearchBar from './SearchBar';

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

    expect(container).toBeTruthy();

  });

  test('SearchBar component should render correctly', () => {

    const container = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const { getByPlaceholderText, getByAltText } = container;

    expect(getByPlaceholderText(placeholder)).toBeDefined();
    expect(getByAltText('ic_Search')).toBeDefined();

  });

  test('action dispatch updateSearch on icon click', () => {
    const container = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const iconElement = container.getByAltText('ic_Search');
    fireEvent.click(iconElement);

    expect(store.getActions()).toEqual([updateSearch({ value: '' })]);
  });

  test('Call handleSearch and blur the input when enter is pressed', () => {
    const container = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const inputElement = container.getByPlaceholderText(placeholder) as HTMLInputElement;

    // we simulate typing a new value into the input
    fireEvent.change(inputElement, { target: { value: 'apple' } });

    // we simulate press enter key
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    // we verify that the action with the updated value has been dispatched
    expect(store.getActions()).toEqual([updateSearch({ value: 'apple' })]);

  });

});