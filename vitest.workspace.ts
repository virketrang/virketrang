import { defineWorkspace } from 'vitest/config'

const config = defineWorkspace([
    'apps/**',
    'apps/**/server',
    'apps/**/client',
    'apps/**/client/**',
    'libraries/**',
    'libraries/**/packages/**'
])

export default config
