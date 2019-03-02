function functionreturnfunc(key){
			return function(obj) {
				return obj[key];
			}
		}
    function functionacceptfunc(arg,passedFunc) {
			for(i=0; i<arg;i++) {
				if(passedFunc(i)){
					console.log(i);
				}
			}
		}
		function isOdd(i){
			if(i%2==1){
				return true;
			} else {
				return false;
			}
		}
		obj = {'id':123, 'name':'Higher Order Function Example', 'complexity':'high'}
		outerFuncObj = functionreturnfunc('id');
		console.log(outerFuncObj(obj)); // returns 123
		outerFuncObj = functionreturnfunc('complexity');
		console.log(outerFuncObj(obj)); // returns high
		functionacceptfunc(10, isOdd);
		obj = {'id':123, 'name':'Higher Order Function Example', 'complexity':'high'}
		outerFuncObj = functionreturnfunc('id');
		console.log(outerFuncObj(obj)); // returns 123
		outerFuncObj = functionreturnfunc('complexity');
		console.log(outerFuncObj(obj)); // returns high
