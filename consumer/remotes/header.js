module.exports = {
  name: "header",
  get randomString() {
    const date = String(new Date().getMinutes());
    let randomString = "";
    for (let i = 0; i < date.length; i += 2) {
      randomString += Number(date.substr(i, 2)).toString(36);
    }
    return randomString;
  },
  get url() {
    return `${process.env.REACT_APP_MF_HEADER}/remoteEntry.js?${this.randomString}`;
  },
  urlGlobalVariable: "headerModuleUrl",
  get federationConfig() {
    return `${this.name}@[window.${this.urlGlobalVariable}]`;
  },
};
