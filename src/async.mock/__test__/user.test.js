import axios from "axios";
import { verifyUsername } from "../verify";
import { register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    // return expect(register()).resolves.toBe();
    const response = {};
    const data = { data: response };
    axios.post.mockResolvedValue(data);
    await expect(register()).resolves.toBe(response);
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockImplementation(() => false);
    await expect(register()).rejects.toThrow("wrong username or password");
  });
});
