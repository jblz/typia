import typia from "typia";

import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_protobuf_createAssertEncode_ObjectJsonTag =
  _test_protobuf_assertEncode("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
    encode: (input) => typia.protobuf.assertEncode<ObjectJsonTag>(input),
    decode: typia.protobuf.createDecode<ObjectJsonTag>(),
    message: typia.protobuf.message<ObjectJsonTag>(),
  });
