const inputElement = document.querySelector('input');

const remainingCharsElement = document.getElementById('remaining-chars');

const maxAllowedChars = inputElement.maxLength;

function countLength(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters === 0) {
        remainingCharsElement.classList.add('error');
        inputElement.classList.add('error');
    } else if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add('warning');
        inputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        inputElement.classList.remove('error');
    } else {
        remainingCharsElement.classList.remove('warning');
        inputElement.classList.remove('warning');
    }
}

inputElement.addEventListener('input', countLength);