import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagLength } from "../../../../structures/TagLength";

export const test_application_swagger_TagLength = _test_application("swagger")(
    "TagLength",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/TagLength.Type",
                },
            },
        ],
        components: {
            schemas: {
                "TagLength.Type": {
                    type: "object",
                    properties: {
                        fixed: {
                            description: "@length 5",
                            "x-typia-metaTags": [
                                {
                                    kind: "length",
                                    value: 5,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "length",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        minimum: {
                            description: "@minLength 3",
                            "x-typia-metaTags": [
                                {
                                    kind: "minLength",
                                    value: 3,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "minLength",
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
                            type: "string",
                            minLength: 3,
                        },
                        maximum: {
                            description: "@maxLength 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "maxLength",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
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
                            maxLength: 7,
                        },
                        minimum_and_maximum: {
                            description: "@minLength 3\n@maxLength 7",
                            "x-typia-metaTags": [
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
                    },
                    nullable: false,
                    required: [
                        "fixed",
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                    ],
                    description: "@minLength 3\n@maxLength 7",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);
