import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { AtomicSimple } from "../../../../structures/AtomicSimple";

export const test_json_application_ajv_AtomicSimple = _test_json_application(
  "ajv",
)("AtomicSimple")({
  schemas: [
    {
      $ref: "#/components/schemas/AtomicSimple",
    },
  ],
  components: {
    schemas: {
      AtomicSimple: {
        $id: "#/components/schemas/AtomicSimple",
        type: "array",
        items: [
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "boolean",
          },
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "number",
          },
          {
            "x-typia-rest": false,
            "x-typia-required": true,
            "x-typia-optional": false,
            type: "string",
          },
        ],
        minItems: 3,
        maxItems: 3,
      },
    },
  },
  purpose: "ajv",
});
