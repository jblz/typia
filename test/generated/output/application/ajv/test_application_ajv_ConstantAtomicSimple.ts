import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ConstantAtomicSimple } from "../../../../structures/ConstantAtomicSimple";

export const test_application_ajv_ConstantAtomicSimple = _test_application(
    "ajv",
)("ConstantAtomicSimple", {
    schemas: [
        {
            type: "array",
            items: [
                {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "boolean",
                    enum: [false],
                },
                {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "boolean",
                    enum: [true],
                },
                {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "number",
                    enum: [2],
                },
                {
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "string",
                    enum: ["three"],
                },
            ],
        },
    ],
    components: {
        schemas: {},
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});
