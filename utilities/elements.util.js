class ElementUtil {
	isElementDisplayed(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.isDisplayed();
		} catch (error) {
			console.log("Element is not displayed yet");
		}
	}
	waitForPageLoad(timeout = 2000) {
		//2000 ms will be default timeout unless explicitly mentioned
		do {
			browser.pause(timeout);
			console.log("**********The Page is Loading**********");
			console.log(browser.execute("return document.readyState"));
		} while (
			!browser.execute(function () {
				return document.readyState == "complete";
			})
		);
	}

	isElementEnabled(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.isEnabled();
		} catch (error) {
			console.log("Element is not enabled");
		}
	}

	clickElement(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			element.click();
		} catch (error) {
			console.log("Element is not found to click");
		}
	}

	setValue(element, value) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			element.clearValue();
			element.setValue(value);
		} catch (error) {
			console.log("value is not set for the element");
		}
	}

	getText(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.getText();
		} catch (error) {
			console.log("element is not found to get text");
		}
	}

	isElementExisting(element) {
		try {
			return element.isExisting();
		} catch (error) {
			console.log("Element does not exists");
		}
	}

	isElementSelected(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.isSelected();
		} catch (error) {
			console.log("element is not selected");
		}
	}

	isElementClickable(element) {
		try {
			element.waitForEnabled({ timeout: 5000 });
			return element.isClickable();
		} catch (error) {
			console.log("element is not clickable");
		}
	}

	scrollElementIntoView(element) {
		try {
			element.scrollIntoView({});
		} catch (error) {
			console.log("element is not in view");
		}
	}

	clearInput(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			element.clearValue();
		} catch (error) {
			console.log("element value is not cleared");
		}
	}

	getElementProperty(element, property) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.getProperty(property);
		} catch (error) {
			console.log("didnt get the element property");
		}
	}

	getElementLocation(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.getLocation();
		} catch (error) {
			console.log("element location is not found");
		}
	}

	getElementAttribute(element, attributeName) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.getAttribute(attributeName);
		} catch (error) {
			console.log("element attribute is not found");
		}
	}

	getTagNameOfElement(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.getTagName();
		} catch (error) {
			console.log("didnt get element tagname");
		}
	}

	getElementValue(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.getValue();
		} catch (error) {
			console.log("didnt get the element value");
		}
	}

	isElementFocused(element) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			return element.isFocused();
		} catch (error) {
			console.log("element is not in focus");
		}
	}

	selectAttributeByValue(element, attribute, value) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			element.selectByAttribute(attribute, value);
		} catch (error) {
			console.log("element is not selected by attribute");
		}
	}

	selectElementByIndex(element, index) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			element.selectByIndex(index);
		} catch (error) {
			console.log("element is not selected by index");
		}
	}

	selectByText(element, text) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			element.selectByVisibleText(text);
		} catch (error) {
			console.log("element is not selected by visible text");
		}
	}

	dragAndDropElement(element, target) {
		try {
			element.waitForDisplayed({ timeout: 5000 });
			element.dragAndDrop(target);
		} catch (error) {
			console.log("drag and drop is not happened ");
		}
	}

	waitForClickableElement(element, timeout, reverse, timeoutMsg, interval) {
		try {
			element.waitForClickable({ timeout, reverse, timeoutMsg, interval });
		} catch (error) {
			console.log("element is not clickable");
		}
	}

	takeScreenshot(element, filename) {
		try {
			element.saveScreenshot(filename);
		} catch (error) {
			console.log("didnt take the screenshot");
		}
	}
}
module.exports = new ElementUtil();
