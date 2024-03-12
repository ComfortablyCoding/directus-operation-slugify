import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "directus-operation-slugify",
  name: "Slugify",
  icon: "bolt",
  description: "Slugify data",
  overview: ({ values }) => [
    {
      label: "Values",
      text: values,
    },
  ],
  options: [
    {
      field: "values",
      name: "Values",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
        required: true,
        options: {
          placeholder: "{{ $trigger.payload.title }}",
        },
        note: "A comma seperated list of values to slugify. The values can be hardcoded and/or flow data variables such as **{{ $trigger.payload.title }}**",
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
