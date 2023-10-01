//writing a function to get the sum and product of the array (using eval):-
var numbers=[3,1,2,4,3,5,1];
function sumAll(numbersArray) {
    const sum = eval(numbersArray.join('+'));
    const product = eval(numbersArray.join('*'));
    return { sum, product };
  }
var result=sumAll(numbers);
console.log(result);
///////////////////////////////////////////////////////////////
//writing a function to get the sum and product of the array (using eval and arguments):-
function sumAll() {
    const numbersArray = Array.from(arguments);
    const sum = eval(numbersArray.join('+'));
    const product = eval(numbersArray.join('*'));
    return { sum, product };
  }
  const res = sumAll(3,1,2,4,3,5,1);
console.log(res);
///////////////////////////////////////////////////////////
// Writing a function to get the month name from a particular date :-
function getMonth(date) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    const monthIndex = date.getMonth();
    const month = monthNames[monthIndex];
    return month;
  }
  const _Date = new Date("2023-09-11");
  const month = getMonth(_Date);
  console.log(month);
//////////////////////////////////////////////////////////
// Writing a function that returns random array of numbers between 1:10 :-
function rondom_arr(){
    var arr=[]
    while(arr.length!=8)
    {
        var rand=Math.floor(Math.random() * 10) + 1;
        if(!arr.includes(rand))
        {
            arr.push(rand);
        }
    }
    return arr;
}
var rand_arr=rondom_arr();
console.log(rand_arr);