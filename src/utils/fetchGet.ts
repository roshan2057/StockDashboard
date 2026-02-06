export interface FetchGetOptions {
  params?: Record<string, string | number>;
  query?: Record<string, string | number>;
  headers?: Record<string, string>;
}

export const fetchGet = async <T>(
  url: string,
  options?: FetchGetOptions,
): Promise<T> => {
  try {
    // Add query params to URL
    if (options?.params) {
      const query = new URLSearchParams(
        options.params as Record<string, string>,
      ).toString();
      url += `?${query}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error: any) {
    console.error("❌ Fetch GET Error:", error.message);
    throw error;
  }
};
