// GET info
const userSubmit = async () => {
    const response = await fetch('http://example.com/data.json');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}

// POST info
const userAction = async () => {
    const response = await fetch('http://example.com/data.json', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}