import { RequestInit } from "next/dist/server/web/spec-extension/request";

const ELEMENT_BASE_URL = process.env.ELEMENT_BASE_URL || "http://localhost:3000/api/v1/elements";

async function fetchClient(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      method: options.method || 'GET',
      body: options.body ? JSON.stringify(options.body) : null,
    });

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
    const response = await fetchClient(`${ElementClient}?name=${name}`, {
      method: "GET"
    });
    return response[0];
  }

  static async getElementBySymbol(symbol: string) {
    const response = await fetchClient(`${ELEMENT_BASE_URL}?symbol=${symbol}`);
    return response[0];
  }
};

export default ElementClient;