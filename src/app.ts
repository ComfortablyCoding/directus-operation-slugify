import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "directus-operation-slugify",
  name: "Slugify",
  icon: "bolt",
  description: "Slugify an input",
  overview: ({ value }) => [
    {
      label: "Value",
      text: value,
    },
  ],
  options: [
    {
      field: "value",
      name: "Value",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        required: true,
        options: {
          placeholder: "order {{ $trigger.payload.title }}",
        },
        note: "The value to slugify. Flow data variables such as **{{ $trigger.payload.title }}** are supported.",
      },
    },
    {
      field: "separator",
      name: "Separator",
      type: "string",
      meta: {
        width: "half",
        interface: "input",
      },
      schema: {
        default_value: "-",
      },
    },
    {
      field: "lowercase",
      name: "Lowercase",
      type: "boolean",
      meta: {
        width: "half",
        interface: "boolean",
      },
      schema: {
        default_value: true,
      },
    },
    {
      field: "decamalize",
      name: "Decamalize",
      type: "boolean",
      meta: {
        width: "half",
        interface: "boolean",
      },
      schema: {
        default_value: true,
      },
    },
  ],
});
