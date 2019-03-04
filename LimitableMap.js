var LimitableMap = function (limit) {
  this.limit = limit || 10;
  this.map = {};
  this.keys = [];
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

LimitableMap.prototype.set = function (key, value) {
  var map = this.map;
  var keys = this.keys;
  if(!hasOwnProperty.call(map,key)){
    if(keys.length === this.limit){
      var firstKey = this.keys.shift();
      delete map[firstKey];
    }
  }
  map[key] = value
}

LimitableMap.prototype.get = function (key) {
  return this.map[key];
}
const testMap = new LimitableMap();
testMap.set('a',1)
testMap.set('b',2)
console.log(testMap.get('a'))
console.log(testMap.get('b'))
module.exports = LimitableMap