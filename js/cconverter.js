const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {



    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        const currency = response.results;

        for (key in currency) {
            document.getElementById('from').innerHTML += `<option> ${key} </option>`;
            document.getElementById('to').innerHTML += `<option> ${key} </option>`;
        }

    }
};
xhttp.open("GET", "http://free.currencyconverterapi.com/api/v5/currencies?apiKey=", true);
xhttp.send();

function convertCurrency() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    var result = document.getElementById('result');

    if (from.length > 0 && to.length > 0 && amount.length > 0) {
        var xHttp = new XMLHttpRequest();
        xHttp.onreadystatechange = function() {
            if (xHttp.readyState == 4 && xHttp.status == 200) {
                var obj = JSON.parse(this.responseText);
                var fact = obj.rates[to];
                if (fact != undefined) {
                    var calculate = parseFloat(amount) * parseFloat(fact);
                    result.innerHTML = calculate.toFixed(1);
                }
            }
        }
        xHttp.open('GET', 'http://free.currencyconverterapi.com/api/v5/convert?q=' + from + '&compact=ultra&apiKey=' + to, true);
        xHttp.send();
    }
}