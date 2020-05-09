const input_button = document.getElementById('input-button');
const calculate_button = document.getElementById('calculate-button');

var calculate = function() {
    var height, weight, avg_adultdose, bsa, individual_dose;

    height = document.getElementById('height').value;
    weight = document.getElementById('weight').value;
    avg_adultdose = document.getElementById('dose').value;
    if (height == 0 || weight == 0 || avg_adultdose == 0) {
        alert("Enter the missing fields !!");
    } else {
        bsa = (Number(weight) ** 0.425) * (Number(height) ** 0.725) * 0.007184;
        individual_dose = (bsa / 1.7) * avg_adultdose;
        bsa = bsa.toFixed(2);
        individual_dose = individual_dose.toFixed(2);
        document.getElementById("ind_dose").innerHTML = 'Individual dose= ' + individual_dose;
        document.getElementById("bsa").innerHTML = 'BSA (Body surface area)= ' + bsa;
        document.getElementById('result').style.display = "block";
        document.getElementById('input-container').style.display = "none";
    }
};

document.querySelector('.submit-btn').addEventListener('click', calculate);
document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        calculate();
    }
});
// input_button.addEventListener('click', function() {
//     document.getElementById('result').style.display = "block";
//     document.getElementById('input-container').style.display = "none";
// });
calculate_button.addEventListener('click', function() {
    document.getElementById("result").style.display = "none";
    document.getElementById('input-container').style.display = "block";
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('dose').value = "";

});