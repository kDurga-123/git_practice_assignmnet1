let n=5;
let count=0;
for(let i=2;i<=n;i++) {
    if(n%i==0) {
        count++
    }
}
if(count==1) {
    console.log("prime number")
}
else {
    console.log("not a prime number")
}