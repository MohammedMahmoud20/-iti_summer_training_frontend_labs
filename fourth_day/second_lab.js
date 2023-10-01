var str="thequickbrownfoxjumpsoverthelazydog";
 var newstr="";
 for (var i=0;i< str.length;i++)
 {
    if(newstr.indexOf(str.charAt(i))==-1)
    {
        newstr += str[i];
    }
 }
console.log(newstr)