import typia from "../../../../src";
import { TagStep } from "../../../structures/TagStep";
import { _test_application } from "../../internal/_test_application";

export const test_application_ajv_TagStep = 
    _test_application("ajv")(
        "TagStep",
        typia.application<[TagStep], "ajv">(),{schemas: [
        {
            type: "array",
            items: {
                $ref: "components#/schemas/TagStep.Type"
            },
            nullable: false
        }
    ],
    components: {
        schemas: {
            "TagStep.Type": {
                $id: "components#/schemas/TagStep.Type",
                type: "object",
                properties: {
                    exclusiveMinimum: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "step",
                                value: 5
                            },
                            {
                                kind: "exclusiveMinimum",
                                value: 3
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "step",
                                text: [
                                    {
                                        text: "5",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "exclusiveMinimum",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true
                    },
                    minimum: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "step",
                                value: 5
                            },
                            {
                                kind: "minimum",
                                value: 3
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "step",
                                text: [
                                    {
                                        text: "5",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "minimum",
                                text: [
                                    {
                                        text: "3",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        minimum: 3
                    },
                    range: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "step",
                                value: 5
                            },
                            {
                                kind: "range",
                                minimum: {
                                    include: false,
                                    value: 0
                                },
                                maximum: {
                                    include: false,
                                    value: 100
                                }
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "step",
                                text: [
                                    {
                                        text: "5",
                                        kind: "text"
                                    }
                                ]
                            },
                            {
                                name: "range",
                                text: [
                                    {
                                        text: "(0, 100)",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        exclusiveMinimum: 0,
                        exclusiveMaximum: 100
                    },
                    multipleOf: {
                        type: "number",
                        nullable: false,
                        "x-typia-metaTags": [
                            {
                                kind: "multipleOf",
                                value: 5
                            }
                        ],
                        "x-typia-jsDocTags": [
                            {
                                name: "multipleOf",
                                text: [
                                    {
                                        text: "5",
                                        kind: "text"
                                    }
                                ]
                            }
                        ],
                        "x-typia-required": true,
                        multipleOf: 5
                    }
                },
                nullable: false,
                required: [
                    "exclusiveMinimum",
                    "minimum",
                    "range",
                    "multipleOf"
                ],
                "x-typia_jsDocTags": []
            }
        }
    },
    purpose: "ajv",
    prefix: "components#/schemas"
}
);