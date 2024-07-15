const axios = require('axios');

async function fetch100() {
  const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  if (data.status === 100) console.log(data);
}

fetch100();
