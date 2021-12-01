let Personne = function (name, firstName, age, sex) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.sex = sex;

    this.myPerson = function () {
        return `Ma personne s'appelle ${this.name} ${this.firstName}, elle a ${this.age} ans et est de sexe ${this.sex}`
    }

    this.setNameAndFirstName = function (name, firstName) {
        this.name = name;
        this.firstName = firstName;
    }
}
const div = document.querySelector('div');

let array = [
    new Personne('name0', 'firstName0', 'age0', 'sex0'),
    new Personne('name1', 'firstName1', 'age1', 'sex1'),
    new Personne('name2', 'firstName2', 'age2', 'sex2'),
    new Personne('name3', 'firstName3', 'age3', 'sex3'),
    new Personne('name4', 'firstName4', 'age4', 'sex4'),
];

for (let i = 0; i < array.length; i++) {
    div.innerText += `Nom : ${array[i].name}, Prénom : ${array[i].firstName}, Age : ${array[i].age}, Sexe : ${array[i].sex} \n`
}

console.log(array);