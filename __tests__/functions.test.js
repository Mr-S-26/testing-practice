const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('../function');

test('capitalize function capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
});

test('reverseString function reverses the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
});

test('calculator object performs basic arithmetic operations', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.multiply(4, 3)).toBe(12);
    expect(calculator.divide(8, 2)).toBe(4);
    expect(calculator.divide(1, 0)).toBe(Infinity); // Handling divide by zero
});

test('caesarCipher function shifts characters correctly', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('123', 3)).toBe('123'); // Non-alphabetical characters remain unchanged
});

test('analyzeArray function returns correct analysis of array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});