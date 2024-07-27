import { describe } from "node:test";
import validator from "../src/lib/validator";

interface ExampleError {
  error: string;
  number: number;
}

const expectToIncludeErrorWhenInvalid = (example: ExampleError) => {
  const { error, number } = example;
  it(`like ${number}`, () => {
    expect(validator(number)).toContain(error);
  });
};

describe("A Validator", () => {
  it("will return no errors for valid numbers", () => {
    expect(validator(7)).toStrictEqual([]);
  });

  describe("Will return error.nonpositive for not strictly positive numbers:", () => {
    [
      { error: "error.nonpositive", number: 0 },
      { error: "error.nonpositive", number: -2 },
    ].forEach(expectToIncludeErrorWhenInvalid);
  });

  describe("will return error.three for divisible by 3 numbers:", () => {
    [
      { error: "error.three", number: 3 },
      { error: "error.three", number: 15 },
    ].forEach(expectToIncludeErrorWhenInvalid);
  });

  describe("will return error.five for divisible by 5 numbers:", () => {
    [
      { error: "error.five", number: 5 },
      { error: "error.five", number: 15 },
    ].forEach(expectToIncludeErrorWhenInvalid);
  });
});
