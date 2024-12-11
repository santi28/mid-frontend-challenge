import axios from "../lib/axios";
import { Property } from "../types/Property";

export interface FetchPropertiesParams {
  page?: number;
  limit?: number;
}

export class PropertiesService {
  async fetchProperties({ page = 1, limit = 10 }: FetchPropertiesParams) {
    const { data } = await axios.get<Property[]>("/properties", {
      params: {
        page,
        limit,
      },
    });

    return data;
  }
}

export default new PropertiesService();
