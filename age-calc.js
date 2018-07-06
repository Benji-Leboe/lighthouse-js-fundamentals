function ageCalculator(name,yearBorn,yearCurrent){
    var age = yearCurrent - yearBorn;
    return name + " is " + age + " years old.";
}

console.log(ageCalculator("Bob", 1972, 2018));
