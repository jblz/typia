import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArraySimple } from "../../../../structures/ArraySimple";

export const test_application_ajv_ArraySimple = _test_application("ajv")(
    "ArraySimple",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ArraySimple.IPerson",
                },
            },
        ],
        components: {
            schemas: {
                "ArraySimple.IPerson": {
                    $id: "#/components/schemas/ArraySimple.IPerson",
                    type: "object",
                    properties: {
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        email: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        hobbies: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArraySimple.IHobby",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: ["name", "email", "hobbies"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArraySimple.IHobby": {
                    $id: "#/components/schemas/ArraySimple.IHobby",
                    type: "object",
                    properties: {
                        name: {
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
                        rank: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["name", "body", "rank"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
