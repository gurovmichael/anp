function isArendaPiterRow(e) {
    var srcElement = e.srcElement;
    if (srcElement.nodeName == 'TD' && srcElement.parentElement.parentElement.parentElement.className == 'tbp_01' && srcElement.parentElement.children.length==15 && srcElement.parentElement.className !='trp_head') {
        return true;
    }
    return false;
}


function isTsnBaseRow(e) {
    var srcElement = e.srcElement;
    if (srcElement.nodeName == 'TD' && srcElement.parentElement.parentElement.parentElement.className == 'results' && srcElement.parentElement.children.length==19 && srcElement.parentElement.className !='restop') {
        return true;
    }
    return false;
}