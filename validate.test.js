// validateForm.test.js
//validating using jest
let {validateForm }= require("./script");

describe("validateForm", () => {
    test("should return 'All fields should be entered' if any field is empty", () => {
        const result = validateForm("", "john@example.com", "1234567890", "password", "password");
        expect(result).toBe("All fields should be entered");
    });

    test("should return 'Password mismatch' if passwords do not match", () => {
        const result = validateForm("John", "john@example.com", "1234567890", "password123", "password456");
        expect(result).toBe("Password mismatch");
    });

    test("should return 'Enter a valid email' if email is invalid", () => {
        const result = validateForm("John", "invalidemail", "1234567890", "password123", "password123");
        expect(result).toBe("Enter a valid email");
    });

    test("should return 'Success' if all inputs are valid", () => {
        const result = validateForm("John", "john@example.com", "1234567890", "password123", "password123");
        expect(result).toBe("Success");
    });
});
