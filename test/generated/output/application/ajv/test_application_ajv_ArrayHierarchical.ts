import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayHierarchical } from "../../../../structures/ArrayHierarchical";

export const test_application_ajv_ArrayHierarchical = _test_application("ajv")(
    "ArrayHierarchical",
    {
        schemas: [
            {
                type: "array",
                items: {
                    $ref: "#/components/schemas/ArrayHierarchical.ICompany",
                },
            },
        ],
        components: {
            schemas: {
                "ArrayHierarchical.ICompany": {
                    $id: "#/components/schemas/ArrayHierarchical.ICompany",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        serial: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        established_at: {
                            $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        departments: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayHierarchical.IDepartment",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: [
                        "id",
                        "serial",
                        "name",
                        "established_at",
                        "departments",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayHierarchical.ITimestamp": {
                    $id: "#/components/schemas/ArrayHierarchical.ITimestamp",
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
                "ArrayHierarchical.IDepartment": {
                    $id: "#/components/schemas/ArrayHierarchical.IDepartment",
                    type: "object",
                    properties: {
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
                        sales: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        created_at: {
                            $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        employees: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ArrayHierarchical.IEmployee",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: [
                        "id",
                        "code",
                        "sales",
                        "created_at",
                        "employees",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayHierarchical.IEmployee": {
                    $id: "#/components/schemas/ArrayHierarchical.IEmployee",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        age: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        grade: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        employeed_at: {
                            $ref: "#/components/schemas/ArrayHierarchical.ITimestamp",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["id", "name", "age", "grade", "employeed_at"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
