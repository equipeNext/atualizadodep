let productionCount = 0;
let productionSummaryElement = document.getElementById('productionSummary');
let productionListElement = document.getElementById('productionList');
let productions = [];
let interval;
let machineElement = document.querySelector('.machine');
let productionElement = document.querySelector('.production');

function startMachine() {
  if (machineElement.classList.contains('active')) {
    return;
  }

  machineElement.classList.add('active');
  productionElement.classList.remove('inactive');
  productionElement.textContent = 'Em produção';
  productionElement.classList.add('green');
  productionCount = 0;
  updateProductionCount();

  interval = setInterval(function() {
    productionCount++;
    updateProductionCount();
  }, 1000);
}

function stopMachine() {
  if (!machineElement.classList.contains('active')) {
    return;
  }

  machineElement.classList.remove('active');
  productionElement.classList.remove('green');
  productionElement.classList.add('inactive');
  productionElement.textContent = 'Desligada';
  clearInterval(interval);
  addProduction();
  resetProductionArea();
  productionCount = 0;
  updateProductionCount();
}

function panic() {
  if (machineElement.classList.contains('active')) {
    machineElement.classList.remove('active');
    clearInterval(interval);
    addProduction();
    showPanicAlert();
    resetProductionArea();
  }
}

function showPanicAlert() {
  let totalProduced = productionCount;
  alert("A máquina foi desligada de forma inesperada.\n\nTijolos produzidos: " + totalProduced);
}

function updateProductionCount() {
  let productionCountElement = document.getElementById('productionCount');
  productionCountElement.textContent = "Quantidade de Tijolos Produzidos: " + productionCount;
}

function addProduction() {
  let currentDate = new Date();
  let danificados = Math.ceil(productionCount * 0.10);
  let production = {
    quantidade: productionCount,
    danificados: danificados,
    dia: currentDate.getDate(),
    mes: currentDate.getMonth() + 1,
    ano: currentDate.getFullYear(),
    hora: currentDate.getHours(),
    minuto: currentDate.getMinutes(),
    segundo: currentDate.getSeconds()
  };
  productions.push(production);
  displayProductionSummary();
}

function displayProductionSummary() {
  productionListElement.innerHTML = '';
  for (let i = 0; i < productions.length; i++) {
    let production = productions[i];
    let productionListItem = document.createElement('li');
    productionListItem.textContent = "Data: " + production.dia + "/" + production.mes + "/" + production.ano + " - Hora: " + production.hora + ":" + production.minuto + ":" + production.segundo + " - Quantidade: " + production.quantidade + " tijolos (Danificados: " + production.danificados + ")";
    productionListElement.appendChild(productionListItem);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
