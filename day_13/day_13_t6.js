function calculate_bmi(weight, height) {
    return weight / (height * height);
}
const bmi=calculate_bmi(65, 1.8);
if(bmi < 18.5) {
    console.log(`Your bmi is ${Math.round(bmi)}. You are underweight.`);
}
else if(bmi >= 18.5 && bmi < 24.9) {
    console.log(`Your bmi is ${Math.round(bmi)}. You are normal weight.`);
}
else if(bmi >= 25 && bmi < 29.9) {
    console.log(`Your bmi is ${Math.round(bmi)}. You are overweight.`);
}