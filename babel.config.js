/**
 * Sunny 2020/12/22 上午12:02
 * ogg sit down and start building bugs.
 * Author: Ogg <baoziyoo@gmail.com>
 */

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            "import",
            {libraryName: "ant-design-vue", libraryDirectory: "es", style: 'css'}
        ]
    ]
}
