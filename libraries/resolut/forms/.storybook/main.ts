import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
        builder: '@storybook/builder-vite',
    },
    framework: '@storybook/react-vite',
    features: { storyStoreV7: true },

    async viteFinal(config, options) {
        return config;
    },
};

export default config;
