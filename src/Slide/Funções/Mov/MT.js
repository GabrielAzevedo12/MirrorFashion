//Nome : Movimento para cima
let MT = (ElementoHtml,QM,v) => {
    var ElementoHtml= ElementoHtml, QM = QM, pos1 = 0,v = v;
    let ExcMov = setInterval(frame,20);
    function frame() {
    if((pos1 === QM)) {
        clearInterval(ExcMov);
        console.log('O movimento do '+""+ElementoHtml+''+'parou!!')
    }
else  {
        pos1 = pos1+v;
        ElementoHtml.style.bottom = pos1 + 'px';
    }
}
};

module.exports = MT