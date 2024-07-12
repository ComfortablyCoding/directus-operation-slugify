/// <reference types="@directus/extensions/api.d.ts" />

import type { SandboxOperationConfig } from "directus:api";
import slugify from "@sindresorhus/slugify";

interface OperationOptions {
  value?: string;
  separator?: string;
  lowercase?: boolean;  
  decamelize?: boolean;
  replacements?: ReplacementOption[];
}

interface ReplacementOption {
  value: string;
  replacement: string;
}

interface SlugifyOptions {
  separator?: string;
  lowercase?: boolean;
  decamelize?: boolean;
  customReplacements?: Array<[string, string]>;
}

const operation: SandboxOperationConfig = {
  id: "directus-operation-slugify",
  handler: (options: OperationOptions) => {
    const { value } = options;

    if (!value) {
      throw new Error("No value provided");
    }

    if (value.includes("undefined")) {
      throw new Error("All values must be defined");
    }

    const slugifyOptions: SlugifyOptions = {
      separator: options.separator ?? "-",
      lowercase: options.lowercase ?? true,
      decamelize: options.decamelize ?? true,
    };

    if (options.replacements) {
      slugifyOptions.customReplacements = options.replacements.map(
        ({ value, replacement }) => [value, replacement]
      );
    }

    return {
      slug: slugify(value, slugifyOptions),
    };
  },
};

export default operation;
