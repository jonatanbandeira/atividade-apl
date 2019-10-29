function cm1(){
    var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = (parseFloat(s1) + parseFloat(s2)) * parseFloat(s3);
    alert(s4.toFixed(2));
}

function cm2(){
    var s5 = document.getElementById("s5").value;
    var s6 = document.getElementById("s6").value;
    var s7 = document.getElementById("s7").value;
    var s8 = (parseFloat(s5) + parseFloat(s6)) * parseFloat(s7);
    alert(s8.toFixed(2));
}

function lec1(s4){
    var t1 = document.getElementById("t1").value;
    var t2 = document.getElementById("t2").value;
    var t3 = ((2 * parseFloat(t1) * parseFloat(t2))/s4);
    var tt = Math.sqrt(t3);
    alert(tt.toFixed(2));
}

function lec2(s4){
    var t5 = document.getElementById("t5").value;
    var t6 = document.getElementById("t6").value;
    var t7 = ((2 * parseFloat(t5) * parseFloat(t6))/s4);
    var lec2 = Math.sqrt(t7);
    alert(lec2.toFixed(2));
}

function custoManut1(s4, tt){
    a1 = (parseFloat(s4) * parseFloat(tt)/ 2);
    alert(a1.toFixed(2));
}

function custoPedido1(t2, t1, tt){
    b1 = (parseFloat(t2) * (parseFloat(t1) / tt));
    alert(b1.toFixed(2));
}

function custoTotal1(b1){
    c1 = Math.pow(b1, 2);
    alert(c1.toFixed(2));
}

function custoManut2(s8, lec2){
    a2 = (parseFloat(s8) * (parseFloat(lec2)) / 2);
    alert(a2.toFixed(2));
}

function custoPedido2(t6, t1, lec2){
    b2 = (parseFloat(t6) * (parseFloat(t1) / lec2));
    alert(b2.toFixed(2));
}

function custoTotal2(b2){
    c2 = Math.pow(b2, 2);
    alert(c2.toFixed(2));
}

function n1(t1, tt){
    n1 = (parseFloat(t1) / parseFloat(tt));
    alert(n1.toFixed(2));
}

function n2(t1, lec2){
    n2 = (parseFloat(t1) / parseFloat(lec2));
    alert(n2.toFixed(2));
}

function t1(tt, t1){
    t1 = (365 * parseFloat(tt)/ parseFloat(t1));
    alert(t1.toFixed(2));
}

function t2(lec2, t1){
    t2 = (365 * parseFloat(lec2)) / parseFloat(t1);
    alert(t2.toFixed(2));
}

function pr(t1){
    pr = (parseFloat(t1) / (365 *2));
    alert(pr.toFixed(2));
}