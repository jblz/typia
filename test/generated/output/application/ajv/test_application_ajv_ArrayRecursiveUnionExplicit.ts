import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";

export const test_application_ajv_ArrayRecursiveUnionExplicit =
    _test_application("ajv")("ArrayRecursiveUnionExplicit", {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $recursiveRef:
                                "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                        },
                        {
                            $recursiveRef:
                                "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                        },
                    ],
                },
            },
        ],
        components: {
            schemas: {
                "ArrayRecursiveUnionExplicit.IDirectory": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                    $recursiveAnchor: true,
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
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        children: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $recursiveRef:
                                            "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                ],
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["directory"],
                        },
                    },
                    required: ["id", "name", "path", "children", "type"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IImageFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
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
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        width: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        height: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        url: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["jpg"],
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "width",
                        "height",
                        "url",
                        "size",
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.ITextFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
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
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        content: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["txt"],
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "content",
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IZipFile": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
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
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        count: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["zip"],
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "count",
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IShortcut": {
                    $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                    $recursiveAnchor: true,
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
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        target: {
                            oneOf: [
                                {
                                    $recursiveRef:
                                        "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $recursiveRef:
                                        "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["lnk"],
                        },
                    },
                    required: [
                        "id",
                        "name",
                        "path",
                        "target",
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    });
