const header = require("./header");
const content = require("./content");

module.exports = {
  remotes: {
    header: header.federationConfig,
    content: content.federationConfig,
  },
};
