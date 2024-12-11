import axios from "../lib/axios";

export interface FechPropertiesParams {
  page?: number;
  limit?: number;
}

export class PropertiesService {
  constructor() {}

  async fetchProperties({ page = 1, limit = 10 }: FechPropertiesParams) {
    const { data } = await axios.get("/properties", {
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
