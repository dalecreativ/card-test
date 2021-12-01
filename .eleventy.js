const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");

module.exports = function(config) {
  config.addPassthroughCopy({
    "./src/_includes/css/styles.css": "styles.css",
  });

  config.addFilter("timeFromNow", function(value) {
    dayjs.extend(relativeTime);
    let date = new Date(value);
    return dayjs(date).fromNow();
  });

  return {
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};
