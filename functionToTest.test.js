import { expect } from"@jest/globals";
import { functionToTest } from"./functionToTest";

describe("To debug functionToTest", () => {
  it("should return user information for John", () => {
    expect(functionToTest({userId: "1"})).toBe("active");
  })
});