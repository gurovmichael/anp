chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
    switch (request.type) {
        case "ntf":


            var opt = {
                type: "basic",
                title: "All ok",
                message: "Data succcess sended",
                iconUrl: "img/48ok.png"
            }


            chrome.notifications.create(request.data.ntfid, opt, function () {
                setTimeout(function () {
                    chrome.notifications.clear(request.data.ntfid);
                }, 900);
            });


            break;

        case "ntfbad":

            var opt = {
                type: "basic",
                title: "ERROR",
                message: "server not found",
                iconUrl: "img/48bad.png"
            }


            chrome.notifications.create(request.data.ntfid, opt, function () {
                setTimeout(function () {
                    chrome.notifications.clear(request.data.ntfid);
                }, 1500);
            });


            break;
    }
    return true;
});


