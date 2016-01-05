exports.add = function(){
	var sum=0,i=0,args = arguments,len=args.length;
	console.log(args);
	console.log('len ',len);
	while(i<len){
		sum += args[i++];
	}
	return sum;
}