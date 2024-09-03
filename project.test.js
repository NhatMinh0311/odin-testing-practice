import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./project";

test("all characters are lowercase", () => {
    expect(capitalize("abc")).toBe("Abc");
});

test("string includes some uppercase char", () => {
    expect(capitalize("aBc")).toBe("Abc");
});

test("string was capitalized", () => {
    expect(capitalize("Abc")).toBe("Abc");
});

test("multi-char string", () => {
    expect(reverseString("xYzt")).toBe("tzYx");
});

test("no char string", () => {
    expect(reverseString("")).toBe("")
});

test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 10 - 6 to equal 4", () => {
    expect(calculator.subtract(10, 6)).toBe(4);
});

test("multiply 2 * 3 to equal 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test("divide 20 / 10 to equal 2", () => {
    expect(calculator.divide(20, 10)).toBe(2);
});

test("wrap from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("follow original lettercase", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("unchange punctuations, spaces, and other non-alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("multi-item array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
});

test("one-item array", () => {
    expect(analyzeArray([1])).toStrictEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
});
