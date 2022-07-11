// Require Employee
const Employee = require("../lib/Employee");

test("add additional employee class", () => {
    const employeeTest = new Employee;
    expect(typeof(employeeTest)).toBe("object");
});

test("name prop on employee class", () => {
    const nameTest = "Joe Jims"
    const employeeTest = new Employee(nameTest);
    expect(employeeTest.name).toBe(nameTest); 
});

test("id prop on employee class", () => {
    const idTest = 30;
    const employeeTest = new Employee("Joe Jims", idTest);
    expect(employeeTest.id).toBe(idTest);
});

test("email prop on employee class", () => {
    const emailTest = "";
    const employeeTest = new Employee("Joe Jims", 1, emailTest);
    expect(employeeTest.email).toBe(emailTest);
});

test("getName prop on employee class", () => {
    const getNameTest = "Joe Jims";
    const employeeTest = new Employee(getNameTest);
    expect (employeeTest.email).toBe(emailTest);
});

test("getId prop on employee class", () => {
    const getIdTest = 30001;
    const employeeTest = new Employee("Joe Jims", getEmailTest);
    expect(employeeTest.getId()).toBe(getIdTest);
});

test("getEmail prop on employee class", () => {
    const getEmailTest = "testing@testing.com";
    const employeeTest = new Employee("Joe Jims", 30001, getEmailTest);
    expect(employeeTest.getEmail()).toBe(getEmailTest);

});

test("getRole prop on employee class", () => {
    const getRoleTest = "Employee";
    const employeeTest = new Employee("Joe Jims", 30001, "testing@testing.com", getRoleTest);
    expect(employeeTest.getRole()).toBe(getRoleTest);
});

