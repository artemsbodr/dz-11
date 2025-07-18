//1
const bankAccount = {
    ownerName: 'John Doe',
    accountNumber: '123456789',
    balance: 0,
}

bankAccount.deposit = function(amount) {
    bankAccount.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${bankAccount.balance}`);
}

bankAccount.withdraw = function(amount) {
    bankAccount.balance -= amount;
    console.log(`Withdrew ${amount}. New balance: ${bankAccount.balance}`);
}
function use() {
    const d2 = prompt('Welcome to your bank account!');
    if (d2 === 'deposit') {
    bankAccount.deposit(10)
    console.log(`Your balance is ${bankAccount.balance}`);
    use();
}
else if (d2 === 'withdraw') {
    bankAccount.withdraw(10)
    console.log(`Your balance is ${bankAccount.balance}`);
    use();
}  
} 
use();
//2
const weather = {
  temperature: Number(prompt("Введіть поточну температуру (°C):")),

  humidity: 65,
  windSpeed: 10,  

  isBelowZero() {
    return this.temperature < 0;
  }
};

if (weather.isBelowZero()) {
  console.log("температура нижче 0 градусів Цельсія");
} else {
  console.log("температура вище або рівна 0 градусів Цельсія");
}

//3
const user = {
  name: "Іван Франко",
  email: "ivan@example.com",
  password: "qwerty123",

  login(inputEmail, inputPassword) {
    return inputEmail === this.email && inputPassword === this.password;
  }
};

const enteredEmail = prompt("Введіть ваш email:");
const enteredPassword = prompt("Введіть ваш пароль:");

if (user.login(enteredEmail, enteredPassword)) {
  console.log("Вхід успішний!");
} else {
  console.log("Невірний email або пароль.");
}
//4

const movie = {
  title: "Інтерстеллар",
  director: "Крістофер Нолан",
  year: 2014,
  rating: 8.6,

  isTopRated() {
    return this.rating > 8;
  }
};

console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік виходу:", movie.year);
console.log("Рейтинг:", movie.rating);

console.log("Рейтинг > 8?", movie.isTopRated());