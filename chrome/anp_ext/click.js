// Mouse listener for any move event on the current document.
document.addEventListener('click', function (e) {
    var srcElement = e.srcElement;

    if (isArendaPiterRow(e))
    {
        var obj = createArendaPiter(srcElement.parentElement);
        sendArendaPiter(obj);
    }
    else (isTsnBaseRow(e))
    {
        var obj = createTsnBase(srcElement.parentElement);
        sendTsnBase(obj);

    }


});