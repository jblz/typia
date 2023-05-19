import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagStep } from "../../../../structures/TagStep";

export const test_application_ajv_TagStep = _test_application("ajv")(
    "TagStep",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/TagStep.Type",
                },
            },
        ],
        components: {
            schemas: {
                "TagStep.Type": {
                    $id: "#/components/schemas/TagStep.Type",
                    type: "object",
                    properties: {
                        exclusiveMinimum: {
                            description: "@step 5\n@exclusiveMinimum 3",
                            "x-typia-metaTags": [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "exclusiveMinimum",
                                    value: 3,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "step",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
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
                        minimum: {
                            description: "@step 5\n@minimum 3",
                            "x-typia-metaTags": [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "step",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
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
                        range: {
                            description:
                                "@step 5\n@exclusiveMinimum 0\n@exclusiveMaximum 100",
                            "x-typia-metaTags": [
                                {
                                    kind: "step",
                                    value: 5,
                                },
                                {
                                    kind: "exclusiveMinimum",
                                    value: 0,
                                },
                                {
                                    kind: "exclusiveMaximum",
                                    value: 100,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "step",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "exclusiveMinimum",
                                    text: [
                                        {
                                            text: "0",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "exclusiveMaximum",
                                    text: [
                                        {
                                            text: "100",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 0,
                            exclusiveMinimum: true,
                            maximum: 100,
                            exclusiveMaximum: true,
                        },
                        multipleOf: {
                            description:
                                "@multipleOf 5\n@minimum 3\n@maximum 99",
                            "x-typia-metaTags": [
                                {
                                    kind: "multipleOf",
                                    value: 5,
                                },
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 99,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "multipleOf",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
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
                                            text: "99",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            multipleOf: 5,
                            minimum: 3,
                            maximum: 99,
                        },
                    },
                    required: [
                        "exclusiveMinimum",
                        "minimum",
                        "range",
                        "multipleOf",
                    ],
                    description: "@multipleOf 5\n@minimum 3\n@maximum 99",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
