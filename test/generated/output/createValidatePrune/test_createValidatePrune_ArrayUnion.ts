import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createValidatePrune_ArrayUnion = _test_validatePrune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: any): typia.IValidation<ArrayUnion> => {
        const validate = (input: any): typia.IValidation<ArrayUnion> => {
            const __is = (input: any): input is ArrayUnion => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            (() => {
                                if (0 === elem.length) return true;
                                const tupleList = [
                                    [
                                        (top: any) => "boolean" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "boolean" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any) =>
                                            "number" === typeof top &&
                                            Number.isFinite(top),
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ),
                                    ],
                                    [
                                        (top: any) => "string" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "string" === typeof elem,
                                            ),
                                    ],
                                ];
                                const front = elem[0];
                                const filtered = tupleList.filter(
                                    (tuple) => true === tuple[0](front),
                                );
                                if (1 === filtered.length)
                                    return filtered[0][1](elem);
                                const array = elem;
                                if (1 < filtered.length)
                                    for (const tuple of filtered)
                                        if (
                                            array.every(
                                                (value: any) =>
                                                    true === tuple[0](value),
                                            )
                                        )
                                            return tuple[1](array);
                                return false;
                            })(),
                    )
                );
            };
            const errors = [] as any[];
            const $report = (typia.createValidatePrune as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayUnion => {
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Array<boolean> | Array<number> | Array<string>)>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((Array.isArray(elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Array<boolean> | Array<number> | Array<string>)",
                                                value: elem,
                                            })) &&
                                            (() => {
                                                if (0 === elem.length)
                                                    return true;
                                                const tupleList = [
                                                    [
                                                        (top: any) =>
                                                            "boolean" ===
                                                            typeof top,
                                                        (top: any) =>
                                                            top
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index2: number,
                                                                    ) =>
                                                                        "boolean" ===
                                                                            typeof elem ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index2 +
                                                                                    "]",
                                                                                expected:
                                                                                    "boolean",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                    [
                                                        (top: any) =>
                                                            "number" ===
                                                                typeof top &&
                                                            Number.isFinite(
                                                                top,
                                                            ),
                                                        (top: any) =>
                                                            top
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index2: number,
                                                                    ) =>
                                                                        ("number" ===
                                                                            typeof elem &&
                                                                            Number.isFinite(
                                                                                elem,
                                                                            )) ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index2 +
                                                                                    "]",
                                                                                expected:
                                                                                    "number",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                    [
                                                        (top: any) =>
                                                            "string" ===
                                                            typeof top,
                                                        (top: any) =>
                                                            top
                                                                .map(
                                                                    (
                                                                        elem: any,
                                                                        _index2: number,
                                                                    ) =>
                                                                        "string" ===
                                                                            typeof elem ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][" +
                                                                                    _index2 +
                                                                                    "]",
                                                                                expected:
                                                                                    "string",
                                                                                value: elem,
                                                                            },
                                                                        ),
                                                                )
                                                                .every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                    ],
                                                ];
                                                const front = elem[0];
                                                const filtered =
                                                    tupleList.filter(
                                                        (tuple) =>
                                                            true ===
                                                            tuple[0](front),
                                                    );
                                                if (1 === filtered.length)
                                                    return filtered[0][1](elem);
                                                const array = elem;
                                                if (1 < filtered.length)
                                                    for (const tuple of filtered)
                                                        if (
                                                            array.every(
                                                                (value: any) =>
                                                                    true ===
                                                                    tuple[0](
                                                                        value,
                                                                    ),
                                                            )
                                                        )
                                                            return tuple[1](
                                                                array,
                                                            );
                                                return $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "(Array<boolean> | Array<number> | Array<string>)",
                                                    value: elem,
                                                });
                                            })()) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<boolean> | Array<number> | Array<string>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Array<boolean> | Array<number> | Array<string>)>",
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
        const prune = (input: ArrayUnion): void => {};
        const output = validate(input);
        if (output.success) prune(input);
        return output;
    },
    ArrayUnion.SPOILERS,
);
