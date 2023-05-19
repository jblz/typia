import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ClassPropertyAssignment } from "../../../../structures/ClassPropertyAssignment";

export const test_application_ajv_ClassPropertyAssignment = _test_application(
    "ajv",
)("ClassPropertyAssignment", {
    schemas: [
        {
            $ref: "#/components/schemas/ClassPropertyAssignment",
        },
    ],
    components: {
        schemas: {
            ClassPropertyAssignment: {
                $id: "#/components/schemas/ClassPropertyAssignment",
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
                    note: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        enum: ["assignment"],
                    },
                    editable: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                        enum: [false],
                    },
                    incremental: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                },
                required: ["id", "name", "note", "editable", "incremental"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});
