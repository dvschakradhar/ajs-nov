console.log("grofers assignment");

//getting the prices from all the inputs
let matchingInputs = document.querySelectorAll('input[data-ns-test="prices"]');
// creating a variable to hold the final price
let totalPrice = 0;
// let defaultValue = 0;

for(input of matchingInputs) {
    totalPrice+= Number(input.value);
    // defaultValue = totalPrice;
}

document.getElementById('priceTable').addEventListener('change', calculateSum);

function calculateSum() {
    // This logic needs a revisit - not working
    // let updatedPrice = event.target.value - event.target.defaultValue;
    // totalPrice = defaultValue + updatedPrice;
    // document.getElementById('total').innerHTML = totalPrice;
    totalPrice = 0;
    for(input of matchingInputs) {
        totalPrice+= Number(input.value);
        // defaultValue = totalPrice;
    }
    document.getElementById('total').innerHTML = totalPrice;

}

let totalRow =  document.createElement('tr');
totalRow.innerHTML  = `<td>Total</td>
                        <td id = "total" data-ns-test="grandTotal">${totalPrice}</td>`;
document.getElementById('priceTable').append(totalRow);

