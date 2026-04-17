#!/usr/bin/env bun

import path from "path"
import { fileURLToPath } from "url"

import { $ } from "bun"

const dir = fileURLToPath(new URL("..", import.meta.url))
const root = path.resolve(dir, "../..")

await $`bun ./packages/sdk/js/script/build.ts`.cwd(root)

await $`bun dev generate > ${path.join(dir, "openapi.json")}`.cwd(path.join(root, "packages/opencode"))

await $`bun run prettier --ignore-unknown --write packages/sdk`.cwd(root)
