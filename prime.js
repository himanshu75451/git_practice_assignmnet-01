

for(let i=1; i<=50; i++){
    let factor=0;
    for(let x=1; x<=i; x++){
        if(i%x===0){
            factor++;
        }
    }
    if(factor==2){
        console.log(x, "is prime");
    }
}