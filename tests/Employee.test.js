const Employee = require("../lib/employee");

describe("Create an Employee", () => {
  const employee = new Employee("Bryan", 81, "mistatempini@gmail.com");

  it("Testing for employees name", () => {
    expect(employee.name).toBe("Bryan");
  });

  it("Testing for Employee ID as a number", () => {
    expect(employee.id).toEqual(expect.any(Number));
  });

  it("Testing for employee email", () => {
    expect(employee.email).toBe("mistatempini@gmail.com");
  });

  it("testing getName function", () => {
    expect(employee.getName()).toBe("Bryan");
  });

  it("Testing getId function", () => {
    expect(employee.getId()).toBe(81);
  });

  it("Testing getEmail function", () => {
    expect(employee.getEmail()).toBe("mistatempini@gmail.com");
  });
});
