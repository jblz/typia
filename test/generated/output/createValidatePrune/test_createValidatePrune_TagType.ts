import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { TagType } from "../../../structures/TagType";

export const test_createValidatePrune_TagType = _test_validatePrune(
    "TagType",
    TagType.generate,
    (input: any): typia.IValidation<TagType> => {
        const validate = (input: any): typia.IValidation<TagType> => {
            const __is = (input: any): input is TagType => {
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
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            const $is_custom = (typia.createValidatePrune as any).is_custom;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagType => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.int &&
                                Number.isFinite(input.int) &&
                                (parseInt(input.int) === input.int ||
                                    $report(_exceptionable, {
                                        path: _path + ".int",
                                        expected: "number (@type int)",
                                        value: input.int,
                                    })) &&
                                ($is_custom(
                                    "example",
                                    "number",
                                    "https://example.com",
                                    input.int,
                                ) ||
                                    $report(_exceptionable, {
                                        path: _path + ".int",
                                        expected:
                                            "number (@example https://example.com)",
                                        value: input.int,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".int",
                                    expected: "number",
                                    value: input.int,
                                }),
                            ("number" === typeof input.uint &&
                                Number.isFinite(input.uint) &&
                                (parseInt(input.uint) === input.uint ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number (@type uint)",
                                        value: input.uint,
                                    })) &&
                                (0 <= input.uint ||
                                    $report(_exceptionable, {
                                        path: _path + ".uint",
                                        expected: "number (@type uint)",
                                        value: input.uint,
                                    }))) ||
                                $report(_exceptionable, {
                                    path: _path + ".uint",
                                    expected: "number",
                                    value: input.uint,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Array<TagType.Type>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "TagType.Type",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "TagType.Type",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Array<TagType.Type>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        };
        const prune = (input: TagType): void => {
            const $is_custom = (typia.createValidatePrune as any).is_custom;
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("int" === key || "uint" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        };
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    TagType.SPOILERS,
);
