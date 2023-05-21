document.getElementById('btnProduct').onclick = function() {
  calcCost();
}

function calcCost() {
  const selectProduct = document.getElementById('selectProduct').value;
  const quantityProduct = document.getElementById('quantityProduct').value;
  const total = quantityProduct * selectProduct;
  document.getElementById('priceProduct').innerHTML = total;
  if (selectProduct == 0 || quantityProduct == 0) {
    document.getElementById('infoProduct').style.display = 'none';
    alert('Укажите значение!');
    return;
  }
  document.getElementById('infoProduct').style.display = 'block';
}