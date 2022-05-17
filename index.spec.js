import { greet } from "./index.js";

describe("Greeting test", () => {
  it("Should return Hello Coach", () => {
    //given
    const name = "Thomas";
    //when
    const output = greet(name);
    //then
    expect(output).toEqual("Hello Coach!");
  });
  it("Shoud return Hello Stranger", () => {
    //given
    const name = "";
    const output = greet(name);
    expect(output).toEqual("Hello Stranger!");
  });
  it("Shoud return Hello Jochen", () => {
    //given
    const name = "Jochen";
    const output = greet(name);
    expect(output).toEqual("Hello Jochen!");
  });
});
