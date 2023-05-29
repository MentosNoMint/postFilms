
const films = document.querySelector('.loadfilm') 


const filmLoading = () => {
    const divLoading = document.createElement('div')
    divLoading.classList.add('load')
    divLoading.innerHTML =
        `<div class="preloader">
        <div class="loader"></div>
      </div>`

    films.append(divLoading)
}
const Load = () => {
    const delLoad = document.querySelector('.load')
    delLoad.innerHTML = ''
}

const error = () => {
    const divErr = document.createElement('div')
    divErr.classList.add('error')
    divErr.innerHTML =
        `Ошибка загрузки`
    films.append(divErr)
}
async function getResponce() {
    filmLoading()
    try{
    let responce = await fetch(`https://swapi.dev/api/films`, {
        method: 'GET',
    })
    const {results} = await responce.json()
    let key
    const list = document.querySelector('.id')
    for(key in results){
        list.innerHTML += 
        `<li><font color="red" size="5">Название фильма: ${results[key].title} </font>
        <p><font color="white"Эпизод: ${results[key].episode_id}
        <p>Пролог: ${results[key].opening_crawl}
        <p>Директор: ${results[key].director}
        <p>Продюсер: ${results[key].producer}
        <p>Фильм создан: ${results[key].created}
        <p>Фильм изменен: ${results[key].edited}
        <a href= ''>Ссылка на источник: ${results[key].url} </li></font>`
    }
       } catch (error) {
        error()
       } finally {
        Load()
       }
    
}
getResponce()



