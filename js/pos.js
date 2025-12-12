let total = 0;

function makeNewSale() {
  resetSale();
  showPage("page2");
}

function enterItem() {
  const id = document.getElementById("itemId").value;
  const qty = Number(document.getElementById("quantity").value);

  if (id === "") {
    alert("상품을 선택해 주세요.");
    return;
  }
  
  if (qty <= 0 || isNaN(qty)) {
    alert("수량은 1 이상의 숫자를 입력해야 합니다.");
    return;
  }

  if (!items[id]) {
    alert("존재하지 않는 상품입니다.");
    return;
  }

  const item = items[id];
  const cost = item.price * qty;
  total += cost;

  document.getElementById("itemDesc").innerText = item.description;
  document.getElementById("currentTotal").innerText = total;

  const messageLog = document.getElementById("messageLog");
  const message = document.createElement("div");
  message.className = "message";
  message.innerText =
    `ID: ${id} | 상품명: ${item.description} | 수량: ${qty} | 금액: ${cost}`;
  messageLog.appendChild(message);
  messageLog.scrollTop = messageLog.scrollHeight;

  document.getElementById("quantity").value = "";
}

function endSale() {
  document.getElementById("finalTotal").innerText = total;
  showPage("page3");
}

function goToFirstPage() {
  resetSale();
  showPage("page1");
}

function makePayment() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0 || isNaN(amount)) {
    alert("지불 금액은 0보다 큰 숫자를 입력해야 합니다.");
    return;
  }
  
  if (amount < total) {
    alert("지불 금액이 부족합니다.");
    return;
  }

  const balance = amount - total;
  document.getElementById("balance").innerText = balance;
}

function resetSale() {
  total = 0;

  document.getElementById("itemDesc").innerText = "-";
  document.getElementById("currentTotal").innerText = "0";
  document.getElementById("finalTotal").innerText = "0";
  document.getElementById("balance").innerText = "0";

  document.getElementById("itemId").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("amount").value = "";

  document.getElementById("messageLog").innerHTML = "";
}
