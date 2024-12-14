import axios from "../lib/axios";
import { Property } from "../types/Property";

import untypedProperties from "../assets/properties.json";

export interface Pagination {
  page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
}

export interface FetchPropertiesParams {
  page?: number;
  limit?: number;
}

export interface FetchPropertiesResponse {
  data: Property[];
  pagination: Pagination;
}

const { VITE_API_URL } = import.meta.env;

export class PropertiesService {
  private properties = untypedProperties as Property[];

  async fetchProperties({ page = 1, limit = 10 }: FetchPropertiesParams) {
    console.log(
      `🔌 Making a request to ${VITE_API_URL}/properties?page=${page}&limit=${limit}`
    );

    const { data } = await axios.get<FetchPropertiesResponse>(
      `${VITE_API_URL}/properties?page=${page}&limit=${limit}`
    );

    return data;
  }

  async fetchProperty(id: string) {
    console.log(`🔌 Making a request to ${VITE_API_URL}/properties/${id}`);

    const property = this.properties.find((property) => property.id === id);
    console.log(property);

    return property;
  }
}

export default new PropertiesService();
