// For - Ejemplo para ver solo los numeros impares

for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// For in - Ejemplo para imprimir el nombre y luego el apellido

const user = { firstName: 'Luis', lastName: 'Vargas'};
for (key in user) console.log(user[key]);

// While - Ejemplo para hace un ciclo hasta que la edad sea 10

var age = 5;

while (age < 10) {
    console.log('Your age is less than 10');
    age++;
}

// For each - Ejemplo para imprimir elementos de un array individualmente

let animals = ['cat', 'dog', 'horse', 'sheep', 'bird'];
    animals.number = 10;
animals.forEach(animal => {
    console.log(animal);
})

// For of - Ejemplo para imprimir elementos de uun array pero indicando un punto de quiebre

const names = ['Luis', 'José', 'María', 'Ricardo', 'Ana']

for (const name of names) {
    if (name === 'Ana') {
        break;
    } console.log(name);
    
}

// Do while - 

let iTwo = 10;

do {
    console.log(iTwo);
    iTwo--;
} while (iTwo < 10 && iTwo > 0)