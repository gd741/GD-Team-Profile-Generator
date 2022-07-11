// Require Intern
const Intern = require("../lib/Intern");

test("add school prop on Intern subclass", () => {
    const schoolTest = "USYD";
    const internTest = new Intern("Joe Jims", 30001, "test@test.com", schtestoolTest)
    expect(internTest.school).toEqual(schoolTest);
});

test("getRole prop on intern class", () => {
    const getRoleTest = "Intern";
    const internTest = new Intern("Joe Jims", 30001, "test@test.com", getRoleTest);
    expect(internTest.getRole()).toBe(getRoleTest);
});

test("getEmail prop on intern class", () => {
    const getSchoolTest = "USYD";
    const internTest = new Intern("Joe Jims", 30001, "test@test.com", getSchoolTest);
    expect(internTest.getSchool()).toBe(getSchoolTest);
});


