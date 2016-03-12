console.log("loaded");

(function() {
	var input = document.getElementById("in");
	input.value=47;
	var output = document.getElementById("out");
	var go = document.getElementById("go");
	var actionInputs = document.getElementsByName("action");

	function radioValue(inputs) {
		var result = null;
		for (var i=0; i<inputs.length; i++) {
			var input = inputs[i];
			if(input.checked) {
				result = input.value;
			}
		}

		return result;
	}

	function outputValue(value) {
		var entry = document.createElement("span");
		entry.textContent = value;
		output.appendChild(entry);
	}

	function findPrimes(max) {
		if (max < 2) {
			return [];
		}

		var primes = [2];
		var n = 3;
		while(n<=max) {
			var isPrime = true;
			primes.forEach(function(prime) {
				if (n % prime === 0) {
					isPrime = false;
				}
			});
			if (isPrime) {
				primes.push(n);
			}
			n++;
		}
		return primes;
	}

function findPrimeFactors(number) {
	var primeFactors = [];
	while (number > 1) {
		var primes = findPrimes(Math.sqrt(number));
		var factor = primes.reduce(function(match, prime) {
			if (!match && number % prime === 0 ) {
				return prime;
			} else {
				return match;
			}
		}, null);
		if (factor === null) {
			factor = number;
		}
		number = number / factor;
		primeFactors.push(factor);
	}
	return primeFactors;
}

	go.onclick= function() {
		output.innerHTML = '';

		var action=radioValue(actionInputs);
		if (action==="primes"){

			var primes = findPrimes(input.value);
			primes.forEach(function (prime) {
				outputValue(prime);
			});
		} else if(action==="factors") {

			var primeFactors = findPrimeFactors(input.value);
			primeFactors.forEach(function (primeFactor) {
				outputValue(primeFactor);
			});
		}
	}
})();
