const names = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";
console.log(writeCards(names, event));
console.log(countDown(10));
console.log(countDown(4));

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);  
    }
    return messages;
}

function countDown(numbers) {
    for (let i = numbers; i >= 0; i--) {
        console.log(i);
    }
}
countDown(10);
countDown(4);