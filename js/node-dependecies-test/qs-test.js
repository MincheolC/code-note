const qs = require('qs');
const axios = require('axios');

// axios.post('https://the-rich-coding-test1.herokuapp.com/users/login', qs.stringify({ email: 'wndtlr1024@gmail.com', password: '1234' }))
//   .then((res) => console.log(res.data))
//   .catch(err => console.log(err)) ;

// email=wndtlr1024%40gmail.com&password=1234
console.log(qs.stringify({ email: 'wndtlr1024@gmail.com', password: '1234' }));

axios({
    method: 'post',
    url: 'https://the-rich-coding-test1.herokuapp.com/users/login',
    data: {
        email: 'wndtlr1024@gmail.com',
        password: '1234',
    },
    headers: {
      Accept: '*/*',
    },
})
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));;