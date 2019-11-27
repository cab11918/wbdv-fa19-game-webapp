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

}

