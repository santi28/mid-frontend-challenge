import axios from "../lib/axios";
import { Property } from "../types/Property";

import untypedProperties from "../assets/properties.json";

export interface Pagination {
  page: number;
  limit: number;
  total_pages: number;
}

export interface FetchPropertiesParams {
  page?: number;
  limit?: number;
}

export interface FetchPropertiesResponse {
  data: Property[];
  pagination: Pagination;
}

export interface FetchPropertiesCountResponse {
  count: number;
}

const { VITE_API_URL } = import.meta.env;

export class PropertiesService {
  private properties = untypedProperties as Property[];

  async fetchProperties({
    page = 1,
    limit = 10,
  }: FetchPropertiesParams): Promise<FetchPropertiesResponse> {
    const { data } = await axios.get(
      `${VITE_API_URL}/properties?page=${page}&limit=${limit}`
    );

    const total_pages = await this.fetchPropertiesCount();

    return {
      data,
      pagination: {
        page,
        limit,
        total_pages: Math.ceil(total_pages.count / limit),
      },
    };
  }

  async fetchPropertiesCount() {
    const { data } = await axios.get<FetchPropertiesCountResponse>(
      `${VITE_API_URL}/properties/count`
    );

    return data;
  }

  async fetchProperty(id: string) {
    const property = this.properties.find((property) => property.id === id);
    console.log(property);

    return property;
  }
}

export default new PropertiesService();
