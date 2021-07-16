const messages = [
    "Oscar",
    "David",
    "Felipe",
    "Cristobal",
    "Edwards",
    "Francisco",
    "Joel",
    "Marina"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};