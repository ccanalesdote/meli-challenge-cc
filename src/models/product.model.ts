export interface Product {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    location: string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?: string;
    categories: string[];
}

export interface Products {
    products: Product[];
}

export interface Price {
    currency: string;
    amount: number;
    decimals: number;
}