var fib = function(n) {
    if (n == 0){
	return 0;
    }

    if (n == 1){
	return 1;
    }

    else {
	return fib(n - 2) + fib(n - 1);
    }    
}

console.log(fib(6));
console.log(fib(8));

var gcd = function(a, b) {
    if (a == 0){
	return b;
    }
    else{
	return gcd(b % a , a);
    }
}

console.log(gcd(5, 10));
console.log(gcd(15, 15));
console.log(gcd(56, 29));

var randomStudent = function(){
    var list = ["bob", "bib", "bab", "bub", "beb", "byb"];
    return list[Math.floor(Math.random() * list.length)]
}

console.log(randomStudent());

