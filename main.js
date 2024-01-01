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

.activeBox {
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
}

.taskCardSection {
    width: 100%;
}

.taskCard {
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
    align-items: center;
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
    width: 100%
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body,\nhtml {\n    margin: 0px;\n    font-family: sans-serif;\n    font-size: 15px;\n    color: rgb(22, 23, 48);\n}\n\nheader {\n    padding: 20px;\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: rgb(240, 236, 229);\n    background-color: rgb(22, 23, 48);\n    font-size: 3rem;\n}\n\n.logo {\n    width: 60px;\n    height: 60px;\n}\n\n.headerContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    text-align: center;\n    gap: 10px;\n    font-weight: bolder;\n}\n\n.content {\n    width: 100%;\n}\n\n.contentContainer {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 120px;\n    bottom: 0;\n    width: 100%;\n}\n\n.sideBar {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    font-weight: bold;\n    gap: 20px;\n    width: 310px;\n    padding: 20px;\n    background-color: #b6bbc4;\n}\n\n.defaultProjects {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 15px;\n    font-size: 0.5rem;\n}\n\n.subCateogary, .addProject, .projectTitle{\n    display: flex;\n    width: 100%;\n    padding-right: 20px;\n    padding-left: 20px;\n}\n\n.subCateogary:hover, .addProject:hover {\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\n.activeBox {\n    font-weight: bold;\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\nbutton {\n    font-size: 1rem;\n    padding: 10px;\n    border: none;\n    background: none;\n    color: #161730;\n}\n\n.projectsList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectsList > .heading {\n    font-weight: bolder;\n    font-size: 2rem;\n}\n\n.taskContent {\n    padding: 30px;\n    padding-left: 60px;\n    padding-right: 60px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 15px;\n}\n\n.taskContent > .header {\n    font-size: 2rem;\n    font-weight: bold;\n}\n\n.taskCardSection {\n    width: 100%;\n}\n\n.taskCard {\n    width: 100%;\n}\n\n.editBox {\n    display: flex;;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.taskCard {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n}\n\n.taskCard > .leftContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n\n}\n\n.taskCard > .rightContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n    min-height: 100%;\n    font-size: 1.1rem;\n}\n\n.star, .edit, .delete, .filledStar, #star, .projectDelete {\n    width: 20px;\n    height: 20px;\n}\n\n.addTask {\n    font-size: 1.2rem;\n    font-weight: bold;\n    width: 100%\n}\n\n.addTaskContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectSection {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectSection > .subCateogary {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.projectTitle {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 1 ;\n}\n\n#projectDelete {\n    min-width: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.form {\n    display: flex;\n    gap: 15px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.titleContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n    max-width: 900px;\n}\n\n.leftContent > .titleContainer > .title {\n    display: inline-block;\n    word-break: break-word;  \n}\n\n.descriptionContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n}\n\n.remainingContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    min-width: 500px;\n    justify-content: space-between;\n}\n\n.remainingContainer > div {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.form > .formButtons {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n    min-width: 500px;\n    justify-content: center;\n}\n\n#addButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n#cancelButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n#projectValue {\n    width: calc(100% - 8px);\n}\n\n.projectForm > .formButtons {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 5px;\n}\n\n.addButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n.cancelButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n.projectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    width: 225px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVks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azovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBlbmRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHBlbmRUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGVsZXRlVGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZWRpdFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ltcG9ydGFudFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ltcG9ydGFudFRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGhpc1dlZWsuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHksXG5odG1sIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IHJnYigyMiwgMjMsIDQ4KTtcbn1cblxuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiByZ2IoMjQwLCAyMzYsIDIyOSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMywgNDgpO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuLmhlYWRlckNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEyMHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNpZGVCYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBnYXA6IDIwcHg7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YmJjNDtcbn1cblxuLmRlZmF1bHRQcm9qZWN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTVweDtcbiAgICBmb250LXNpemU6IDAuNXJlbTtcbn1cblxuLnN1YkNhdGVvZ2FyeSwgLmFkZFByb2plY3QsIC5wcm9qZWN0VGl0bGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnN1YkNhdGVvZ2FyeTpob3ZlciwgLmFkZFByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIzLCA0OCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uYWN0aXZlQm94IHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBjb2xvcjogIzE2MTczMDtcbn1cblxuLnByb2plY3RzTGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnByb2plY3RzTGlzdCA+IC5oZWFkaW5nIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnRhc2tDb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xufVxuXG4udGFza0NvbnRlbnQgPiAuaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YXNrQ2FyZFNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza0NhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZWRpdEJveCB7XG4gICAgZGlzcGxheTogZmxleDs7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi50YXNrQ2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGFza0NhcmQgPiAubGVmdENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbn1cblxuLnRhc2tDYXJkID4gLnJpZ2h0Q29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uc3RhciwgLmVkaXQsIC5kZWxldGUsIC5maWxsZWRTdGFyLCAjc3RhciwgLnByb2plY3REZWxldGUge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLmFkZFRhc2sge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5hZGRUYXNrQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9qZWN0U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTVweDtcbn1cblxuLnByb2plY3RTZWN0aW9uID4gLnN1YkNhdGVvZ2FyeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0VGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMSA7XG59XG5cbiNwcm9qZWN0RGVsZXRlIHtcbiAgICBtaW4td2lkdGg6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnRpdGxlQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG4ubGVmdENvbnRlbnQgPiAudGl0bGVDb250YWluZXIgPiAudGl0bGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkOyAgXG59XG5cbi5kZXNjcmlwdGlvbkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG59XG5cbi5yZW1haW5pbmdDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDIwcHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZW1haW5pbmdDb250YWluZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDVweDtcbn1cblxuLmZvcm0gPiAuZm9ybUJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDVweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jYWRkQnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiNjYW5jZWxCdXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcbn1cblxuI3Byb2plY3RWYWx1ZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG59XG5cbi5wcm9qZWN0Rm9ybSA+IC5mb3JtQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogNXB4O1xufVxuXG4uYWRkQnV0dG9uUHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2FuY2VsQnV0dG9uUHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xufVxuXG4ucHJvamVjdEZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAyMjVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFB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YTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDIyLCAyMywgNDgpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYigyNDAsIDIzNiwgMjI5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMywgNDgpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEyMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZUJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMzEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmJiYzQ7XFxufVxcblxcbi5kZWZhdWx0UHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcblxcbi5zdWJDYXRlb2dhcnksIC5hZGRQcm9qZWN0LCAucHJvamVjdFRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uc3ViQ2F0ZW9nYXJ5OmhvdmVyLCAuYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIzLCA0OCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFjdGl2ZUJveCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMywgNDgsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogIzE2MTczMDtcXG59XFxuXFxuLnByb2plY3RzTGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnByb2plY3RzTGlzdCA+IC5oZWFkaW5nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFza0NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDYwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi50YXNrQ29udGVudCA+IC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFza0NhcmRTZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdEJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrQ2FyZCA+IC5sZWZ0Q29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxufVxcblxcbi50YXNrQ2FyZCA+IC5yaWdodENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnN0YXIsIC5lZGl0LCAuZGVsZXRlLCAuZmlsbGVkU3RhciwgI3N0YXIsIC5wcm9qZWN0RGVsZXRlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxMDAlXFxufVxcblxcbi5hZGRUYXNrQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnByb2plY3RTZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24gPiAuc3ViQ2F0ZW9nYXJ5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMSA7XFxufVxcblxcbiNwcm9qZWN0RGVsZXRlIHtcXG4gICAgbWluLXdpZHRoOiAyMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRpdGxlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxufVxcblxcbi5sZWZ0Q29udGVudCA+IC50aXRsZUNvbnRhaW5lciA+IC50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDsgIFxcbn1cXG5cXG4uZGVzY3JpcHRpb25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnJlbWFpbmluZ0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucmVtYWluaW5nQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb3JtID4gLmZvcm1CdXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jYWRkQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY2FuY2VsQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xcbn1cXG5cXG4jcHJvamVjdFZhbHVlIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XFxufVxcblxcbi5wcm9qZWN0Rm9ybSA+IC5mb3JtQnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmFkZEJ1dHRvblByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmFhO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jYW5jZWxCdXR0b25Qcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xcbn1cXG5cXG4ucHJvamVjdEZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIHdpZHRoOiAyMjVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFzayhwcm9qZWN0c0FycmF5KSB7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aXRsZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHRpdGxlTGFiZWwuaHRtbEZvciA9ICd0aXRsZSc7XG4gICAgdGl0bGVMYWJlbC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOic7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0LmlkID0gJ3RpdGxlJztcbiAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgdGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgXG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2Rlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG5cbiAgICBjb25zdCByZW1haW5pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZW1haW5pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVtYWluaW5nQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBkZWFkbGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlYWRsaW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RlYWRsaW5lQ29udGFpbmVyJylcbiAgICBjb25zdCBkZWFkbGluZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZWFkbGluZUxhYmVsLmh0bWxGb3IgPSAnZGVhZGxpbmUnO1xuICAgIGRlYWRsaW5lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZGVhZGxpbmUnKTtcbiAgICBkZWFkbGluZUxhYmVsLmlubmVyVGV4dCA9ICdEZWFkbGluZTonO1xuICAgIGNvbnN0IGRlYWRsaW5lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlYWRsaW5lSW5wdXQubmFtZSA9ICdkZWFkbGluZSc7XG4gICAgZGVhZGxpbmVJbnB1dC5pZCA9ICdkZWFkbGluZSc7XG4gICAgZGVhZGxpbmVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRlYWRsaW5lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgaW1wb3J0YW5jZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltcG9ydGFuY2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW5jZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGltcG9ydGFuY2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaW1wb3J0YW5jZUxhYmVsLmh0bWxGb3IgPSAnaW1wb3J0YW5jZSc7XG4gICAgaW1wb3J0YW5jZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFuY2UnKTtcbiAgICBpbXBvcnRhbmNlTGFiZWwuaW5uZXJUZXh0ID0gJ0ltcG9ydGFudDonO1xuICAgIGNvbnN0IGltcG9ydGFuY2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NFTEVDVCcpO1xuICAgIGltcG9ydGFuY2VJbnB1dC5pZCA9ICdpbXBvcnRhbmNlJztcbiAgICBjb25zdCBpbXBvcnRhbmNlWWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaW1wb3J0YW5jZVllcy52YWx1ZSA9ICd5ZXMnO1xuICAgIGltcG9ydGFuY2VZZXMuaW5uZXJUZXh0ID0gJ1llcyc7XG4gICAgY29uc3QgaW1wb3J0YW5jZU5vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgaW1wb3J0YW5jZU5vLnZhbHVlID0gJ25vJztcbiAgICBpbXBvcnRhbmNlTm8uaW5uZXJUZXh0ID0gJ05vJztcblxuICAgIGNvbnN0IHRhc2tQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza1Byb2plY3RDb250YWluZXInKTtcbiAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHByb2plY3RMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuaHRtbEZvciA9ICdwcm9qZWN0SW5wdXQnO1xuICAgIHByb2plY3RMYWJlbC5pbm5lclRleHQgPSAnUHJvamVjdDonO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NFTEVDVCcpO1xuICAgIHByb2plY3RJbnB1dC5pZCA9ICdwcm9qZWN0SW5wdXQnO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb25WYWx1ZS52YWx1ZSA9IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdFRpdGxlO1xuICAgICAgICBvcHRpb25WYWx1ZS5pbm5lclRleHQgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZTtcbiAgICAgICAgcHJvamVjdElucHV0LmFwcGVuZENoaWxkKG9wdGlvblZhbHVlKTtcbiAgICB9XG4gICAgY29uc3Qgbm9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbm9Qcm9qZWN0LnZhbHVlID0gJ25vbmUnOztcbiAgICBub1Byb2plY3QuaW5uZXJUZXh0ID0gJ05vbmUnXG4gICAgY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdmb3JtQnV0dG9ucycpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkQnV0dG9uLmlkID0gJ2FkZEJ1dHRvbic7XG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24uaWQgPSAnY2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICBpbXBvcnRhbmNlSW5wdXQuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZVllcyk7XG4gICAgaW1wb3J0YW5jZUlucHV0LmFwcGVuZENoaWxkKGltcG9ydGFuY2VObyk7XG5cbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQobm9Qcm9qZWN0KTtcblxuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICByZW1haW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250YWluZXIpO1xuICAgIHJlbWFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRhbmNlQ29udGFpbmVyKTtcbiAgICByZW1haW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Byb2plY3RDb250YWluZXIpO1xuICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lTGFiZWwpO1xuICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lSW5wdXQpO1xuICAgIGltcG9ydGFuY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZUxhYmVsKTtcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFuY2VJbnB1dCk7XG4gICAgdGFza1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICB0YXNrUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChyZW1haW5pbmdDb250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMpO1xuXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG59IiwiaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vZGVsZXRlX2ljb24ucG5nJztcblxuLy83LiBmdW5jdGlvbiBmb3IgYWRkaW5nIGZvcm0gYXQgc2lkZWJhciBmb3IgcHJvamVjdCBpbnB1dFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RXaW5kb3coKSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzTGlzdCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdFZhbHVlLmlkID0gJ3Byb2plY3RWYWx1ZSc7XG4gICAgcHJvamVjdFZhbHVlLnR5cGUgPSAndGV4dCc7XG4gICAgcHJvamVjdFZhbHVlLnBsYWNlaG9sZGVyID0gJ0VudGVyIFByb2plY3QgTmFtZSc7XG4gICAgcHJvamVjdFZhbHVlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Zvcm1CdXR0b25zJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9uUHJvamVjdCcpO1xuICAgIGFkZEJ1dHRvblByb2plY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGFkZEJ1dHRvblByb2plY3QuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvblByb2plY3QuY2xhc3NMaXN0LmFkZCgnY2FuY2VsQnV0dG9uUHJvamVjdCcpO1xuICAgIGNhbmNlbEJ1dHRvblByb2plY3QudHlwZSA9ICdidXR0b24nXG4gICAgY2FuY2VsQnV0dG9uUHJvamVjdC5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGFkZEJ1dHRvblByb2plY3QpO1xuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvblByb2plY3QpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VmFsdWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMpO1xuXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG4vLzguIGZ1bmN0aW9uIGZvciBzdG9yaW5nIGZvcm1Qcm9qZWN0IGRhdGEgYW5kIGFwcGVuZGluZyBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U2VjdGlvbicpO1xuICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VmFsdWUnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3N1YkNhdGVvZ2FyeScpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdFZhbHVlO1xuICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGVsZXRlLmlkID0gJ3Byb2plY3REZWxldGUnO1xuICAgIGNvbnN0IGRlbGV0ZV9pY29uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlX2ljb24uc3JjID0gZGVsZXRlSW1hZ2U7XG4gICAgZGVsZXRlX2ljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdERlbGV0ZScpO1xuXG4gICAgcHJvamVjdERlbGV0ZS5hcHBlbmRDaGlsZChkZWxldGVfaWNvbik7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlKTtcblxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbn1cblxuLy85LiBmdW5jdGlvbiB0byByZW1vdmUgYWRkUHJvamVjdCB3aW5kb3cgYWZ0ZXIgYXBwZW5kaW5nIHRoZSBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgIHByb2plY3RGb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocHJvamVjdEZvcm0pO1xufVxuXG4vLzIuIGZ1bmN0aW9uIHRvIHJlbW92ZSBhZGRQcm9qZWN0V2luZG93IHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsQnV0dG9uUHJvamVjdCgpIHtcbiAgICBjb25zdCBmb3JtUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtUHJvamVjdCcpO1xuICAgIChmb3JtUHJvamVjdC5wYXJlbnRFbGVtZW50KS5yZW1vdmVDaGlsZChmb3JtUHJvamVjdCk7XG59XG5cbi8vMy4gZnVuY3Rpb24gZm9yIHByb2plY3QgY2xpY2sgZXZlbnQgZGlzcGxheSBvZiBpbmRpdmlkdWFsIHRhYnMgb2YgcHJvamVjdHMuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRhYihldmVudCwgcHJvamVjdHNBcnJheSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSA9IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgICAgICAgICAgd2hpbGUodGFza0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkU2VjdGlvbicpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy80LiBmdW5jdGlvbiBmb3IgYXBwZW5kaW5nIHRhc2tzIHdpdGggc2FtZSBwcm9qZWN0VmFsdWUgYXMgdGhlIHByb2plY3RUYWJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0VGFza3ModGFza3NBcnJheSwgZXZlbnQpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLnByb2plY3RWYWx1ZSA9PSBldmVudC50YXJnZXQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZVZhbHVlOiB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgICAgIGRlYWRsaW5lVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRWYWx1ZTogdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0VmFsdWU6IHRhc2tzQXJyYXlbaV0ucHJvamVjdFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzUuIGZ1bmN0aW9uIHRvIGRlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIHByb2plY3QgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdHNBcnJheSkge1xuICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdERlbGV0ZScpO1xuICAgICgoKHByb2plY3REZWxldGUucGFyZW50RWxlbWVudCkucGFyZW50RWxlbWVudCkucGFyZW50RWxlbWVudCkucmVtb3ZlQ2hpbGQoKChwcm9qZWN0RGVsZXRlLnBhcmVudEVsZW1lbnQpLnBhcmVudEVsZW1lbnQpKTtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdERlbGV0ZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZSA9PSBwcm9qZWN0TmFtZS5pbm5lclRleHQpIHtcbiAgICAgICAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBzdGFySW1hZ2UgZnJvbSAnLi9zdGFyX2ljb24ucG5nJztcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy4vZmlsbGVkX3N0YXIucG5nJ1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuL2VkaXRfaWNvbi5wbmcnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vZGVsZXRlX2ljb24ucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwZW5kVGFzayh0YXNrKSB7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDYXJkU2VjdGlvbicpO1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1wb3J0YW5jZVZhbHVlID0gdGFzay5pbXBvcnRhbnRWYWx1ZTtcbiAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZCcpO1xuICAgIGNvbnN0IGxlZnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbGVmdENvbnRlbnQnKTtcbiAgICBjb25zdCByaWdodENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncmlnaHRDb250ZW50Jyk7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5uYW1lID0gJ2NoZWNrYm94JztcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHRhc2sudGl0bGVWYWx1ZTtcbiAgICB0aXRsZS5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uVmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gdGFzay5kZWFkbGluZVZhbHVlO1xuICAgIGNvbnN0IHN0YXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBpZihpbXBvcnRhbmNlVmFsdWUgPT0gJ3llcycpe1xuICAgICAgICBzdGFyLnNyYyA9IGZpbGxlZFN0YXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3Rhci5zcmMgPSBzdGFySW1hZ2U7XG4gICAgfVxuICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xuICAgIGNvbnN0IGVkaXQgPSBuZXcgSW1hZ2UoKTtcbiAgICBlZGl0LnNyYyA9IGVkaXRJbWFnZTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBjb25zdCBkZWxldGVMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlTG9nby5zcmMgPSBkZWxldGVJbWFnZTtcbiAgICBkZWxldGVMb2dvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBsZWZ0Q29udGVudC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgcmlnaHRDb250ZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIHJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICByaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgcmlnaHRDb250ZW50LmFwcGVuZENoaWxkKGRlbGV0ZUxvZ28pO1xuXG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQobGVmdENvbnRlbnQpO1xuICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHJpZ2h0Q29udGVudCk7XG5cbiAgICB0YXNrQ2FyZFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xufSIsIi8vIFJlbW92ZSB0YXNrcyB3aXRoIGNoZWNrZWQgY2xhc3NcbmV4cG9ydCBmdW5jdGlvbiBjaGVja2VkVGFzaygpIHtcbiAgICBjb25zdCBjaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrZWQnKTtcbiAgICAoY2hlY2tlZC5wYXJlbnRFbGVtZW50KS5yZW1vdmVDaGlsZChjaGVja2VkKTtcbn1cblxuLy8gUmVtb3ZlIHRoZSBjaGVja2VkIHRhc2sgZnJvbSBhcnJheSBvZiB0YXNrcy5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUYXNrQXJyYXkodGFza3NBcnJheSkge1xuICAgIGNvbnN0IGNoZWNrZWRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tlZCcpO1xuICAgIGlmKGNoZWNrZWRCb3gpIHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlVGl0bGUgPSBjaGVja2JveC5uZXh0U2libGluZy5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZih0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUgPT0gcmVtb3ZlVGl0bGUpIHtcbiAgICAgICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRlbGV0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZWQnKTtcbiAgICAgICAgaWYoZGVsZXRlZFRhc2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVUaXRsZSA9IGNoZWNrYm94Lm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYodGFza3NBcnJheVtpXS50aXRsZVZhbHVlID09IHJlbW92ZVRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gZGVsZXRlIHRhc2sgZnJvbSB0aGUgZG9tIHRyZWUuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVUYXNrKCkge1xuICAgIGNvbnN0IGRlbGV0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZWQnKTtcbiAgICAoZGVsZXRlZFRhc2sucGFyZW50RWxlbWVudCkucmVtb3ZlQ2hpbGQoZGVsZXRlZFRhc2spO1xufSIsIi8vNS4gZnVuY3Rpb24gdG8gYWRkIGVkaXQgYm94IHVuZGVyIHRoZSB0YXNrIGZvciBlZGl0IGNsaWNrIGV2ZW50XG5leHBvcnQgZnVuY3Rpb24gZWRpdEJveCgpIHtcbiAgICBjb25zdCBlZGl0Qm94Q29udGFpbmVyID0gKChldmVudC50YXJnZXQucGFyZW50Tm9kZSkucGFyZW50Tm9kZSkucGFyZW50Tm9kZTtcbiAgICBlZGl0Qm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXRCb3gnKTtcblxuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRGb3JtJyk7XG5cbiAgICBjb25zdCBlZGl0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVkaXRUaXRsZS5odG1sRm9yID0gJ2VkaXRUaXRsZSc7XG4gICAgZWRpdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2VkaXRUaXRsZScpO1xuICAgIGVkaXRUaXRsZS5pbm5lclRleHQgPSAnVGl0bGU6JztcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZUlucHV0Lm5hbWUgPSAnZWRpdFRpdGxlJztcbiAgICB0aXRsZUlucHV0LmlkID0gJ2VkaXRUaXRsZSc7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZWRpdERlc2NyaXB0aW9uLmh0bWxGb3IgPSAnZWRpdERlc2NyaXB0aW9uJztcbiAgICBlZGl0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZWRpdERlc2NyaXB0aW9uJyk7XG4gICAgZWRpdERlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdlZGl0RGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSAnZWRpdERlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgY29uc3QgZWRpdERlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlZGl0RGVhZGxpbmUuaHRtbEZvciA9ICdlZGl0RGVhZGxpbmUnO1xuICAgIGVkaXREZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdlZGl0RGVhZGxpbmUnKTtcbiAgICBlZGl0RGVhZGxpbmUuaW5uZXJUZXh0ID0gJ0RlYWRsaW5lOic7XG4gICAgY29uc3QgZGVhZGxpbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVhZGxpbmVJbnB1dC5uYW1lID0gJ2VkaXREZWFkbGluZSc7XG4gICAgZGVhZGxpbmVJbnB1dC5pZCA9ICdlZGl0RGVhZGxpbmUnO1xuICAgIGRlYWRsaW5lSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkZWFkbGluZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Zvcm1CdXR0b25zJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRCdXR0b24uaWQgPSAnZWRpdEFkZEJ1dHRvbic7XG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24uaWQgPSAnZWRpdENhbmNlbEJ1dHRvbic7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGVkaXREZWFkbGluZSk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZGVhZGxpbmVJbnB1dCk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMpO1xuXG4gICAgZWRpdEJveENvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG59XG5cbi8vNi4gYWRkIGVkaXRCb3ggaW5wdXQgdmFsdWVzIHRvIHRhc2suXG5leHBvcnQgZnVuY3Rpb24gZWRpdFZhbHVlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gKChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJveCcpLmZpcnN0Q2hpbGQpLmZpcnN0Q2hpbGQpLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHRpdGxlLm5leHRTaWJsaW5nO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdEJveCcpLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0RGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdERlYWRsaW5lJykudmFsdWU7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVWYWx1ZTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvblZhbHVlO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gZGF0ZVZhbHVlO1xufVxuXG4vLzcuIGZ1bmN0aW8gdG8gcmVtb3ZlIGVkaXRCb3ggd2hlbiBlZGl0QWRkQnV0dG9uIGlzIGNsaWNrZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFZGl0Qm94KCkge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRCb3gnKS5maXJzdENoaWxkLm5leHRTaWJsaW5nO1xuICAgICh0YXNrQ2FyZC5wYXJlbnROb2RlKS5yZW1vdmVDaGlsZCh0YXNrQ2FyZCk7XG59XG5cbi8vOC4gZnVuY3Rpb24gdG8gcmVtb3ZlIHByZSBlZGl0IHZhbHVlcyBmcm9tIHRhc2tzYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVWYWx1ZSh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRCb3gnKTtcbiAgICBjb25zdCByZW1vdmVUaXRsZSA9IHRhc2tDYXJkU2VjdGlvbi5maXJzdENoaWxkLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkLmlubmVyVGV4dDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihyZW1vdmVUaXRsZSA9PSB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUpIHtcbiAgICAgICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzkuIGZ1Y250aW9uIHRvIGFkZCBuZXcgdmFsdWVzIHRvIHRhc2tzYXJyYXkgYWZ0ZXIgZWRpdEFkZEJ1dHRvbiBpcyBjbGlja2VkIFxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVkaXRWYWx1ZXModGFza3NBcnJheSkge1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0RGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkZWFkbGluZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXREZWFkbGluZScpLnZhbHVlO1xuXG4gICAgY29uc3QgdGFzayA9IHt0aXRsZVZhbHVlLGRlc2NyaXB0aW9uVmFsdWUsZGVhZGxpbmVWYWx1ZX07XG4gICAgdGFza3NBcnJheS5wdXNoKHRhc2spO1xufSIsIi8vNS4gZnVuY3Rpb24gZm9yIGRpc3BsYXkgZm9yIGltcG9ydGFudCB0YWJcbmV4cG9ydCBmdW5jdGlvbiBpbXBvcnRhbnRQYWdlKHRhc2tzQXJyYXksIGFwcGVuZFRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgIHdoaWxlKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnSW1wb3J0YW50JztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkU2VjdGlvbicpO1xuICAgIHRhc2tDb250ZW50LmlkID0gJ2ltcG9ydGFudFRhYic7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkU2VjdGlvbik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgICAgIHRpdGxlVmFsdWU6IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgICAgICAgIGRlYWRsaW5lVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSxcbiAgICAgICAgICAgIGltcG9ydGFudFZhbHVlOiB0YXNrc0FycmF5W2ldLmltcG9ydGFudFZhbHVlLFxuICAgICAgICAgICAgcHJvamVjdFZhbHVlOiB0YXNrc0FycmF5W2ldLnByb2plY3RWYWx1ZVxuICAgICAgICB9XG4gICAgICAgIGlmKHRhc2suaW1wb3J0YW50VmFsdWUgPT0gJ3llcycpIHtcbiAgICAgICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuL2RvdWJsZS10aWNrLnBuZydcbmltcG9ydCBzdGFySW1hZ2UgZnJvbSAnLi9zdGFyX2ljb24ucG5nJztcbmltcG9ydCBmaWxsZWRTdGFySW1hZ2UgZnJvbSAnLi9maWxsZWRfc3Rhci5wbmcnO1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuL2VkaXRfaWNvbi5wbmcnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vZGVsZXRlX2ljb24ucG5nJztcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGltcG9ydG50IGljb24gdG8gZmlsbGVkIFxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVN0YXIoKSB7XG4gICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJyk7XG4gICAgaWYoc3Rhci5zcmMgPSBzdGFySW1hZ2UpIHtcbiAgICAgICAgc3Rhci5zcmMgPSBmaWxsZWRTdGFySW1hZ2U7XG4gICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnZmlsbGVkU3RhcicpO1xuICAgICAgICBzdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXInKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCB2YWx1ZXMgdG8gaW1wb3J0YW50VGFza3MgYXJyYXlcbmV4cG9ydCBmdW5jdGlvbiBhZGRJbXBvcnRhbnRUYXNrcyh0YXNrc0FycmF5KSB7XG4gICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJyk7XG4gICAgc3Rhci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50Jyk7XG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydGFudCcpO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBpbXBvcnRhbnQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodGFza3NBcnJheVtpXS50aXRsZVZhbHVlID09IHRpdGxlVmFsdWUpIHtcbiAgICAgICAgICAgIHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUgPSAneWVzJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgaW1wb3J0bnQgZmlsbGVkIGljb24gdG8gbm9uIGZpbGxlZCBpY29uIGFuZCByZW1vdmUgaW1wb3J0YW50IGNsYXNzIGZyb20gcGFyZW50cyBwYXJlbnQgbm9kZVxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUZpbGxlZFN0YXIoKSB7XG4gICAgY29uc3QgZmlsbGVkU3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxsZWRTdGFyJyk7XG4gICAgZmlsbGVkU3Rhci5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50Jyk7XG4gICAgaWYoZmlsbGVkU3Rhci5zcmMgPSBmaWxsZWRTdGFySW1hZ2Upe1xuICAgICAgICBmaWxsZWRTdGFyLnNyYyA9IHN0YXJJbWFnZTtcbiAgICAgICAgZmlsbGVkU3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XG4gICAgICAgIGZpbGxlZFN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnZmlsbGVkU3RhcicpO1xuICAgIH1cbn1cblxuLy8gcmVtb3ZlIHRhc2sgZnJvbSBpbXBvcnRhbnRUYXNrQXJyYXlcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJbXBvcnRhbnRUYXNrcyh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgaW1wb3J0YW50VGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG4gICAgY29uc3QgcmVtb3ZlSW1wb3J0YW50VGl0bGUgPSBpbXBvcnRhbnRUYXNrQ2FyZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocmVtb3ZlSW1wb3J0YW50VGl0bGUgPT0gdGFza3NBcnJheVtpXS50aXRsZVZhbHVlKSB7XG4gICAgICAgICAgICB0YXNrc0FycmF5W2ldLmltcG9ydGFudFZhbHVlID0gJ25vJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvL2ltcG9ydGluZyBhc3NldHNcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnLi90b2RvLnBuZydcbmltcG9ydCBzdGFySW1hZ2UgZnJvbSAnLi9zdGFyX2ljb24ucG5nJztcbmltcG9ydCBmaWxsZWRTdGFySW1hZ2UgZnJvbSAnLi9maWxsZWRfc3Rhci5wbmcnO1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuL2VkaXRfaWNvbi5wbmcnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vZGVsZXRlX2ljb24ucG5nJztcbmltcG9ydCBhZGRUYXNrIGZyb20gJy4vYWRkVGFzay5qcyc7XG5pbXBvcnQgYXBwZW5kVGFzayBmcm9tICcuL2FwcGVuZFRhc2suanMnO1xuaW1wb3J0IHtjaGVja2VkVGFza30gZnJvbSAnLi9jaGVja2JveC5qcyc7XG5pbXBvcnQge3JlbW92ZVRhc2tBcnJheX0gZnJvbSAnLi9jaGVja2JveC5qcyc7XG5pbXBvcnQgZGVsZXRlVGFzayBmcm9tICcuL2RlbGV0ZVRhc2suanMnO1xuaW1wb3J0IHsgZWRpdEJveCB9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuaW1wb3J0IHsgZWRpdFZhbHVlIH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyByZW1vdmVFZGl0Qm94IH0gZnJvbSAnLi9lZGl0VGFzay5qcyc7XG5pbXBvcnQgeyByZW1vdmVWYWx1ZSB9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuaW1wb3J0IHsgYWRkRWRpdFZhbHVlcyB9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuaW1wb3J0IHsgY2hhbmdlU3RhciB9IGZyb20gJy4vaW1wb3J0YW50VGFza3MuanMnO1xuaW1wb3J0IHsgYWRkSW1wb3J0YW50VGFza3MgfSBmcm9tICcuL2ltcG9ydGFudFRhc2tzLmpzJztcbmltcG9ydCB7IGNoYW5nZUZpbGxlZFN0YXIgfSBmcm9tICcuL2ltcG9ydGFudFRhc2tzLmpzJztcbmltcG9ydCB7IHJlbW92ZUltcG9ydGFudFRhc2tzIH0gZnJvbSAnLi9pbXBvcnRhbnRUYXNrcy5qcyc7XG5pbXBvcnQgeyB0b2RheVBhZ2UgfSBmcm9tICcuL3RvZGF5LmpzJztcbmltcG9ydCB7IHRvZGF5RGF0ZSB9IGZyb20gJy4vdG9kYXkuanMnO1xuaW1wb3J0IHsgdGhpc1dlZWtQYWdlIH0gZnJvbSAnLi90aGlzV2Vlay5qcyc7XG5pbXBvcnQgeyBvbmVXZWVrRGF0ZSB9IGZyb20gJy4vdGhpc1dlZWsuanMnO1xuaW1wb3J0IHsgaW1wb3J0YW50UGFnZSB9IGZyb20gJy4vaW1wb3J0YW50UGFnZS5qcydcbmltcG9ydCB7IGFkZFByb2plY3RXaW5kb3cgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgYXBwZW5kUHJvamVjdCB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyByZW1vdmVBZGRQcm9qZWN0IH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGNhbmNlbEJ1dHRvblByb2plY3QgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgcHJvamVjdFRhYiB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBhcHBlbmRQcm9qZWN0VGFza3MgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdCB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5cbi8vYXNzaWduaW5nIHZhciB0byBkb20gZWxlbWVudHNcbmNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG5jb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxUYXNrcycpO1xuY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDYXJkU2VjdGlvbicpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Jyk7XG5sZXQgaXNGb3JtUHJlc2VudCA9IGZhbHNlO1xubGV0IGlzUHJvamVjdEZvcm1QcmVzZW50ID0gZmFsc2U7XG5cblxuLy9oZWFkZXIgbG9nbyBpbiBoZWFkZXIgc2VjdGlvblxuY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5oZWFkZXJMb2dvLnNyYyA9IGxvZ29JbWFnZTtcblxuXG4vL2FycmF5IGZvciBzdG9yaW5nIGZvcm0gZGF0YVxubGV0IHRhc2tzQXJyYXkgPSBbXTtcbmxldCBhcnJQcm9qZWN0bGlzdHMgPSBbJ0FsbCBUYXNrcycsICdUb2RheScsICdUaGlzIFdlZWsnLCAnSW1wb3J0YW50J11cbmxldCBwcm9qZWN0c0FycmF5ID0gW107XG5cblxuLy9FVkVOVExJU1RFTkVSUzotXG4vLzEuIGNsaWNrIGxpc3RlbmVyIGZvciBhZGR0YXNrIGZvciBmb3JtIGlucHV0XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkVGFzaycpID09PSB0cnVlKSB7XG4gICAgICAgIGlmKCFpc0Zvcm1QcmVzZW50KSB7XG4gICAgICAgICAgICBhZGRUYXNrKHByb2plY3RzQXJyYXkpO1xuICAgICAgICAgICAgaXNGb3JtUHJlc2VudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLzIuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciBhZGRidXR0b24gb24gZm9ybSBmb3IgYWRkdGFza1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PSAnYWRkQnV0dG9uJykge1xuICAgICAgICBjb25zdCB0aXRsZVZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVhZGxpbmVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZWFkbGluZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBpbXBvcnRhbnRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbmNlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0SW5wdXQnKS52YWx1ZTtcblxuICAgICAgICBjb25zdCB0YXNrID0ge3RpdGxlVmFsdWUsIGRlc2NyaXB0aW9uVmFsdWUsIGRlYWRsaW5lVmFsdWUsIGltcG9ydGFudFZhbHVlLCBwcm9qZWN0VmFsdWV9O1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICBpZihmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgdGFza3NBcnJheS5wdXNoKHRhc2spO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCAoJ1BsZWFzZSBmaWxsIGFsbCByZXF1aXJlZCBmaWVsZHMhJylcbiAgICAgICAgfVxuICAgICAgICBpc0Zvcm1QcmVzZW50ID0gZmFsc2U7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbi8vMy4gQ2xpY2sgZXZlbnQgZm9yIHJlbW92ZSBhZGR0YXNrd2luZG93XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICdjYW5jZWxCdXR0b24nKSB7XG4gICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgfVxufSlcblxuLy80LiBjbGljayBldmVudCBsaXN0ZW5lciBmb3IgdG9kYXkgc2VjdGlvblxudG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kYXlQYWdlKHRhc2tzQXJyYXksIGFwcGVuZFRhc2spO1xuICAgIGFjdGl2ZUJveChldmVudCk7XG59KVxuXG4vLzUuIGNsaWNrIGV2ZW50IGZvciByZW1vdmluZyB0YXNrIHdpdGggY2hlY2tlZCBkaXYgZnJvbSBkb20gYW5kIHRhc2tzQXJyYXlcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tib3gnKSA9PSB0cnVlKSB7XG4gICAgICAgIChldmVudC50YXJnZXQucGFyZW50Tm9kZSkucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgIHJlbW92ZVRhc2tBcnJheSh0YXNrc0FycmF5KTtcbiAgICAgICAgY2hlY2tlZFRhc2soKTtcbiAgICB9XG59KVxuXG4vLzYuIGNsaWNrIGV2ZW50IGZvciBkZWxldGUgaWNvbiBvbiB0YXNrLlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZScpID09IHRydWUpIHtcbiAgICAgICAgKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlKS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZWQnKTtcbiAgICAgICAgcmVtb3ZlVGFza0FycmF5KHRhc2tzQXJyYXkpO1xuICAgICAgICBkZWxldGVUYXNrKCk7XG4gICAgfVxufSlcblxuLy83LiBjbGljayBldmVudCBmb3IgZWRpdCBpY29uXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdCcpID09IHRydWUpIHtcbiAgICAgICAgZWRpdEJveCgpO1xuICAgIH1cbn0pXG5cbi8vOC4gY2xpY2sgZXZlbnQgZm9yIGVkaXRCb3ggYWRkQnV0dG9uXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICdlZGl0QWRkQnV0dG9uJykge1xuICAgICAgICByZW1vdmVWYWx1ZSh0YXNrc0FycmF5KTtcbiAgICAgICAgYWRkRWRpdFZhbHVlcyh0YXNrc0FycmF5KTtcbiAgICAgICAgZWRpdFZhbHVlKCk7XG4gICAgICAgIHJlbW92ZUVkaXRCb3goKTtcbiAgICB9XG59KVxuXG4vLzkuIGNsaWNrIGV2ZW50IGZvciBpbXBvcnRhbnQgaWNvbiB0byBjaGFuZ2UgZW1wdHkgc3RhciB0byBmaWxsZWQgc3RhciBhbmQgYWRkIHRhc2sgdmFsdWVzIHRvIGltcG9ydGFudFRhc2tzIGFycmF5LlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXInKSA9PSB0cnVlKSB7XG4gICAgICAgIGFkZEltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpO1xuICAgICAgICBjaGFuZ2VTdGFyKCk7XG4gICAgfSBlbHNlIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbGxlZFN0YXInKSA9PSB0cnVlKSB7XG4gICAgICAgIHJlbW92ZUltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpO1xuICAgICAgICBjaGFuZ2VGaWxsZWRTdGFyKCk7XG4gICAgICAgIGlmKHRhc2tDb250ZW50LmlkID09ICdpbXBvcnRhbnRUYWInKXtcbiAgICAgICAgICAgIGltcG9ydGFudFBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLzEwLiBjbGljayBldmVudCBmb3IgdGhpcyB3ZWVrIHRhYlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PSAndGhpc1dlZWsnKSB7XG4gICAgICAgIHRoaXNXZWVrUGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrLCB0b2RheURhdGUpO1xuICAgICAgICBhY3RpdmVCb3goZXZlbnQpO1xuICAgIH1cbn0pXG5cbi8vMTEuIGNsaWNrIGV2ZW50IGZvciBpbXBvdGFudCB0YWJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgaW1wb3J0YW50UGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrKTtcbiAgICAgICAgYWN0aXZlQm94KGV2ZW50KTtcbiAgICB9XG59KVxuXG4vLzEyLiBjbGljayBldmVudCBmb3IgYWxsIHRhc2tzIHBhZ2VcbmFsbFRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFsbFRhc2tzKHRhc2tzQXJyYXkpO1xuICAgIGFjdGl2ZUJveChldmVudCk7XG59KVxuXG4vLzEzLiBmdW5jdGlvbiBmb3IgYWRkIHByb2plY3Qgd2luZG93IGZvciB2YWx1ZSBpbnB1dCBmb3IgbmV3IHByb2plY3RcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRQcm9qZWN0JykgPT09IHRydWUpIHtcbiAgICAgICAgaWYoIWlzUHJvamVjdEZvcm1QcmVzZW50KSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93KCk7XG4gICAgICAgICAgICBpc1Byb2plY3RGb3JtUHJlc2VudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLzE0LiBmdW5jdGlvbiB0byBhcHBlbmQgcHJvamVjdCB0byB0aGUgcHJvamVjdExpc3QuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkQnV0dG9uUHJvamVjdCcpID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFZhbHVlJyk7XG4gICAgICAgIGlmKHByb2plY3RUaXRsZS52YWx1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSB7cHJvamVjdFRpdGxlOiBwcm9qZWN0VGl0bGUudmFsdWV9O1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIFxuICAgICAgICAgICAgYXBwZW5kUHJvamVjdCgpO1xuICAgICAgICAgICAgcmVtb3ZlQWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgaXNQcm9qZWN0Rm9ybVByZXNlbnQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0ICgnUGxlYXNlIGZpbGwgYWxsIHJlcXVpcmVkIGRldGFpbHMuJyk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLzE1LiBjbGljayBldmVudCBmb3Igd2hlbiBjYW5jZWxQcm9qZWN0QnV0dG9uIGlzIGNsaWNrZWRcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWxCdXR0b25Qcm9qZWN0JykgPT09IHRydWUpIHtcbiAgICAgICAgcmVtb3ZlQWRkUHJvamVjdCgpO1xuICAgICAgICBpc1Byb2plY3RGb3JtUHJlc2VudCA9IGZhbHNlO1xuICAgIH1cbn0pXG5cbi8vMTYuIGNsaWNrIGV2ZW50IHRvIGRlbHRlIGEgcHJvamVjdCBmcm9tIHRoZSBsaXN0LlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3REZWxldGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RzQXJyYXkpO1xuICAgIH1cbn0pXG5cbi8vMTcuIGNsaWNrIGV2ZW50IGZvciBwcm9qZWN0IGxpc3RzIHRhYiBmb3Igc3dpdGNoaW5nIGRpc3BsYXkgdG8gcmVzcGVjdGl2ZSB0YWJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0VGl0bGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9qZWN0VGFiKGV2ZW50LCBwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgYXBwZW5kUHJvamVjdFRhc2tzKHRhc2tzQXJyYXksIGV2ZW50KTtcbiAgICAgICAgYWN0aXZlQm94UHJvamVjdChldmVudCk7XG4gICAgfVxufSlcblxuXG4vL0ZVTkNUSU9OUzotXG4vLzEuIGZ1bmN0aW9uIGZvciBkaXNwbGF5IG9mIGFsbCB0YXNrcyB0YWJcbmZ1bmN0aW9uIGFsbFRhc2tzKHRhc2tzQXJyYXkpIHtcbiAgICB3aGlsZSh0YXNrQ29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ0FsbCBUYXNrcyc7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkU2VjdGlvbicpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICBhZGRUYXNrLmlubmVyVGV4dCA9ICdBZGQgVGFzayc7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkU2VjdGlvbik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgICAgIHRpdGxlVmFsdWU6IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgICAgICAgIGRlYWRsaW5lVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSxcbiAgICAgICAgICAgIGltcG9ydGFudFZhbHVlOiB0YXNrc0FycmF5W2ldLmltcG9ydGFudFZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICB9XG59XG5cbi8vMi4gZnVuY3Rpb24gZm9yIGFkZGluZyBjc3MgdG8gYWN0aXZlIHRhYiBvbiBzaWRlYmFyIFxuZnVuY3Rpb24gYWN0aXZlQm94KGV2ZW50KSB7XG4gICAgY29uc3QgYWN0aXZlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZUJveCcpXG4gICAgaWYoYWN0aXZlQm94ICE9PSBudWxsKSB7XG4gICAgICAgIGFjdGl2ZUJveC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVCb3gnKTtcbiAgICB9XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUJveCcpO1xufVxuXG4vLzMuIGZ1bmN0aW9uIGZvciBhZGRpbmcgY3NzIHRvIGFjdGl2ZSB0YWIgb24gc2lkZWJhciBcbmZ1bmN0aW9uIGFjdGl2ZUJveFByb2plY3QoZXZlbnQpIHtcbiAgICBjb25zdCBhY3RpdmVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlQm94JylcbiAgICBpZihhY3RpdmVCb3ggIT09IG51bGwpIHtcbiAgICAgICAgYWN0aXZlQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUJveCcpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVCb3gnKTtcbn0iLCIvLzMuIGZ1bmN0aW9uIGZvciB0aGlzV2Vla1BhZ2UgZG9tIHRyZWUgZGlzcGxheVxuZXhwb3J0IGZ1bmN0aW9uIHRoaXNXZWVrUGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrLCB0b2RheURhdGUpIHtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgIHdoaWxlKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5pbm5lclRleHQgPSAnVGhpcyBXZWVrJztcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkU2VjdGlvbicpO1xuICAgIHRhc2tDb250ZW50LmlkID0gJ3RoaXNXZWVrVGFiJztcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSA8PSBvbmVXZWVrRGF0ZSgpLm9uZVdlZWtGcm9tVG9kYXkgJiYgdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlID49IHRvZGF5RGF0ZSgpLmN1cnJlbnREYXRlKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZVZhbHVlOiB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgICAgIGRlYWRsaW5lVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRWYWx1ZTogdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vNC4gZnVuY3Rpb24gdG8gZ2V0IGEgZGF0ZSBvbmUgd2VlayBmcm9tIG5vd1xuZXhwb3J0IGZ1bmN0aW9uIG9uZVdlZWtEYXRlKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSArIDcpO1xuXG4gICAgbGV0IGRheSA9IChkYXRlLmdldERhdGUoKSkgPj0gMTAgPyAoZGF0ZS5nZXREYXRlKCkpIDogXCIwXCIgKyAoZGF0ZS5nZXREYXRlKCkpO1xuICAgIGxldCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKSA+PSAxMCA/IChkYXRlLmdldE1vbnRoKCkgKyAxKSA6IFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgbGV0IG9uZVdlZWtGcm9tVG9kYXkgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgIHJldHVybiB7b25lV2Vla0Zyb21Ub2RheX07XG59IiwiLy8xLiBmdW5jdGlvbiBmb3IgZGlzcGxheSBvZiBkb20gdHJlZSBvZiB0b2RheSBwYWdlXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlQYWdlKHRhc2tzQXJyYXksIGFwcGVuZFRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgIHdoaWxlKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1RvZGF5JztcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZFNlY3Rpb24nKTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ2FyZFNlY3Rpb24pO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSA9PSB0b2RheURhdGUoKS5jdXJyZW50RGF0ZSl7XG4gICAgICAgICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZVZhbHVlOiB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgICAgIGRlYWRsaW5lVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRWYWx1ZTogdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFwcGVuZFRhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vMi4gZnVuY3Rpb24gdG8gZ2V0IHRvZGF5cyBkYXRlXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlEYXRlKCkge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgdGFza0NvbnRlbnQuaWQgPSAndG9kYXlUYWInO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIFxuICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgbGV0IGN1cnJlbnREYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICByZXR1cm4geyBjdXJyZW50RGF0ZSB9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FkZFRhc2suanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwZW5kVGFzay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90b2RheS5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jaGVja2JveC5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kZWxldGVUYXNrLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2VkaXRUYXNrLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2ltcG9ydGFudFRhc2tzLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RoaXNXZWVrLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2ltcG9ydGFudFBhZ2UuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHBlbmRQcm9qZWN0LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9