function fizzBuzz(number){ 
     this.number = number
    for (n = 1; n <= number; n++){
        if((n % 3 === 0) && (n % 5 === 0)){
            console.log('Fizzbuzz')
        }
        else if(n % 3 === 0){
            console.log('Fizz')
        }
        else if (n % 5 === 0){
            console.log('Buzz')
        }
        else{
            console.log(n)
        }
    }
}

function nextPrime(number){
    this.number = number
    looping = true
    while (looping){
        let isPrime = true;

        for(n = number - 1; n > 2; n--){
            if(number % n === 0){
                isPrime = false;
            }
           
        }

        if (isPrime === false){
            number ++
        }
        else{
            console.log(number)
            looping = false
        }

    }
}

nextPrime(10)
