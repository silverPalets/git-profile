const userName = "amirrezahekmati";

async function getProfileData(userName) {
  let promise = await fetch(`https://api.github.com/users/${userName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("error:", error);
    });

  return promise;
}
