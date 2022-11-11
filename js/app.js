console.log("toq sonlar yig'indisi");
var sum=0;
for(i=1; i<=100;i=i+1){
    if (i%2==0) {
        continue
    }
    sum=sum+i

}
console.log(sum);


console.log("juft sonlar yig'indisi");
var sum=0;
for (i=1;i<=100; i=i+1){
    if (i%2==1) {
        continue
    }
    sum=sum+i;
}
console.log(sum);