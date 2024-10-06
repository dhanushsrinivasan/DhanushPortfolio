const typingText = ["a Developer", "a Designer", "a Coder", "a Creator"];
let index = 0;
let charIndex = 0;
let currentText = '';
let letter = '';

(function type() {
    if (index === typingText.length) {
        index = 0;
    }

    currentText = typingText[index];
    letter = currentText.slice(0, ++charIndex);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        index++;
        charIndex = 0;
        setTimeout(type, 1000); // Pause before starting the next word
    } else {
        setTimeout(type, 150); // Typing speed
    }
})();
