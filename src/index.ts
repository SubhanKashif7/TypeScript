const total_marks: number = 764;
const got_marks: number = 80;

const percentageCalculator = (total: number = 100,got: number = 0) : number => {
    let per: number = got_marks/total_marks*100;
    return parseInt(per.toFixed(2))
};  


console.log(percentageCalculator(total_marks,got_marks));

export {}

