//Nome : UT
//desloca y em uma determinada unidade de px.
var UT = (E,upx) => {
    var E1 = E,d = upx + 'px';
    E1.style.top = d;
    return d
  };

module.exports = UT;