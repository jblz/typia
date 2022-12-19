import typia from "../../../../src";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_application } from "../../internal/_test_application";

export const test_application_swagger_ObjectNullable = 
    _test_application("swagger")(
        "ObjectNullable",
        typia.application<[ObjectNullable], "swagger">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectNullable.IProduct"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "ObjectNullable.IProduct": {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    },
                    manufacturer: {
                        $ref: "#/components/schemas/ObjectNullable.IManufacturer",
                        "x-typia-required": true
                    },
                    brand: {
                        $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                        "x-typia-required": true
                    },
                    similar: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ObjectNullable.IManufacturer.Nullable",
                                "x-typia-required": true
                            },
                            {
                                $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                                "x-typia-required": true
                            }
                        ],
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "name",
                    "manufacturer",
                    "brand",
                    "similar"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectNullable.IManufacturer": {
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        "enum": [
                            "manufacturer"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: false,
                required: [
                    "type",
                    "name"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectNullable.IBrand.Nullable": {
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        "enum": [
                            "brand"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: true,
                required: [
                    "type",
                    "name"
                ],
                "x-typia_jsDocTags": []
            },
            "ObjectNullable.IManufacturer.Nullable": {
                type: "object",
                properties: {
                    type: {
                        type: "string",
                        "enum": [
                            "manufacturer"
                        ],
                        nullable: false,
                        "x-typia-required": true
                    },
                    name: {
                        type: "string",
                        nullable: false,
                        "x-typia-required": true
                    }
                },
                nullable: true,
                required: [
                    "type",
                    "name"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "swagger",
    prefix: "#/components/schemas"
}
);