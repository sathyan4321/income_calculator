function calculateIncome() {
    var hours = parseFloat(document.getElementById("hours").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var income = hours * rate;
  
    document.getElementById("income").textContent = "Income: $" + income.toFixed(2);
  }
  