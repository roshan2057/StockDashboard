"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGet = void 0;
const fetchGet = async (url, options) => {
    try {
        // Add query params to URL
        if (options?.params) {
            const query = new URLSearchParams(options.params).toString();
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
        return (await response.json());
    }
    catch (error) {
        console.error("❌ Fetch GET Error:", error.message);
        throw error;
    }
};
exports.fetchGet = fetchGet;
//# sourceMappingURL=fetchGet.js.map