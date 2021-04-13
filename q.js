function foo(a,b,c,d) { 
    console.log(arguments);
    var arg = Array.prototype.slice.call(arguments); 
    console.log(arg); 
    console.log(typeof arguments);
    console.log(arguments);
 } 
 new foo("a","b","c","f"); 