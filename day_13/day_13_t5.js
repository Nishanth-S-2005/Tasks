function calculate_bmi(weight, height) {
    return weight / (height * height);
}
let bmi =Math.round(calculate_bmi(65,1.8));
console.log(`Your bmi is ${bmi}.`);