import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectJsonTag } from "../../../../structures/ObjectJsonTag";

export const test_application_ajv_ObjectJsonTag = _test_application("ajv")(
    "ObjectJsonTag",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectJsonTag",
            },
        ],
        components: {
            schemas: {
                ObjectJsonTag: {
                    $id: "#/components/schemas/ObjectJsonTag",
                    type: "object",
                    properties: {
                        vulnerable: {
                            deprecated: true,
                            description: "@deprecated",
                            "x-typia-jsDocTags": [
                                {
                                    name: "deprecated",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        description: {
                            description: "Descripted property.",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        title: {
                            title: "something",
                            description: "Titled property.\n@title something",
                            "x-typia-jsDocTags": [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        complicate_title: {
                            title: "something weirdo with  tag",
                            description:
                                "Complicate title.\n@title something weirdo with {@link something} tag",
                            "x-typia-jsDocTags": [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something weirdo with ",
                                            kind: "text",
                                        },
                                        {
                                            text: "",
                                            kind: "link",
                                        },
                                        {
                                            text: " tag",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: [
                        "vulnerable",
                        "description",
                        "title",
                        "complicate_title",
                    ],
                    description:
                        "Complicate title.\n@title something weirdo with {@link something} tag",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
