// import axios from "../lib/axios";
// import { Property } from "../types/Property";

import untypedProperties from "../assets/properties.json";
import { Property } from "../types/Property";

export interface FetchPropertiesParams {
  page?: number;
  limit?: number;
}

export class PropertiesService {
  private properties = untypedProperties as Property[];

  async fetchProperties({ page = 1, limit = 10 }: FetchPropertiesParams) {
    return this.properties.slice((page - 1) * limit, page * limit);
  }
}

export default new PropertiesService();
