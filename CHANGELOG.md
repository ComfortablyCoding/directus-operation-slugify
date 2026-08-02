# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-08-02

### Added

- Test suite for the operation handler using Vitest.
- Linting and formatting with oxlint and oxfmt.
- CI workflow running format, lint, test, and build on pull requests and pushes to `main`.

### Changed

- Target Directus `^12.0.0` and update all dependencies (including `@sindresorhus/slugify` v3 and `@directus/extensions-sdk` v18).
- Modernize the TypeScript config (ES2022 target, bundler module resolution).
- Run tests before building and publishing in the release workflow.
- Use the `link` icon for the operation instead of `bolt`.
- Expand the package description.

### Fixed

- Preserve the default `&` → `and` mapping when custom replacements are provided.

[0.3.0]: https://github.com/ComfortablyCoding/directus-operation-slugify/releases/tag/0.3.0
