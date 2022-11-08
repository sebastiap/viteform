const axios = require('axios');

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
  });

test('the API is responding correctly', async () => {
  await axios.get('https://hn.algolia.com/api/v1/search?query=redux').then(data => {
    expect(data.status).toBe(200);
  });
});

test('the fetch fails with an error', async () => {

  try {
    await axios.get('https://hn.algolia.com/api/v1/searcssh?query=redux');
  } catch (e) {
    expect(e.toJSON().message).toMatch('Request failed with status code 404');
  }
});