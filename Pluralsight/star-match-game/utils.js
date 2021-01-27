export var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

// Color Theme
export var colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue"
};

// Math science
export var utils = {
  // Sum an array
  sum: function sum(arr) {
    return arr.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
  },

  // create an array of numbers between min and max (edges included)
  range: function range(min, max) {
    return Array.from({ length: max - min + 1 }, function (_, i) {
      return min + i;
    });
  },

  // pick a random number between min and max (edges included)
  random: function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  },

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: function randomSumIn(arr, max) {
    var sets = [[]];
    var sums = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0, len = sets.length; j < len; j++) {
        var candidateSet = sets[j].concat(arr[i]);
        var candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  }
};