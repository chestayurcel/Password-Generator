const resultEl = document.getElementById('result');
const copyBtn = document.getElementById('copy-btn');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyToClipboard);


function generatePassword() {
    const length = +lengthEl.value;

    const includeUppercase = uppercaseEl.checked;
    const includeLowercase = lowercaseEl.checked;
    const includeNumbers = numbersEl.checked;
    const includeSymbols = symbolsEl.checked;

    let characterPool = '';
    if (includeUppercase) {
        characterPool += uppercaseChars;
    }
    if (includeLowercase) {
        characterPool += lowercaseChars;
    }
    if (includeNumbers) {
        characterPool += numberChars;
    }
    if (includeSymbols) {
        characterPool += symbolChars;
    }

    if (characterPool === '') {
        resultEl.innerText = 'Pilih tipenya!';
        return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        generatedPassword += characterPool[randomIndex];
    }

    resultEl.innerText = generatedPassword;
}

function copyToClipboard() {
    const password = resultEl.innerText;

    if (!password || password === 'Pilih tipenya') {
        return;
    }

    navigator.clipboard.writeText(password);
    
    alert('Password berhasil disalin!');
}