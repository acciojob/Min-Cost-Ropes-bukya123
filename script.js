function mincost(arr)
{ 
//write your code here
// return the min cost
  arr.sort();
	let sum=arr[0];
	int ans=0;
	for(let i=1;i<arr.length;i++){
		sum+=arr[i];
		ans+=sum;
	}
	return ans;
}

module.exports=mincost;
