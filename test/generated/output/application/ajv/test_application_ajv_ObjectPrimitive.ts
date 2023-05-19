import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectPrimitive } from "../../../../structures/ObjectPrimitive";

export const test_application_ajv_ObjectPrimitive = _test_application("ajv")(
    "ObjectPrimitive",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ObjectPrimitive.IArticle",
            },
        ],
        components: {
            schemas: {
                "ObjectPrimitive.IArticle": {
                    $id: "#/components/schemas/ObjectPrimitive.IArticle",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["txt", "md", "html"],
                        },
                        title: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        body: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        files: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPrimitive.IFile",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        secret: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                        created_at: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: [
                        "id",
                        "extension",
                        "title",
                        "body",
                        "files",
                        "secret",
                        "created_at",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectPrimitive.IFile": {
                    $id: "#/components/schemas/ObjectPrimitive.IFile",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        url: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        created_at: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["id", "name", "extension", "url", "created_at"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
