const fs = require('fs-extra');
const path = require('path');

module.exports = function (context) {
    const pluginDir = context.opts.plugin.dir;
    const iosPlatformDir = path.join(context.opts.projectRoot, 'platforms/ios');

    const sourceFilePath = path.join(pluginDir, 'src', 'ios', 'trapeze-conf.yaml');
    const destinationFilePath = path.join(iosPlatformDir, 'trapeze-conf.yaml');

    // Copy the file from the plugin directory to the iOS project root
    fs.copySync(sourceFilePath, destinationFilePath);
};