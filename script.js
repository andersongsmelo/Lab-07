// Mouse Events

var hoverButton = document.getElementById('hoverButton');
var mouseMsg = document.getElementById('mouseMsg');

hoverButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = 'lightblue';
    mouseMsg.textContent = "You touched here!"
});
hoverButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = 'lightyellow';
    mouseMsg.textContent = "You left!"
});

// Keyboard Events

var keyInput = document.getElementById('keyInput');
var keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keydown', function(event) {
    keyMsg.textContent = `The latest key pressed: ${event.key}`;
});

// Form Events

var simpleForm = document.getElementById('simpleForm');
var formMsg = document.getElementById('formMsg');

simpleForm.addEventListener('submit', function(event) {
    event.preventDefault();
    formMsg.textContent = "Form sent successfully (without refresh)!"
});

// Focus and blur events

var focusInput = document.getElementById('focusInput');
var focusMsg = document.getElementById('focusMsg')

focusInput.addEventListener('focus', function() {
    focusMsg.textContent = "Field Status: Focus (typing...)"
});
focusInput.addEventListener('blur', function() {
    focusMsg.textContent = "Field Status: blur (left...)"
});

// Event delegation

var buttonContainer = document.getElementById('buttonContainer');
var delegationMsg = document.getElementById('delegationMsg');

buttonContainer.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const info = event.target.getAttribute('data-info');
        delegationMsg.textContent = info;
    }
})