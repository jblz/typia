import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_application_ajv_DynamicTree = _test_application("ajv")(
    "DynamicTree",
    {
        schemas: [
            {
                $ref: "#/components/schemas/DynamicTree",
            },
        ],
        components: {
            schemas: {
                DynamicTree: {
                    $id: "#/components/schemas/DynamicTree",
                    type: "object",
                    properties: {
                        id: {
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
                        children: {
                            $ref: "#/components/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["id", "sequence", "children"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                Record_lt_string_comma__space_DynamicTree_gt_: {
                    $id: "#/components/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                    type: "object",
                    properties: {},
                    description: "",
                    "x-typia-jsDocTags": [],
                    additionalProperties: {
                        $ref: "#/components/schemas/DynamicTree",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);
