/* Author: Rahul Mehra
    Github Repo:
*/

var isOneOrMore = function(data, count){
    count = parseInt(count);
    if(count === 1){
        return count + " " + data; 
    }else{
        return count + " " + data + "s"; 
    }
}


var getAbsoluteUrl = (function() {
	var a;

	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;

		return a.href;
	};
})();


