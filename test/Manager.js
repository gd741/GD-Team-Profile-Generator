// Require Manager
const Manager = require("../lib/Manager");

test("add officeNumber prop on Manager subclass", () => {
    const officeNumberTest = 15;
    const managerTest = new Manager("Groovy Tom", 30001, "test@test.com", officeNumberTest)
    expect(managerTest.officeNumber).toEqual(officeNumberTest);
});

test("getRole prop on manager class", () => {
    const getRoleTest = "Manager";
    const managerTest = new Manager("Joe Jims", 30001, "test@test.com", getRoleTest);
    expect(managerTest.getRole()).toBe(getRoleTest);
});

test("getOfficeNumber prop on manager class", () => {
    const getOfficeNumberTest = 15;
    const managerTest = new Manager("Joe Jims", 30001, "test@test.com", getOfficeNumberTest);
    expect(managerTest.getOfficeNumber()).toBe(getOfficeNumberTest);
});
