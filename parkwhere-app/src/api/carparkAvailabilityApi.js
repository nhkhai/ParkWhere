import axios from "axios";

const BASE_URL = "";

export const carparkAvailabilityApi = axios.create({ baseURL: BASE_URL });
