import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_createAssertGuard_ConstantIntersection = _test_assertGuard(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)(
  (input: any): asserts input is ConstantIntersection => {
    const __is = (input: any): input is ConstantIntersection => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        false === input[0] &&
        1 === input[1] &&
        "two" === input[2]
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ConstantIntersection => {
        const $guard = (typia.createAssertGuard as any).guard;
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantIntersection",
              value: input,
            })) &&
            (input.length === 3 ||
              $guard(true, {
                path: _path + "",
                expected: '[false, 1, "two"]',
                value: input,
              })) &&
            (false === input[0] ||
              $guard(true, {
                path: _path + "[0]",
                expected: "false",
                value: input[0],
              })) &&
            (1 === input[1] ||
              $guard(true, {
                path: _path + "[1]",
                expected: "1",
                value: input[1],
              })) &&
            ("two" === input[2] ||
              $guard(true, {
                path: _path + "[2]",
                expected: '"two"',
                value: input[2],
              }))) ||
          $guard(true, {
            path: _path + "",
            expected: "ConstantIntersection",
            value: input,
          })
        );
      })(input, "$input", true);
  },
);
