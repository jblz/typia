import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectRecursive } from "../../../../structures/ObjectRecursive";

export const test_application_ajv_ObjectRecursive = _test_application("ajv")(
    "ObjectRecursive",
    {
        schemas: [
            {
                $recursiveRef:
                    "#/components/schemas/ObjectRecursive.IDepartment",
            },
        ],
        components: {
            schemas: {
                "ObjectRecursive.IDepartment": {
                    $id: "#/components/schemas/ObjectRecursive.IDepartment",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        parent: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/ObjectRecursive.IDepartment",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        code: {
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
                        sequence: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ObjectRecursive.ITimestamp",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: [
                        "parent",
                        "id",
                        "code",
                        "name",
                        "sequence",
                        "created_at",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectRecursive.ITimestamp": {
                    $id: "#/components/schemas/ObjectRecursive.ITimestamp",
                    type: "object",
                    properties: {
                        time: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        zone: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["time", "zone"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
