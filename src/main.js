const username = "amirrezahekmati";

renderInfo();

async function getProfileData(username) {
  console.log(username);
  let promise = await fetch(`https://api.github.com/users/${username}`)
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

function createInfoText(info) {
  let text = `
  bio: ${info.bio} <br>
  blog: ${info.blog} <br>
  company: ${info.company} <br>
  email: ${info.email} <br>
  followers number: ${info.followers} <br>
  following number: ${info.following} <br>
  repository: ${info.repos_url} <br>
  profile url: <a href="${info.html_url}">here</a> <br>
  `;

  return text;
}

function updateUserInfo(information) {
  document.querySelector('.js-user-info')
  .innerHTML = information;
}

function updateUserImg(imgUrl) {
  let image = document.querySelector('.js-user-img');
  image.src = imgUrl;
}

function renderInfo() {

  let usernameForm = document.querySelector('.js-username-form');
  usernameForm.addEventListener('submit', async e => {
    e.preventDefault();
    let username = usernameForm.querySelector('.js-user-input').value;

    let info = await getProfileData(username);

    updateUserImg(info.avatar_url);

    let information = createInfoText(info);
    updateUserInfo(information);
  });
}

// getProfileData('amirrezahekmati').then( info => {
//   console.log(info);
// });