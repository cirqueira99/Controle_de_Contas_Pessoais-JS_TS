import { AccountController } from "./account_controller.js";

const ButtonPayAccount = (id) => {
  
  const btnPay = document.createElement('button');
  btnPay.setAttribute('type', 'button');
  btnPay.setAttribute('id', 'p'+id);
  btnPay.classList.add('btn');
  btnPay.classList.add('btn-pay');
  btnPay.style.color = 'white';
  btnPay.addEventListener('click', AccountController.confirmPayAccout);

  const btn_span = document.createElement('span');

  btn_span.innerHTML = `
    <p id="icon-btn-pay">pagar</p>
    <i id="icon-pay"class="fa fa-money" aria-hidden="true"></i>
  `;

  btnPay.appendChild(btn_span);
  
  return btnPay;  
}

const ButtonDeleteAccount = (id) => { 
  const btnDelete = document.createElement('button');
  btnDelete.setAttribute('type', 'button');
  btnDelete.setAttribute('id', 'd'+id);
  btnDelete.classList.add('btn');
  btnDelete.classList.add('btn-del');
  btnDelete.addEventListener('click', AccountController.confirmDeleteAccout);
  btnDelete.style.color = 'white';
  
  const btn_span = document.createElement('span');

  btn_span.innerHTML = `
    <p id="icon-btn-del">exluir</p>
    <i id="icon-del" class="fa fa-trash" aria-hidden="true"></i>
  `;

  btnDelete.appendChild(btn_span);
  
  return btnDelete;
}

const ButtonPaidAccount = (id) => {
  const btnPaid = document.createElement('button');
  btnPaid.setAttribute('type', 'button');
  btnPaid.classList.add('btn');
  btnPaid.classList.add('btn-paid');
  btnPaid.style.backgroundColor = "transparent";
  btnPaid.style.border = "transparent";
  btnPaid.disabled = "true";

  const btn_span = document.createElement('span');
  btn_span.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;

  btnPaid.appendChild(btn_span);

  return btnPaid;
}
export const ButtonsController = {
  ButtonDeleteAccount,
  ButtonPayAccount,
  ButtonPaidAccount
}