import { UserConfig } from 'vite'

const config: UserConfig = {
    jsx: 'react',
    optimizeDeps: {
        link: ['common'],
        include: ['landing-blocks/dist/decorations'],
    },
}

export default config
