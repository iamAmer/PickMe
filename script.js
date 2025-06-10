function generateNumber() {
    const maxNumber = parseInt(document.getElementById('maxNumber').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(maxNumber) || maxNumber < 1) {
        resultElement.textContent = 'Enter the number of lectures: ';
        resultElement.classList.add('text-red-500');
        return;
    }
    
    resultElement.classList.remove('text-red-500');
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    resultElement.textContent = `Zaker lecture ${randomNumber}`;
}