let generatedPin = "";
let enteredPin = "";

function generatePin() {
    generatedPin = Math.floor(1000 + Math.random() * 9000).toString();
    document.getElementById('generatedPin').value = generatedPin;
}

function addNumber(num) {
    enteredPin += num;
    document.getElementById('enteredPin').value = enteredPin;
}

function backspace() {
    enteredPin = enteredPin.slice(0, -1);
    document.getElementById('enteredPin').value = enteredPin;
}

function clearInput() {
    enteredPin = "";
    document.getElementById('enteredPin').value = enteredPin;
}

function submitPin() {
    const messageContainer = document.getElementById('messageContainer');
    const message = document.getElementById('message');

    if (enteredPin === generatedPin) {
        message.textContent = '✅ Pin matched!';
    } else {
        message.textContent = '❌ Pin not matched!';
    }

    messageContainer.style.display = 'block';

    // Try Count
    var countElement = document.getElementById("count-num");
    var count = parseInt(countElement.innerText);

    if (count > 1) {
        count--;
        countElement.innerText = " " + count + " ";
    } else {
        countElement.innerText = "❎ No try left";
        document.querySelector('.submit-btn').disabled = true;
    }
}

function closeMessage() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.style.display = 'none';
}