import { UserConfig } from 'vite'
import vpr from 'vite-plugin-react'

const config: UserConfig = {
    jsx: 'react',
    optimizeDeps: {
        link: ['common'],
        include: ['landing-blocks/dist/decorations'],
    },
    plugins: [vpr],
}

export default config
