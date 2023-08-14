// node calc.js sum 3 5 8  16 Смма
// node calc.js sub 8 5 3  0 Вычитание 
// node calc.js mult 4 3 12  144 Умножение 
// node calc.js div 12 3 2  2  Деление

// const [operator, ...args] = process.argv.slice(2);
// const numbers = args.map((el)=> Number(el))

// console.log("operation", operator);
// console.log("numbers", numbers);

// const calc =(operator, numbers)=>{
//     switch (operator) {
//         case "sum":
//         return numbers.reduce((acc,el) => acc + el);
//         case "sub":
//         return numbers.reduce((acc,el) => acc - el);
//         case "mult":
//         return numbers.reduce((acc,el) => acc * el);
//         case "div":
//         return numbers.reduce((acc,el) => acc / el);
        
    
//         default:
//         return "Unknown operetion type"
//     }
// };

// const result = calc(operator, numbers);
// console.log(result);
