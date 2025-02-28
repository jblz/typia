import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectUnionNonPredictable } from "../../../../structures/ObjectUnionNonPredictable";

export const test_json_application_ajv_ObjectUnionNonPredictable =
  _test_json_application("ajv")("ObjectUnionNonPredictable")({
    schemas: [
      {
        $ref: "#/components/schemas/ObjectUnionNonPredictable",
      },
    ],
    components: {
      schemas: {
        ObjectUnionNonPredictable: {
          $id: "#/components/schemas/ObjectUnionNonPredictable",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion",
              },
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapperObjectUnionNonPredictable.IUnion",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerObjectUnionNonPredictable.IUnion",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "IPointerObjectUnionNonPredictable.IUnion": {
          $id: "#/components/schemas/IPointerObjectUnionNonPredictable.IUnion",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IUnion",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionNonPredictable.IUnion": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IUnion",
          oneOf: [
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperboolean",
            },
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrappernumber",
            },
            {
              $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapperstring",
            },
          ],
        },
        "ObjectUnionNonPredictable.IWrapperboolean": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapperboolean",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerboolean",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        IPointerboolean: {
          $id: "#/components/schemas/IPointerboolean",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "boolean",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionNonPredictable.IWrappernumber": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrappernumber",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointernumber",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        IPointernumber: {
          $id: "#/components/schemas/IPointernumber",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        "ObjectUnionNonPredictable.IWrapperstring": {
          $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapperstring",
          type: "object",
          properties: {
            value: {
              $ref: "#/components/schemas/IPointerstring",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
        IPointerstring: {
          $id: "#/components/schemas/IPointerstring",
          type: "object",
          properties: {
            value: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
          },
          required: ["value"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
