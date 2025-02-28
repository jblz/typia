import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertGuardEquals_ToJsonTuple = _test_assertGuardEquals(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) =>
  typia.assertGuardEquals<ToJsonTuple>(input),
);
