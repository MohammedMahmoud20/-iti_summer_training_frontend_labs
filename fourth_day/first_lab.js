str="the quick brown fox"
var arr = str.split(' ');
   for (var i = 0; i < arr.length; i++) {
       arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1); 
   }
  var newstr=''
  for(var i=0;i<arr.length;i++)
  {
    newstr+=arr[i]+" ";
  }
console.log(newstr)