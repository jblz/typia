import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createAssert_ArrayRepeatedOptional = _test_assert(
  "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
  typia.createAssert<ArrayRepeatedOptional>(),
);
