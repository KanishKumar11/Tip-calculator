const bill = document.getElementsByTagName("input");
const submit = document.querySelector(".tipbtn input");
const rangeValue = document.getElementById('rangeValue');
const rangeInput = document.getElementById('rangeInput');

submit.addEventListener('click', () => {

    console.log(bill);
    console.log(bill[0].value);
    console.log(bill[1].value);
    bill[3].value = bill[0].value * (bill[1].value / 100);
    bill[4].value = (parseFloat(bill[3].value) + parseFloat(bill[0].value));
})

rangeInput.addEventListener('input', function() {
    rangeValue.textContent = rangeInput.value;
});
