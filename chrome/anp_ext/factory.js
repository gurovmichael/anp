var TSN_ROOMS       = 3;
var TSN_ADDRESS     = 4;
var TSN_METRO       = 5;
var TSN_FLOOR       = 6;
var TSN_SO          = 7;
var TSN_SJ          = 8;
var TSN_SK          = 9;
var TSN_PHONE       = 10;
var TSN_FURNITURE   = 11;
var TSN_FRIDGE      = 12;
var TSN_WASHMACHINE = 13;
var TSN_PRICE       = 14;
var TSN_TIME        = 15;
var TSN_AGENT       = 16;
var TSN_CONTACT     = 17;
var TSN_INFO        = 18;

function createArendaPiter(e) {

    var object = {
        sourceId: e.children[1].children[0].innerHTML,
        deal: e.children[2].innerHTML,
        address: e.children[3].innerHTML,
        metro: e.children[4].innerHTML,
        so: e.children[5].innerHTML,
        sn: e.children[6].innerHTML,
        sk: e.children[7].innerHTML,
        floor: e.children[8].innerHTML,
        toilet: e.children[9].innerHTML,
        type: e.children[10].innerHTML,
        price: e.children[11].innerHTML,
        condition: e.children[12].innerHTML,
        info: e.children[13].innerHTML,
        raw: btoa(e.parentElement.innerHTML)
    };

    return object;
}

function createTsnBase(e) {


    var object = {
        sourceId: e.children[0].children[0].value,
        districtAddress: e.children[TSN_ADDRESS].children[0].alt,
        rooms: e.children[TSN_ROOMS].innerHTML,
        metro: e.children[TSN_METRO].innerHTML,
        floor: e.children[TSN_FLOOR].innerHTML,

        so: e.children[TSN_SO].innerHTML,
        sn: e.children[TSN_SJ].innerHTML,
        sk: e.children[TSN_SK].innerHTML,

        phone: e.children[TSN_PHONE].innerHTML,
        furniture: e.children[TSN_FURNITURE].innerHTML,
        fridge: e.children[TSN_FRIDGE].innerHTML,
        washMachine: e.children[TSN_WASHMACHINE].innerHTML,
        price: e.children[TSN_PRICE].innerHTML,
        time: e.children[TSN_TIME].innerHTML,
        agent: e.children[TSN_AGENT].children[0].innerHTML,
        contact: e.children[TSN_CONTACT].innerHTML,
        info: e.children[TSN_INFO].innerHTML,
        raw: btoa(e.parentElement.innerHTML)

    };

    return object;
}

