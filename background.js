chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.includes("news.ycombinator.com/item")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: collapseAllComments
    });
  }
});

function collapseAllComments() {
  // HN's toggle links have class "togg" - click all expanded ones
  const toggles = document.querySelectorAll("a.togg");
  let collapsed = 0;
  toggles.forEach((toggle) => {
    // Expanded comments show [–], collapsed show [+N more]
    if (toggle.innerText.includes("\u2013")) {
      toggle.click();
      collapsed++;
    }
  });
  console.log("HN Collapse: collapsed " + collapsed + " comments");
}
