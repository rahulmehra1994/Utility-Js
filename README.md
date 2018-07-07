# utility-js
It is a helper library for common methods and data manipulation.

#Usage
Just Download it and include it in your project and rerence it.

#Methods

##isOneOrMore(string, number); // appends character "s" to the string passed on the basis of the number passed 

##getAbsoluteUrl('/your-path'); // retruns absolute url with your applied path => https://host/your-path


##once(fn, context) 
// Usage
var canOnlyFireOnce = once(function() {
	console.log('Fired!');
});

canOnlyFireOnce(); // "Fired!"
canOnlyFireOnce(); // nada
