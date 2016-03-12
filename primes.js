console.log("loaded");

(function() {
var input = document.getElementById("in");
console.log(input);
input.value=47;
	var output = document.getElementById("out");
	var go = document.getElementById("go");

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
	go.onclick= function() {
		output.innerHTML = '';
		var primes = findPrimes(input.value);
		primes.forEach(function (prime) {
			var entry = document.createElement("span");
			entry.textContent = prime;
			output.appendChild(entry);
		});
	}
})();
