let generateEl = document.getElementById("generate-el")
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
let copyElOne = document.getElementById("copy-btn-one")
let copyElTwo = document.getElementById("copy-btn-two")

let password = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '|', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'
];
function getRandomPassword() {
	let random = Math.floor(Math.random()*password.length)
	return password[random]
}
function generatePassword() {
	for (let i = 0; i < 15; i++) {
		passwordOneEl.textContent += getRandomPassword()
		passwordTwoEl.textContent += getRandomPassword()
		copyElOne.textContent = "Copy"
        copyElTwo.textContent = "Copy"
	}
}
function copyItemOne() {
	let copyFirst = navigator.clipboard.writeText(passwordOneEl.textContent)
	copyElOne.textContent = "Copied"
	copyElTwo.textContent = "Copy"
}
function copyItemTwo() {
	let copyNext = navigator.clipboard.writeText(passwordTwoEl.textContent)
	copyElTwo.textContent = "Copied"
	copyElOne.textContent = "Copy"
}
