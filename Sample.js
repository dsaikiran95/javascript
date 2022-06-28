function addNum(a,b){
    console.log("fuction addNum is called");
    return a+b;
}

var anon = function(a,b){

    console.log("anonymous function is called");
    return a+b;
}

anon(5,6);

setTimeout(function(){console.log("anonymous function call in setTimeout")},3000);

