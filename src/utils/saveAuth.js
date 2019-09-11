export function saveUser(userDetails) {
  localStorage.setItem('loggedInUser', JSON.stringify(userDetails));
}

export function getUser() {
  return JSON.parse(localStorage.getItem('loggedInUser'));
}

export function removeUser() {
  return localStorage.removeItem('loggedInUser');
}