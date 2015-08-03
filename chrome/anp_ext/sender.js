function sendArendaPiter(object) {


    $.ajax({
        url: "http://localhost:8080/api/v1/arendapiter/object",
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(object),
        contentType: 'application/json',
        cache: false,
        async: true,
        processData: false,
        success: function (data) {
            chrome.extension.sendMessage({
                type: "ntf",
                data: {
                    ntfid: object.sourceId
                }
            });
        },
        error: function (data, status, er) {
            chrome.extension.sendMessage(
                {
                    type: "ntfbad",
                    data: {
                        ntfid: object.sourceId,
                        error: er
                    }
                });
        }
    });
}

function sendTsnBase(object) {


    $.ajax({
        url: "http://localhost:8080/api/v1/tsnbase/object",
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(object),
        contentType: 'application/json',
        cache: false,
        async: true,
        processData: false,
        success: function (data) {
            chrome.extension.sendMessage({
                type: "ntf",
                data: {
                    ntfid: object.sourceId
                }
            });
        },
        error: function (data, status, er) {
            chrome.extension.sendMessage(
                {
                    type: "ntfbad",
                    data: {
                        ntfid: object.sourceId,
                        error: er
                    }
                });
        }
    });
}