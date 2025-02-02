// apiHelper.js

import Module from "module";
class APIHelper {
    constructor(request, baseURL) {
        this.request = request;
        this.baseURL = baseURL;
    }

    async get(endpoint, headers = {}) {
        const response = await this.request.get(`${this.baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });
        return response;
    }

    async post(endpoint, data, headers = {}) {
        const response = await this.request.post(`${this.baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            data: data
        });
        return response;
    }

    async put(endpoint, data, headers = {}) {
        const response = await this.request.put(`${this.baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            data: data
        });
        return response;
    }

    async delete(endpoint, headers = {}) {
        const response = await this.request.delete(`${this.baseURL}${endpoint}`, {
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });
        return response;
    }

    async checkStatus(response, expectedStatus) {
        if (response.status() !== expectedStatus) {
            throw new Error(`Expected status ${expectedStatus} but got ${response.status()}`);
        }
        return response;
    }

    async getResponseData(response) {
        return await response.json();
    }
}

module.exports = APIHelper;