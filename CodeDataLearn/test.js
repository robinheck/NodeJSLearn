
var Class = {};
Class.create = function(methods) {
    var Clz = methods.initialize;
    for(var mth in methods) {
        if(mth != 'initialize') {
            Clz.prototype[mth] = methods[mth];
        }
    }
    return Clz;
};

var Circle = Class.create({
    initialize : function(x, y, r) { // 作為建構式
        this.x = x;
        this.y = y;
        this.r = r;
    },
    area : function() {
        return Math.PI * Math.pow(this.r, 2);
    },
    toString : function() {
        var text = [];
        for(var p in this) {
            if(typeof this[p] != 'function') {
                text.push(p + ':' + this[p]);
            }
        }
        return '[' + text.join() + ']';
    }
});
 
var circle = new Circle(10, 10, 5);

console.log(circle.toString())