// api.spec.js
// import { test, expect } from '@playwright/test';
const { test, expect } = require('@playwright/test');
const APIHelper = require('../../utils/helper.spec');


test.describe('API Test Examples', () => {
    let apiHelper;

    // Set up the helper before tests
    test.beforeEach(async ({ request }) => {
        // Replace with your API base URL
        apiHelper = new APIHelper(request, 'https://jsonplaceholder.typicode.com');
    });

    // GET request example
    test('should fetch a post', async () => {
        const response = await apiHelper.get('/posts/1');
        await apiHelper.checkStatus(response, 200);
        const data = await apiHelper.getResponseData(response);
        
        expect(data.id).toBe(1);
        expect(data).toHaveProperty('title');
    });

    // POST request example
    test('should create a new post', async () => {
        const postData = {
            title: 'Test Post',
            body: 'This is a test post', 
            userId: 1
        };

        const response = await apiHelper.post('/posts', postData);
        await apiHelper.checkStatus(response, 201);
        const data = await apiHelper.getResponseData(response);

        expect(data.title).toBe(postData.title);
    });

    // PUT request example
    test('should update a post', async () => {
        const updateData = {
            title: 'Updated Title',
            body: 'Updated body'
        };

        const response = await apiHelper.put('/posts/1', updateData);
        await apiHelper.checkStatus(response, 200);
        const data = await apiHelper.getResponseData(response);

        expect(data.title).toBe(updateData.title);
    });

    // DELETE request example
    test('should delete a post', async () => {
        const response = await apiHelper.delete('/posts/1');
        await apiHelper.checkStatus(response, 200);
    });

    // Example with custom headers
    test('should make request with custom headers', async () => {
        const headers = {
            'Authorization': 'Bearer your-token',
            'Custom-Header': 'custom-value'
        };

        const response = await apiHelper.get('/posts/1', headers);
        await apiHelper.checkStatus(response, 200);
    });
});