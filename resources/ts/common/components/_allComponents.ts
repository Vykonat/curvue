import Vue from 'vue'
import { upperFirst } from 'lodash'
import { camelCase } from 'lodash'

const requireComponent = require.context(
    // The relative path of the components folder
    './',
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /\.vue$/
)

requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(`${fileName}`)

    // Get PascalCase name of component
    const componentName = upperFirst(
        camelCase(
            // Strip the leading `./*/` and file extension
            fileName.replace(/^\.\/.*\//, '')
                    .replace(/\.vue$/, '')
        )
    )

    // Register component globally
    Vue.component(
        componentName,
        // Look for the component options on `.default`, which will
        // exist if the component was exported with `export default`,
        // otherwise fall back to module's root.
        componentConfig.default || componentConfig
    )
})