import axios from "../lib/axios";
import { Property } from "../types/Property";

export interface FechPropertiesParams {
  page?: number;
  limit?: number;
}

export class PropertiesService {
  constructor() {}

  async fetchProperties({ page = 1, limit = 10 }: FechPropertiesParams) {
    const { data } = await axios.get<Property[]>("/properties", {
      params: {
        page,
        limit,
      },
    });

    console.log(data);

    return data;
  }
}

export default new PropertiesService();
