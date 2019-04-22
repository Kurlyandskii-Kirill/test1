let money = +prompt("Какой Ваш месячный бюджет?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
budget: money,
timeData: time,
expenses: {},
optionalsExpenses: {},
income: [],
saving: false
};

for (let i = 0; i < 2; i++) {
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof(a)=== "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != "" && a.length < 50){
        console.log("done");
    appData.expenses[a] = b;
    } else{
        console.log("eror");
    }
}

// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof(a)=== "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != "" && a.length < 50){
//         console.log("done");
//     appData.expenses[a] = b;
//     } else{
//         console.log("eror");
//         i++;
//     }
// }

// let i = 0;
//  do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof(a)=== "string" && (typeof(a)) !=null && (typeof(b)) !=null && a != "" && a.length < 50){
//         console.log("done");
//         i++;
//      appData.expenses[a] = b;
//     } else{
//         console.log("eror");
//     }
//  }  while(i<2);

 appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 5000){
    console.log("Маленький уровень достатка");
} else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 10000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 100000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка!");
}