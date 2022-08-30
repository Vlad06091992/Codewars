function Event() {

    this.functions = []

    this.subscribe = function (func) {
        this.functions.push(func)
    }

    this.unsubscribe = function (func) {
        let ind = this.functions.indexOf(func)
        if (ind == -1) return this.functions
        this.functions.splice(ind, 1)
        return this.functions
    }

    this.emit = function (...args) {
console.log(args)

        
        this.functions.forEach(el => el.apply(null, args))

    }
}

let test = new Event




test.subscribe(showArgs);
test.emit(1, 'foo', true)

console.log(test.functions)

function showArgs(args){
    console.log(args)
}

/*var event = new Event();
   
   function f() {
       f.calls = (f.calls || 0) + 1;
       f.args = Array.prototype.slice.call(arguments);
   }

   event.subscribe(f);
   event.emit(1, 'foo', true);
   
   Test.expect(f.calls === 1); // calls a handler
   Test.assertSimilar(f.args, [1, 'foo', true]); // passes arguments
   
   event.unsubscribe(f);
   event.emit(2);
   
   Test.expect(f.calls === 1); //no second call
   */