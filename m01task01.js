// Task01 - Write a code that returns any string value.
// For example, next code return a boolean value: 
// return false;
  //a*b+c*d+e=g
    function question (a,b,c) {
    	var discriminant = b*b - 4*a*c;
        if (discriminant < 0){ 
      	return 'error';
        }
     		if (discriminant == 0 ) {
     	    var u = (-b)/2*a;
    	    return u;
  	    	}
   		    	 else {
   		    	 var u = (-b + Math.sqrt(discriminant))/2*a;
    		     var v = (-b - Math.sqrt(discriminant))/2*a;
   		         return [u,v];
 			     }

}
console.log( question(1,int,3))

    var i;
    for( i = 0; i<10; i++) {
    console.log(i)
    }

        var obj = {
        name: 'Pavlo',
        age:  '19',
        student: 'Yes',
        car: 'No'
        };

            var guy;
            for( guy in obj) {
            console.log( guy + ' : ' + obj[guy])
            }
                var n = -20;
                while (n<20) {
                    console.log( n++ )
                }
                

    var int = function (a,b,c) {
        if (a >=0 && b>=0 && c == null){
        var s = a*b;
        return s;
             } if (a >=0 && b>=0 && c>= 0)
             {
             var p = (1/2)*a*b*Math.sin(c);
             return p;
            }
    }
    console.log( int(1,2,30))
 
 
 