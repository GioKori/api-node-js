import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('all users: should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });
    //in order all thest to pass use test.skip for test below.
    test('GET request should return a user by ID', async ({ request }) => {
      const response = await request.get(`${baseURL}` + "/99");
      expect(response.status()).toBe(200);
      const responseBody = await response.json()
      expect(responseBody.id).toBe(99);
    });

    test('GET request should return 404 if user is not found', async ({ request }) => {
     const response = await request.get(`${baseURL}` + `/101`);
     expect(response.status()).toBe(404);
    });

    test('POST request should create a new user', async ({ request }) => {
      const response = await request.post(`${baseURL}`);
      expect(response.status()).toBe(201);
      const responseBody = await response.json()
        expect(responseBody.id).toBeDefined();
    });

    test('DELETE request should delete a user by ID and after delete it', async ({ request }) => {
        const responseNewCreated = await request.post(`${baseURL}`);
        expect(responseNewCreated.status()).toBe(201);
        const responseBody = await responseNewCreated.json()
        expect(responseBody.id).toBeDefined();

        const newUSerID = responseBody.id;
        const responseDeleted = await request.delete(`${baseURL}` + "/" + `${newUSerID}`);
        expect(responseDeleted.status()).toBe(200);
    });

    test('Delete request should return 404 if user is not not found', async ({ request }) => {
        const responseNewCreated = await request.post(`${baseURL}`);
        expect(responseNewCreated.status()).toBe(201);
        const responseBody = await responseNewCreated.json()
        expect(responseBody.id).toBeDefined();

        const newUSerID = responseBody.id;
        const responseDeleted = await request.delete(`${baseURL}`);
        expect(responseDeleted.status()).toBe(404);
    });


});
