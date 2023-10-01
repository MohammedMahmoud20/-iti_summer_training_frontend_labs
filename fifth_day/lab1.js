//removing the dublicate numbers from the array:-
    var numbers=[3,1,2,4,3,5,1];
var newarr=[]
for(var i=0;i<numbers.length;i++)
{
    if (numbers[i] in newarr)
    {
        continue;
    }else
    {
        newarr.push(numbers[i]);
    }
}
console.log(newarr);
///////////////////////////////////////////////////////////
//sorting the array accending :-
    numbers.sort(function (a, b) {
         if (a > b)
          return 1;
        else if (a < b)
        return -1;
    else
    return 0;
})
    numbers.sort();
/////////////////////////////////////////////////////////////
// filtering the numbers longer than 50 (build-in function):-
var result = numbers.filter(function (num) {
   return num > 50;

})
console.log(result);
///////////////////////////////////////////////////////////////
// filtering the numbers longer than 50 (user define  function):-
function filterNumbers(numbers) {
    var newarr = [];
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 50) {
        newarr.push(numbers[i]);
      }
    }
    return newarr;
  }
  var filteredarr = filterNumbers(numbers);
  console.log(filteredarr);
////////////////////////////////////////////////////////////////
//displaying the min and max numbers in the array (user-defined function):-
function min_num(numbers){
    var minn=numbers[0];
    for(var i=1;i<numbers.length;i++)
    {
        if(minn>numbers[i])
        {
            minn=numbers[i];
        }
    }
    return minn;
}
function max_num(numbers){
    var maxx=numbers[0];
    for(var i=1;i<numbers.length;i++)
    {
        if(maxx<numbers[i])
        {
            maxx=numbers[i];
        }
    }
    return maxx;
}
var _min=min_num(numbers);
var _max=max_num(numbers);
console.log(_min);
console.log(_max)
////////////////////////////////////////////////////////////////
//displaying the min and max numbers in the array (build-in function):-
const min_and_max = (numbers) => {
    const _min_ = Math.min(...numbers);
    const _max_ = Math.max(...numbers);
    return { _min_, _max_ };
  };
var minmax=min_and_max(numbers);
console.log(minmax);