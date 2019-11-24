

export default class GameService {
  static myInstance = null;

  static getInstance() {
    if (GameService.myInstance == null) {
      GameService.myInstance = new GameService()
    }
    return this.myInstance
  }

  getDetails(gameId) {
   return fetch("https://api.rawg.io/api/games/" + gameId)
    .then(response => response.json())

  }

  getFeaturedGames(amount) {
   return fetch("https://api.rawg.io/api/games?page_size=" + amount)
    .then(response => response.json())
  }

  getSearchResults(input) {
   return fetch("https://api.rawg.io/api/games?search=" + input)
    .then(response => response.json())
  }

}
