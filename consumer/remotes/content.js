module.exports = {
  name: "content",
  get url() {
    return `${process.env.REACT_APP_MF_CONTENT}/remoteEntry.js`;
  },
  urlGlobalVariable: "contentModuleUrl",
  get federationConfig() {
    return `${this.name}@[window.${this.urlGlobalVariable}]`;
  },
};
