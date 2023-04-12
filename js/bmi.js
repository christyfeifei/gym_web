const nameE1 = document.querySelector("#name");
const heightE1 = document.querySelector("#height");
const weightE1 = document.querySelector("#weight");

console.log(nameE1, heightE1, weightE1);
const getBmi = (height, weight) => {
    let bmi = weight / (height / 100) ** 2;
    return bmi.toFixed(2);
};


function calc() {
    let name = nameE1.value;
    let height = heightE1.value;
    let weight = weightE1.value;
    console.log(name,height,weight);
    let bmi = getBmi(height,weight);
    if (height == "" || weight == "") {
        alert("輸入不能為空!")
        return;
    }
    if (isNaN(bmi)) {
        alert("輸入數值有誤!")
        return;
    }
    document.querySelector(".bmi").innerText = bmi;
}