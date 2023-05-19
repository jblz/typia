import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";

export const test_application_ajv_ObjectPropertyNullable = _test_application(
    "ajv",
)("ObjectPropertyNullable", {
    schemas: [
        {
            type: "array",
            items: [
                {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_boolean_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_number_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_string_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                {
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "array",
                    items: {
                        $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_",
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
            ],
        },
    ],
    components: {
        schemas: {
            "ObjectPropertyNullable.IPointer_lt_boolean_gt_": {
                $id: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_boolean_gt_",
                type: "object",
                properties: {
                    value: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "null",
                            },
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "boolean",
                            },
                        ],
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectPropertyNullable.IPointer_lt_number_gt_": {
                $id: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_number_gt_",
                type: "object",
                properties: {
                    value: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "null",
                            },
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "number",
                            },
                        ],
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectPropertyNullable.IPointer_lt_string_gt_": {
                $id: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_string_gt_",
                type: "object",
                properties: {
                    value: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "null",
                            },
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                            },
                        ],
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_":
                {
                    $id: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_",
                    type: "object",
                    properties: {
                        value: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectPropertyNullable.IMember",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["value"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            "ObjectPropertyNullable.IMember": {
                $id: "#/components/schemas/ObjectPropertyNullable.IMember",
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "null",
                            },
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "string",
                            },
                        ],
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    grade: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                    },
                    serial: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
                            },
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "number",
                            },
                        ],
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                    },
                    activated: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "null",
                            },
                            {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                                type: "boolean",
                            },
                        ],
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["id", "name", "activated"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});
