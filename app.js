var currentNameInput = document.getElementById("currency-name");
var addressInput = document.getElementById("address-input");
var secretInput = document.getElementById("secret-input");

var currencyNameDisplay = document.getElementById("currency-name-display");
var addressDisplay = document.getElementById("address");
var secretDisplay = document.getElementById("secret");

var generateButton = document.getElementById("generate-button");
var addressQRCodeContainer = document.getElementById("address-qr-code")
var secretQRCodeContainer = document.getElementById("secret-qr-code")

generateButton.addEventListener("click", generate)

function generate() {
  addressQRCodeContainer.innerHTML = "";
  secretQRCodeContainer.innerHTML = "";

  currencyNameDisplay.innerHTML = currentNameInput.value;
  addressDisplay.innerHTML = addressInput.value;
  secretDisplay.innerHTML = secretInput.value;

  new QRCode(addressQRCodeContainer, addressInput.value);
  new QRCode(secretQRCodeContainer, secretInput.value);
}
