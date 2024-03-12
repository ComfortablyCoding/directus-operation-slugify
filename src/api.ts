/// <reference types="@directus/extensions/api.d.ts" />

import type { SandboxOperationConfig } from "directus:api";
import slugify from "./vendor/slugify";

interface Options {
  values: string;
  separator?: string;
  lowercase?: boolean;
  decamelize?: boolean;
}

const operation: SandboxOperationConfig = {
  id: "directus-operation-slugify",
  handler: ({
    values,
    separator = "-",
    lowercase = true,
    decamelize = true,
  }: Options) => {
    if (!values) {
      throw new Error("No values provided");
    }

    const references = values.split(",");

    if (references.find((ref) => ref === "undefined")) {
      throw new Error("All values must be defined");
    }

    return {
      slug: slugify(references.join(" "), {
        separator,
        lowercase,
        decamelize,
      }),
    };
  },
};

export default operation;
