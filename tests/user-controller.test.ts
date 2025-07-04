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

    });

    test('GET request should return 404 if user is not found', async ({ request }) => {

    });

    test('POST request should create a new user', async ({ request }) => {

    });

    test('DELETE request should delete a user by ID and after delete it', async ({ request }) => {

    });

    test('Delete request should return 404 if user is not not found', async ({ request }) => {

    });
});
