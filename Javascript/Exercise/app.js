const inputElement = document.querySelector('input');

const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function countLength(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
}

inputElement.addEventListener('input', countLength);