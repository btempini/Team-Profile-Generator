const Manager = require("../lib/manager");

describe("Create an Employee", () => {
  const manager = new Manager("Bryan", 81, "mistatempini@gmail.com");

  it("Testing for employees name", () => {
    expect(manager.name).toBe("Bryan");
  });

  it("Testing for Employee ID as a number", () => {
    expect(manager.id).toEqual(expect.any(Number));
  });

  it("Testing for employee email", () => {
    expect(manager.email).toBe("mistatempini@gmail.com");
  });

  it("testing getName function", () => {
    expect(manager.getName()).toBe("Bryan");
  });

  it("Testing getId function", () => {
    expect(manager.getId()).toBe(81);
  });

  it("Testing getEmail function", () => {
    expect(manager.getEmail()).toBe("mistatempini@gmail.com");
  });
});
