chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "data_load") {
            let urls = [];
            $('div.srg')
                .children('div.g')
                .children('div')
                .children('div.rc')
                .children('div.r')
                .children('a')
                .each(function () {
                    urls.push(this.href);
                });
            chrome.runtime.sendMessage({
                "message": "data_ready",
                "url_list": urls
            });
        }
    }
);