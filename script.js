function firstNonRepeatedChar(str) {
 // Write your code here

	let ans="";
	let cnt=0;
	const map = new Map();
	for(let i=0;i<str.length;i++)
	{
		for(let j=i;j<str.length;j++)
		{
			if(str[i]==str[j] && !map.has(str[i]))
			{
				cnt++;
				
			}
		}
	
		map.set(str[i] , cnt);
		cnt=0;
	}

	for(let i=0;i<str.length;i++)
		{
			if(map.get(str[i])==1)
			{
				
				return str[i];
			}
		}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 


