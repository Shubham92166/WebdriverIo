const { expect } = require('chai');

class AssertUtil {
  validateIfTrue(element, msg) {
    assert.isTrue(element, msg);
  }

  validateIfEqual(actualValue, expectedValue, msg) {
    assert.equal(actualValue, expectedValue, msg);
  }

  validateIfNotEqual(actualValue, expectedValue, msg) {
    assert.notEqual(actualValue, expectedValue, msg);
  }

  validateIfStrictEqual(actualValue, expectedValue, msg) {
    assert.strictEqual(actualValue, expectedValue, msg);
  }

  validateIfNotStrictEqual(actualValue, expectedValue, msg) {
    assert.notStrictEqual(actualValue, expectedValue, msg);
  }

  validateIfDeepEqual(actualValue, expectedValue, msg) {
    assert.deepEqual(actualValue, expectedValue, msg);
  }

  validateIfNotDeepEqual(actualValue, expectedValue, msg) {
    assert.notDeepEqual(actualValue, expectedValue, msg);
  }

  validateIfAbove(valueToCheck, valueToBeAbove, msg) {
    assert.isAbove(valueToCheck, valueToBeAbove, msg);
  }

  validateIfIsAtLeast(valueToCheck, valueToBeAtLeast, msg) {
    assert.isAtLeast(valueToCheck, valueToBeAtLeast, msg);
  }

  validateIfLess(valueToCheck, valueToBeBelow, msg) {
    assert.isBelow(valueToCheck, valueToBeBelow, msg);
  }

  validateIfIsAtMost(valueToCheck, valueToBeAtMost, msg) {
    assert.isAtMost(valueToCheck, valueToBeAtMost, msg);
  }

  validateIfIsFalse(value, msg) {
    assert.isFalse(value, msg);
  }

  validateIfIsNotFalse(value, msg) {
    assert.isNotFalse(value, msg);
  }

  validateIfIsNull(value, msg) {
    assert.isNull(value, msg);
  }

  validateIfIsNotNull(value, msg) {
    assert.isNotNull(value, msg);
  }

  validateIfExists(value, msg) {
    assert.exists(value, msg);
  }

  validateIfNotExists(value, msg) {
    assert.notExists(value, msg);
  }

  validateIfIsUndefined(value, msg) {
    assert.isUndefined(value, msg);
  }

  validateIfIsDefined(value, msg) {
    assert.isDefined(value, msg);
  }

  validateIfFunction(value, testMsg) {
    assert.isFunction(value, testMsg);
  }

  validateIfNotFunction(value, msg) {
    assert.isNotFunction(value, msg);
  }

  validateIfIsObject(value, msg) {
    assert.isObject(value, msg);
  }

  validateIfIsNotObject(value, msg) {
    assert.isNotObject(value, msg);
  }

  validateIfArray(value, msg) {
    assert.isArray(value, msg);
  }

  validateIfNotArray(value, msg) {
    assert.isNotArray(value, msg);
  }

  validateIfString(value, msg) {
    assert.isString(value, msg);
  }

  validateIfNotString(value, msg) {
    assert.isNotString(value, msg);
  }

  validateIfNumber(value, msg) {
    assert.isNumber(value, msg);
  }

  validateIfNotNumber(value, msg) {
    assert.isNotNumber(value, msg);
  }

  validateIfFinite(value, msg) {
    assert.isFinite(value, msg);
  }

  validateIfBoolean(value, msg) {
    assert.isBoolean(value, msg);
  }

  validateIfNotBoolean(value, msg) {
    assert.isNotBoolean(value, msg);
  }

  validateIfElementListContainsText(elemList, textToValidate) {
    let textList = elemList.map((elem) => elem.getText());
    for (let text of textList)
      expect(
        text,
        `${textToValidate} is not present in ${text}`
      ).to.have.contain(textToValidate);
  }
}

module.exports = new AssertUtil();
