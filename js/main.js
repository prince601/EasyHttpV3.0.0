const http = new EasyHTTP;

// http.get('https://api.github.com/users') //or i could use data/users.json and the same response
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

//user data
const data = {
    "name": "prince",
    "username": "prince601",
    "email": "princekab602@sokondro.com"
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.delete('https://jsonplaceholder.typicode.com/users/1')
//     .then(msg => console.log(msg))
//     .catch(err => console.log(err));