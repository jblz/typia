import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagAtomicUnion } from "../../../../structures/TagAtomicUnion";

export const test_application_swagger_TagAtomicUnion = _test_application(
    "swagger",
)("TagAtomicUnion", {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/TagAtomicUnion.Type",
            },
        },
    ],
    components: {
        schemas: {
            "TagAtomicUnion.Type": {
                type: "object",
                properties: {
                    value: {
                        oneOf: [
                            {
                                description:
                                    "@minimum 3\n@minLength 3\n@maxLength 7",
                                "x-typia-metaTags": [
                                    {
                                        kind: "minimum",
                                        value: 3,
                                    },
                                    {
                                        kind: "minLength",
                                        value: 3,
                                    },
                                    {
                                        kind: "maxLength",
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
                                        name: "minLength",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "maxLength",
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
                                type: "string",
                                minLength: 3,
                                maxLength: 7,
                            },
                            {
                                description:
                                    "@minimum 3\n@minLength 3\n@maxLength 7",
                                "x-typia-metaTags": [
                                    {
                                        kind: "minimum",
                                        value: 3,
                                    },
                                    {
                                        kind: "minLength",
                                        value: 3,
                                    },
                                    {
                                        kind: "maxLength",
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
                                        name: "minLength",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "maxLength",
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
                            },
                        ],
                        description: "@minimum 3\n@minLength 3\n@maxLength 7",
                        "x-typia-metaTags": [
                            {
                                kind: "minimum",
                                value: 3,
                            },
                            {
                                kind: "minLength",
                                value: 3,
                            },
                            {
                                kind: "maxLength",
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
                                name: "minLength",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text",
                                    },
                                ],
                            },
                            {
                                name: "maxLength",
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
                    },
                },
                nullable: false,
                required: ["value"],
                description: "@minimum 3\n@minLength 3\n@maxLength 7",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});
