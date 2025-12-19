function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const popup = document.getElementById("passwordPopup");
  const mainContent = document.getElementById("mainContent");
  const wrongMessage = document.getElementById("wrongMessage");

  if(password === "Jhanna27") {
    popup.style.display = "none"; // hide popup
    mainContent.style.display = "block"; // show main site
  } else {
    wrongMessage.style.display = "block";
    document.getElementById("passwordInput").value = "";
  }
}