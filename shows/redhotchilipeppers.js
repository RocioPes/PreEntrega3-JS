//DOM
const ticketsContainer = document.getElementById("tickets-rhcp");
let addButton = document.querySelectorAll(".btn-success")


//ARRAY OF PRODUCTS


const tickets = [
    {
        id: 1,
        location: "RED HOT CHILI PEPPERS: Campo Delantero",
        price: 48000,
        stock: 400,
        
    },

    {
        id: 2, 
        location: "RED HOT CHILI PEPPERS: Campo Trasero",
        price: 23000,
        stock: 500,
    },

    {
        id:3,
        location:"RED HOT CHILI PEPPERS: Plateas Altas",
        price: 32000,
        stock: 3000,
    },

    {
        id: 4,
        location: "RED HOT CHILI PEPPERS: Plateas Medias",
        price: 48000,
        stock: 3000,
    },

    {
        id:5,
        location: "RED HOT CHILI PEPPERS: Plateas Bajas",
        price:52000,
        stock:4000,
    },

    
]

// DISPLAY OF TICKETS 

function showTickets() {
tickets.forEach((ticket) => {
        const div = document.createElement("div");
        div.innerHTML=
        `<br></br><p><strong>${ticket.location}</strong></p> 
       <p><strong> Precio: </strong>$ ${ticket.price}</p>
        <p><strong> Disponibles: </strong> ${ticket.stock} entradas</p> 
         <button  class="btn btn-success" id="${ticket.id}" >Comprar</button>`;

        ticketsContainer.append(div);

        })} 

    showTickets();
    




    function buttons () {
    addButton = document.querySelectorAll(".btn-success");
    addButton.forEach(button => {
        button.addEventListener("click", addToCart);
    }
        )
} 

let cart = []

function addToCart (e){
const btn = e.target;    
const idButton = parseInt(btn.getAttribute(`id`));
const selectedTicket = tickets.find(ticket => ticket.id === idButton);

if (cart.some(ticket => ticket.id === idButton)){
const index = cart.findIndex(ticket => ticket.id === idButton);
cart[index].stock ++;
} else {
    selectedTicket.stock = 1;
    cart.push(selectedTicket)
}

localStorage.setItem("cart-container",JSON.stringify(cart))
}
 
buttons();



