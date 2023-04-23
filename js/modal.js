const firstUser = document.querySelector("#first-user");
const secondUser = document.querySelector("#second-user");

const usersModal = document.querySelector("#users-modal");

const alert = document.querySelector("#alert");

const inputSubmit = document.querySelector("#input-submit")

// Jogador 1
const profilePicture1 = document.querySelector("#profile-picture-1");
const userName1 = document.querySelector("#user-name-1");

// Jogador 2
const profilePicture2 = document.querySelector("#profile-picture-2");
const userName2 = document.querySelector("#user-name-2");

const localUsersArray = JSON.parse(localStorage.getItem("@users")) || [];

function setUserName(array) {
  profilePicture1.textContent = array[0].charAt(0);
  userName1.textContent = array[0];
  profilePicture2.textContent = array[1].charAt(0);
  userName2.textContent = array[1];
}

if (localUsersArray.length === 0) {
  usersModal.showModal();
} else {
  setUserName(localUsersArray);
}

// Funçao de registro dos jogadores com validação
function registerPlayer() {
  const firstUserValue = firstUser.value;
  const secondUserValue = secondUser.value;

  if (!firstUserValue || !secondUserValue) {
    if (!firstUserValue && !secondUserValue) {
      alert.innerText = `Porfavor, digite o nome dos Jogadores 1 e 2`;
    } else if (!firstUserValue) {
      alert.innerText = `Porfavor, digite o nome do Jogador 1`;
    } else {
      alert.innerText = `Porfavor, digite o nome do Jogador 2`;
    }
  } else {
    const usersArray = [firstUserValue, secondUserValue];
    localStorage.setItem("@users", JSON.stringify(usersArray));
    usersModal.close();
    location.reload();
  }
}

inputSubmit.addEventListener('click', registerPlayer)