import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagType } from "../../../structures/TagType";

export const test_isPrune_TagType = _test_isPrune(
    "TagType",
    TagType.generate,
    (input) =>
        ((input: any): input is Array<TagType.Type> => {
            const is = (input: any): input is Array<TagType.Type> => {
                const $is_custom = (typia.isPrune as any).is_custom;
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.int &&
                    Number.isFinite(input.int) &&
                    parseInt(input.int) === input.int &&
                    $is_custom(
                        "example",
                        "number",
                        "https://example.com",
                        input.int,
                    ) &&
                    "number" === typeof input.uint &&
                    Number.isFinite(input.uint) &&
                    parseInt(input.uint) === input.uint &&
                    0 <= input.uint;
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const prune = (input: Array<TagType.Type>): void => {
                const $is_custom = (typia.isPrune as any).is_custom;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("int" === key || "uint" === key) continue;
                        delete input[key];
                    }
                };
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $po0(elem);
                    });
            };
            if (!is(input)) return false;
            prune(input);
            return true;
        })(input),
    TagType.SPOILERS,
);
