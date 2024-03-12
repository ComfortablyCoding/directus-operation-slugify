/// <reference types="@directus/extensions/api.d.ts" />

import type { SandboxOperationConfig } from "directus:api";
import slugify from "./vendor/slugify";

interface Options {
  value: string;
  separator?: string;
  lowercase?: boolean;
  decamelize?: boolean;
}

const operation: SandboxOperationConfig = {
  id: "directus-operation-slugify",
  handler: ({
    value,
    separator = "-",
    lowercase = true,
    decamelize = true,
  }: Options) => {
    if (!value) {
      throw new Error("No values provided");
    }

    if (value.includes("undefined")) {
      throw new Error("All values must be defined");
    }

    return {
      slug: slugify(value, {
        separator,
        lowercase,
        decamelize,
      }),
    };
  },
};

export default operation;
