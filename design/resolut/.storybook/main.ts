import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../packages/**/src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {},
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    features: {
        storyStoreV7: true,
    },

    async viteFinal(config, options) {
        return config;
    },
    docs: {
        autodocs: true,
    },
};
export default config;
