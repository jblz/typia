import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertGuardEquals_TypeTagCustom = _test_assertGuardEquals(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.assertGuardEquals<TypeTagCustom>(input),
);
