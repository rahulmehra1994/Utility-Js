/* Author: Rahul Mehra
    Github Repo:
*/

export function isOneOrMore(data, count){
    count = parseInt(count);
    if(count === 1){
        return count + " " + data; 
    }else{
        return count + " " + data + "s"; 
    }
}