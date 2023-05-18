// Nome : UL
//desloca x em uma determinada unidade de px.

var UL = (E,upx) => {
    var E1 = E,d = upx + 'px';
    E1.style.left = d;
    return d
};

module.exports = UL;