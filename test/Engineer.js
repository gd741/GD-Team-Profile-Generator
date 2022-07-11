// Require Engineer
const Engineer = require("../lib/Engineer");

test("add github prop on Engineer subclass", () => {
    const githubTest = "groovytom13";
    const engineerTest = new Engineer("Groovy Tom", 30001, "test@test.com", githubTest)
    expect(engineerTest.github).toEqual(githubTest);
});

test("getRole prop on engineer class", () => {
    const getRoleTest = "Engineer";
    const engineerTest = new Engineer("Joe Jims", 30001, "test@test.com", getRoleTest);
    expect(engineerTest.getRole()).toBe(getRoleTest);
});

test("getGithub prop on engineer class", () => {
    const getGithubTest = "JoeJims10";
    const engineerTest = new Engineer("Joe Jims", 30001, "test@test.com", getGithubTest);
    expect(engineerTest.getGithub()).toBe(getGithubTest);
});


