import axios from "axios";

const baseUrl = 'http://localhost:3000/api';

export const getProductsService = async (search: string) => {
  try {

    const response = await axios.get(`${baseUrl}/items`, {
      params: {
        q: search
      }
    });

    return response.data;

  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;
  }
};

export const getProductService = async (id: string) => {
  try {

    const response = await axios.get(`${baseUrl}/items/${id}`);

    return response.data;

  } catch (error) {
    console.error('Error al obtener producto:', error);
    throw error;
  }
}