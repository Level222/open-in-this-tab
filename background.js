const MENU_ID = "open-in-this-tab";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: "Open in This Tab",
    id: MENU_ID,
    contexts: ["link"]
  });
});

chrome.contextMenus.onClicked.addListener(({menuItemId, linkUrl}, tab) => {
  if (menuItemId === MENU_ID && linkUrl && tab) {
    chrome.tabs.update(tab.id, {
      url: linkUrl
    });
  };
});