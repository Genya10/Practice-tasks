const nameUser = document.querySelector('h2')
const emailUser = document.querySelector('h3')
const cityUser = document.querySelector('.city')
const streetUser = document.querySelector('.street')
const suiteUser = document.querySelector('.suite')

axios.get('https://jsonplaceholder.typicode.com/users/1')
.then(response => {
    const {name, email, address:{city, street, suite}} = response.data

    nameUser.textContent = `Name user: ${name}`
    emailUser.textContent = `Email user: ${email}`
    cityUser.textContent = `City: ${city}`
    streetUser.textContent = `Street: ${street}`
    suiteUser.textContent = `Suite: ${suite}`
    console.log(response.data)
})
.catch(error => {
    console.error('Error', error)
})

///////////////////////////////////////////////
let ulElement = document.querySelector('ul')

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    response.data.forEach(post => {
        const li = document.createElement('li')
        li.textContent = post.title
        ulElement.append(li)
    })
})
.catch(error => {
    console.error( 'Error', error)
})