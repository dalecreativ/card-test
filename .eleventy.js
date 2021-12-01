module.exports = function(config) {
  config.addPassthroughCopy({
    "./src/_includes/css/styles.css": "styles.css",
  });
  return {
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};
