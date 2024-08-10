function Prime(max)
{
	var temp = [], i, j, primes = [];

	for(i = 2; i <= max; ++i)
	{
		if(!temp[i])
		{
			// i has not been marked -- it is prime
			primes.push(i);
			for(j = i << 1; j <= max; j += i)
			{
				temp[j] = true;
			}
		}
	}
	return primes;
}
Prime(50);