const userName = 'amirrezahekmati';
const url = `https://api.github.com/users/${userName}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error (`status: ${response.status}`)
    }
    return response.json();
  })
  .then(data => {
    console.log('User info: ', data);
  })
  .catch(error => {
    console.error('error:', error);
});