import { describe, expect, it, vi } from "vitest";
import axios from "axios";
import { getProductService, getProductsService } from "./search.service";

vi.mock("axios");

describe("ProductService", () => {

    const baseUrl = "http://localhost:3000/api";

    describe("getProductsService", () => {

        it("should fetch products successfully", async () => {

            const searchTerm = "apple";
            const mockData = [{ id: "1", title: "Apple iPod Touch 5g 32gb Azul" }];

            (axios.get as any).mockResolvedValueOnce({ data: mockData });

            const result = await getProductsService(searchTerm);

            expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/items`, {
                params: { q: searchTerm },
            });

            expect(result).toEqual(mockData);

        });

        it("should handle errors when fetching products", async () => {

            const searchTerm = "error";

            (axios.get as any).mockRejectedValueOnce(new Error("Network Error"));

            await expect(getProductsService(searchTerm)).rejects.toThrowError(
                "Network Error"
            );

        });
    });

    describe("getProductService", () => {

        it("should fetch a single product successfully", async () => {

            const productId = "MLA987654";
            const mockData = { id: productId, title: "Apple iPod Touch 5g 32gb Azul" };

            (axios.get as any).mockResolvedValueOnce({ data: mockData });

            const result = await getProductService(productId);

            expect(axios.get).toHaveBeenCalledWith(`${baseUrl}/items/${productId}`);
            expect(result).toEqual(mockData);

        });

        it("should handle errors when fetching a single product", async () => {

            const productId = "error";
            (axios.get as any).mockRejectedValueOnce(new Error("Product not found"));

            await expect(getProductService(productId)).rejects.toThrowError(
                "Product not found"
            );

        });
    });
});
