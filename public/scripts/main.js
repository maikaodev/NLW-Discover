import Modal from './modal.js';

const modal = Modal(); 

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

// Pegar todos os botões que existe com a class check

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button => {
// Adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, true));
});
// Quando o botão delete for clicado ele abre a modal.
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
      button.addEventListener("click", (event) => handleClick(event, false));
  });
      // variável check foi criada dentro dos parametros da function para definir como padrão.
   function handleClick(event, check) {
     
     //Faz com que nosso links deixem de se comportar como links
    event.preventDefault();

    //  Ternário -  se o check for true (como é o padrão) escrever ML se não for EP.
    const text = check ? "Marcar como lida" : "Excluir";
    const slug = check ? "check" : "delete";
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form");

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

     modalTitle.innerHTML = `${text} esta pergunta`;
     modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`; /* DDDDDenner - O check está sendo chamado dentro da variável? como isso não quebra?*/
     modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
     check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
     modal.open();
   }