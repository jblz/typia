import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagRange } from "../../../../structures/TagRange";

export const test_application_ajv_TagRange = _test_application("ajv")(
    "TagRange",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/TagRange.Type",
                },
            },
        ],
        components: {
            schemas: {
                "TagRange.Type": {
                    $id: "#/components/schemas/TagRange.Type",
                    type: "object",
                    properties: {
                        greater: {
                            description: "@exclusiveMinimum 3",
                            "x-typia-metaTags": [
                                {
                                    kind: "exclusiveMinimum",
                                    value: 3,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "exclusiveMinimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                            exclusiveMinimum: true,
                        },
                        greater_equal: {
                            description: "@minimum 3",
                            "x-typia-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                        },
                        less: {
                            description: "@exclusiveMaximum 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "exclusiveMaximum",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "exclusiveMaximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            maximum: 7,
                            exclusiveMaximum: true,
                        },
                        less_equal: {
                            description: "@maximum 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            maximum: 7,
                        },
                        greater_less: {
                            description:
                                "@exclusiveMinimum 3\n@exclusiveMaximum 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "exclusiveMinimum",
                                    value: 3,
                                },
                                {
                                    kind: "exclusiveMaximum",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "exclusiveMinimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "exclusiveMaximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                            exclusiveMinimum: true,
                            maximum: 7,
                            exclusiveMaximum: true,
                        },
                        greater_equal_less: {
                            description: "@minimum 3\n@exclusiveMaximum 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "exclusiveMaximum",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "exclusiveMaximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                            maximum: 7,
                            exclusiveMaximum: true,
                        },
                        greater_less_equal: {
                            description: "@exclusiveMinimum 3\n@maximum 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "exclusiveMinimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "exclusiveMinimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                            exclusiveMinimum: true,
                            maximum: 7,
                        },
                        greater_equal_less_equal: {
                            description: "@minimum 3\n@maximum 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                            maximum: 7,
                        },
                    },
                    required: [
                        "greater",
                        "greater_equal",
                        "less",
                        "less_equal",
                        "greater_less",
                        "greater_equal_less",
                        "greater_less_equal",
                        "greater_equal_less_equal",
                    ],
                    description: "@minimum 3\n@maximum 7",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
