import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_assertEquals_ObjectUnionExplicit = _test_assertEquals(
  "ObjectUnionExplicit",
)<ObjectUnionExplicit>(ObjectUnionExplicit)((input) =>
  typia.assertEquals<ObjectUnionExplicit>(input),
);
