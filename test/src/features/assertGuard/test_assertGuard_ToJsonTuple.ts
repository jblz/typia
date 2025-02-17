import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_assertGuard_ToJsonTuple = _test_assertGuard(
  "ToJsonTuple",
)<ToJsonTuple>(ToJsonTuple)((input) => typia.assertGuard<ToJsonTuple>(input));
