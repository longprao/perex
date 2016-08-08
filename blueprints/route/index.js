var path = require('path');
var fs = require('fs');

module.exports = {
  // locals: function(options) {
    // // Return custom template variables here.
    // return {};
  // },

  // fileMapTokens: function(options) (
    // // Return custom tokens to be replaced in your files
    // return {
      // __token__: function(options){
        // // logic to determine value goes here
        // return 'value';
      // }
    // }
  // },

  // Should probably never need to be overriden
  //
  // filesPath: function() {
    // return path.join(this.path, 'files');
  // },

  // beforeInstall: function(options) {},
  afterInstall: function(options) {
    const name = options.entity.name;
    const oldPath = path.resolve(__dirname, '../../', `src/routes/${name}/modules/${name}.js`);
    const newPath = path.resolve(__dirname, '../../', `src/routes/${name}/modules/${name.toLowerCase()}.js`);
    
    setTimeout(function () {
      fs.renameSync(oldPath, newPath);
    }, 500);
  },
};
