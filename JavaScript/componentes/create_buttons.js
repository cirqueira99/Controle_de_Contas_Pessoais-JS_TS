import { AccountController } from "./account_controller.js";

const ButtonPayAccount = (id) => {
  const btnPay = document.createElement('button');
  btnPay.setAttribute('type', 'button')
  btnPay.setAttribute('id', 'p'+id)
  btnPay.classList.add('btn');  
  btnPay.innerText = 'pagar';
  btnPay.style.fontSize = "15px";
  btnPay.classList.add('btn-success');
  btnPay.classList.add('table_butpagar');
  btnPay.addEventListener('click', AccountController.confirmPayAccout);
  
  return btnPay;  
}

const ButtonPaidAccount = (id) => {
  const btnPaid = document.createElement('button');
  btnPaid.setAttribute('type', 'button')
  btnPaid.classList.add('btn');
  btnPaid.classList.add('btn-info');
  btnPaid.classList.add('table_butpago');
  btnPaid.style.backgroundColor = "transparent"
  btnPaid.style.border = "transparent"
  btnPaid.disabled = "true"

  const btn_span = document.createElement('span');
  btn_span.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;

  btnPaid.appendChild(btn_span);

  return btnPaid;
}

const ButtonDeleteAccount = (id) => { 
  const btnDelete = document.createElement('button');
  btnDelete.setAttribute('type', 'button')
  btnDelete.setAttribute('id', 'd'+id)
  btnDelete.classList.add('btn');
  btnDelete.classList.add('btn-danger');
  btnDelete.classList.add('table_butdelete');
  btnDelete.style.backgroundColor = "rgb(207 121 129)"
  btnDelete.style.color = "white"
  btnDelete.style.fontSize = "15px"
  btnDelete.innerText = 'excluir';
  btnDelete.addEventListener('click', AccountController.confirmDeleteAccout);

  return btnDelete;
}

export const ButtonsController = {
  ButtonDeleteAccount,
  ButtonPayAccount,
  ButtonPaidAccount
}