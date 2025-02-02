import { test, expect,request } from '@playwright/test';

test('GET request to fetch user details', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');
  expect(response.status()).toBe(200); // Ensure the response is OK

  const responseBody = await response.json();
  console.log(responseBody); // Print response in console

  expect(responseBody.id).toBe(1); // Validate response data
});

test('POST request to create a new user', async ({ request }) => {
    const response = await request.post('https://thinking-tester-contact-list.herokuapp.com/users/login', {
      data: {
          email: 'qatesting@gmail.com',
          password: 'testaple',
      },
    });
  
    expect(response.status()).toBe(200); // Created status
    const responseBody = await response.json();
    console.log(responseBody);
  
    expect(responseBody.user.firstName).toBe('Siddhartha');
  });
  