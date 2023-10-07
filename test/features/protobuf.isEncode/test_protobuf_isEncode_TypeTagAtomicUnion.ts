import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_protobuf_createIsEncode_TypeTagAtomicUnion =
    _test_protobuf_isEncode("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion,
    )({
        encode: (input) => typia.protobuf.isEncode<TypeTagAtomicUnion>(input),
        decode: typia.protobuf.createDecode<TypeTagAtomicUnion>(),
        message: typia.protobuf.message<TypeTagAtomicUnion>(),
    });
