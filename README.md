# directus-operation-slugify

A [Directus](https://directus.io/) slugify [operation](https://docs.directus.io/app/flows/operations.html) for [Flows](https://docs.directus.io/app/flows.html#flows). It automatically handles most major languages, including German (umlauts), Vietnamese, Arabic, Russian, and more.

## Install

###### NPM

```shell
npm install directus-operation-slugify
```

###### YARN

```shell
yarn add directus-operation-slugify
```

###### PNPM

```shell
pnpm add directus-operation-slugify
```

## Options

### Separator

The separator to use between words. Defaults to `-`.

### Lowercase

Convert all string lowercase. Defaults to `true`.

### Decamalize

Convert camelcase to separate words (e.g. `loremIpsum` -> `lorem ipsum`). Defaults to `true`

### Custom Replacements

Replace specific characters or words with alternatives (.e.g `&` -> `and`). Adding a leading and trailing space to the replacement will have it separated by dashes. Defaults to `'&'` -> `' and '`.

## Output

An onject containing the slugified input.

```json
{ "slug": "[slug]" }
```

## Bugs

If any bugs are found please report them as a [Github Issue](https://github.com/ComfortablyCoding/directus-operation-slugify/issues)

## License

[MIT](https://github.com/ComfortablyCoding/directus-operation-slugify/blob/main/LICENSE)
