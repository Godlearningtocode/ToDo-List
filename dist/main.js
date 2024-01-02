/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,
html {
    margin: 0px;
    font-family: sans-serif;
    font-size: 15px;
    color: rgb(22, 23, 48);
}

header {
    padding: 20px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(240, 236, 229);
    background-color: rgb(22, 23, 48);
    font-size: 3rem;
}

.logo {
    width: 60px;
    height: 60px;
}

.headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    gap: 10px;
    font-weight: bolder;
}

.content {
    width: 100%;
}

.contentContainer {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 120px;
    bottom: 0;
    width: 100%;
}

.sideBar {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    font-weight: bold;
    gap: 20px;
    width: 310px;
    padding: 20px;
    background-color: #b6bbc4;
}

.defaultProjects {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    font-size: 0.5rem;
}

.subCateogary, .addProject, .projectTitle{
    display: flex;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
}

.subCateogary:hover, .addProject:hover {
    background-color: rgba(22, 23, 48, 0.2);
    border-radius: 10px;
}

.activeBox, .taskCard:hover {
    font-weight: bold;
    background-color: rgba(22, 23, 48, 0.2);
    border-radius: 10px;
}

button {
    font-size: 1rem;
    padding: 10px;
    border: none;
    background: none;
    color: #161730;
}

.projectsList {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.projectsList > .heading {
    font-weight: bolder;
    font-size: 2rem;
}

.taskContent {
    padding: 30px;
    padding-left: 60px;
    padding-right: 60px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;
}

.taskContent > .header {
    font-size: 2rem;
    font-weight: bold;
    padding: 10px;
}

.taskCardSection {
    width: 100%;
}

.taskCard {
    padding: 10px;
    width: 100%;
}

.editBox {
    display: flex;;
    flex-direction: column;
    gap: 10px;
}

.taskCard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}

.taskCard > .leftContent {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;

}

.taskCard > .rightContent {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;
    min-height: 100%;
    font-size: 1.1rem;
}

.star, .edit, .delete, .filledStar, #star, .projectDelete {
    width: 20px;
    height: 20px;
}

.addTask {
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
    padding: 10px;
}

.addTaskContainer {
    display: flex;
    flex-direction: column;
}

.projectSection {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.projectSection > .subCateogary {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.projectTitle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 ;
}

#projectDelete {
    min-width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
    display: flex;
    gap: 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.titleContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 500px;
    max-width: 900px;
}

.leftContent > .titleContainer > .title {
    display: inline-block;
    word-break: break-word;  
}

.descriptionContainer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 500px;
}

.remainingContainer {
    display: flex;
    flex-direction: row;
    gap: 20px;
    min-width: 500px;
    justify-content: space-between;
}

.remainingContainer > div {
    display: flex;
    flex-direction: row;
    gap: 5px;
}

.form > .formButtons {
    display: flex;
    flex-direction: row;
    gap: 5px;
    min-width: 500px;
    justify-content: center;
}

#addButton {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: #aaffaa;
    border-radius: 5px;
}

#cancelButton {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    border-radius: 5px;
    background-color: #ffbebe;
}

#projectValue {
    width: calc(100% - 8px);
}

.projectForm > .formButtons {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
}

.addButtonProject {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: #aaffaa;
    border-radius: 5px;
}

.cancelButtonProject {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    border-radius: 5px;
    background-color: #ffbebe;
}

.projectForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 225px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body,\nhtml {\n    margin: 0px;\n    font-family: sans-serif;\n    font-size: 15px;\n    color: rgb(22, 23, 48);\n}\n\nheader {\n    padding: 20px;\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: rgb(240, 236, 229);\n    background-color: rgb(22, 23, 48);\n    font-size: 3rem;\n}\n\n.logo {\n    width: 60px;\n    height: 60px;\n}\n\n.headerContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    text-align: center;\n    gap: 10px;\n    font-weight: bolder;\n}\n\n.content {\n    width: 100%;\n}\n\n.contentContainer {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 120px;\n    bottom: 0;\n    width: 100%;\n}\n\n.sideBar {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    font-weight: bold;\n    gap: 20px;\n    width: 310px;\n    padding: 20px;\n    background-color: #b6bbc4;\n}\n\n.defaultProjects {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 15px;\n    font-size: 0.5rem;\n}\n\n.subCateogary, .addProject, .projectTitle{\n    display: flex;\n    width: 100%;\n    padding-right: 20px;\n    padding-left: 20px;\n}\n\n.subCateogary:hover, .addProject:hover {\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\n.activeBox, .taskCard:hover {\n    font-weight: bold;\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\nbutton {\n    font-size: 1rem;\n    padding: 10px;\n    border: none;\n    background: none;\n    color: #161730;\n}\n\n.projectsList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectsList > .heading {\n    font-weight: bolder;\n    font-size: 2rem;\n}\n\n.taskContent {\n    padding: 30px;\n    padding-left: 60px;\n    padding-right: 60px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 15px;\n}\n\n.taskContent > .header {\n    font-size: 2rem;\n    font-weight: bold;\n    padding: 10px;\n}\n\n.taskCardSection {\n    width: 100%;\n}\n\n.taskCard {\n    padding: 10px;\n    width: 100%;\n}\n\n.editBox {\n    display: flex;;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.taskCard {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    width: 100%;\n}\n\n.taskCard > .leftContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n\n}\n\n.taskCard > .rightContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n    min-height: 100%;\n    font-size: 1.1rem;\n}\n\n.star, .edit, .delete, .filledStar, #star, .projectDelete {\n    width: 20px;\n    height: 20px;\n}\n\n.addTask {\n    font-size: 1.2rem;\n    font-weight: bold;\n    width: 100%;\n    padding: 10px;\n}\n\n.addTaskContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectSection {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectSection > .subCateogary {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.projectTitle {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 1 ;\n}\n\n#projectDelete {\n    min-width: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.form {\n    display: flex;\n    gap: 15px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.titleContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n    max-width: 900px;\n}\n\n.leftContent > .titleContainer > .title {\n    display: inline-block;\n    word-break: break-word;  \n}\n\n.descriptionContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n}\n\n.remainingContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    min-width: 500px;\n    justify-content: space-between;\n}\n\n.remainingContainer > div {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.form > .formButtons {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n    min-width: 500px;\n    justify-content: center;\n}\n\n#addButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n#cancelButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n#projectValue {\n    width: calc(100% - 8px);\n}\n\n.projectForm > .formButtons {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 5px;\n}\n\n.addButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n.cancelButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n.projectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    width: 225px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
function addTask(projectsArray) {
    const taskContent = document.querySelector('.taskContent');
    const form = document.createElement('form');
    form.classList.add('form');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = 'title';
    titleLabel.classList.add('title');
    titleLabel.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'title';
    titleInput.id = 'title';
    titleInput.type = 'text';
    titleInput.required = true;
    
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptionContainer');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = 'description';
    descriptionLabel.classList.add('description');
    descriptionLabel.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'description';
    descriptionInput.id = 'description';
    descriptionInput.type = 'text';

    const remainingContainer = document.createElement('div');
    remainingContainer.classList.add('remainingContainer');

    const deadlineContainer = document.createElement('div');
    deadlineContainer.classList.add('deadlineContainer')
    const deadlineLabel = document.createElement('label');
    deadlineLabel.htmlFor = 'deadline';
    deadlineLabel.classList.add('deadline');
    deadlineLabel.innerText = 'Deadline:';
    const deadlineInput = document.createElement('input');
    deadlineInput.name = 'deadline';
    deadlineInput.id = 'deadline';
    deadlineInput.type = 'date';
    deadlineInput.required = true;

    const importanceContainer = document.createElement('div');
    importanceContainer.classList.add('importanceContainer');
    const importanceLabel = document.createElement('label');
    importanceLabel.htmlFor = 'importance';
    importanceLabel.classList.add('importance');
    importanceLabel.innerText = 'Important:';
    const importanceInput = document.createElement('SELECT');
    importanceInput.id = 'importance';
    const importanceYes = document.createElement('option');
    importanceYes.value = 'yes';
    importanceYes.innerText = 'Yes';
    const importanceNo = document.createElement('option');
    importanceNo.value = 'no';
    importanceNo.innerText = 'No';

    const taskProjectContainer = document.createElement('div');
    taskProjectContainer.classList.add('taskProjectContainer');
    const projectLabel = document.createElement('label');
    projectLabel.classList.add('projectLabel');
    projectLabel.htmlFor = 'projectInput';
    projectLabel.innerText = 'Project:';
    const projectInput = document.createElement('SELECT');
    projectInput.id = 'projectInput';
    for(let i = 0; i < projectsArray.length; i++) {
        let optionValue = document.createElement('option');
        optionValue.value = projectsArray[i].projectTitle;
        optionValue.innerText = projectsArray[i].projectTitle;
        projectInput.appendChild(optionValue);
    }
    const noProject = document.createElement('option');
    noProject.value = 'none';;
    noProject.innerText = 'None'
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.id = 'addButton';
    addButton.innerText = 'Add'
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'cancelButton';
    cancelButton.innerText = 'Cancel';

    importanceInput.appendChild(importanceYes);
    importanceInput.appendChild(importanceNo);

    projectInput.appendChild(noProject);

    formButtons.appendChild(addButton);
    formButtons.appendChild(cancelButton);

    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);

    descriptionContainer.appendChild(descriptionLabel);
    descriptionContainer.appendChild(descriptionInput);

    remainingContainer.appendChild(deadlineContainer);
    remainingContainer.appendChild(importanceContainer);
    remainingContainer.appendChild(taskProjectContainer);
    deadlineContainer.appendChild(deadlineLabel);
    deadlineContainer.appendChild(deadlineInput);
    importanceContainer.appendChild(importanceLabel);
    importanceContainer.appendChild(importanceInput);
    taskProjectContainer.appendChild(projectLabel);
    taskProjectContainer.appendChild(projectInput);

    form.appendChild(titleContainer);
    form.appendChild(descriptionContainer);
    form.appendChild(remainingContainer);
    form.appendChild(formButtons);

    taskContent.appendChild(form);
}

/***/ }),

/***/ "./src/appendProject.js":
/*!******************************!*\
  !*** ./src/appendProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectWindow: () => (/* binding */ addProjectWindow),
/* harmony export */   appendProject: () => (/* binding */ appendProject),
/* harmony export */   appendProjectTasks: () => (/* binding */ appendProjectTasks),
/* harmony export */   cancelButtonProject: () => (/* binding */ cancelButtonProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   projectTab: () => (/* binding */ projectTab),
/* harmony export */   removeAddProject: () => (/* binding */ removeAddProject)
/* harmony export */ });
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");


//7. function for adding form at sidebar for project input
function addProjectWindow() {
    const projectsList = document.querySelector('.projectsList');
    const form = document.createElement('form');
    form.classList.add('projectForm');
    const projectValue = document.createElement('input');
    projectValue.id = 'projectValue';
    projectValue.type = 'text';
    projectValue.placeholder = 'Enter Project Name';
    projectValue.required = true;
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButtonProject = document.createElement('button');
    addButtonProject.classList.add('addButtonProject');
    addButtonProject.type = 'button';
    addButtonProject.innerText = 'Add';
    const cancelButtonProject = document.createElement('button');
    cancelButtonProject.classList.add('cancelButtonProject');
    cancelButtonProject.type = 'button'
    cancelButtonProject.innerText = 'Cancel';

    formButtons.appendChild(addButtonProject);
    formButtons.appendChild(cancelButtonProject);

    form.appendChild(projectValue);
    form.appendChild(formButtons);

    projectsList.appendChild(form);
}

//8. function for storing formProject data and appending project to the sidebar
function appendProject() {
    const projectSection = document.querySelector('.projectSection');
    const projectValue = document.querySelector('#projectValue').value;
    const projectCard = document.createElement('button');
    projectCard.classList.add('subCateogary');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('projectTitle');
    projectTitle.innerText = projectValue;
    const projectDelete = document.createElement('div');
    projectDelete.id = 'projectDelete';
    const delete_icon = new Image();
    delete_icon.src = _delete_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    delete_icon.classList.add('projectDelete');

    projectDelete.appendChild(delete_icon);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDelete);

    projectSection.appendChild(projectCard);
}

//9. function to remove addProject window after appending the project
function removeAddProject() {
    const projectForm = document.querySelector('.projectForm');
    projectForm.parentElement.removeChild(projectForm);
}

//2. function to remove addProjectWindow when cancel button is clicked
function cancelButtonProject() {
    const formProject = document.querySelector('.formProject');
    (formProject.parentElement).removeChild(formProject);
}

//3. function for project click event display of individual tabs of projects.
function projectTab(event, projectsArray) {
    for(let i = 0; i < projectsArray.length; i++) {
        if(event.target.value = projectsArray[i].projectTitle) {
            const taskContent = document.querySelector('.taskContent');
            while(taskContent.firstChild) {
                taskContent.removeChild(taskContent.firstChild)
            }
            const header = document.createElement('div');
            header.classList.add('header');
            header.innerText = projectsArray[i].projectTitle;
            taskContent.appendChild(header)
            const taskCardSection = document.createElement('div');
            taskCardSection.classList.add('taskCardSection');
            taskContent.appendChild(taskCardSection);
        }
    }
}

//4. function for appending tasks with same projectValue as the projectTab
function appendProjectTasks(tasksArray, event) {
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].projectValue == event.target.innerText) {
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue,
                projectValue: tasksArray[i].projectValue
            }
            appendTask(task);
        }
    }
}

//5. function to delete project from the project list
function deleteProject(projectsArray) {
    const projectDelete = document.querySelector('.projectDelete');
    (((projectDelete.parentElement).parentElement).parentElement).removeChild(((projectDelete.parentElement).parentElement));

    const projectName = projectDelete.parentElement.parentElement.firstChild;
    for(let i = 0; i < projectsArray.length; i++) {
        if(projectsArray[i].projectTitle == projectName.innerText) {
            projectsArray.splice(i, 1);
        }
    }
}

/***/ }),

/***/ "./src/appendTask.js":
/*!***************************!*\
  !*** ./src/appendTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendTask)
/* harmony export */ });
/* harmony import */ var _star_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star_icon.png */ "./src/star_icon.png");
/* harmony import */ var _filled_star_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filled_star.png */ "./src/filled_star.png");
/* harmony import */ var _edit_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_icon.png */ "./src/edit_icon.png");
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");





function appendTask(task) {
    const taskCardSection = document.querySelector('.taskCardSection');
    const taskCard = document.createElement('div');
    const importanceValue = task.importantValue;
    taskCard.classList.add('taskCard');
    const leftContent = document.createElement('div');
    leftContent.classList.add('leftContent');
    const rightContent = document.createElement('div');
    rightContent.classList.add('rightContent');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.name = 'checkbox';
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = task.titleValue;
    title.contentEditable = true;
    const description = document.createElement('div');
    description.classList.add('description');
    description.innerText = task.descriptionValue;
    const date = document.createElement('div');
    date.classList.add('date');
    date.innerText = task.deadlineValue;
    const star = new Image();
    if(importanceValue == 'yes'){
        star.src = _filled_star_png__WEBPACK_IMPORTED_MODULE_1__;
    } else {
        star.src = _star_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    }
    star.classList.add('star');
    const edit = new Image();
    edit.src = _edit_icon_png__WEBPACK_IMPORTED_MODULE_2__;
    edit.classList.add('edit');
    const deleteLogo = new Image();
    deleteLogo.src = _delete_icon_png__WEBPACK_IMPORTED_MODULE_3__;
    deleteLogo.classList.add('delete');

    titleContainer.appendChild(title);
    titleContainer.appendChild(description);

    leftContent.appendChild(checkbox);
    leftContent.appendChild(titleContainer);
    rightContent.appendChild(date);
    rightContent.appendChild(star);
    rightContent.appendChild(edit);
    rightContent.appendChild(deleteLogo);

    taskCard.appendChild(leftContent);
    taskCard.appendChild(rightContent);

    taskCardSection.appendChild(taskCard);
}

/***/ }),

/***/ "./src/checkbox.js":
/*!*************************!*\
  !*** ./src/checkbox.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkedTask: () => (/* binding */ checkedTask),
/* harmony export */   removeTaskArray: () => (/* binding */ removeTaskArray)
/* harmony export */ });
// Remove tasks with checked class
function checkedTask() {
    const checked = document.querySelector('.checked');
    (checked.parentElement).removeChild(checked);
}

// Remove the checked task from array of tasks.
function removeTaskArray(tasksArray) {
    const checkedBox = document.querySelector('.checked');
    if(checkedBox) {
        const checkbox = document.querySelector('.checkbox');
        const removeTitle = checkbox.nextSibling.firstChild.innerText;
        for (let i = 0; i < tasksArray.length; i++) {
            if(tasksArray[i].titleValue == removeTitle) {
                tasksArray.splice(i, 1);
                break;
            }
        }
    } else {
        const deletedTask = document.querySelector('.deleted');
        if(deletedTask) {
            const checkbox = document.querySelector('.checkbox');
            const removeTitle = checkbox.nextSibling.firstChild.innerText;
            for (let i = 0; i < tasksArray.length; i++) {
                if(tasksArray[i].titleValue == removeTitle) {
                    tasksArray.splice(i, 1);
                    break;
                }
            }
        }
    }
}

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTask)
/* harmony export */ });
// delete task from the dom tree.
function deleteTask() {
    const deletedTask = document.querySelector('.deleted');
    (deletedTask.parentElement).removeChild(deletedTask);
}

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEditValues: () => (/* binding */ addEditValues),
/* harmony export */   editBox: () => (/* binding */ editBox),
/* harmony export */   editValue: () => (/* binding */ editValue),
/* harmony export */   removeEditBox: () => (/* binding */ removeEditBox),
/* harmony export */   removeValue: () => (/* binding */ removeValue)
/* harmony export */ });
//5. function to add edit box under the task for edit click event
function editBox() {
    const editBoxContainer = ((event.target.parentNode).parentNode).parentNode;
    editBoxContainer.classList.add('editBox');

    const editForm = document.createElement('form');
    editForm.classList.add('editForm');

    const editTitle = document.createElement('label');
    editTitle.htmlFor = 'editTitle';
    editTitle.classList.add('editTitle');
    editTitle.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'editTitle';
    titleInput.id = 'editTitle';
    titleInput.type = 'text';
    titleInput.required = true;
    const editDescription = document.createElement('label');
    editDescription.htmlFor = 'editDescription';
    editDescription.classList.add('editDescription');
    editDescription.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'editDescription';
    descriptionInput.id = 'editDescription';
    descriptionInput.type = 'text';
    const editDeadline = document.createElement('label');
    editDeadline.htmlFor = 'editDeadline';
    editDeadline.classList.add('editDeadline');
    editDeadline.innerText = 'Deadline:';
    const deadlineInput = document.createElement('input');
    deadlineInput.name = 'editDeadline';
    deadlineInput.id = 'editDeadline';
    deadlineInput.type = 'date';
    deadlineInput.required = true;
    const formButtons = document.createElement('div');
    formButtons.classList.add('formButtons');
    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.id = 'editAddButton';
    addButton.innerText = 'Add'
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.id = 'editCancelButton';
    cancelButton.innerText = 'Cancel';

    formButtons.appendChild(addButton);
    formButtons.appendChild(cancelButton);

    editForm.appendChild(editTitle);
    editForm.appendChild(titleInput);
    editForm.appendChild(editDescription);
    editForm.appendChild(descriptionInput);
    editForm.appendChild(editDeadline);
    editForm.appendChild(deadlineInput);
    editForm.appendChild(formButtons);

    editBoxContainer.appendChild(editForm);
}

//6. add editBox input values to task.
function editValue() {
    const title = ((document.querySelector('.editBox').firstChild).firstChild).firstChild.nextSibling.firstChild;
    const description = title.nextSibling;
    const date = document.querySelector('.editBox').firstChild.firstChild.nextSibling.firstChild;
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const dateValue = document.querySelector('#editDeadline').value;
    title.innerText = titleValue;
    description.innerText = descriptionValue;
    date.innerText = dateValue;
}

//7. functio to remove editBox when editAddButton is clicked
function removeEditBox() {
    const taskCard = document.querySelector('.editBox').firstChild.nextSibling;
    (taskCard.parentNode).removeChild(taskCard);
}

//8. function to remove pre edit values from tasksarray
function removeValue(tasksArray) {
    const taskCardSection = document.querySelector('.editBox');
    const removeTitle = taskCardSection.firstChild.firstChild.firstChild.nextSibling.firstChild.innerText;
    for(let i = 0; i < tasksArray.length; i++) {
        if(removeTitle == tasksArray[i].titleValue) {
            tasksArray.splice(i, 1);
        }
    }
}

//9. fucntion to add new values to tasksarray after editAddButton is clicked 
function addEditValues(tasksArray) {
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const deadlineValue = document.querySelector('#editDeadline').value;

    const task = {titleValue,descriptionValue,deadlineValue};
    tasksArray.push(task);
}

/***/ }),

/***/ "./src/importantPage.js":
/*!******************************!*\
  !*** ./src/importantPage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   importantPage: () => (/* binding */ importantPage)
/* harmony export */ });
//5. function for display for important tab
function importantPage(tasksArray, appendTask) {
    const taskContent = document.querySelector('.taskContent');
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.innerText = 'Important';
    header.classList.add('header');
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    taskContent.id = 'importantTab';

    taskContent.appendChild(header);
    taskContent.appendChild(taskCardSection);

    for(let i = 0; i < tasksArray.length; i++) {
        let task = {
            titleValue: tasksArray[i].titleValue,
            descriptionValue: tasksArray[i].descriptionValue,
            deadlineValue: tasksArray[i].deadlineValue,
            importantValue: tasksArray[i].importantValue,
            projectValue: tasksArray[i].projectValue
        }
        if(task.importantValue == 'yes') {
            appendTask(task);
        }
    }
}

/***/ }),

/***/ "./src/importantTasks.js":
/*!*******************************!*\
  !*** ./src/importantTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImportantTasks: () => (/* binding */ addImportantTasks),
/* harmony export */   changeFilledStar: () => (/* binding */ changeFilledStar),
/* harmony export */   changeStar: () => (/* binding */ changeStar),
/* harmony export */   removeImportantTasks: () => (/* binding */ removeImportantTasks)
/* harmony export */ });
/* harmony import */ var _double_tick_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./double-tick.png */ "./src/double-tick.png");
/* harmony import */ var _star_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star_icon.png */ "./src/star_icon.png");
/* harmony import */ var _filled_star_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filled_star.png */ "./src/filled_star.png");
/* harmony import */ var _edit_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit_icon.png */ "./src/edit_icon.png");
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");






// function to change importnt icon to filled 
function changeStar() {
    const star = document.querySelector('.star');
    if(star.src = _star_icon_png__WEBPACK_IMPORTED_MODULE_1__) {
        star.src = _filled_star_png__WEBPACK_IMPORTED_MODULE_2__;
        star.classList.add('filledStar');
        star.classList.remove('star');
    }
}

// function to add values to importantTasks array
function addImportantTasks(tasksArray) {
    const star = document.querySelector('.star');
    star.parentElement.parentElement.classList.add('important');
    const important = document.querySelector('.important');
    const titleValue = important.firstChild.firstChild.nextSibling.firstChild.innerText;

    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].titleValue == titleValue) {
            tasksArray[i].importantValue = 'yes'
        }
    }
}

// function to change importnt filled icon to non filled icon and remove important class from parents parent node
function changeFilledStar() {
    const filledStar = document.querySelector('.filledStar');
    filledStar.parentElement.parentElement.classList.remove('important');
    if(filledStar.src = _filled_star_png__WEBPACK_IMPORTED_MODULE_2__){
        filledStar.src = _star_icon_png__WEBPACK_IMPORTED_MODULE_1__;
        filledStar.classList.add('star');
        filledStar.classList.remove('filledStar');
    }
}

// remove task from importantTaskArray
function removeImportantTasks(tasksArray) {
    const importantTaskCard = document.querySelector('.important');
    const removeImportantTitle = importantTaskCard.firstChild.firstChild.nextSibling.firstChild.innerText;
    for(let i = 0; i < tasksArray.length; i++) {
        if(removeImportantTitle == tasksArray[i].titleValue) {
            tasksArray[i].importantValue = 'no';
        }
    }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _todo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.png */ "./src/todo.png");
/* harmony import */ var _star_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./star_icon.png */ "./src/star_icon.png");
/* harmony import */ var _filled_star_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filled_star.png */ "./src/filled_star.png");
/* harmony import */ var _edit_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit_icon.png */ "./src/edit_icon.png");
/* harmony import */ var _delete_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete_icon.png */ "./src/delete_icon.png");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");
/* harmony import */ var _appendTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appendTask.js */ "./src/appendTask.js");
/* harmony import */ var _checkbox_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkbox.js */ "./src/checkbox.js");
/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deleteTask.js */ "./src/deleteTask.js");
/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./editTask.js */ "./src/editTask.js");
/* harmony import */ var _importantTasks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./importantTasks.js */ "./src/importantTasks.js");
/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./today.js */ "./src/today.js");
/* harmony import */ var _thisWeek_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thisWeek.js */ "./src/thisWeek.js");
/* harmony import */ var _importantPage_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./importantPage.js */ "./src/importantPage.js");
/* harmony import */ var _appendProject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./appendProject.js */ "./src/appendProject.js");
//importing assets

































//assigning var to dom elements
const taskContent = document.querySelector('.taskContent');
const allTasksButton = document.querySelector('#allTasks');
const taskCardSection = document.querySelector('.taskCardSection');
const addTaskButton = document.querySelector('.addTask');
const todayButton = document.querySelector('#today');
const addProject = document.querySelector('.addProject');
let isFormPresent = false;
let isProjectFormPresent = false;


//header logo in header section
const headerLogo = document.querySelector('.logo');
headerLogo.src = _todo_png__WEBPACK_IMPORTED_MODULE_1__;


//array for storing form data
let tasksArray = [];
let arrProjectlists = ['All Tasks', 'Today', 'This Week', 'Important']
let projectsArray = [];


//EVENTLISTENERS:-
//1. click listener for addtask for form input
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addTask') === true) {
        if(!isFormPresent) {
            (0,_addTask_js__WEBPACK_IMPORTED_MODULE_6__["default"])(projectsArray);
            isFormPresent = true;
        }
    }
})

//2. click event listener for addbutton on form for addtask
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'addButton') {
        const titleValue = document.querySelector('#title').value;
        const descriptionValue = document.querySelector('#description').value;
        const deadlineValue = document.querySelector('#deadline').value;
        const importantValue = document.querySelector('#importance').value;
        const projectValue = document.querySelector('#projectInput').value;

        const task = {titleValue, descriptionValue, deadlineValue, importantValue, projectValue};
        const form = document.querySelector('form');
        if(form.checkValidity()) {
            tasksArray.push(task);
            taskContent.removeChild(taskContent.lastChild);
            (0,_appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
        } else {
            alert ('Please fill all required fields!')
        }
        isFormPresent = false;
        event.preventDefault();
    }
});

//3. Click event for remove addtaskwindow
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'cancelButton') {
        taskContent.removeChild(taskContent.lastChild);
    }
})

//4. click event listener for today section
todayButton.addEventListener('click', () => {
    ;(0,_today_js__WEBPACK_IMPORTED_MODULE_12__.todayPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
    activeBox(event);
})

//5. click event for removing task with checked div from dom and tasksArray
document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox') == true) {
        (event.target.parentNode).parentNode.classList.add('checked');
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.removeTaskArray)(tasksArray);
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.checkedTask)();
    }
})

//6. click event for delete icon on task.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete') == true) {
        (event.target.parentNode).parentNode.classList.add('deleted');
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.removeTaskArray)(tasksArray);
        (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
    }
})

//7. click event for edit icon
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit') == true) {
        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.editBox)();
    }
})

//8. click event for editBox addButton
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'editAddButton') {
        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeValue)(tasksArray);
        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.addEditValues)(tasksArray);
        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.editValue)();
        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeEditBox)();
    }
})

//9. click event for important icon to change empty star to filled star and add task values to importantTasks array.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('star') == true) {
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.addImportantTasks)(tasksArray);
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.changeStar)();
    } else if(event.target.classList.contains('filledStar') == true) {
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.removeImportantTasks)(tasksArray);
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.changeFilledStar)();
        if(taskContent.id == 'importantTab'){
            (0,_importantPage_js__WEBPACK_IMPORTED_MODULE_14__.importantPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        }
    }
})

//10. click event for this week tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'thisWeek') {
        (0,_thisWeek_js__WEBPACK_IMPORTED_MODULE_13__.thisWeekPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"], _today_js__WEBPACK_IMPORTED_MODULE_12__.todayDate);
        activeBox(event);
    }
})

//11. click event for impotant tab
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'important') {
        (0,_importantPage_js__WEBPACK_IMPORTED_MODULE_14__.importantPage)(tasksArray, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        activeBox(event);
    }
})

//12. click event for all tasks page
allTasksButton.addEventListener('click', () => {
    allTasks(tasksArray);
    activeBox(event);
})

//13. function for add project window for value input for new project
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addProject') === true) {
        if(!isProjectFormPresent) {
            (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.addProjectWindow)();
            isProjectFormPresent = true;
        }
    }
})

//14. function to append project to the projectList.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('addButtonProject') === true) {
        let projectTitle = document.querySelector('#projectValue');
        if(projectTitle.value.length >= 1) {
            let project = {projectTitle: projectTitle.value};
            projectsArray.push(project);
    
            (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.appendProject)();
            (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.removeAddProject)();
            isProjectFormPresent = false;
        } else {
            alert ('Please fill all required details.');
        }
    }
})

//15. click event for when cancelProjectButton is clicked
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('cancelButtonProject') === true) {
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.removeAddProject)();
        isProjectFormPresent = false;
    }
})

//16. click event to delte a project from the list.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectDelete') === true) {
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.deleteProject)(projectsArray);
    }
})

//17. click event for project lists tab for switching display to respective tab
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectTitle') === true) {
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.projectTab)(event, projectsArray);
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.appendProjectTasks)(tasksArray, event);
        activeBoxProject(event);
    }
})


//FUNCTIONS:-
//1. function for display of all tasks tab
function allTasks(tasksArray) {
    while(taskContent.firstChild){
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'All Tasks';
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    const addTask = document.createElement('div');
    addTask.classList.add('addTask');
    addTask.innerText = 'Add Task';

    taskContent.appendChild(header);
    taskContent.appendChild(taskCardSection);
    taskContent.appendChild(addTask);

    for(let i = 0; i < tasksArray.length; i++) {
        let task = {
            titleValue: tasksArray[i].titleValue,
            descriptionValue: tasksArray[i].descriptionValue,
            deadlineValue: tasksArray[i].deadlineValue,
            importantValue: tasksArray[i].importantValue
        }
        ;(0,_appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
    }
}

//2. function for adding css to active tab on sidebar 
function activeBox(event) {
    const activeBox = document.querySelector('.activeBox')
    if(activeBox !== null) {
        activeBox.classList.remove('activeBox');
    }
    event.target.classList.add('activeBox');
}

//3. function for adding css to active tab on sidebar 
function activeBoxProject(event) {
    const activeBox = document.querySelector('.activeBox')
    if(activeBox !== null) {
        activeBox.classList.remove('activeBox');
    }
    event.target.parentNode.classList.add('activeBox');
}

/***/ }),

/***/ "./src/thisWeek.js":
/*!*************************!*\
  !*** ./src/thisWeek.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   oneWeekDate: () => (/* binding */ oneWeekDate),
/* harmony export */   thisWeekPage: () => (/* binding */ thisWeekPage)
/* harmony export */ });
//3. function for thisWeekPage dom tree display
function thisWeekPage(tasksArray, appendTask, todayDate) {
    const taskContent = document.querySelector('.taskContent');
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.innerText = 'This Week';
    header.classList.add('header');
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    taskContent.id = 'thisWeekTab';

    taskContent.appendChild(header);
    taskContent.appendChild(taskCardSection);

    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].deadlineValue <= oneWeekDate().oneWeekFromToday && tasksArray[i].deadlineValue >= todayDate().currentDate) {
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue,
            }
            appendTask(task);
        }
    }
}

//4. function to get a date one week from now
function oneWeekDate() {
    const date = new Date();
    date.setDate(new Date().getDate() + 7);

    let day = (date.getDate()) >= 10 ? (date.getDate()) : "0" + (date.getDate());
    let month = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1);
    let year = date.getFullYear();

    let oneWeekFromToday = `${year}-${month}-${day}`;
    return {oneWeekFromToday};
}

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todayDate: () => (/* binding */ todayDate),
/* harmony export */   todayPage: () => (/* binding */ todayPage)
/* harmony export */ });
//1. function for display of dom tree of today page
function todayPage(tasksArray, appendTask) {
    const taskContent = document.querySelector('.taskContent');
    while(taskContent.firstChild) {
        taskContent.removeChild(taskContent.firstChild);
    }
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerText = 'Today';
    taskContent.appendChild(header);
    const taskCardSection = document.createElement('div');
    taskCardSection.classList.add('taskCardSection');
    taskContent.appendChild(taskCardSection);
    for(let i = 0; i < tasksArray.length; i++) {
        if(tasksArray[i].deadlineValue == todayDate().currentDate){
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue,
            }
            appendTask(task);
        }
    }
}

//2. function to get todays date
function todayDate() {
    const taskContent = document.querySelector('.taskContent');
    taskContent.id = 'todayTab';
    const date = new Date();
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${year}-${month}-${day}`;
    return { currentDate };
}

/***/ }),

/***/ "./src/delete_icon.png":
/*!*****************************!*\
  !*** ./src/delete_icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e800887c1b4b66c0f2da.png";

/***/ }),

/***/ "./src/double-tick.png":
/*!*****************************!*\
  !*** ./src/double-tick.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d78ebb97772281801cde.png";

/***/ }),

/***/ "./src/edit_icon.png":
/*!***************************!*\
  !*** ./src/edit_icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae76596c032054257278.png";

/***/ }),

/***/ "./src/filled_star.png":
/*!*****************************!*\
  !*** ./src/filled_star.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0c80c84f87ce3a595a1d.png";

/***/ }),

/***/ "./src/star_icon.png":
/*!***************************!*\
  !*** ./src/star_icon.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eed2d2aeb0d4a83f2f4e.png";

/***/ }),

/***/ "./src/todo.png":
/*!**********************!*\
  !*** ./src/todo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce7daa3101e8f7e539a8.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/addTask.js");
/******/ 	__webpack_require__("./src/appendTask.js");
/******/ 	__webpack_require__("./src/today.js");
/******/ 	__webpack_require__("./src/checkbox.js");
/******/ 	__webpack_require__("./src/deleteTask.js");
/******/ 	__webpack_require__("./src/editTask.js");
/******/ 	__webpack_require__("./src/importantTasks.js");
/******/ 	__webpack_require__("./src/thisWeek.js");
/******/ 	__webpack_require__("./src/importantPage.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/appendProject.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8s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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEg0Qzs7QUFFNUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQVc7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7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c291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGVuZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGVuZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW1wb3J0YW50UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW1wb3J0YW50VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aGlzV2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSxcbmh0bWwge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiKDIyLCAyMywgNDgpO1xufVxuXG5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYigyNDAsIDIzNiwgMjI5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDIzLCA0OCk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uaGVhZGVyQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTIwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZUJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogMzEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiYmM0O1xufVxuXG4uZGVmYXVsdFByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuXG4uc3ViQ2F0ZW9nYXJ5LCAuYWRkUHJvamVjdCwgLnByb2plY3RUaXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc3ViQ2F0ZW9nYXJ5OmhvdmVyLCAuYWRkUHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjMsIDQ4LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5hY3RpdmVCb3gsIC50YXNrQ2FyZDpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjMsIDQ4LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICMxNjE3MzA7XG59XG5cbi5wcm9qZWN0c0xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5wcm9qZWN0c0xpc3QgPiAuaGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi50YXNrQ29udGVudCB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTVweDtcbn1cblxuLnRhc2tDb250ZW50ID4gLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YXNrQ2FyZFNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza0NhcmQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lZGl0Qm94IHtcbiAgICBkaXNwbGF5OiBmbGV4OztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRhc2tDYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza0NhcmQgPiAubGVmdENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbn1cblxuLnRhc2tDYXJkID4gLnJpZ2h0Q29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uc3RhciwgLmVkaXQsIC5kZWxldGUsIC5maWxsZWRTdGFyLCAjc3RhciwgLnByb2plY3REZWxldGUge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmFkZFRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5hZGRUYXNrQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnByb2plY3RTZWN0aW9uID4gLnN1YkNhdGVvZ2FyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0VGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMSA7XG59XG5cbiNwcm9qZWN0RGVsZXRlIHtcbiAgICBtaW4td2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRpdGxlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG4ubGVmdENvbnRlbnQgPiAudGl0bGVDb250YWluZXIgPiAudGl0bGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyAgXG59XG5cbi5kZXNjcmlwdGlvbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5yZW1haW5pbmdDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDIwcHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZW1haW5pbmdDb250YWluZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDVweDtcbn1cblxuLmZvcm0gPiAuZm9ybUJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDVweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNjYW5jZWxCdXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcbn1cblxuI3Byb2plY3RWYWx1ZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG59XG5cbi5wcm9qZWN0Rm9ybSA+IC5mb3JtQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogNXB4O1xufVxuXG4uYWRkQnV0dG9uUHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2FuY2VsQnV0dG9uUHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xufVxuXG4ucHJvamVjdEZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAyMjVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Is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QUNsQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmh0bWwge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6IHJnYigyMiwgMjMsIDQ4KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjQwLCAyMzYsIDIyOSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjMsIDQ4KTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMjBweDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGVCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDMxMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiYmM0O1xcbn1cXG5cXG4uZGVmYXVsdFByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG5cXG4uc3ViQ2F0ZW9nYXJ5LCAuYWRkUHJvamVjdCwgLnByb2plY3RUaXRsZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuXFxuLnN1YkNhdGVvZ2FyeTpob3ZlciwgLmFkZFByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5hY3RpdmVCb3gsIC50YXNrQ2FyZDpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogIzE2MTczMDtcXG59XFxuXFxuLnByb2plY3RzTGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3RzTGlzdCA+IC5oZWFkaW5nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFza0NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrQ29udGVudCA+IC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFza0NhcmRTZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFza0NhcmQgPiAubGVmdENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcbn1cXG5cXG4udGFza0NhcmQgPiAucmlnaHRDb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5zdGFyLCAuZWRpdCwgLmRlbGV0ZSwgLmZpbGxlZFN0YXIsICNzdGFyLCAucHJvamVjdERlbGV0ZSB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmFkZFRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0U2VjdGlvbiA+IC5zdWJDYXRlb2dhcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxIDtcXG59XFxuXFxuI3Byb2plY3REZWxldGUge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udGl0bGVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG59XFxuXFxuLmxlZnRDb250ZW50ID4gLnRpdGxlQ29udGFpbmVyID4gLnRpdGxlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyAgXFxufVxcblxcbi5kZXNjcmlwdGlvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNXB4O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4ucmVtYWluaW5nQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5yZW1haW5pbmdDb250YWluZXIgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmZvcm0gPiAuZm9ybUJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhZGRCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmFhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNjYW5jZWxCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYmU7XFxufVxcblxcbiNwcm9qZWN0VmFsdWUge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcXG59XFxuXFxuLnByb2plY3RGb3JtID4gLmZvcm1CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4uYWRkQnV0dG9uUHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNhbmNlbEJ1dHRvblByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJlYmU7XFxufVxcblxcbi5wcm9qZWN0Rm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgd2lkdGg6IDIyNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrKHByb2plY3RzQXJyYXkpIHtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdGl0bGVMYWJlbC5odG1sRm9yID0gJ3RpdGxlJztcbiAgICB0aXRsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGVMYWJlbC5pbm5lclRleHQgPSAnVGl0bGU6JztcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAndGl0bGUnO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBcbiAgICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246JztcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgIGNvbnN0IHJlbWFpbmluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlbWFpbmluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZW1haW5pbmdDb250YWluZXInKTtcblxuICAgIGNvbnN0IGRlYWRsaW5lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVhZGxpbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVhZGxpbmVDb250YWluZXInKVxuICAgIGNvbnN0IGRlYWRsaW5lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlYWRsaW5lTGFiZWwuaHRtbEZvciA9ICdkZWFkbGluZSc7XG4gICAgZGVhZGxpbmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdkZWFkbGluZScpO1xuICAgIGRlYWRsaW5lTGFiZWwuaW5uZXJUZXh0ID0gJ0RlYWRsaW5lOic7XG4gICAgY29uc3QgZGVhZGxpbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVhZGxpbmVJbnB1dC5uYW1lID0gJ2RlYWRsaW5lJztcbiAgICBkZWFkbGluZUlucHV0LmlkID0gJ2RlYWRsaW5lJztcbiAgICBkZWFkbGluZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGVhZGxpbmVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBpbXBvcnRhbmNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1wb3J0YW5jZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbmNlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaW1wb3J0YW5jZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBpbXBvcnRhbmNlTGFiZWwuaHRtbEZvciA9ICdpbXBvcnRhbmNlJztcbiAgICBpbXBvcnRhbmNlTGFiZWwuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW5jZScpO1xuICAgIGltcG9ydGFuY2VMYWJlbC5pbm5lclRleHQgPSAnSW1wb3J0YW50Oic7XG4gICAgY29uc3QgaW1wb3J0YW5jZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU0VMRUNUJyk7XG4gICAgaW1wb3J0YW5jZUlucHV0LmlkID0gJ2ltcG9ydGFuY2UnO1xuICAgIGNvbnN0IGltcG9ydGFuY2VZZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBpbXBvcnRhbmNlWWVzLnZhbHVlID0gJ3llcyc7XG4gICAgaW1wb3J0YW5jZVllcy5pbm5lclRleHQgPSAnWWVzJztcbiAgICBjb25zdCBpbXBvcnRhbmNlTm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBpbXBvcnRhbmNlTm8udmFsdWUgPSAnbm8nO1xuICAgIGltcG9ydGFuY2VOby5pbm5lclRleHQgPSAnTm8nO1xuXG4gICAgY29uc3QgdGFza1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrUHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrUHJvamVjdENvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJvamVjdExhYmVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RMYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5odG1sRm9yID0gJ3Byb2plY3RJbnB1dCc7XG4gICAgcHJvamVjdExhYmVsLmlubmVyVGV4dCA9ICdQcm9qZWN0Oic7XG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU0VMRUNUJyk7XG4gICAgcHJvamVjdElucHV0LmlkID0gJ3Byb2plY3RJbnB1dCc7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG9wdGlvblZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvblZhbHVlLnZhbHVlID0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0VGl0bGU7XG4gICAgICAgIG9wdGlvblZhbHVlLmlubmVyVGV4dCA9IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdFRpdGxlO1xuICAgICAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uVmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBub1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBub1Byb2plY3QudmFsdWUgPSAnbm9uZSc7O1xuICAgIG5vUHJvamVjdC5pbm5lclRleHQgPSAnTm9uZSdcbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Zvcm1CdXR0b25zJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRCdXR0b24uaWQgPSAnYWRkQnV0dG9uJztcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCdcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi5pZCA9ICdjYW5jZWxCdXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIGltcG9ydGFuY2VJbnB1dC5hcHBlbmRDaGlsZChpbXBvcnRhbmNlWWVzKTtcbiAgICBpbXBvcnRhbmNlSW5wdXQuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZU5vKTtcblxuICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChub1Byb2plY3QpO1xuXG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIHJlbWFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XG4gICAgcmVtYWluaW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFuY2VDb250YWluZXIpO1xuICAgIHJlbWFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJvamVjdENvbnRhaW5lcik7XG4gICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVMYWJlbCk7XG4gICAgZGVhZGxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVJbnB1dCk7XG4gICAgaW1wb3J0YW5jZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRhbmNlTGFiZWwpO1xuICAgIGltcG9ydGFuY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZUlucHV0KTtcbiAgICB0YXNrUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIHRhc2tQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJlbWFpbmluZ0NvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9ucyk7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbn0iLCJpbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9kZWxldGVfaWNvbi5wbmcnO1xuXG4vLzcuIGZ1bmN0aW9uIGZvciBhZGRpbmcgZm9ybSBhdCBzaWRlYmFyIGZvciBwcm9qZWN0IGlucHV0XG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdFdpbmRvdygpIHtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHNMaXN0Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gICAgY29uc3QgcHJvamVjdFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0VmFsdWUuaWQgPSAncHJvamVjdFZhbHVlJztcbiAgICBwcm9qZWN0VmFsdWUudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0VmFsdWUucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBOYW1lJztcbiAgICBwcm9qZWN0VmFsdWUucmVxdWlyZWQgPSB0cnVlO1xuICAgIGNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZm9ybUJ1dHRvbnMnKTtcbiAgICBjb25zdCBhZGRCdXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b25Qcm9qZWN0Jyk7XG4gICAgYWRkQnV0dG9uUHJvamVjdC50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkQnV0dG9uUHJvamVjdC5pbm5lclRleHQgPSAnQWRkJztcbiAgICBjb25zdCBjYW5jZWxCdXR0b25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjYW5jZWxCdXR0b25Qcm9qZWN0Jyk7XG4gICAgY2FuY2VsQnV0dG9uUHJvamVjdC50eXBlID0gJ2J1dHRvbidcbiAgICBjYW5jZWxCdXR0b25Qcm9qZWN0LmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uUHJvamVjdCk7XG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uUHJvamVjdCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3RWYWx1ZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9ucyk7XG5cbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoZm9ybSk7XG59XG5cbi8vOC4gZnVuY3Rpb24gZm9yIHN0b3JpbmcgZm9ybVByb2plY3QgZGF0YSBhbmQgYXBwZW5kaW5nIHByb2plY3QgdG8gdGhlIHNpZGViYXJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTZWN0aW9uJyk7XG4gICAgY29uc3QgcHJvamVjdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RWYWx1ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgnc3ViQ2F0ZW9nYXJ5Jyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0VmFsdWU7XG4gICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REZWxldGUuaWQgPSAncHJvamVjdERlbGV0ZSc7XG4gICAgY29uc3QgZGVsZXRlX2ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVfaWNvbi5zcmMgPSBkZWxldGVJbWFnZTtcbiAgICBkZWxldGVfaWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGVsZXRlJyk7XG5cbiAgICBwcm9qZWN0RGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZV9pY29uKTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3REZWxldGUpO1xuXG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xufVxuXG4vLzkuIGZ1bmN0aW9uIHRvIHJlbW92ZSBhZGRQcm9qZWN0IHdpbmRvdyBhZnRlciBhcHBlbmRpbmcgdGhlIHByb2plY3RcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBZGRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgcHJvamVjdEZvcm0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwcm9qZWN0Rm9ybSk7XG59XG5cbi8vMi4gZnVuY3Rpb24gdG8gcmVtb3ZlIGFkZFByb2plY3RXaW5kb3cgd2hlbiBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWRcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxCdXR0b25Qcm9qZWN0KCkge1xuICAgIGNvbnN0IGZvcm1Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1Qcm9qZWN0Jyk7XG4gICAgKGZvcm1Qcm9qZWN0LnBhcmVudEVsZW1lbnQpLnJlbW92ZUNoaWxkKGZvcm1Qcm9qZWN0KTtcbn1cblxuLy8zLiBmdW5jdGlvbiBmb3IgcHJvamVjdCBjbGljayBldmVudCBkaXNwbGF5IG9mIGluZGl2aWR1YWwgdGFicyBvZiBwcm9qZWN0cy5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0VGFiKGV2ZW50LCBwcm9qZWN0c0FycmF5KSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LnZhbHVlID0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0VGl0bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgICAgICAgICB3aGlsZSh0YXNrQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICAgICAgaGVhZGVyLmlubmVyVGV4dCA9IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdFRpdGxlO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgICAgICAgICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ2FyZFNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzQuIGZ1bmN0aW9uIGZvciBhcHBlbmRpbmcgdGFza3Mgd2l0aCBzYW1lIHByb2plY3RWYWx1ZSBhcyB0aGUgcHJvamVjdFRhYlxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3RUYXNrcyh0YXNrc0FycmF5LCBldmVudCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tzQXJyYXlbaV0ucHJvamVjdFZhbHVlID09IGV2ZW50LnRhcmdldC5pbm5lclRleHQpIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlVmFsdWU6IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiB0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9uVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgICAgIGltcG9ydGFudFZhbHVlOiB0YXNrc0FycmF5W2ldLmltcG9ydGFudFZhbHVlLFxuICAgICAgICAgICAgICAgIHByb2plY3RWYWx1ZTogdGFza3NBcnJheVtpXS5wcm9qZWN0VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vNS4gZnVuY3Rpb24gdG8gZGVsZXRlIHByb2plY3QgZnJvbSB0aGUgcHJvamVjdCBsaXN0XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0c0FycmF5KSB7XG4gICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RGVsZXRlJyk7XG4gICAgKCgocHJvamVjdERlbGV0ZS5wYXJlbnRFbGVtZW50KS5wYXJlbnRFbGVtZW50KS5wYXJlbnRFbGVtZW50KS5yZW1vdmVDaGlsZCgoKHByb2plY3REZWxldGUucGFyZW50RWxlbWVudCkucGFyZW50RWxlbWVudCkpO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0RGVsZXRlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHByb2plY3RzQXJyYXlbaV0ucHJvamVjdFRpdGxlID09IHByb2plY3ROYW1lLmlubmVyVGV4dCkge1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHN0YXJJbWFnZSBmcm9tICcuL3N0YXJfaWNvbi5wbmcnO1xuaW1wb3J0IGZpbGxlZFN0YXIgZnJvbSAnLi9maWxsZWRfc3Rhci5wbmcnXG5pbXBvcnQgZWRpdEltYWdlIGZyb20gJy4vZWRpdF9pY29uLnBuZyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9kZWxldGVfaWNvbi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NhcmRTZWN0aW9uJyk7XG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbXBvcnRhbmNlVmFsdWUgPSB0YXNrLmltcG9ydGFudFZhbHVlO1xuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkJyk7XG4gICAgY29uc3QgbGVmdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0Q29udGVudCcpO1xuICAgIGNvbnN0IHJpZ2h0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdyaWdodENvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94Lm5hbWUgPSAnY2hlY2tib3gnO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGVDb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZVZhbHVlO1xuICAgIHRpdGxlLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb25WYWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmRlYWRsaW5lVmFsdWU7XG4gICAgY29uc3Qgc3RhciA9IG5ldyBJbWFnZSgpO1xuICAgIGlmKGltcG9ydGFuY2VWYWx1ZSA9PSAneWVzJyl7XG4gICAgICAgIHN0YXIuc3JjID0gZmlsbGVkU3RhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGFyLnNyYyA9IHN0YXJJbWFnZTtcbiAgICB9XG4gICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XG4gICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXQuc3JjID0gZWRpdEltYWdlO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGNvbnN0IGRlbGV0ZUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVMb2dvLnNyYyA9IGRlbGV0ZUltYWdlO1xuICAgIGRlbGV0ZUxvZ28uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgbGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICByaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgcmlnaHRDb250ZW50LmFwcGVuZENoaWxkKHN0YXIpO1xuICAgIHJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICByaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlTG9nbyk7XG5cbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChsZWZ0Q29udGVudCk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQocmlnaHRDb250ZW50KTtcblxuICAgIHRhc2tDYXJkU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG59IiwiLy8gUmVtb3ZlIHRhc2tzIHdpdGggY2hlY2tlZCBjbGFzc1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrZWRUYXNrKCkge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tlZCcpO1xuICAgIChjaGVja2VkLnBhcmVudEVsZW1lbnQpLnJlbW92ZUNoaWxkKGNoZWNrZWQpO1xufVxuXG4vLyBSZW1vdmUgdGhlIGNoZWNrZWQgdGFzayBmcm9tIGFycmF5IG9mIHRhc2tzLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRhc2tBcnJheSh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgY2hlY2tlZEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2VkJyk7XG4gICAgaWYoY2hlY2tlZEJveCkge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuICAgICAgICBjb25zdCByZW1vdmVUaXRsZSA9IGNoZWNrYm94Lm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSA9PSByZW1vdmVUaXRsZSkge1xuICAgICAgICAgICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVsZXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlZCcpO1xuICAgICAgICBpZihkZWxldGVkVGFzaykge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZVRpdGxlID0gY2hlY2tib3gubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUgPT0gcmVtb3ZlVGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBkZWxldGUgdGFzayBmcm9tIHRoZSBkb20gdHJlZS5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XG4gICAgY29uc3QgZGVsZXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlZCcpO1xuICAgIChkZWxldGVkVGFzay5wYXJlbnRFbGVtZW50KS5yZW1vdmVDaGlsZChkZWxldGVkVGFzayk7XG59IiwiLy81LiBmdW5jdGlvbiB0byBhZGQgZWRpdCBib3ggdW5kZXIgdGhlIHRhc2sgZm9yIGVkaXQgY2xpY2sgZXZlbnRcbmV4cG9ydCBmdW5jdGlvbiBlZGl0Qm94KCkge1xuICAgIGNvbnN0IGVkaXRCb3hDb250YWluZXIgPSAoKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKS5wYXJlbnROb2RlKS5wYXJlbnROb2RlO1xuICAgIGVkaXRCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZWRpdEJveCcpO1xuXG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdEZvcm0nKTtcblxuICAgIGNvbnN0IGVkaXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZWRpdFRpdGxlLmh0bWxGb3IgPSAnZWRpdFRpdGxlJztcbiAgICBlZGl0VGl0bGUuY2xhc3NMaXN0LmFkZCgnZWRpdFRpdGxlJyk7XG4gICAgZWRpdFRpdGxlLmlubmVyVGV4dCA9ICdUaXRsZTonO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICdlZGl0VGl0bGUnO1xuICAgIHRpdGxlSW5wdXQuaWQgPSAnZWRpdFRpdGxlJztcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgZWRpdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlZGl0RGVzY3JpcHRpb24uaHRtbEZvciA9ICdlZGl0RGVzY3JpcHRpb24nO1xuICAgIGVkaXREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdlZGl0RGVzY3JpcHRpb24nKTtcbiAgICBlZGl0RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2VkaXREZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdlZGl0RGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBjb25zdCBlZGl0RGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVkaXREZWFkbGluZS5odG1sRm9yID0gJ2VkaXREZWFkbGluZSc7XG4gICAgZWRpdERlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2VkaXREZWFkbGluZScpO1xuICAgIGVkaXREZWFkbGluZS5pbm5lclRleHQgPSAnRGVhZGxpbmU6JztcbiAgICBjb25zdCBkZWFkbGluZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWFkbGluZUlucHV0Lm5hbWUgPSAnZWRpdERlYWRsaW5lJztcbiAgICBkZWFkbGluZUlucHV0LmlkID0gJ2VkaXREZWFkbGluZSc7XG4gICAgZGVhZGxpbmVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRlYWRsaW5lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZm9ybUJ1dHRvbnMnKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGFkZEJ1dHRvbi5pZCA9ICdlZGl0QWRkQnV0dG9uJztcbiAgICBhZGRCdXR0b24uaW5uZXJUZXh0ID0gJ0FkZCdcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNhbmNlbEJ1dHRvbi5pZCA9ICdlZGl0Q2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG5cbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0VGl0bGUpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdERlYWRsaW5lKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUlucHV0KTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9ucyk7XG5cbiAgICBlZGl0Qm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcbn1cblxuLy82LiBhZGQgZWRpdEJveCBpbnB1dCB2YWx1ZXMgdG8gdGFzay5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VmFsdWUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSAoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Qm94JykuZmlyc3RDaGlsZCkuZmlyc3RDaGlsZCkuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGl0bGUubmV4dFNpYmxpbmc7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Qm94JykuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXREZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0RGVhZGxpbmUnKS52YWx1ZTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0aXRsZVZhbHVlO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uVmFsdWU7XG4gICAgZGF0ZS5pbm5lclRleHQgPSBkYXRlVmFsdWU7XG59XG5cbi8vNy4gZnVuY3RpbyB0byByZW1vdmUgZWRpdEJveCB3aGVuIGVkaXRBZGRCdXR0b24gaXMgY2xpY2tlZFxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVkaXRCb3goKSB7XG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJveCcpLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmc7XG4gICAgKHRhc2tDYXJkLnBhcmVudE5vZGUpLnJlbW92ZUNoaWxkKHRhc2tDYXJkKTtcbn1cblxuLy84LiBmdW5jdGlvbiB0byByZW1vdmUgcHJlIGVkaXQgdmFsdWVzIGZyb20gdGFza3NhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVZhbHVlKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJveCcpO1xuICAgIGNvbnN0IHJlbW92ZVRpdGxlID0gdGFza0NhcmRTZWN0aW9uLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHJlbW92ZVRpdGxlID09IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSkge1xuICAgICAgICAgICAgdGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vOS4gZnVjbnRpb24gdG8gYWRkIG5ldyB2YWx1ZXMgdG8gdGFza3NhcnJheSBhZnRlciBlZGl0QWRkQnV0dG9uIGlzIGNsaWNrZWQgXG5leHBvcnQgZnVuY3Rpb24gYWRkRWRpdFZhbHVlcyh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXREZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRlYWRsaW5lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdERlYWRsaW5lJykudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrID0ge3RpdGxlVmFsdWUsZGVzY3JpcHRpb25WYWx1ZSxkZWFkbGluZVZhbHVlfTtcbiAgICB0YXNrc0FycmF5LnB1c2godGFzayk7XG59IiwiLy81LiBmdW5jdGlvbiBmb3IgZGlzcGxheSBmb3IgaW1wb3J0YW50IHRhYlxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydGFudFBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgd2hpbGUodGFza0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdJbXBvcnRhbnQnO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgdGFza0NvbnRlbnQuaWQgPSAnaW1wb3J0YW50VGFiJztcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICBwcm9qZWN0VmFsdWU6IHRhc2tzQXJyYXlbaV0ucHJvamVjdFZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYodGFzay5pbXBvcnRhbnRWYWx1ZSA9PSAneWVzJykge1xuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vZG91YmxlLXRpY2sucG5nJ1xuaW1wb3J0IHN0YXJJbWFnZSBmcm9tICcuL3N0YXJfaWNvbi5wbmcnO1xuaW1wb3J0IGZpbGxlZFN0YXJJbWFnZSBmcm9tICcuL2ZpbGxlZF9zdGFyLnBuZyc7XG5pbXBvcnQgZWRpdEltYWdlIGZyb20gJy4vZWRpdF9pY29uLnBuZyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9kZWxldGVfaWNvbi5wbmcnO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgaW1wb3J0bnQgaWNvbiB0byBmaWxsZWQgXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlU3RhcigpIHtcbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXInKTtcbiAgICBpZihzdGFyLnNyYyA9IHN0YXJJbWFnZSkge1xuICAgICAgICBzdGFyLnNyYyA9IGZpbGxlZFN0YXJJbWFnZTtcbiAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmaWxsZWRTdGFyJyk7XG4gICAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcicpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gYWRkIHZhbHVlcyB0byBpbXBvcnRhbnRUYXNrcyBhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXInKTtcbiAgICBzdGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGltcG9ydGFudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUgPT0gdGl0bGVWYWx1ZSkge1xuICAgICAgICAgICAgdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSA9ICd5ZXMnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBpbXBvcnRudCBmaWxsZWQgaWNvbiB0byBub24gZmlsbGVkIGljb24gYW5kIHJlbW92ZSBpbXBvcnRhbnQgY2xhc3MgZnJvbSBwYXJlbnRzIHBhcmVudCBub2RlXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRmlsbGVkU3RhcigpIHtcbiAgICBjb25zdCBmaWxsZWRTdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGxlZFN0YXInKTtcbiAgICBmaWxsZWRTdGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQnKTtcbiAgICBpZihmaWxsZWRTdGFyLnNyYyA9IGZpbGxlZFN0YXJJbWFnZSl7XG4gICAgICAgIGZpbGxlZFN0YXIuc3JjID0gc3RhckltYWdlO1xuICAgICAgICBmaWxsZWRTdGFyLmNsYXNzTGlzdC5hZGQoJ3N0YXInKTtcbiAgICAgICAgZmlsbGVkU3Rhci5jbGFzc0xpc3QucmVtb3ZlKCdmaWxsZWRTdGFyJyk7XG4gICAgfVxufVxuXG4vLyByZW1vdmUgdGFzayBmcm9tIGltcG9ydGFudFRhc2tBcnJheVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBpbXBvcnRhbnRUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnRhbnQnKTtcbiAgICBjb25zdCByZW1vdmVJbXBvcnRhbnRUaXRsZSA9IGltcG9ydGFudFRhc2tDYXJkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihyZW1vdmVJbXBvcnRhbnRUaXRsZSA9PSB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUpIHtcbiAgICAgICAgICAgIHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUgPSAnbm8nO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vaW1wb3J0aW5nIGFzc2V0c1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL3RvZG8ucG5nJ1xuaW1wb3J0IHN0YXJJbWFnZSBmcm9tICcuL3N0YXJfaWNvbi5wbmcnO1xuaW1wb3J0IGZpbGxlZFN0YXJJbWFnZSBmcm9tICcuL2ZpbGxlZF9zdGFyLnBuZyc7XG5pbXBvcnQgZWRpdEltYWdlIGZyb20gJy4vZWRpdF9pY29uLnBuZyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9kZWxldGVfaWNvbi5wbmcnO1xuaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9hZGRUYXNrLmpzJztcbmltcG9ydCBhcHBlbmRUYXNrIGZyb20gJy4vYXBwZW5kVGFzay5qcyc7XG5pbXBvcnQge2NoZWNrZWRUYXNrfSBmcm9tICcuL2NoZWNrYm94LmpzJztcbmltcG9ydCB7cmVtb3ZlVGFza0FycmF5fSBmcm9tICcuL2NoZWNrYm94LmpzJztcbmltcG9ydCBkZWxldGVUYXNrIGZyb20gJy4vZGVsZXRlVGFzay5qcyc7XG5pbXBvcnQgeyBlZGl0Qm94IH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyBlZGl0VmFsdWUgfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcbmltcG9ydCB7IHJlbW92ZUVkaXRCb3ggfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcbmltcG9ydCB7IHJlbW92ZVZhbHVlIH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyBhZGRFZGl0VmFsdWVzIH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VTdGFyIH0gZnJvbSAnLi9pbXBvcnRhbnRUYXNrcy5qcyc7XG5pbXBvcnQgeyBhZGRJbXBvcnRhbnRUYXNrcyB9IGZyb20gJy4vaW1wb3J0YW50VGFza3MuanMnO1xuaW1wb3J0IHsgY2hhbmdlRmlsbGVkU3RhciB9IGZyb20gJy4vaW1wb3J0YW50VGFza3MuanMnO1xuaW1wb3J0IHsgcmVtb3ZlSW1wb3J0YW50VGFza3MgfSBmcm9tICcuL2ltcG9ydGFudFRhc2tzLmpzJztcbmltcG9ydCB7IHRvZGF5UGFnZSB9IGZyb20gJy4vdG9kYXkuanMnO1xuaW1wb3J0IHsgdG9kYXlEYXRlIH0gZnJvbSAnLi90b2RheS5qcyc7XG5pbXBvcnQgeyB0aGlzV2Vla1BhZ2UgfSBmcm9tICcuL3RoaXNXZWVrLmpzJztcbmltcG9ydCB7IG9uZVdlZWtEYXRlIH0gZnJvbSAnLi90aGlzV2Vlay5qcyc7XG5pbXBvcnQgeyBpbXBvcnRhbnRQYWdlIH0gZnJvbSAnLi9pbXBvcnRhbnRQYWdlLmpzJ1xuaW1wb3J0IHsgYWRkUHJvamVjdFdpbmRvdyB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBhcHBlbmRQcm9qZWN0IH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IHJlbW92ZUFkZFByb2plY3QgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgY2FuY2VsQnV0dG9uUHJvamVjdCB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBwcm9qZWN0VGFiIH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGFwcGVuZFByb2plY3RUYXNrcyB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0IH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcblxuLy9hc3NpZ25pbmcgdmFyIHRvIGRvbSBlbGVtZW50c1xuY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbmNvbnN0IGFsbFRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFRhc2tzJyk7XG5jb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NhcmRTZWN0aW9uJyk7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2snKTtcbmNvbnN0IHRvZGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZGF5Jyk7XG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3QnKTtcbmxldCBpc0Zvcm1QcmVzZW50ID0gZmFsc2U7XG5sZXQgaXNQcm9qZWN0Rm9ybVByZXNlbnQgPSBmYWxzZTtcblxuXG4vL2hlYWRlciBsb2dvIGluIGhlYWRlciBzZWN0aW9uXG5jb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28nKTtcbmhlYWRlckxvZ28uc3JjID0gbG9nb0ltYWdlO1xuXG5cbi8vYXJyYXkgZm9yIHN0b3JpbmcgZm9ybSBkYXRhXG5sZXQgdGFza3NBcnJheSA9IFtdO1xubGV0IGFyclByb2plY3RsaXN0cyA9IFsnQWxsIFRhc2tzJywgJ1RvZGF5JywgJ1RoaXMgV2VlaycsICdJbXBvcnRhbnQnXVxubGV0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuXG4vL0VWRU5UTElTVEVORVJTOi1cbi8vMS4gY2xpY2sgbGlzdGVuZXIgZm9yIGFkZHRhc2sgZm9yIGZvcm0gaW5wdXRcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRUYXNrJykgPT09IHRydWUpIHtcbiAgICAgICAgaWYoIWlzRm9ybVByZXNlbnQpIHtcbiAgICAgICAgICAgIGFkZFRhc2socHJvamVjdHNBcnJheSk7XG4gICAgICAgICAgICBpc0Zvcm1QcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vMi4gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIGFkZGJ1dHRvbiBvbiBmb3JtIGZvciBhZGR0YXNrXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICdhZGRCdXR0b24nKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZWFkbGluZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlYWRsaW5lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGltcG9ydGFudFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ltcG9ydGFuY2UnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJvamVjdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RJbnB1dCcpLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHRhc2sgPSB7dGl0bGVWYWx1ZSwgZGVzY3JpcHRpb25WYWx1ZSwgZGVhZGxpbmVWYWx1ZSwgaW1wb3J0YW50VmFsdWUsIHByb2plY3RWYWx1ZX07XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIGlmKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0YXNrc0FycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0ICgnUGxlYXNlIGZpbGwgYWxsIHJlcXVpcmVkIGZpZWxkcyEnKVxuICAgICAgICB9XG4gICAgICAgIGlzRm9ybVByZXNlbnQgPSBmYWxzZTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG59KTtcblxuLy8zLiBDbGljayBldmVudCBmb3IgcmVtb3ZlIGFkZHRhc2t3aW5kb3dcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gJ2NhbmNlbEJ1dHRvbicpIHtcbiAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQubGFzdENoaWxkKTtcbiAgICB9XG59KVxuXG4vLzQuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciB0b2RheSBzZWN0aW9uXG50b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RheVBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzayk7XG4gICAgYWN0aXZlQm94KGV2ZW50KTtcbn0pXG5cbi8vNS4gY2xpY2sgZXZlbnQgZm9yIHJlbW92aW5nIHRhc2sgd2l0aCBjaGVja2VkIGRpdiBmcm9tIGRvbSBhbmQgdGFza3NBcnJheVxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpID09IHRydWUpIHtcbiAgICAgICAgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgcmVtb3ZlVGFza0FycmF5KHRhc2tzQXJyYXkpO1xuICAgICAgICBjaGVja2VkVGFzaygpO1xuICAgIH1cbn0pXG5cbi8vNi4gY2xpY2sgZXZlbnQgZm9yIGRlbGV0ZSBpY29uIG9uIHRhc2suXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykgPT0gdHJ1ZSkge1xuICAgICAgICAoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUpLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlZCcpO1xuICAgICAgICByZW1vdmVUYXNrQXJyYXkodGFza3NBcnJheSk7XG4gICAgICAgIGRlbGV0ZVRhc2soKTtcbiAgICB9XG59KVxuXG4vLzcuIGNsaWNrIGV2ZW50IGZvciBlZGl0IGljb25cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0JykgPT0gdHJ1ZSkge1xuICAgICAgICBlZGl0Qm94KCk7XG4gICAgfVxufSlcblxuLy84LiBjbGljayBldmVudCBmb3IgZWRpdEJveCBhZGRCdXR0b25cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gJ2VkaXRBZGRCdXR0b24nKSB7XG4gICAgICAgIHJlbW92ZVZhbHVlKHRhc2tzQXJyYXkpO1xuICAgICAgICBhZGRFZGl0VmFsdWVzKHRhc2tzQXJyYXkpO1xuICAgICAgICBlZGl0VmFsdWUoKTtcbiAgICAgICAgcmVtb3ZlRWRpdEJveCgpO1xuICAgIH1cbn0pXG5cbi8vOS4gY2xpY2sgZXZlbnQgZm9yIGltcG9ydGFudCBpY29uIHRvIGNoYW5nZSBlbXB0eSBzdGFyIHRvIGZpbGxlZCBzdGFyIGFuZCBhZGQgdGFzayB2YWx1ZXMgdG8gaW1wb3J0YW50VGFza3MgYXJyYXkuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhcicpID09IHRydWUpIHtcbiAgICAgICAgYWRkSW1wb3J0YW50VGFza3ModGFza3NBcnJheSk7XG4gICAgICAgIGNoYW5nZVN0YXIoKTtcbiAgICB9IGVsc2UgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmlsbGVkU3RhcicpID09IHRydWUpIHtcbiAgICAgICAgcmVtb3ZlSW1wb3J0YW50VGFza3ModGFza3NBcnJheSk7XG4gICAgICAgIGNoYW5nZUZpbGxlZFN0YXIoKTtcbiAgICAgICAgaWYodGFza0NvbnRlbnQuaWQgPT0gJ2ltcG9ydGFudFRhYicpe1xuICAgICAgICAgICAgaW1wb3J0YW50UGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vMTAuIGNsaWNrIGV2ZW50IGZvciB0aGlzIHdlZWsgdGFiXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICd0aGlzV2VlaycpIHtcbiAgICAgICAgdGhpc1dlZWtQYWdlKHRhc2tzQXJyYXksIGFwcGVuZFRhc2ssIHRvZGF5RGF0ZSk7XG4gICAgICAgIGFjdGl2ZUJveChldmVudCk7XG4gICAgfVxufSlcblxuLy8xMS4gY2xpY2sgZXZlbnQgZm9yIGltcG90YW50IHRhYlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PSAnaW1wb3J0YW50Jykge1xuICAgICAgICBpbXBvcnRhbnRQYWdlKHRhc2tzQXJyYXksIGFwcGVuZFRhc2spO1xuICAgICAgICBhY3RpdmVCb3goZXZlbnQpO1xuICAgIH1cbn0pXG5cbi8vMTIuIGNsaWNrIGV2ZW50IGZvciBhbGwgdGFza3MgcGFnZVxuYWxsVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWxsVGFza3ModGFza3NBcnJheSk7XG4gICAgYWN0aXZlQm94KGV2ZW50KTtcbn0pXG5cbi8vMTMuIGZ1bmN0aW9uIGZvciBhZGQgcHJvamVjdCB3aW5kb3cgZm9yIHZhbHVlIGlucHV0IGZvciBuZXcgcHJvamVjdFxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZFByb2plY3QnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZighaXNQcm9qZWN0Rm9ybVByZXNlbnQpIHtcbiAgICAgICAgICAgIGFkZFByb2plY3RXaW5kb3coKTtcbiAgICAgICAgICAgIGlzUHJvamVjdEZvcm1QcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vMTQuIGZ1bmN0aW9uIHRvIGFwcGVuZCBwcm9qZWN0IHRvIHRoZSBwcm9qZWN0TGlzdC5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRCdXR0b25Qcm9qZWN0JykgPT09IHRydWUpIHtcbiAgICAgICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VmFsdWUnKTtcbiAgICAgICAgaWYocHJvamVjdFRpdGxlLnZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IHtwcm9qZWN0VGl0bGU6IHByb2plY3RUaXRsZS52YWx1ZX07XG4gICAgICAgICAgICBwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCk7XG4gICAgXG4gICAgICAgICAgICBhcHBlbmRQcm9qZWN0KCk7XG4gICAgICAgICAgICByZW1vdmVBZGRQcm9qZWN0KCk7XG4gICAgICAgICAgICBpc1Byb2plY3RGb3JtUHJlc2VudCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQgKCdQbGVhc2UgZmlsbCBhbGwgcmVxdWlyZWQgZGV0YWlscy4nKTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vMTUuIGNsaWNrIGV2ZW50IGZvciB3aGVuIGNhbmNlbFByb2plY3RCdXR0b24gaXMgY2xpY2tlZFxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbEJ1dHRvblByb2plY3QnKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZW1vdmVBZGRQcm9qZWN0KCk7XG4gICAgICAgIGlzUHJvamVjdEZvcm1QcmVzZW50ID0gZmFsc2U7XG4gICAgfVxufSlcblxuLy8xNi4gY2xpY2sgZXZlbnQgdG8gZGVsdGUgYSBwcm9qZWN0IGZyb20gdGhlIGxpc3QuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdERlbGV0ZScpID09PSB0cnVlKSB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdHNBcnJheSk7XG4gICAgfVxufSlcblxuLy8xNy4gY2xpY2sgZXZlbnQgZm9yIHByb2plY3QgbGlzdHMgdGFiIGZvciBzd2l0Y2hpbmcgZGlzcGxheSB0byByZXNwZWN0aXZlIHRhYlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3RUaXRsZScpID09PSB0cnVlKSB7XG4gICAgICAgIHByb2plY3RUYWIoZXZlbnQsIHByb2plY3RzQXJyYXkpO1xuICAgICAgICBhcHBlbmRQcm9qZWN0VGFza3ModGFza3NBcnJheSwgZXZlbnQpO1xuICAgICAgICBhY3RpdmVCb3hQcm9qZWN0KGV2ZW50KTtcbiAgICB9XG59KVxuXG5cbi8vRlVOQ1RJT05TOi1cbi8vMS4gZnVuY3Rpb24gZm9yIGRpc3BsYXkgb2YgYWxsIHRhc2tzIHRhYlxuZnVuY3Rpb24gYWxsVGFza3ModGFza3NBcnJheSkge1xuICAgIHdoaWxlKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnQWxsIFRhc2tzJztcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFRhc2suY2xhc3NMaXN0LmFkZCgnYWRkVGFzaycpO1xuICAgIGFkZFRhc2suaW5uZXJUZXh0ID0gJ0FkZCBUYXNrJztcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWVcbiAgICAgICAgfVxuICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgIH1cbn1cblxuLy8yLiBmdW5jdGlvbiBmb3IgYWRkaW5nIGNzcyB0byBhY3RpdmUgdGFiIG9uIHNpZGViYXIgXG5mdW5jdGlvbiBhY3RpdmVCb3goZXZlbnQpIHtcbiAgICBjb25zdCBhY3RpdmVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlQm94JylcbiAgICBpZihhY3RpdmVCb3ggIT09IG51bGwpIHtcbiAgICAgICAgYWN0aXZlQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUJveCcpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlQm94Jyk7XG59XG5cbi8vMy4gZnVuY3Rpb24gZm9yIGFkZGluZyBjc3MgdG8gYWN0aXZlIHRhYiBvbiBzaWRlYmFyIFxuZnVuY3Rpb24gYWN0aXZlQm94UHJvamVjdChldmVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVCb3gnKVxuICAgIGlmKGFjdGl2ZUJveCAhPT0gbnVsbCkge1xuICAgICAgICBhY3RpdmVCb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlQm94Jyk7XG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUJveCcpO1xufSIsIi8vMy4gZnVuY3Rpb24gZm9yIHRoaXNXZWVrUGFnZSBkb20gdHJlZSBkaXNwbGF5XG5leHBvcnQgZnVuY3Rpb24gdGhpc1dlZWtQYWdlKHRhc2tzQXJyYXksIGFwcGVuZFRhc2ssIHRvZGF5RGF0ZSkge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgd2hpbGUodGFza0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdUaGlzIFdlZWsnO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgdGFza0NvbnRlbnQuaWQgPSAndGhpc1dlZWtUYWInO1xuXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ2FyZFNlY3Rpb24pO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlIDw9IG9uZVdlZWtEYXRlKCkub25lV2Vla0Zyb21Ub2RheSAmJiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUgPj0gdG9kYXlEYXRlKCkuY3VycmVudERhdGUpIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlVmFsdWU6IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiB0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9uVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgICAgIGltcG9ydGFudFZhbHVlOiB0YXNrc0FycmF5W2ldLmltcG9ydGFudFZhbHVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy80LiBmdW5jdGlvbiB0byBnZXQgYSBkYXRlIG9uZSB3ZWVrIGZyb20gbm93XG5leHBvcnQgZnVuY3Rpb24gb25lV2Vla0RhdGUoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgZGF0ZS5zZXREYXRlKG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICBsZXQgZGF5ID0gKGRhdGUuZ2V0RGF0ZSgpKSA+PSAxMCA/IChkYXRlLmdldERhdGUoKSkgOiBcIjBcIiArIChkYXRlLmdldERhdGUoKSk7XG4gICAgbGV0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpID49IDEwID8gKGRhdGUuZ2V0TW9udGgoKSArIDEpIDogXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBsZXQgb25lV2Vla0Zyb21Ub2RheSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgcmV0dXJuIHtvbmVXZWVrRnJvbVRvZGF5fTtcbn0iLCIvLzEuIGZ1bmN0aW9uIGZvciBkaXNwbGF5IG9mIGRvbSB0cmVlIG9mIHRvZGF5IHBhZ2VcbmV4cG9ydCBmdW5jdGlvbiB0b2RheVBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgd2hpbGUodGFza0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnVG9kYXknO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkU2VjdGlvbicpO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkU2VjdGlvbik7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlID09IHRvZGF5RGF0ZSgpLmN1cnJlbnREYXRlKXtcbiAgICAgICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlVmFsdWU6IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiB0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9uVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgICAgIGltcG9ydGFudFZhbHVlOiB0YXNrc0FycmF5W2ldLmltcG9ydGFudFZhbHVlLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8yLiBmdW5jdGlvbiB0byBnZXQgdG9kYXlzIGRhdGVcbmV4cG9ydCBmdW5jdGlvbiB0b2RheURhdGUoKSB7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbiAgICB0YXNrQ29udGVudC5pZCA9ICd0b2RheVRhYic7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgXG4gICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICBsZXQgY3VycmVudERhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIHJldHVybiB7IGN1cnJlbnREYXRlIH07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYWRkVGFzay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHBlbmRUYXNrLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RvZGF5LmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2NoZWNrYm94LmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RlbGV0ZVRhc2suanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZWRpdFRhc2suanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW1wb3J0YW50VGFza3MuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdGhpc1dlZWsuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW1wb3J0YW50UGFnZS5qc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcGVuZFByb2plY3QuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=