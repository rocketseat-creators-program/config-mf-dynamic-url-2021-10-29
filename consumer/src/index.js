import header from "../remotes/header";
import content from "../remotes/content";

window[header.urlGlobalVariable] = header.url;
window[content.urlGlobalVariable] = content.url;

import("./bootstrap");
