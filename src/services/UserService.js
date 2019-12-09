export default class UserService {
  static myInstance = null;

  static getInstance() {
    if (UserService.myInstance == null) {
      UserService.myInstance = new UserService()
    }
    return this.myInstance
  }

  createUser(user) {
    return fetch('https://game-webapp-server.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify({
        name: user.name,
        birthday: user.birthday,
        email: user.email,
        password: user.password,
        username: user.username,
        gender: user.gender
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  findAllUsers() {
    return fetch("https://game-webapp-server.herokuapp.com/users")
    .then(response => response.json())
  }

  findUserByUsn(usn) {
    return fetch("https://game-webapp-server.herokuapp.com/login/" + usn)
    .then(response => response.json()
    )
  }

  findUserById(uid) {
    return fetch("https://game-webapp-server.herokuapp.com/users/" + uid)
    .then(response => response.json())
  }

  addGameForUser(userId, game) {

    return fetch(
        'https://game-webapp-server.herokuapp.com/users/' + userId + "/games", {
          method: 'POST',
          body: JSON.stringify(game),
          headers: {
            'content-type': 'application/json'
          }
        })
  }

  deleteGameForUser(userId, gameId) {

    return fetch(
        'https://game-webapp-server.herokuapp.com/users/' + userId + "/games/"
        + gameId, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }

        }).then(response => response.json())

  }

  addReview(userId, review) {
    return fetch(
        'https://game-webapp-server.herokuapp.com/users/' + userId + "/reviews",
        {
          method: 'POST',
          body: JSON.stringify(review),
          headers: {
            'content-type': 'application/json'
          }
        }).then(response => response.json())

  }

  updateProfile(userId, user) {
    return fetch(
        'https://game-webapp-server.herokuapp.com/users/' + userId, {
          method: 'PUT',
          body: JSON.stringify(user),
          headers: {
            'content-type': 'application/json'
          }
        }).then(response => response.json())

  }

  deleteFriend(userId, friendId) {
    return fetch(
        'https://game-webapp-server.herokuapp.com/users/' + userId + "/friends/"
        + friendId
        , {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }

        }).then(response => response.json())

  }

  addFriend(userId, friend) {
    return fetch(
        'https://game-webapp-server.herokuapp.com/users/' + userId + "/friends",
        {
          method: 'POST',
          body: JSON.stringify(friend),
          headers: {
            'content-type': 'application/json'
          }
        }).then(response => response.json())
  }

}

