/**
 * @type { import('@bundless/cli').Config }
 */
const config = {
    plugins: [require('@bundless/plugin-react-refresh').ReactRefreshPlugin()],
}

module.exports = config
