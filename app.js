document.addEventListener("DOMContentLoaded", init)

function init() {
    const name = document.querySelector('.name')
    const website = document.querySelector('.website')
    const email = document.querySelector('.email')

    const isExist = sessionStorage.getItem('data')
    if (!isExist) {
        getData()
    } else {
        data = JSON.parse(isExist)
        injectData(data)
    }

    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json();
        injectData(data)
        sessionStorage.setItem("data", JSON.stringify(data))

    }

    function injectData(data) {
        name.textContent = data.name;
        website.textContent = data.website
        email.textContent = data.email
    }

}




