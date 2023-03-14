// import axios from "axios"

const fetchUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(error => error.message)
}

export default fetchUsers
