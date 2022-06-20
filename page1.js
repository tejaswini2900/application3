console.log("hello");

function evenNumber(n){
    if(n%2 == 0){
        console.log(n+"= is even number")
    }else{
        console.log(n+"= is odd number")
    }
}
evenNumber(10);
evenNumber(11);

function oddNumber(n){
    if(n%2 != 0){
        console.log(n+"= is odd number")
    }else{
        console.log(n+"= is even number")
    }
}
oddNumber(550);
oddNumber(11);

function subNum(n1,n2){
    console.log(`${n1}+${n2}=${n1+n2}`)
}
subNum(20,10);