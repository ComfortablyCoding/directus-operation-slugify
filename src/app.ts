import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "directus-operation-slugify",
  name: "Slugify",
  icon: "bolt",
  description: "Slugify a string",
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
        note: "The value to slugify, flow data variables such as **{{ $trigger.payload.title }}** are supported.",
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
      field: "decamelize",
      name: "Decamelize",
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
      field: "replacements",
      name: "Custom Replacements",
      type: "json",
      meta: {
        width: "full",
        interface: "list",
        options: {
          fields: [
            {
              field: "value",
              name: "Value",
              type: "string",
              meta: {
                width: "half",
                interface: "input",
                required: true,
                options: {
                  placeholder: "&",
                },
              },
            },
            {
              field: "replacement",
              name: "Replacement",
              type: "string",
              meta: {
                width: "half",
                interface: "input",
                required: true,
                options: {
                  placeholder: "and",
                },
              },
            },
          ],
        },
        note: "Add custom replacement options",
      },
    },
  ],
});
