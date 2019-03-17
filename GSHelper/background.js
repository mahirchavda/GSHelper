chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "data_load"
        });
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "data_ready") {
            request.url_list.forEach(function (value) {
                chrome.tabs.create({
                    "url": value,
                    "active": false
                });
            });
        }
    }
);