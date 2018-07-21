/* Author: Rahul Mehra
    Github Repo:
*/

var jaymeh = {
    isOneOrMore: function(data, count){
        count = parseInt(count);
        
        if(data[data.length - 1] === "y"){
            if(count === 1){
                return count + " " + data; 
            }else{
                return count + " " + data.substr(0, data.length-1) + "ies"; 
            }
        }

        if(count === 1){
            return count + " " + data; 
        }else{
            return count + " " + data + "s"; 
        }
    },
    getAbsoluteUrl: function() {
        var a;
    
        return function(url) {
            if(!a) a = document.createElement('a');
            a.href = url;
    
            return a.href;
        };
    },
    once: function(fn, context) { 
        var result;
    
        return function() { 
            if(fn) {
                result = fn.apply(context || this, arguments);
                fn = null;
            }
    
            return result;
        };
    }
}





