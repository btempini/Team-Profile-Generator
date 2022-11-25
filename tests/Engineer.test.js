const Engineer = require("../lib/engineer");

describe("Create an Engineer", () => {
  const engineer = new Engineer("Todd", 76, "todd@gmail.com");

  it("Testing for employees name", () => {
    expect(engineer.name).toBe("Todd");
  });

  it("Testing for Employee ID as a number", () => {
    expect(engineer.id).toEqual(expect.any(Number));
  });

  it("Testing for employee email", () => {
    expect(engineer.email).toBe("todd@gmail.com");
  });

  it("testing getName function", () => {
    expect(engineer.getName()).toBe("Todd");
  });

  it("Testing getId function", () => {
    expect(engineer.getId()).toBe(76);
  });

  it("Testing getEmail function", () => {
    expect(engineer.getEmail()).toBe("todd@gmail.com");
  });
});
