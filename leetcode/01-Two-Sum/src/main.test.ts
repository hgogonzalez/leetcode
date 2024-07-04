import { twoSum } from "./main";

describe("twoSum", () => {
  test("should return the indices of the numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("should return an empty array if no two numbers add up to the target", () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
    expect(twoSum([5, 1, 1, 1], 10)).toEqual([]);
  });
});
