let string ="madam";
let bag="";
for(i=string.length-1;i>=0;i--){
    bag+=string[i]
}
if(string==bag) {
    console.log("pallindrome")
}
else {
    console.log("not a pallindrome")
}