import { RequestInit } from "next/dist/server/web/spec-extension/request";
const ELEMENT_BASE_URL = process.env.NEXT_PUBLIC_ELEMENT_BASE_URL!;

async function fetchClient(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

class ElementClient {
  static async getAllElements() {
    const response = await fetchClient(ELEMENT_BASE_URL, {
      method: "GET"
    });
    return response;
  }

  static async getElementByName(name: string) {
    const response = await fetchClient(`${ELEMENT_BASE_URL}?name=${name}`, {
      method: "GET"
    });
    return response[0];
  }

  static async getElementBySymbol(symbol: string) {
    const response = await fetchClient(`${ELEMENT_BASE_URL}?symbol=${symbol}`, {
      method: "GET"
    });
    return response[0];
  }
};

export default ElementClient;