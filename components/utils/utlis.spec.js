import { moveImage } from "./utils";
describe("move image", () => {
  it("moveImage swaps images string in array", () => {
    const images = ["a", "b"];
    const setImagesCb = jest.fn();
    moveImage(0, 1, setImagesCb, images);
    expect(setImagesCb).toBeCalled();
    expect(setImagesCb).toBeCalledWith(["b", "a"]);
  });
});
