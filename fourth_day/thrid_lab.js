var str="Web Development Tutorial"
var counter=0
var newstr=""
var arr=str.split(" ")
for(var i=0;i<arr.length;i++)
{
   if (counter< arr[i].length){
     counter=arr[i].length;
     newstr=arr[i];
   }
}
console.log(newstr)