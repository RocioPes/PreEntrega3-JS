

const ticketsInCart = JSON.parse(localStorage.getItem("cart-container"))
const displayCart = document.getElementById ("cart-display")


function updateCartDisplay () {
if (ticketsInCart && ticketsInCart.length>0){
    const ul = document.createElement("ul");
    ticketsInCart.forEach(ticket => {
        const li = document.createElement("li");
        li.innerHTML=`
        <div><br></br><p><strong>Entrada:</strong> ${ticket.location}</p>
        <p><strong>Cantidad:</strong> ${ticket.stock}</p>
        <p><strong>Precio:$</strong> ${ticket.price}</p></div>
        <button class="delete-ticket" data-ticket-id="${ticket.id}">Eliminar</button>`
        ul.appendChild(li)
        
    });
    displayCart.appendChild(ul);
} else {
    displayCart.innerText="Aún no has adquirido entradas"
}}

updateCartDisplay();

const deleteButtons = document.getElementsByClassName("delete-ticket");
for (let i=0 ; i< deleteButtons.length;i++){
    let button1= deleteButtons[i];
    button1.addEventListener("click", function () {
        const ticketId = parseInt(button1.getAttribute("data-ticket-id"));
        deleteTicket(ticketId)
    });
}


function deleteTicket (ticketId){
    const ticketToDelete = ticketsInCart.findIndex (ticket => ticket.id === ticketId);

if (ticketToDelete !== -1){
    ticketsInCart.splice(ticketToDelete,1)
    localStorage.setItem("cart-container", JSON.stringify(ticketsInCart));
updateCartDisplay();
}
}

deleteTicket();



const totalToPay = ticketsInCart.reduce ((acc, ticket) => acc + ticket.price, 0)
const totalToPay1 = document.createElement("div");
totalToPay1.innerHTML= `<p> Total a pagar: $${totalToPay}`;
displayCart.appendChild(totalToPay1);








