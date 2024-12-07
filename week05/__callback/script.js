function fetchData(callback) {
    setTimeout(() => {
        callback('Data has been fetched');
    }, 1000);
}

function processData(data) {
    console.log("Data recieved:", data);
}

fetchData(processData);