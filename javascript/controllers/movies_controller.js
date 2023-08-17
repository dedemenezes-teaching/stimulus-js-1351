import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input", "list"]
  static values = {
    baseUrl: String
  }

  connect() {
    // console.log(this.listTarget)
    // console.log(this.inputTarget)
    console.log(this.baseUrlValue)
  }

  insertInList(data) {
    data.Search.forEach((movie) => {
      // 1. generate the HTML
      const movieTag = `<li class="list-group-item border-0">
              <img src="${movie.Poster}" alt="" width="100" height="100%">
              <p>${movie.Title}</p>
            </li>`
      // 2. insert this html in the DOM
      this.listTarget.insertAdjacentHTML('beforeend', movieTag)
    })
  }

  fetchMovies() {
    fetch(`${this.baseUrlValue}?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        this.listTarget.innerText = ''
        if (data.Search) {
          this.insertInList(data)
        }
      })
  }

  search(event) {
    event.preventDefault()
    console.log()
    this.fetchMovies()
  }

}
