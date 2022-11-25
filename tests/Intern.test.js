const Intern = require("../lib/intern");

describe("Create an Employee", () => {
  const intern = new Intern("Joe", 13, "joe@gmail.com");

  it("Testing for employees name", () => {
    expect(intern.name).toBe("Joe");
  });

  it("Testing for Employee ID as a number", () => {
    expect(intern.id).toEqual(expect.any(Number));
  });

  it("Testing for employee email", () => {
    expect(intern.email).toBe("joe@gmail.com");
  });

  it("testing getName function", () => {
    expect(intern.getName()).toBe("Joe");
  });

  it("Testing getId function", () => {
    expect(intern.getId()).toBe(13);
  });

  it("Testing getEmail function", () => {
    expect(intern.getEmail()).toBe("joe@gmail.com");
  });
});
