module.exports = {
  name: "header",
  get randomString() {
    const date = new Date();

    const stringDate = String(
      new Date().setHours(date.getHours(), date.getMinutes(), 0, 0)
    );
    return stringDate;
  },
  get url() {
    return `${process.env.REACT_APP_MF_HEADER}/remoteEntry.js?${this.randomString}`;
  },
  urlGlobalVariable: "headerModuleUrl",
  get federationConfig() {
    return `${this.name}@[window.${this.urlGlobalVariable}]`;
  },
};
