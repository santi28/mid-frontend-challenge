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
    console.log(
      `🔌 Calling fetchProperties on page ${page} with limit of ${limit}`
    );

    return this.properties.slice((page - 1) * limit, page * limit);
  }

  async fetchProperty(id: string) {
    console.log(`🔌 Calling fetchProperty with id ${id}`);

    const property = this.properties.find((property) => property.id === id);
    console.log(property);

    return property;
  }
}

export default new PropertiesService();
