import { render, screen } from "@testing-library/react";
import { ImageList } from "./ImageList";
// fix test
test("loads and displays Images", async () => {
  render(<ImageList imagesToRender={["test", "test2", "test3"]} />);

  await screen.findByRole("image");
  expect(screen.getByRole("image")).toBeInDocument();
});
