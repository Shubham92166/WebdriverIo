class BrowserUtil {
  switchToWindowContaining = (title) => {
    let AllWindowHandles = browser.getWindowHandles();
    let currentWindowHandle = browser.getWindowHandle();
    for (let handle of AllWindowHandles) {
      browser.switchToWindow(handle);
      if (browser.getTitle().includes(title)) return;
    }
    browser.switchToWindow(currentWindowHandle);
    return;
  };

  maximizingWindow() {
    browser.maximizeWindow();
  }

  getTitle() {
    return browser.getTitle();
  }

  reloadPage() {
    browser.refresh();
  }
}

module.exports = new BrowserUtil();
