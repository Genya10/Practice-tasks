async function fetchUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error(`Error:${response.status}`)
        }
        const users = await response.json()
        console.log('List users:', users)
    } catch (error){
        console.error('Error with get data', error)
    }
}

fetchUsers()


/*function fetchData(){
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve('Data succefully loaded!')
        }, 2000)
    })
}

async function getData(){
    console.log('Start getting data...')

    const result = await fetchData()

    console.log(result)
    console.log('Got data')
}
getData()*/