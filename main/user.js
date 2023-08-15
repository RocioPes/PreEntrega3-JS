const form = document.getElementById("form")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const userName = document.getElementById("user-name").value;
    const userEmail =document.getElementById("user-email").value;
    const personalDocument = document.getElementById("user-dni").value;

const userInformation = {
name: userName,
email: userEmail,
document: personalDocument,

}

const savedInformation = JSON.parse(localStorage.getItem("userInformation")) || [];

savedInformation.push(userInformation);

localStorage.setItem("userInformation", JSON.stringify(savedInformation))
})

const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click",confirmationData)

function confirmationData(){
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Tus datos han sido guardados',
  showConfirmButton: true,
  timer: 1500
})}