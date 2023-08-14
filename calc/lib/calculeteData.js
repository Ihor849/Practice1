const calc =(operator, numbers)=>{
    switch (operator) {
        case "sum":
        return numbers.reduce((acc,el) => acc + el);
        case "sub":
        return numbers.reduce((acc,el) => acc - el);
        case "mult":
        return numbers.reduce((acc,el) => acc * el);
        case "div":
        return numbers.reduce((acc,el) => acc / el);
        
    
        default:
        return "Unknown operetion type"
    }
};

module.exports = calc