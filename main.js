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
    width: calc(100% - 20px);
    padding: 10px;
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

.addTask:hover {
    cursor: pointer;
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

.form, .editForm{
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

.form > .formButtons, .editForm > .formButtons {
    display: flex;
    flex-direction: row;
    gap: 5px;
    min-width: 500px;
    justify-content: center;
}

#addButton, #editAddButton {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    background-color: #aaffaa;
    border-radius: 5px;
}

#cancelButton, #editCancelButton {
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body,\nhtml {\n    margin: 0px;\n    font-family: sans-serif;\n    font-size: 15px;\n    color: rgb(22, 23, 48);\n}\n\nheader {\n    padding: 20px;\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    color: rgb(240, 236, 229);\n    background-color: rgb(22, 23, 48);\n    font-size: 3rem;\n}\n\n.logo {\n    width: 60px;\n    height: 60px;\n}\n\n.headerContainer {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n    text-align: center;\n    gap: 10px;\n    font-weight: bolder;\n}\n\n.content {\n    width: 100%;\n}\n\n.contentContainer {\n    display: flex;\n    flex-direction: row;\n    position: absolute;\n    top: 120px;\n    bottom: 0;\n    width: 100%;\n}\n\n.sideBar {\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n    font-weight: bold;\n    gap: 20px;\n    width: 310px;\n    padding: 20px;\n    background-color: #b6bbc4;\n}\n\n.defaultProjects {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 15px;\n    font-size: 0.5rem;\n}\n\n.subCateogary, .addProject, .projectTitle{\n    display: flex;\n    width: 100%;\n    padding-right: 20px;\n    padding-left: 20px;\n}\n\n.subCateogary:hover, .addProject:hover {\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\n.activeBox, .taskCard:hover {\n    font-weight: bold;\n    background-color: rgba(22, 23, 48, 0.2);\n    border-radius: 10px;\n}\n\nbutton {\n    font-size: 1rem;\n    padding: 10px;\n    border: none;\n    background: none;\n    color: #161730;\n}\n\n.projectsList {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectsList > .heading {\n    font-weight: bolder;\n    font-size: 2rem;\n}\n\n.taskContent {\n    padding: 30px;\n    padding-left: 60px;\n    padding-right: 60px;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: 15px;\n}\n\n.taskContent > .header {\n    font-size: 2rem;\n    font-weight: bold;\n    padding: 10px;\n}\n\n.taskCardSection {\n    width: 100%;\n}\n\n.editBox {\n    display: flex;;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.taskCard {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    width: calc(100% - 20px);\n    padding: 10px;\n}\n\n.taskCard > .leftContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n\n}\n\n.taskCard > .rightContent {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n    align-items: flex-start;\n    min-height: 100%;\n    font-size: 1.1rem;\n}\n\n.star, .edit, .delete, .filledStar, #star, .projectDelete {\n    width: 20px;\n    height: 20px;\n}\n\n.addTask {\n    font-size: 1.2rem;\n    font-weight: bold;\n    width: 100%;\n    padding: 10px;\n}\n\n.addTask:hover {\n    cursor: pointer;\n}\n\n.addTaskContainer {\n    display: flex;\n    flex-direction: column;\n}\n\n.projectSection {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n\n.projectSection > .subCateogary {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.projectTitle {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex: 1 ;\n}\n\n#projectDelete {\n    min-width: 20%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.form, .editForm{\n    display: flex;\n    gap: 15px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n}\n\n.titleContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n    max-width: 900px;\n}\n\n.leftContent > .titleContainer > .title {\n    display: inline-block;\n    word-break: break-word;  \n}\n\n.descriptionContainer {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n    min-width: 500px;\n}\n\n.remainingContainer {\n    display: flex;\n    flex-direction: row;\n    gap: 20px;\n    min-width: 500px;\n    justify-content: space-between;\n}\n\n.remainingContainer > div {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\n.form > .formButtons, .editForm > .formButtons {\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n    min-width: 500px;\n    justify-content: center;\n}\n\n#addButton, #editAddButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n#cancelButton, #editCancelButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n#projectValue {\n    width: calc(100% - 8px);\n}\n\n.projectForm > .formButtons {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    gap: 5px;\n}\n\n.addButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    background-color: #aaffaa;\n    border-radius: 5px;\n}\n\n.cancelButtonProject {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 50%;\n    border-radius: 5px;\n    background-color: #ffbebe;\n}\n\n.projectForm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 5px;\n    width: 225px;\n}"],"sourceRoot":""}]);
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
    noProject.value = 'none';
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
/* harmony export */   projectOnLoad: () => (/* binding */ projectOnLoad),
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

//function for appending projeccts on first load.
function projectOnLoad(project) {
    const projectSection = document.querySelector('.projectSection');
    const projectCard = document.createElement('button');
    projectCard.classList.add('subCateogary');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('projectTitle');
    projectTitle.innerText = project.projectTitle;
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
        if(event.target.innerText === projectsArray[i].projectTitle) {
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
function appendProjectTasks(tasksArray, event, appendTask) {
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
function deleteProject(projectsArray, event) {
    event.target.classList.add('deletedProject');
    const deletedProject = document.querySelector('.deletedProject');
    let deletedProjectValue = (deletedProject.parentElement.parentElement.firstChild.innerText).toString();
    
    for(let i = 0; i < projectsArray.length; i++) {
        if(projectsArray[i].projectTitle === deletedProjectValue) {
            projectsArray.splice(i, 1);
            break;
        }
    }

    const removeProject = deletedProject.parentElement.parentElement
    removeProject.parentElement.removeChild(removeProject);
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
    (checked.parentElement.parentElement.parentElement).removeChild(checked.parentElement.parentElement);
}

// Remove the checked task from array of tasks.
function removeTaskArray(tasksArray) {
    const checkedBox = document.querySelector('.checked');
    if(checkedBox) {
        const checkbox = document.querySelector('.checked');
        const removeTitle = (checkbox.nextSibling.firstChild.innerText).toString();
        for (let i = 0; i < tasksArray.length; i++) {
            if(tasksArray[i].titleValue === removeTitle) {
                tasksArray.splice(i, 1);
                break;
            }
        }
    } else {
        const deletedTask = document.querySelector('.deleted');
        if(deletedTask) {
            const removeTitle = (deletedTask.firstChild.firstChild.nextSibling.firstChild).innerText.toString();
            for (let i = 0; i < tasksArray.length; i++) {
                if(tasksArray[i].titleValue === removeTitle) {
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
/* harmony export */   removeFormBox: () => (/* binding */ removeFormBox),
/* harmony export */   removeValue: () => (/* binding */ removeValue)
/* harmony export */ });
//5. function to add edit box under the task for edit click event
function editBox(event) {
    const editBoxContainer = ((event.target.parentNode).parentNode).parentNode;
    editBoxContainer.classList.add('editBox');

    const editForm = document.createElement('form');
    editForm.classList.add('editForm');

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    const editTitle = document.createElement('label');
    editTitle.htmlFor = 'editTitle';
    editTitle.classList.add('editTitle');
    editTitle.innerText = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.name = 'editTitle';
    titleInput.id = 'editTitle';
    titleInput.type = 'text';
    titleInput.required = true;

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('descriptionContainer');
    const editDescription = document.createElement('label');
    editDescription.htmlFor = 'editDescription';
    editDescription.classList.add('editDescription');
    editDescription.innerText = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.name = 'editDescription';
    descriptionInput.id = 'editDescription';
    descriptionInput.type = 'text';

    const deadlineContainer = document.createElement('div');
    deadlineContainer.classList.add('deadlineContainer');
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

    titleContainer.appendChild(editTitle);
    titleContainer.appendChild(titleInput);

    descriptionContainer.appendChild(editDescription);
    descriptionContainer.appendChild(descriptionInput);

    deadlineContainer.appendChild(editDeadline);
    deadlineContainer.appendChild(deadlineInput);

    editForm.appendChild(titleContainer);
    editForm.appendChild(descriptionContainer);
    editForm.appendChild(deadlineInput);
    editForm.appendChild(formButtons);

    editBoxContainer.appendChild(editForm);
}

//6. add editBox input values to task.
function editValue() {
    const editContainer = document.querySelector('.editContainer');
    const title = editContainer.firstChild.firstChild.nextSibling.firstChild;
    const description = title.nextSibling;
    const date = editContainer.firstChild.nextSibling.firstChild;
    const titleValue = document.querySelector('#editTitle').value;
    const descriptionValue = document.querySelector('#editDescription').value;
    const dateValue = document.querySelector('#editDeadline').value;
    title.innerText = titleValue;
    description.innerText = descriptionValue;
    date.innerText = dateValue;
}

//7. functio to remove editBox when editCancelButton is clicked
function removeFormBox() {
    const taskCardSection = document.querySelector('.taskCardSection');
    taskCardSection.removeChild(taskCardSection.lastChild)
}

//8. function to remove pre edit values from tasksarray
function removeValue(tasksArray) {
    const editContainer = document.querySelector('.editContainer');
    const removeTitle = editContainer.firstChild.firstChild.nextSibling.firstChild;
    console.log(removeTitle.innerText)
;    for(let i = 0; i < tasksArray.length; i++) {
        if(removeTitle.innerText === tasksArray[i].titleValue) {
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
/* harmony import */ var _star_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./star_icon.png */ "./src/star_icon.png");
/* harmony import */ var _filled_star_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filled_star.png */ "./src/filled_star.png");



// function to change importnt icon to filled 
function changeStar() {
    const star = document.querySelector('.star');
    if(star.src === _star_icon_png__WEBPACK_IMPORTED_MODULE_0__) {
        star.src = _filled_star_png__WEBPACK_IMPORTED_MODULE_1__;
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
    if(filledStar.src === _filled_star_png__WEBPACK_IMPORTED_MODULE_1__){
        filledStar.src = _star_icon_png__WEBPACK_IMPORTED_MODULE_0__;
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
let retrievedTasksArray = [];
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
        const form = document.querySelector('.form');
        if(form.checkValidity()) {
            tasksArray.push(task);
            taskContent.removeChild(taskContent.lastChild);
            (0,_appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
            tasksLocalStorage();
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
        isFormPresent = false;
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
        event.target.classList.add('checked');
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.removeTaskArray)(tasksArray);
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.checkedTask)();
        tasksLocalStorage()
    }
})

//6. click event for delete icon on task.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete') == true) {
        (event.target.parentNode).parentNode.classList.add('deleted');
        (0,_checkbox_js__WEBPACK_IMPORTED_MODULE_8__.removeTaskArray)(tasksArray);
        (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_9__["default"])();
        tasksLocalStorage();
    }
})

//7. click event for edit icon
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('edit') === true) {
        if(!isFormPresent) {
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.editBox)(event);
            const editContainer = event.target.parentNode.parentNode
            editContainer.classList.add('editContainer');
            isFormPresent = true;
        }
    }
})

//8. click event for editBox addButton
document.body.addEventListener('click', (event) => {
    if(event.target.id == 'editAddButton') {
        const editForm = document.querySelector('.editForm');
        if(editForm.checkValidity()) {
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeValue)(tasksArray);
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.addEditValues)(tasksArray);
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.editValue)();
            tasksLocalStorage();
            (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeFormBox)();
            isFormPresent = false;
        } else {
            alert ("Please fill all the required details!");
        }
    }
})

//9. click event for important icon to change empty star to filled star and add task values to importantTasks array.
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('star') === true) {
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.addImportantTasks)(tasksArray);
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.changeStar)();
        tasksLocalStorage()
    } else if(event.target.classList.contains('filledStar') == true) {
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.removeImportantTasks)(tasksArray);
        (0,_importantTasks_js__WEBPACK_IMPORTED_MODULE_11__.changeFilledStar)();
        tasksLocalStorage();
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
            projectLocalStorage();
            (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.removeAddProject)();
            isProjectFormPresent = false;
            event.preventDefault();
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
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.deleteProject)(projectsArray, event);
        projectLocalStorage();
    }
})

//17. click event for project lists tab for switching display to respective tab
document.body.addEventListener('click', (event) => {
    if(event.target.classList.contains('projectTitle') === true) {
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.projectTab)(event, projectsArray);
        (0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.appendProjectTasks)(tasksArray, event, _appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        activeBoxProject(event);
    }
})

//18. Final click event for when the page loads. display any existing tasks and projects in local storage on the screen
window.addEventListener('load', (tasksArray) => {
    const allTasksButton = document.querySelector('#allTasks');
    allTasksButton.classList.add('activeBox');
    allTasks(tasksArray);
    onLoadTasks();

})

//19. click event to remove editForm when editCancelButton is clicked
document.body.addEventListener('click', (event) => {
    if(event.target.id === 'editCancelButton') {
        (0,_editTask_js__WEBPACK_IMPORTED_MODULE_10__.removeFormBox)(event)
    }
})

//20. Click event for preventing enter keydown from submitting the form and refreshing the site
window.addEventListener('keydown', function(e) {
    if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT' && e.target.type == 'text') {
            e.preventDefault();
            return false;
        }
    }
}, true);


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
    addTask.innerText = '+ Add Task';

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

//4. function for accesing localStorage to store arrays for appending tasks when page loads and for saving tasks when new tasks are added to the array. as well as for storing projects.
function tasksLocalStorage() {
    localStorage.setItem('tasksArr', JSON.stringify(tasksArray));
}

//5. function for project storage
function projectLocalStorage() {
    localStorage.setItem('projectArr', JSON.stringify(projectsArray))
}

//6. function to retrieve tasks from storage
function onLoadTasks() {
    tasksArray = JSON.parse(localStorage.getItem('tasksArr'));
    if(tasksArray) {
        for(let i = 0; i < tasksArray.length; i++) {
            let task = {
                titleValue: tasksArray[i].titleValue,
                descriptionValue: tasksArray[i].descriptionValue,
                deadlineValue: tasksArray[i].deadlineValue,
                importantValue: tasksArray[i].importantValue
            }
            ;(0,_appendTask_js__WEBPACK_IMPORTED_MODULE_7__["default"])(task);
            importantIconClass();
            onLoadImportant();
        }
    }

    projectsArray = JSON.parse(localStorage.getItem('projectArr'));
    if(projectsArray) {
        for(let i = 0; i < projectsArray.length; i++) {
            let project = {
                projectTitle: projectsArray[i].projectTitle
            }
            ;(0,_appendProject_js__WEBPACK_IMPORTED_MODULE_15__.projectOnLoad)(project);
        }
    }
}

//7. Function for selecting class of important icon based on its value
function importantIconClass () {
    const importantIcon = document.querySelector('.star');
    const importantFilledIcon = document.querySelector('.filledStar');
    if(importantIcon) {
        importantIcon.classList.add('filledStar');
        importantIcon.classList.remove('star')
    } else {
        importantFilledIcon.classList.add('.star');
        importantFilledIcon.classList.remove('filledStar');
    }
}

//8. Function to add important class on taskcard on windows load
function onLoadImportant() {
    const taskCard = document.querySelector('.taskCard');
    const importantIcon = document.querySelector('.filledStar');
    if(importantIcon) {
        taskCard.classList.add('important');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxrRkFBa0YsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8s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Q0E7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLEtBQUssR0FBRyxNQUFNLEdBQUcsSUFBSTtBQUM5QyxhQUFhO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGVuZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcGVuZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NoZWNrYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kZWxldGVUYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9lZGl0VGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW1wb3J0YW50UGFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW1wb3J0YW50VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aGlzV2Vlay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSxcbmh0bWwge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogcmdiKDIyLCAyMywgNDgpO1xufVxuXG5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYigyNDAsIDIzNiwgMjI5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDIzLCA0OCk7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uaGVhZGVyQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTIwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2lkZUJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogMjBweDtcbiAgICB3aWR0aDogMzEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiYmM0O1xufVxuXG4uZGVmYXVsdFByb2plY3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMC41cmVtO1xufVxuXG4uc3ViQ2F0ZW9nYXJ5LCAuYWRkUHJvamVjdCwgLnByb2plY3RUaXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uc3ViQ2F0ZW9nYXJ5OmhvdmVyLCAuYWRkUHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjMsIDQ4LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5hY3RpdmVCb3gsIC50YXNrQ2FyZDpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjMsIDQ4LCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICMxNjE3MzA7XG59XG5cbi5wcm9qZWN0c0xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5wcm9qZWN0c0xpc3QgPiAuaGVhZGluZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi50YXNrQ29udGVudCB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTVweDtcbn1cblxuLnRhc2tDb250ZW50ID4gLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi50YXNrQ2FyZFNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZWRpdEJveCB7XG4gICAgZGlzcGxheTogZmxleDs7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi50YXNrQ2FyZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRhc2tDYXJkID4gLmxlZnRDb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG59XG5cbi50YXNrQ2FyZCA+IC5yaWdodENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnN0YXIsIC5lZGl0LCAuZGVsZXRlLCAuZmlsbGVkU3RhciwgI3N0YXIsIC5wcm9qZWN0RGVsZXRlIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hZGRUYXNrIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYWRkVGFzazpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkVGFza0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvamVjdFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE1cHg7XG59XG5cbi5wcm9qZWN0U2VjdGlvbiA+IC5zdWJDYXRlb2dhcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdFRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXg6IDEgO1xufVxuXG4jcHJvamVjdERlbGV0ZSB7XG4gICAgbWluLXdpZHRoOiAyMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybSwgLmVkaXRGb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxNXB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4udGl0bGVDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDVweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIG1heC13aWR0aDogOTAwcHg7XG59XG5cbi5sZWZ0Q29udGVudCA+IC50aXRsZUNvbnRhaW5lciA+IC50aXRsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7ICBcbn1cblxuLmRlc2NyaXB0aW9uQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA1cHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLnJlbWFpbmluZ0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMjBweDtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnJlbWFpbmluZ0NvbnRhaW5lciA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogNXB4O1xufVxuXG4uZm9ybSA+IC5mb3JtQnV0dG9ucywgLmVkaXRGb3JtID4gLmZvcm1CdXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWluLXdpZHRoOiA1MDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI2FkZEJ1dHRvbiwgI2VkaXRBZGRCdXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFmZmFhO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NhbmNlbEJ1dHRvbiwgI2VkaXRDYW5jZWxCdXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcbn1cblxuI3Byb2plY3RWYWx1ZSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XG59XG5cbi5wcm9qZWN0Rm9ybSA+IC5mb3JtQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogNXB4O1xufVxuXG4uYWRkQnV0dG9uUHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWZmYWE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY2FuY2VsQnV0dG9uUHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZWJlO1xufVxuXG4ucHJvamVjdEZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIHdpZHRoOiAyMjVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lB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a0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDIyLCAyMywgNDgpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHJnYigyNDAsIDIzNiwgMjI5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMywgNDgpO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEyMHB4O1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZUJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMzEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNmJiYzQ7XFxufVxcblxcbi5kZWZhdWx0UHJvamVjdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcblxcbi5zdWJDYXRlb2dhcnksIC5hZGRQcm9qZWN0LCAucHJvamVjdFRpdGxle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uc3ViQ2F0ZW9nYXJ5OmhvdmVyLCAuYWRkUHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIzLCA0OCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmFjdGl2ZUJveCwgLnRhc2tDYXJkOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIzLCA0OCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiAjMTYxNzMwO1xcbn1cXG5cXG4ucHJvamVjdHNMaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdHNMaXN0ID4gLmhlYWRpbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50YXNrQ29udGVudCB7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogNjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLnRhc2tDb250ZW50ID4gLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrQ2FyZFNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVkaXRCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4OztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFza0NhcmQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrQ2FyZCA+IC5sZWZ0Q29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFxufVxcblxcbi50YXNrQ2FyZCA+IC5yaWdodENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLnN0YXIsIC5lZGl0LCAuZGVsZXRlLCAuZmlsbGVkU3RhciwgI3N0YXIsIC5wcm9qZWN0RGVsZXRlIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZFRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucHJvamVjdFNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0U2VjdGlvbiA+IC5zdWJDYXRlb2dhcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdFRpdGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4OiAxIDtcXG59XFxuXFxuI3Byb2plY3REZWxldGUge1xcbiAgICBtaW4td2lkdGg6IDIwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLCAuZWRpdEZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRpdGxlQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1pbi13aWR0aDogNTAwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxufVxcblxcbi5sZWZ0Q29udGVudCA+IC50aXRsZUNvbnRhaW5lciA+IC50aXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDsgIFxcbn1cXG5cXG4uZGVzY3JpcHRpb25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnJlbWFpbmluZ0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucmVtYWluaW5nQ29udGFpbmVyID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5mb3JtID4gLmZvcm1CdXR0b25zLCAuZWRpdEZvcm0gPiAuZm9ybUJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWluLXdpZHRoOiA1MDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNhZGRCdXR0b24sICNlZGl0QWRkQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jY2FuY2VsQnV0dG9uLCAjZWRpdENhbmNlbEJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcXG59XFxuXFxuI3Byb2plY3RWYWx1ZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xcbn1cXG5cXG4ucHJvamVjdEZvcm0gPiAuZm9ybUJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5hZGRCdXR0b25Qcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhZmZhYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY2FuY2VsQnV0dG9uUHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmViZTtcXG59XFxuXFxuLnByb2plY3RGb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICB3aWR0aDogMjI1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2socHJvamVjdHNBcnJheSkge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGVDb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICB0aXRsZUxhYmVsLmh0bWxGb3IgPSAndGl0bGUnO1xuICAgIHRpdGxlTGFiZWwuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTonO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICd0aXRsZSc7XG4gICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIFxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25Db250YWluZXInKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSAnZGVzY3JpcHRpb24nO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9ICdEZXNjcmlwdGlvbjonO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdkZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3QgcmVtYWluaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVtYWluaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3JlbWFpbmluZ0NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWFkbGluZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWFkbGluZUNvbnRhaW5lcicpXG4gICAgY29uc3QgZGVhZGxpbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVhZGxpbmVMYWJlbC5odG1sRm9yID0gJ2RlYWRsaW5lJztcbiAgICBkZWFkbGluZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2RlYWRsaW5lJyk7XG4gICAgZGVhZGxpbmVMYWJlbC5pbm5lclRleHQgPSAnRGVhZGxpbmU6JztcbiAgICBjb25zdCBkZWFkbGluZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWFkbGluZUlucHV0Lm5hbWUgPSAnZGVhZGxpbmUnO1xuICAgIGRlYWRsaW5lSW5wdXQuaWQgPSAnZGVhZGxpbmUnO1xuICAgIGRlYWRsaW5lSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkZWFkbGluZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGltcG9ydGFuY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFuY2VDb250YWluZXInKTtcbiAgICBjb25zdCBpbXBvcnRhbmNlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGltcG9ydGFuY2VMYWJlbC5odG1sRm9yID0gJ2ltcG9ydGFuY2UnO1xuICAgIGltcG9ydGFuY2VMYWJlbC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbmNlJyk7XG4gICAgaW1wb3J0YW5jZUxhYmVsLmlubmVyVGV4dCA9ICdJbXBvcnRhbnQ6JztcbiAgICBjb25zdCBpbXBvcnRhbmNlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTRUxFQ1QnKTtcbiAgICBpbXBvcnRhbmNlSW5wdXQuaWQgPSAnaW1wb3J0YW5jZSc7XG4gICAgY29uc3QgaW1wb3J0YW5jZVllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGltcG9ydGFuY2VZZXMudmFsdWUgPSAneWVzJztcbiAgICBpbXBvcnRhbmNlWWVzLmlubmVyVGV4dCA9ICdZZXMnO1xuICAgIGNvbnN0IGltcG9ydGFuY2VObyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGltcG9ydGFuY2VOby52YWx1ZSA9ICdubyc7XG4gICAgaW1wb3J0YW5jZU5vLmlubmVyVGV4dCA9ICdObyc7XG5cbiAgICBjb25zdCB0YXNrUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tQcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBwcm9qZWN0TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdExhYmVsJyk7XG4gICAgcHJvamVjdExhYmVsLmh0bWxGb3IgPSAncHJvamVjdElucHV0JztcbiAgICBwcm9qZWN0TGFiZWwuaW5uZXJUZXh0ID0gJ1Byb2plY3Q6JztcbiAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTRUxFQ1QnKTtcbiAgICBwcm9qZWN0SW5wdXQuaWQgPSAncHJvamVjdElucHV0JztcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgb3B0aW9uVmFsdWUudmFsdWUgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZTtcbiAgICAgICAgb3B0aW9uVmFsdWUuaW5uZXJUZXh0ID0gcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0VGl0bGU7XG4gICAgICAgIHByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25WYWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IG5vUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG5vUHJvamVjdC52YWx1ZSA9ICdub25lJztcbiAgICBub1Byb2plY3QuaW5uZXJUZXh0ID0gJ05vbmUnXG4gICAgY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdmb3JtQnV0dG9ucycpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgYWRkQnV0dG9uLmlkID0gJ2FkZEJ1dHRvbic7XG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24uaWQgPSAnY2FuY2VsQnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24uaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG5cbiAgICBpbXBvcnRhbmNlSW5wdXQuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZVllcyk7XG4gICAgaW1wb3J0YW5jZUlucHV0LmFwcGVuZENoaWxkKGltcG9ydGFuY2VObyk7XG5cbiAgICBwcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQobm9Qcm9qZWN0KTtcblxuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICByZW1haW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVhZGxpbmVDb250YWluZXIpO1xuICAgIHJlbWFpbmluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRhbmNlQ29udGFpbmVyKTtcbiAgICByZW1haW5pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1Byb2plY3RDb250YWluZXIpO1xuICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lTGFiZWwpO1xuICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lSW5wdXQpO1xuICAgIGltcG9ydGFuY2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZUxhYmVsKTtcbiAgICBpbXBvcnRhbmNlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltcG9ydGFuY2VJbnB1dCk7XG4gICAgdGFza1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICB0YXNrUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChyZW1haW5pbmdDb250YWluZXIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMpO1xuXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG59IiwiaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4vZGVsZXRlX2ljb24ucG5nJztcblxuLy83LiBmdW5jdGlvbiBmb3IgYWRkaW5nIGZvcm0gYXQgc2lkZWJhciBmb3IgcHJvamVjdCBpbnB1dFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RXaW5kb3coKSB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzTGlzdCcpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdFZhbHVlLmlkID0gJ3Byb2plY3RWYWx1ZSc7XG4gICAgcHJvamVjdFZhbHVlLnR5cGUgPSAndGV4dCc7XG4gICAgcHJvamVjdFZhbHVlLnBsYWNlaG9sZGVyID0gJ0VudGVyIFByb2plY3QgTmFtZSc7XG4gICAgcHJvamVjdFZhbHVlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Zvcm1CdXR0b25zJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ1dHRvblByb2plY3QuY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9uUHJvamVjdCcpO1xuICAgIGFkZEJ1dHRvblByb2plY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGFkZEJ1dHRvblByb2plY3QuaW5uZXJUZXh0ID0gJ0FkZCc7XG4gICAgY29uc3QgY2FuY2VsQnV0dG9uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ1dHRvblByb2plY3QuY2xhc3NMaXN0LmFkZCgnY2FuY2VsQnV0dG9uUHJvamVjdCcpO1xuICAgIGNhbmNlbEJ1dHRvblByb2plY3QudHlwZSA9ICdidXR0b24nXG4gICAgY2FuY2VsQnV0dG9uUHJvamVjdC5pbm5lclRleHQgPSAnQ2FuY2VsJztcblxuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGFkZEJ1dHRvblByb2plY3QpO1xuICAgIGZvcm1CdXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvblByb2plY3QpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0VmFsdWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbnMpO1xuXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKGZvcm0pO1xufVxuXG4vLzguIGZ1bmN0aW9uIGZvciBzdG9yaW5nIGZvcm1Qcm9qZWN0IGRhdGEgYW5kIGFwcGVuZGluZyBwcm9qZWN0IHRvIHRoZSBzaWRlYmFyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U2VjdGlvbicpO1xuICAgIGNvbnN0IHByb2plY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0VmFsdWUnKS52YWx1ZTtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoJ3N1YkNhdGVvZ2FyeScpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGl0bGUnKTtcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdFZhbHVlO1xuICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGVsZXRlLmlkID0gJ3Byb2plY3REZWxldGUnO1xuICAgIGNvbnN0IGRlbGV0ZV9pY29uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlX2ljb24uc3JjID0gZGVsZXRlSW1hZ2U7XG4gICAgZGVsZXRlX2ljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdERlbGV0ZScpO1xuXG4gICAgcHJvamVjdERlbGV0ZS5hcHBlbmRDaGlsZChkZWxldGVfaWNvbik7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlKTtcblxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbn1cblxuLy9mdW5jdGlvbiBmb3IgYXBwZW5kaW5nIHByb2plY2N0cyBvbiBmaXJzdCBsb2FkLlxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RPbkxvYWQocHJvamVjdCkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTZWN0aW9uJyk7XG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdzdWJDYXRlb2dhcnknKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRpdGxlJyk7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RGVsZXRlLmlkID0gJ3Byb2plY3REZWxldGUnO1xuICAgIGNvbnN0IGRlbGV0ZV9pY29uID0gbmV3IEltYWdlKCk7XG4gICAgZGVsZXRlX2ljb24uc3JjID0gZGVsZXRlSW1hZ2U7XG4gICAgZGVsZXRlX2ljb24uY2xhc3NMaXN0LmFkZCgncHJvamVjdERlbGV0ZScpO1xuXG4gICAgcHJvamVjdERlbGV0ZS5hcHBlbmRDaGlsZChkZWxldGVfaWNvbik7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlKTtcblxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbn1cblxuLy85LiBmdW5jdGlvbiB0byByZW1vdmUgYWRkUHJvamVjdCB3aW5kb3cgYWZ0ZXIgYXBwZW5kaW5nIHRoZSBwcm9qZWN0XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQWRkUHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgIHByb2plY3RGb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocHJvamVjdEZvcm0pO1xufVxuXG4vLzIuIGZ1bmN0aW9uIHRvIHJlbW92ZSBhZGRQcm9qZWN0V2luZG93IHdoZW4gY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsQnV0dG9uUHJvamVjdCgpIHtcbiAgICBjb25zdCBmb3JtUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtUHJvamVjdCcpO1xuICAgIChmb3JtUHJvamVjdC5wYXJlbnRFbGVtZW50KS5yZW1vdmVDaGlsZChmb3JtUHJvamVjdCk7XG59XG5cbi8vMy4gZnVuY3Rpb24gZm9yIHByb2plY3QgY2xpY2sgZXZlbnQgZGlzcGxheSBvZiBpbmRpdmlkdWFsIHRhYnMgb2YgcHJvamVjdHMuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFRhYihldmVudCwgcHJvamVjdHNBcnJheSkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5pbm5lclRleHQgPT09IHByb2plY3RzQXJyYXlbaV0ucHJvamVjdFRpdGxlKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgICAgICAgICAgd2hpbGUodGFza0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICAgICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0NhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkU2VjdGlvbicpO1xuICAgICAgICAgICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy80LiBmdW5jdGlvbiBmb3IgYXBwZW5kaW5nIHRhc2tzIHdpdGggc2FtZSBwcm9qZWN0VmFsdWUgYXMgdGhlIHByb2plY3RUYWJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0VGFza3ModGFza3NBcnJheSwgZXZlbnQsIGFwcGVuZFRhc2spIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLnByb2plY3RWYWx1ZSA9PSBldmVudC50YXJnZXQuaW5uZXJUZXh0KSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZVZhbHVlOiB0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgICAgIGRlYWRsaW5lVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSxcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnRWYWx1ZTogdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSxcbiAgICAgICAgICAgICAgICBwcm9qZWN0VmFsdWU6IHRhc2tzQXJyYXlbaV0ucHJvamVjdFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzUuIGZ1bmN0aW9uIHRvIGRlbGV0ZSBwcm9qZWN0IGZyb20gdGhlIHByb2plY3QgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdHNBcnJheSwgZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnZGVsZXRlZFByb2plY3QnKTtcbiAgICBjb25zdCBkZWxldGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVkUHJvamVjdCcpO1xuICAgIGxldCBkZWxldGVkUHJvamVjdFZhbHVlID0gKGRlbGV0ZWRQcm9qZWN0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5maXJzdENoaWxkLmlubmVyVGV4dCkudG9TdHJpbmcoKTtcbiAgICBcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihwcm9qZWN0c0FycmF5W2ldLnByb2plY3RUaXRsZSA9PT0gZGVsZXRlZFByb2plY3RWYWx1ZSkge1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBkZWxldGVkUHJvamVjdC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICByZW1vdmVQcm9qZWN0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocmVtb3ZlUHJvamVjdCk7XG59IiwiaW1wb3J0IHN0YXJJbWFnZSBmcm9tICcuL3N0YXJfaWNvbi5wbmcnO1xuaW1wb3J0IGZpbGxlZFN0YXIgZnJvbSAnLi9maWxsZWRfc3Rhci5wbmcnXG5pbXBvcnQgZWRpdEltYWdlIGZyb20gJy4vZWRpdF9pY29uLnBuZyc7XG5pbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi9kZWxldGVfaWNvbi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NhcmRTZWN0aW9uJyk7XG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbXBvcnRhbmNlVmFsdWUgPSB0YXNrLmltcG9ydGFudFZhbHVlO1xuICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkJyk7XG4gICAgY29uc3QgbGVmdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdsZWZ0Q29udGVudCcpO1xuICAgIGNvbnN0IHJpZ2h0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0Q29udGVudC5jbGFzc0xpc3QuYWRkKCdyaWdodENvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94Lm5hbWUgPSAnY2hlY2tib3gnO1xuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGl0bGVDb250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGFzay50aXRsZVZhbHVlO1xuICAgIHRpdGxlLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb25WYWx1ZTtcbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgZGF0ZS5pbm5lclRleHQgPSB0YXNrLmRlYWRsaW5lVmFsdWU7XG4gICAgY29uc3Qgc3RhciA9IG5ldyBJbWFnZSgpO1xuICAgIGlmKGltcG9ydGFuY2VWYWx1ZSA9PSAneWVzJyl7XG4gICAgICAgIHN0YXIuc3JjID0gZmlsbGVkU3RhcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGFyLnNyYyA9IHN0YXJJbWFnZTtcbiAgICB9XG4gICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdzdGFyJyk7XG4gICAgY29uc3QgZWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgIGVkaXQuc3JjID0gZWRpdEltYWdlO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGNvbnN0IGRlbGV0ZUxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVMb2dvLnNyYyA9IGRlbGV0ZUltYWdlO1xuICAgIGRlbGV0ZUxvZ28uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgbGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGxlZnRDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICByaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgcmlnaHRDb250ZW50LmFwcGVuZENoaWxkKHN0YXIpO1xuICAgIHJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChlZGl0KTtcbiAgICByaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQoZGVsZXRlTG9nbyk7XG5cbiAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChsZWZ0Q29udGVudCk7XG4gICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQocmlnaHRDb250ZW50KTtcblxuICAgIHRhc2tDYXJkU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrQ2FyZCk7XG59IiwiLy8gUmVtb3ZlIHRhc2tzIHdpdGggY2hlY2tlZCBjbGFzc1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrZWRUYXNrKCkge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tlZCcpO1xuICAgIChjaGVja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KS5yZW1vdmVDaGlsZChjaGVja2VkLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG59XG5cbi8vIFJlbW92ZSB0aGUgY2hlY2tlZCB0YXNrIGZyb20gYXJyYXkgb2YgdGFza3MuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVGFza0FycmF5KHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBjaGVja2VkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrZWQnKTtcbiAgICBpZihjaGVja2VkQm94KSB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrZWQnKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlVGl0bGUgPSAoY2hlY2tib3gubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5pbm5lclRleHQpLnRvU3RyaW5nKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYodGFza3NBcnJheVtpXS50aXRsZVZhbHVlID09PSByZW1vdmVUaXRsZSkge1xuICAgICAgICAgICAgICAgIHRhc2tzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGVsZXRlZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlZCcpO1xuICAgICAgICBpZihkZWxldGVkVGFzaykge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlVGl0bGUgPSAoZGVsZXRlZFRhc2suZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQpLmlubmVyVGV4dC50b1N0cmluZygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYodGFza3NBcnJheVtpXS50aXRsZVZhbHVlID09PSByZW1vdmVUaXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrc0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIGRlbGV0ZSB0YXNrIGZyb20gdGhlIGRvbSB0cmVlLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVsZXRlVGFzaygpIHtcbiAgICBjb25zdCBkZWxldGVkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVkJyk7XG4gICAgKGRlbGV0ZWRUYXNrLnBhcmVudEVsZW1lbnQpLnJlbW92ZUNoaWxkKGRlbGV0ZWRUYXNrKTtcbn0iLCIvLzUuIGZ1bmN0aW9uIHRvIGFkZCBlZGl0IGJveCB1bmRlciB0aGUgdGFzayBmb3IgZWRpdCBjbGljayBldmVudFxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRCb3goZXZlbnQpIHtcbiAgICBjb25zdCBlZGl0Qm94Q29udGFpbmVyID0gKChldmVudC50YXJnZXQucGFyZW50Tm9kZSkucGFyZW50Tm9kZSkucGFyZW50Tm9kZTtcbiAgICBlZGl0Qm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2VkaXRCb3gnKTtcblxuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXRGb3JtJyk7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlQ29udGFpbmVyJyk7XG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBlZGl0VGl0bGUuaHRtbEZvciA9ICdlZGl0VGl0bGUnO1xuICAgIGVkaXRUaXRsZS5jbGFzc0xpc3QuYWRkKCdlZGl0VGl0bGUnKTtcbiAgICBlZGl0VGl0bGUuaW5uZXJUZXh0ID0gJ1RpdGxlOic7XG4gICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVJbnB1dC5uYW1lID0gJ2VkaXRUaXRsZSc7XG4gICAgdGl0bGVJbnB1dC5pZCA9ICdlZGl0VGl0bGUnO1xuICAgIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICB0aXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb25Db250YWluZXInKTtcbiAgICBjb25zdCBlZGl0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVkaXREZXNjcmlwdGlvbi5odG1sRm9yID0gJ2VkaXREZXNjcmlwdGlvbic7XG4gICAgZWRpdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2VkaXREZXNjcmlwdGlvbicpO1xuICAgIGVkaXREZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246JztcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZWRpdERlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0LmlkID0gJ2VkaXREZXNjcmlwdGlvbic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3QgZGVhZGxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWFkbGluZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZWFkbGluZUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGVkaXREZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZWRpdERlYWRsaW5lLmh0bWxGb3IgPSAnZWRpdERlYWRsaW5lJztcbiAgICBlZGl0RGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnZWRpdERlYWRsaW5lJyk7XG4gICAgZWRpdERlYWRsaW5lLmlubmVyVGV4dCA9ICdEZWFkbGluZTonO1xuICAgIGNvbnN0IGRlYWRsaW5lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlYWRsaW5lSW5wdXQubmFtZSA9ICdlZGl0RGVhZGxpbmUnO1xuICAgIGRlYWRsaW5lSW5wdXQuaWQgPSAnZWRpdERlYWRsaW5lJztcbiAgICBkZWFkbGluZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZGVhZGxpbmVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Zvcm1CdXR0b25zJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBhZGRCdXR0b24uaWQgPSAnZWRpdEFkZEJ1dHRvbic7XG4gICAgYWRkQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQnXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjYW5jZWxCdXR0b24uaWQgPSAnZWRpdENhbmNlbEJ1dHRvbic7XG4gICAgY2FuY2VsQnV0dG9uLmlubmVyVGV4dCA9ICdDYW5jZWwnO1xuXG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcbiAgICBmb3JtQnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdFRpdGxlKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXREZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBkZWFkbGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0RGVhZGxpbmUpO1xuICAgIGRlYWRsaW5lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlYWRsaW5lSW5wdXQpO1xuXG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUlucHV0KTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9ucyk7XG5cbiAgICBlZGl0Qm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcbn1cblxuLy82LiBhZGQgZWRpdEJveCBpbnB1dCB2YWx1ZXMgdG8gdGFzay5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VmFsdWUoKSB7XG4gICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Q29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBlZGl0Q29udGFpbmVyLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gdGl0bGUubmV4dFNpYmxpbmc7XG4gICAgY29uc3QgZGF0ZSA9IGVkaXRDb250YWluZXIuZmlyc3RDaGlsZC5uZXh0U2libGluZy5maXJzdENoaWxkO1xuICAgIGNvbnN0IHRpdGxlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdFRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb25WYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0RGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkYXRlVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdERlYWRsaW5lJykudmFsdWU7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVWYWx1ZTtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvblZhbHVlO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gZGF0ZVZhbHVlO1xufVxuXG4vLzcuIGZ1bmN0aW8gdG8gcmVtb3ZlIGVkaXRCb3ggd2hlbiBlZGl0Q2FuY2VsQnV0dG9uIGlzIGNsaWNrZWRcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb3JtQm94KCkge1xuICAgIGNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ2FyZFNlY3Rpb24nKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24ucmVtb3ZlQ2hpbGQodGFza0NhcmRTZWN0aW9uLmxhc3RDaGlsZClcbn1cblxuLy84LiBmdW5jdGlvbiB0byByZW1vdmUgcHJlIGVkaXQgdmFsdWVzIGZyb20gdGFza3NhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVZhbHVlKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRDb250YWluZXInKTtcbiAgICBjb25zdCByZW1vdmVUaXRsZSA9IGVkaXRDb250YWluZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQ7XG4gICAgY29uc29sZS5sb2cocmVtb3ZlVGl0bGUuaW5uZXJUZXh0KVxuOyAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZihyZW1vdmVUaXRsZS5pbm5lclRleHQgPT09IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSkge1xuICAgICAgICAgICAgdGFza3NBcnJheS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vOS4gZnVjbnRpb24gdG8gYWRkIG5ldyB2YWx1ZXMgdG8gdGFza3NhcnJheSBhZnRlciBlZGl0QWRkQnV0dG9uIGlzIGNsaWNrZWQgXG5leHBvcnQgZnVuY3Rpb24gYWRkRWRpdFZhbHVlcyh0YXNrc0FycmF5KSB7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0VGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXREZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGRlYWRsaW5lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdERlYWRsaW5lJykudmFsdWU7XG5cbiAgICBjb25zdCB0YXNrID0ge3RpdGxlVmFsdWUsZGVzY3JpcHRpb25WYWx1ZSxkZWFkbGluZVZhbHVlfTtcbiAgICB0YXNrc0FycmF5LnB1c2godGFzayk7XG59IiwiLy81LiBmdW5jdGlvbiBmb3IgZGlzcGxheSBmb3IgaW1wb3J0YW50IHRhYlxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydGFudFBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG4gICAgd2hpbGUodGFza0NvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdJbXBvcnRhbnQnO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgdGFza0NvbnRlbnQuaWQgPSAnaW1wb3J0YW50VGFiJztcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICBwcm9qZWN0VmFsdWU6IHRhc2tzQXJyYXlbaV0ucHJvamVjdFZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgaWYodGFzay5pbXBvcnRhbnRWYWx1ZSA9PSAneWVzJykge1xuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgc3RhckltYWdlIGZyb20gJy4vc3Rhcl9pY29uLnBuZyc7XG5pbXBvcnQgZmlsbGVkU3RhckltYWdlIGZyb20gJy4vZmlsbGVkX3N0YXIucG5nJztcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGltcG9ydG50IGljb24gdG8gZmlsbGVkIFxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVN0YXIoKSB7XG4gICAgY29uc3Qgc3RhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJyk7XG4gICAgaWYoc3Rhci5zcmMgPT09IHN0YXJJbWFnZSkge1xuICAgICAgICBzdGFyLnNyYyA9IGZpbGxlZFN0YXJJbWFnZTtcbiAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdmaWxsZWRTdGFyJyk7XG4gICAgICAgIHN0YXIuY2xhc3NMaXN0LnJlbW92ZSgnc3RhcicpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gYWRkIHZhbHVlcyB0byBpbXBvcnRhbnRUYXNrcyBhcnJheVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpIHtcbiAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXInKTtcbiAgICBzdGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0YW50Jyk7XG4gICAgY29uc3QgdGl0bGVWYWx1ZSA9IGltcG9ydGFudC5maXJzdENoaWxkLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcuZmlyc3RDaGlsZC5pbm5lclRleHQ7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLnRpdGxlVmFsdWUgPT0gdGl0bGVWYWx1ZSkge1xuICAgICAgICAgICAgdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSA9ICd5ZXMnXG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBpbXBvcnRudCBmaWxsZWQgaWNvbiB0byBub24gZmlsbGVkIGljb24gYW5kIHJlbW92ZSBpbXBvcnRhbnQgY2xhc3MgZnJvbSBwYXJlbnRzIHBhcmVudCBub2RlXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRmlsbGVkU3RhcigpIHtcbiAgICBjb25zdCBmaWxsZWRTdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGxlZFN0YXInKTtcbiAgICBmaWxsZWRTdGFyLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQnKTtcbiAgICBpZihmaWxsZWRTdGFyLnNyYyA9PT0gZmlsbGVkU3RhckltYWdlKXtcbiAgICAgICAgZmlsbGVkU3Rhci5zcmMgPSBzdGFySW1hZ2U7XG4gICAgICAgIGZpbGxlZFN0YXIuY2xhc3NMaXN0LmFkZCgnc3RhcicpO1xuICAgICAgICBmaWxsZWRTdGFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbGxlZFN0YXInKTtcbiAgICB9XG59XG5cbi8vIHJlbW92ZSB0YXNrIGZyb20gaW1wb3J0YW50VGFza0FycmF5XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSW1wb3J0YW50VGFza3ModGFza3NBcnJheSkge1xuICAgIGNvbnN0IGltcG9ydGFudFRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltcG9ydGFudCcpO1xuICAgIGNvbnN0IHJlbW92ZUltcG9ydGFudFRpdGxlID0gaW1wb3J0YW50VGFza0NhcmQuZmlyc3RDaGlsZC5maXJzdENoaWxkLm5leHRTaWJsaW5nLmZpcnN0Q2hpbGQuaW5uZXJUZXh0O1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKHJlbW92ZUltcG9ydGFudFRpdGxlID09IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSkge1xuICAgICAgICAgICAgdGFza3NBcnJheVtpXS5pbXBvcnRhbnRWYWx1ZSA9ICdubyc7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy9pbXBvcnRpbmcgYXNzZXRzXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJy4vdG9kby5wbmcnXG5pbXBvcnQgc3RhckltYWdlIGZyb20gJy4vc3Rhcl9pY29uLnBuZyc7XG5pbXBvcnQgZmlsbGVkU3RhckltYWdlIGZyb20gJy4vZmlsbGVkX3N0YXIucG5nJztcbmltcG9ydCBlZGl0SW1hZ2UgZnJvbSAnLi9lZGl0X2ljb24ucG5nJztcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuL2RlbGV0ZV9pY29uLnBuZyc7XG5pbXBvcnQgYWRkVGFzayBmcm9tICcuL2FkZFRhc2suanMnO1xuaW1wb3J0IGFwcGVuZFRhc2sgZnJvbSAnLi9hcHBlbmRUYXNrLmpzJztcbmltcG9ydCB7Y2hlY2tlZFRhc2t9IGZyb20gJy4vY2hlY2tib3guanMnO1xuaW1wb3J0IHtyZW1vdmVUYXNrQXJyYXl9IGZyb20gJy4vY2hlY2tib3guanMnO1xuaW1wb3J0IGRlbGV0ZVRhc2sgZnJvbSAnLi9kZWxldGVUYXNrLmpzJztcbmltcG9ydCB7IGVkaXRCb3ggfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcbmltcG9ydCB7IGVkaXRWYWx1ZSB9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuaW1wb3J0IHsgcmVtb3ZlRm9ybUJveCB9IGZyb20gJy4vZWRpdFRhc2suanMnO1xuaW1wb3J0IHsgcmVtb3ZlVmFsdWUgfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcbmltcG9ydCB7IGFkZEVkaXRWYWx1ZXMgfSBmcm9tICcuL2VkaXRUYXNrLmpzJztcbmltcG9ydCB7IGNoYW5nZVN0YXIgfSBmcm9tICcuL2ltcG9ydGFudFRhc2tzLmpzJztcbmltcG9ydCB7IGFkZEltcG9ydGFudFRhc2tzIH0gZnJvbSAnLi9pbXBvcnRhbnRUYXNrcy5qcyc7XG5pbXBvcnQgeyBjaGFuZ2VGaWxsZWRTdGFyIH0gZnJvbSAnLi9pbXBvcnRhbnRUYXNrcy5qcyc7XG5pbXBvcnQgeyByZW1vdmVJbXBvcnRhbnRUYXNrcyB9IGZyb20gJy4vaW1wb3J0YW50VGFza3MuanMnO1xuaW1wb3J0IHsgdG9kYXlQYWdlIH0gZnJvbSAnLi90b2RheS5qcyc7XG5pbXBvcnQgeyB0b2RheURhdGUgfSBmcm9tICcuL3RvZGF5LmpzJztcbmltcG9ydCB7IHRoaXNXZWVrUGFnZSB9IGZyb20gJy4vdGhpc1dlZWsuanMnO1xuaW1wb3J0IHsgb25lV2Vla0RhdGUgfSBmcm9tICcuL3RoaXNXZWVrLmpzJztcbmltcG9ydCB7IGltcG9ydGFudFBhZ2UgfSBmcm9tICcuL2ltcG9ydGFudFBhZ2UuanMnXG5pbXBvcnQgeyBhZGRQcm9qZWN0V2luZG93IH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGFwcGVuZFByb2plY3QgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgcmVtb3ZlQWRkUHJvamVjdCB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5pbXBvcnQgeyBjYW5jZWxCdXR0b25Qcm9qZWN0IH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IHByb2plY3RUYWIgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgYXBwZW5kUHJvamVjdFRhc2tzIH0gZnJvbSAnLi9hcHBlbmRQcm9qZWN0LmpzJztcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL2FwcGVuZFByb2plY3QuanMnO1xuaW1wb3J0IHsgcHJvamVjdE9uTG9hZCB9IGZyb20gJy4vYXBwZW5kUHJvamVjdC5qcyc7XG5cbi8vYXNzaWduaW5nIHZhciB0byBkb20gZWxlbWVudHNcbmNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50Jyk7XG5jb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxUYXNrcycpO1xuY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDYXJkU2VjdGlvbicpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrJyk7XG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Jyk7XG5sZXQgaXNGb3JtUHJlc2VudCA9IGZhbHNlO1xubGV0IGlzUHJvamVjdEZvcm1QcmVzZW50ID0gZmFsc2U7XG5cblxuLy9oZWFkZXIgbG9nbyBpbiBoZWFkZXIgc2VjdGlvblxuY29uc3QgaGVhZGVyTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dvJyk7XG5oZWFkZXJMb2dvLnNyYyA9IGxvZ29JbWFnZTtcblxuXG4vL2FycmF5IGZvciBzdG9yaW5nIGZvcm0gZGF0YVxubGV0IHRhc2tzQXJyYXkgPSBbXTtcbmxldCByZXRyaWV2ZWRUYXNrc0FycmF5ID0gW107XG5sZXQgYXJyUHJvamVjdGxpc3RzID0gWydBbGwgVGFza3MnLCAnVG9kYXknLCAnVGhpcyBXZWVrJywgJ0ltcG9ydGFudCddXG5sZXQgcHJvamVjdHNBcnJheSA9IFtdO1xuXG5cbi8vRVZFTlRMSVNURU5FUlM6LVxuLy8xLiBjbGljayBsaXN0ZW5lciBmb3IgYWRkdGFzayBmb3IgZm9ybSBpbnB1dFxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZFRhc2snKSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZighaXNGb3JtUHJlc2VudCkge1xuICAgICAgICAgICAgYWRkVGFzayhwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgICAgIGlzRm9ybVByZXNlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8yLiBjbGljayBldmVudCBsaXN0ZW5lciBmb3IgYWRkYnV0dG9uIG9uIGZvcm0gZm9yIGFkZHRhc2tcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gJ2FkZEJ1dHRvbicpIHtcbiAgICAgICAgY29uc3QgdGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlYWRsaW5lVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVhZGxpbmUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgaW1wb3J0YW50VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW1wb3J0YW5jZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcm9qZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdElucHV0JykudmFsdWU7XG5cbiAgICAgICAgY29uc3QgdGFzayA9IHt0aXRsZVZhbHVlLCBkZXNjcmlwdGlvblZhbHVlLCBkZWFkbGluZVZhbHVlLCBpbXBvcnRhbnRWYWx1ZSwgcHJvamVjdFZhbHVlfTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG4gICAgICAgIGlmKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB0YXNrc0FycmF5LnB1c2godGFzayk7XG4gICAgICAgICAgICB0YXNrQ29udGVudC5yZW1vdmVDaGlsZCh0YXNrQ29udGVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgYXBwZW5kVGFzayh0YXNrKTtcbiAgICAgICAgICAgIHRhc2tzTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCAoJ1BsZWFzZSBmaWxsIGFsbCByZXF1aXJlZCBmaWVsZHMhJylcbiAgICAgICAgfVxuICAgICAgICBpc0Zvcm1QcmVzZW50ID0gZmFsc2U7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxufSk7XG5cbi8vMy4gQ2xpY2sgZXZlbnQgZm9yIHJlbW92ZSBhZGR0YXNrd2luZG93XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICdjYW5jZWxCdXR0b24nKSB7XG4gICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgIGlzRm9ybVByZXNlbnQgPSBmYWxzZTtcbiAgICB9XG59KVxuXG4vLzQuIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciB0b2RheSBzZWN0aW9uXG50b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RheVBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzayk7XG4gICAgYWN0aXZlQm94KGV2ZW50KTtcbn0pXG5cbi8vNS4gY2xpY2sgZXZlbnQgZm9yIHJlbW92aW5nIHRhc2sgd2l0aCBjaGVja2VkIGRpdiBmcm9tIGRvbSBhbmQgdGFza3NBcnJheVxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2JveCcpID09IHRydWUpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgcmVtb3ZlVGFza0FycmF5KHRhc2tzQXJyYXkpO1xuICAgICAgICBjaGVja2VkVGFzaygpO1xuICAgICAgICB0YXNrc0xvY2FsU3RvcmFnZSgpXG4gICAgfVxufSlcblxuLy82LiBjbGljayBldmVudCBmb3IgZGVsZXRlIGljb24gb24gdGFzay5cbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSA9PSB0cnVlKSB7XG4gICAgICAgIChldmVudC50YXJnZXQucGFyZW50Tm9kZSkucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkZWxldGVkJyk7XG4gICAgICAgIHJlbW92ZVRhc2tBcnJheSh0YXNrc0FycmF5KTtcbiAgICAgICAgZGVsZXRlVGFzaygpO1xuICAgICAgICB0YXNrc0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn0pXG5cbi8vNy4gY2xpY2sgZXZlbnQgZm9yIGVkaXQgaWNvblxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZighaXNGb3JtUHJlc2VudCkge1xuICAgICAgICAgICAgZWRpdEJveChldmVudCk7XG4gICAgICAgICAgICBjb25zdCBlZGl0Q29udGFpbmVyID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZVxuICAgICAgICAgICAgZWRpdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdlZGl0Q29udGFpbmVyJyk7XG4gICAgICAgICAgICBpc0Zvcm1QcmVzZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vOC4gY2xpY2sgZXZlbnQgZm9yIGVkaXRCb3ggYWRkQnV0dG9uXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmlkID09ICdlZGl0QWRkQnV0dG9uJykge1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0Rm9ybScpO1xuICAgICAgICBpZihlZGl0Rm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHJlbW92ZVZhbHVlKHRhc2tzQXJyYXkpO1xuICAgICAgICAgICAgYWRkRWRpdFZhbHVlcyh0YXNrc0FycmF5KTtcbiAgICAgICAgICAgIGVkaXRWYWx1ZSgpO1xuICAgICAgICAgICAgdGFza3NMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHJlbW92ZUZvcm1Cb3goKTtcbiAgICAgICAgICAgIGlzRm9ybVByZXNlbnQgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0IChcIlBsZWFzZSBmaWxsIGFsbCB0aGUgcmVxdWlyZWQgZGV0YWlscyFcIik7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLzkuIGNsaWNrIGV2ZW50IGZvciBpbXBvcnRhbnQgaWNvbiB0byBjaGFuZ2UgZW1wdHkgc3RhciB0byBmaWxsZWQgc3RhciBhbmQgYWRkIHRhc2sgdmFsdWVzIHRvIGltcG9ydGFudFRhc2tzIGFycmF5LlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YXInKSA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGRJbXBvcnRhbnRUYXNrcyh0YXNrc0FycmF5KTtcbiAgICAgICAgY2hhbmdlU3RhcigpO1xuICAgICAgICB0YXNrc0xvY2FsU3RvcmFnZSgpXG4gICAgfSBlbHNlIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbGxlZFN0YXInKSA9PSB0cnVlKSB7XG4gICAgICAgIHJlbW92ZUltcG9ydGFudFRhc2tzKHRhc2tzQXJyYXkpO1xuICAgICAgICBjaGFuZ2VGaWxsZWRTdGFyKCk7XG4gICAgICAgIHRhc2tzTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGlmKHRhc2tDb250ZW50LmlkID09ICdpbXBvcnRhbnRUYWInKXtcbiAgICAgICAgICAgIGltcG9ydGFudFBhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzayk7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLzEwLiBjbGljayBldmVudCBmb3IgdGhpcyB3ZWVrIHRhYlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PSAndGhpc1dlZWsnKSB7XG4gICAgICAgIHRoaXNXZWVrUGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrLCB0b2RheURhdGUpO1xuICAgICAgICBhY3RpdmVCb3goZXZlbnQpO1xuICAgIH1cbn0pXG5cbi8vMTEuIGNsaWNrIGV2ZW50IGZvciBpbXBvdGFudCB0YWJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuaWQgPT0gJ2ltcG9ydGFudCcpIHtcbiAgICAgICAgaW1wb3J0YW50UGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrKTtcbiAgICAgICAgYWN0aXZlQm94KGV2ZW50KTtcbiAgICB9XG59KVxuXG4vLzEyLiBjbGljayBldmVudCBmb3IgYWxsIHRhc2tzIHBhZ2VcbmFsbFRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFsbFRhc2tzKHRhc2tzQXJyYXkpO1xuICAgIGFjdGl2ZUJveChldmVudCk7XG59KVxuXG4vLzEzLiBmdW5jdGlvbiBmb3IgYWRkIHByb2plY3Qgd2luZG93IGZvciB2YWx1ZSBpbnB1dCBmb3IgbmV3IHByb2plY3RcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRQcm9qZWN0JykgPT09IHRydWUpIHtcbiAgICAgICAgaWYoIWlzUHJvamVjdEZvcm1QcmVzZW50KSB7XG4gICAgICAgICAgICBhZGRQcm9qZWN0V2luZG93KCk7XG4gICAgICAgICAgICBpc1Byb2plY3RGb3JtUHJlc2VudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLzE0LiBmdW5jdGlvbiB0byBhcHBlbmQgcHJvamVjdCB0byB0aGUgcHJvamVjdExpc3QuXG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkQnV0dG9uUHJvamVjdCcpID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdFZhbHVlJyk7XG4gICAgICAgIGlmKHByb2plY3RUaXRsZS52YWx1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgbGV0IHByb2plY3QgPSB7cHJvamVjdFRpdGxlOiBwcm9qZWN0VGl0bGUudmFsdWV9O1xuICAgICAgICAgICAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICAgIFxuICAgICAgICAgICAgYXBwZW5kUHJvamVjdCgpO1xuICAgICAgICAgICAgcHJvamVjdExvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgcmVtb3ZlQWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgaXNQcm9qZWN0Rm9ybVByZXNlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydCAoJ1BsZWFzZSBmaWxsIGFsbCByZXF1aXJlZCBkZXRhaWxzLicpO1xuICAgICAgICB9XG5cbiAgICB9XG59KVxuXG4vLzE1LiBjbGljayBldmVudCBmb3Igd2hlbiBjYW5jZWxQcm9qZWN0QnV0dG9uIGlzIGNsaWNrZWRcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWxCdXR0b25Qcm9qZWN0JykgPT09IHRydWUpIHtcbiAgICAgICAgcmVtb3ZlQWRkUHJvamVjdCgpO1xuICAgICAgICBpc1Byb2plY3RGb3JtUHJlc2VudCA9IGZhbHNlO1xuICAgIH1cbn0pXG5cbi8vMTYuIGNsaWNrIGV2ZW50IHRvIGRlbHRlIGEgcHJvamVjdCBmcm9tIHRoZSBsaXN0LlxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3REZWxldGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RzQXJyYXksIGV2ZW50KTtcbiAgICAgICAgcHJvamVjdExvY2FsU3RvcmFnZSgpO1xuICAgIH1cbn0pXG5cbi8vMTcuIGNsaWNrIGV2ZW50IGZvciBwcm9qZWN0IGxpc3RzIHRhYiBmb3Igc3dpdGNoaW5nIGRpc3BsYXkgdG8gcmVzcGVjdGl2ZSB0YWJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0VGl0bGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9qZWN0VGFiKGV2ZW50LCBwcm9qZWN0c0FycmF5KTtcbiAgICAgICAgYXBwZW5kUHJvamVjdFRhc2tzKHRhc2tzQXJyYXksIGV2ZW50LCBhcHBlbmRUYXNrKTtcbiAgICAgICAgYWN0aXZlQm94UHJvamVjdChldmVudCk7XG4gICAgfVxufSlcblxuLy8xOC4gRmluYWwgY2xpY2sgZXZlbnQgZm9yIHdoZW4gdGhlIHBhZ2UgbG9hZHMuIGRpc3BsYXkgYW55IGV4aXN0aW5nIHRhc2tzIGFuZCBwcm9qZWN0cyBpbiBsb2NhbCBzdG9yYWdlIG9uIHRoZSBzY3JlZW5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKHRhc2tzQXJyYXkpID0+IHtcbiAgICBjb25zdCBhbGxUYXNrc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbGxUYXNrcycpO1xuICAgIGFsbFRhc2tzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUJveCcpO1xuICAgIGFsbFRhc2tzKHRhc2tzQXJyYXkpO1xuICAgIG9uTG9hZFRhc2tzKCk7XG5cbn0pXG5cbi8vMTkuIGNsaWNrIGV2ZW50IHRvIHJlbW92ZSBlZGl0Rm9ybSB3aGVuIGVkaXRDYW5jZWxCdXR0b24gaXMgY2xpY2tlZFxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2VkaXRDYW5jZWxCdXR0b24nKSB7XG4gICAgICAgIHJlbW92ZUZvcm1Cb3goZXZlbnQpXG4gICAgfVxufSlcblxuLy8yMC4gQ2xpY2sgZXZlbnQgZm9yIHByZXZlbnRpbmcgZW50ZXIga2V5ZG93biBmcm9tIHN1Ym1pdHRpbmcgdGhlIGZvcm0gYW5kIHJlZnJlc2hpbmcgdGhlIHNpdGVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLmtleUlkZW50aWZpZXIgPT0gJ1UrMDAwQScgfHwgZS5rZXlJZGVudGlmaWVyID09ICdFbnRlcicgfHwgZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSAnSU5QVVQnICYmIGUudGFyZ2V0LnR5cGUgPT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59LCB0cnVlKTtcblxuXG4vL0ZVTkNUSU9OUzotXG4vLzEuIGZ1bmN0aW9uIGZvciBkaXNwbGF5IG9mIGFsbCB0YXNrcyB0YWJcbmZ1bmN0aW9uIGFsbFRhc2tzKHRhc2tzQXJyYXkpIHtcbiAgICB3aGlsZSh0YXNrQ29udGVudC5maXJzdENoaWxkKXtcbiAgICAgICAgdGFza0NvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0NvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ0FsbCBUYXNrcyc7XG4gICAgY29uc3QgdGFza0NhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0NhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDYXJkU2VjdGlvbicpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICBhZGRUYXNrLmlubmVyVGV4dCA9ICcrIEFkZCBUYXNrJztcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb25WYWx1ZTogdGFza3NBcnJheVtpXS5kZXNjcmlwdGlvblZhbHVlLFxuICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWVcbiAgICAgICAgfVxuICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgIH1cbn1cblxuLy8yLiBmdW5jdGlvbiBmb3IgYWRkaW5nIGNzcyB0byBhY3RpdmUgdGFiIG9uIHNpZGViYXIgXG5mdW5jdGlvbiBhY3RpdmVCb3goZXZlbnQpIHtcbiAgICBjb25zdCBhY3RpdmVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlQm94JylcbiAgICBpZihhY3RpdmVCb3ggIT09IG51bGwpIHtcbiAgICAgICAgYWN0aXZlQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZUJveCcpO1xuICAgIH1cbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlQm94Jyk7XG59XG5cbi8vMy4gZnVuY3Rpb24gZm9yIGFkZGluZyBjc3MgdG8gYWN0aXZlIHRhYiBvbiBzaWRlYmFyIFxuZnVuY3Rpb24gYWN0aXZlQm94UHJvamVjdChldmVudCkge1xuICAgIGNvbnN0IGFjdGl2ZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmVCb3gnKVxuICAgIGlmKGFjdGl2ZUJveCAhPT0gbnVsbCkge1xuICAgICAgICBhY3RpdmVCb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlQm94Jyk7XG4gICAgfVxuICAgIGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZUJveCcpO1xufVxuXG4vLzQuIGZ1bmN0aW9uIGZvciBhY2Nlc2luZyBsb2NhbFN0b3JhZ2UgdG8gc3RvcmUgYXJyYXlzIGZvciBhcHBlbmRpbmcgdGFza3Mgd2hlbiBwYWdlIGxvYWRzIGFuZCBmb3Igc2F2aW5nIHRhc2tzIHdoZW4gbmV3IHRhc2tzIGFyZSBhZGRlZCB0byB0aGUgYXJyYXkuIGFzIHdlbGwgYXMgZm9yIHN0b3JpbmcgcHJvamVjdHMuXG5mdW5jdGlvbiB0YXNrc0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3NBcnInLCBKU09OLnN0cmluZ2lmeSh0YXNrc0FycmF5KSk7XG59XG5cbi8vNS4gZnVuY3Rpb24gZm9yIHByb2plY3Qgc3RvcmFnZVxuZnVuY3Rpb24gcHJvamVjdExvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdEFycicsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQXJyYXkpKVxufVxuXG4vLzYuIGZ1bmN0aW9uIHRvIHJldHJpZXZlIHRhc2tzIGZyb20gc3RvcmFnZVxuZnVuY3Rpb24gb25Mb2FkVGFza3MoKSB7XG4gICAgdGFza3NBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzQXJyJykpO1xuICAgIGlmKHRhc2tzQXJyYXkpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlVmFsdWU6IHRhc2tzQXJyYXlbaV0udGl0bGVWYWx1ZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblZhbHVlOiB0YXNrc0FycmF5W2ldLmRlc2NyaXB0aW9uVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVhZGxpbmVWYWx1ZTogdGFza3NBcnJheVtpXS5kZWFkbGluZVZhbHVlLFxuICAgICAgICAgICAgICAgIGltcG9ydGFudFZhbHVlOiB0YXNrc0FycmF5W2ldLmltcG9ydGFudFZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgICAgICAgICAgaW1wb3J0YW50SWNvbkNsYXNzKCk7XG4gICAgICAgICAgICBvbkxvYWRJbXBvcnRhbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2plY3RzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0QXJyJykpO1xuICAgIGlmKHByb2plY3RzQXJyYXkpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0ID0ge1xuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZTogcHJvamVjdHNBcnJheVtpXS5wcm9qZWN0VGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb2plY3RPbkxvYWQocHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vNy4gRnVuY3Rpb24gZm9yIHNlbGVjdGluZyBjbGFzcyBvZiBpbXBvcnRhbnQgaWNvbiBiYXNlZCBvbiBpdHMgdmFsdWVcbmZ1bmN0aW9uIGltcG9ydGFudEljb25DbGFzcyAoKSB7XG4gICAgY29uc3QgaW1wb3J0YW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFyJyk7XG4gICAgY29uc3QgaW1wb3J0YW50RmlsbGVkSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxsZWRTdGFyJyk7XG4gICAgaWYoaW1wb3J0YW50SWNvbikge1xuICAgICAgICBpbXBvcnRhbnRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZpbGxlZFN0YXInKTtcbiAgICAgICAgaW1wb3J0YW50SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyJylcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbXBvcnRhbnRGaWxsZWRJY29uLmNsYXNzTGlzdC5hZGQoJy5zdGFyJyk7XG4gICAgICAgIGltcG9ydGFudEZpbGxlZEljb24uY2xhc3NMaXN0LnJlbW92ZSgnZmlsbGVkU3RhcicpO1xuICAgIH1cbn1cblxuLy84LiBGdW5jdGlvbiB0byBhZGQgaW1wb3J0YW50IGNsYXNzIG9uIHRhc2tjYXJkIG9uIHdpbmRvd3MgbG9hZFxuZnVuY3Rpb24gb25Mb2FkSW1wb3J0YW50KCkge1xuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDYXJkJyk7XG4gICAgY29uc3QgaW1wb3J0YW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxsZWRTdGFyJyk7XG4gICAgaWYoaW1wb3J0YW50SWNvbikge1xuICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcbiAgICB9XG59IiwiLy8zLiBmdW5jdGlvbiBmb3IgdGhpc1dlZWtQYWdlIGRvbSB0cmVlIGRpc3BsYXlcbmV4cG9ydCBmdW5jdGlvbiB0aGlzV2Vla1BhZ2UodGFza3NBcnJheSwgYXBwZW5kVGFzaywgdG9kYXlEYXRlKSB7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbiAgICB3aGlsZSh0YXNrQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuaW5uZXJUZXh0ID0gJ1RoaXMgV2Vlayc7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHRhc2tDYXJkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tDYXJkU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQ2FyZFNlY3Rpb24nKTtcbiAgICB0YXNrQ29udGVudC5pZCA9ICd0aGlzV2Vla1RhYic7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDYXJkU2VjdGlvbik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUgPD0gb25lV2Vla0RhdGUoKS5vbmVXZWVrRnJvbVRvZGF5ICYmIHRhc2tzQXJyYXlbaV0uZGVhZGxpbmVWYWx1ZSA+PSB0b2RheURhdGUoKS5jdXJyZW50RGF0ZSkge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgICAgICAgICAgICBkZWFkbGluZVZhbHVlOiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUsXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzQuIGZ1bmN0aW9uIHRvIGdldCBhIGRhdGUgb25lIHdlZWsgZnJvbSBub3dcbmV4cG9ydCBmdW5jdGlvbiBvbmVXZWVrRGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgKyA3KTtcblxuICAgIGxldCBkYXkgPSAoZGF0ZS5nZXREYXRlKCkpID49IDEwID8gKGRhdGUuZ2V0RGF0ZSgpKSA6IFwiMFwiICsgKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkgPj0gMTAgPyAoZGF0ZS5nZXRNb250aCgpICsgMSkgOiBcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBvbmVXZWVrRnJvbVRvZGF5ID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICByZXR1cm4ge29uZVdlZWtGcm9tVG9kYXl9O1xufSIsIi8vMS4gZnVuY3Rpb24gZm9yIGRpc3BsYXkgb2YgZG9tIHRyZWUgb2YgdG9kYXkgcGFnZVxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5UGFnZSh0YXNrc0FycmF5LCBhcHBlbmRUYXNrKSB7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnQnKTtcbiAgICB3aGlsZSh0YXNrQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250ZW50LnJlbW92ZUNoaWxkKHRhc2tDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmlubmVyVGV4dCA9ICdUb2RheSc7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb25zdCB0YXNrQ2FyZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ2FyZFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFza0NhcmRTZWN0aW9uJyk7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NhcmRTZWN0aW9uKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZih0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUgPT0gdG9kYXlEYXRlKCkuY3VycmVudERhdGUpe1xuICAgICAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGVWYWx1ZTogdGFza3NBcnJheVtpXS50aXRsZVZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uVmFsdWU6IHRhc2tzQXJyYXlbaV0uZGVzY3JpcHRpb25WYWx1ZSxcbiAgICAgICAgICAgICAgICBkZWFkbGluZVZhbHVlOiB0YXNrc0FycmF5W2ldLmRlYWRsaW5lVmFsdWUsXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50VmFsdWU6IHRhc2tzQXJyYXlbaV0uaW1wb3J0YW50VmFsdWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRUYXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLzIuIGZ1bmN0aW9uIHRvIGdldCB0b2RheXMgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5RGF0ZSgpIHtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudCcpO1xuICAgIHRhc2tDb250ZW50LmlkID0gJ3RvZGF5VGFiJztcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBcbiAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgIGxldCBjdXJyZW50RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgcmV0dXJuIHsgY3VycmVudERhdGUgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hZGRUYXNrLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcGVuZFRhc2suanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdG9kYXkuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY2hlY2tib3guanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZGVsZXRlVGFzay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9lZGl0VGFzay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbXBvcnRhbnRUYXNrcy5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy90aGlzV2Vlay5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbXBvcnRhbnRQYWdlLmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwZW5kUHJvamVjdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==