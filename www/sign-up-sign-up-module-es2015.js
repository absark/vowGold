(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js ***!
  \*************************************************************************************************/
/*! exports provided: ErrorMessageBindingStrategy, FormBuilderConfiguration, IAbstractControl, IpVersion, NumericValueType, ReactiveFormConfig, ResetFormType, RxFormArray, RxFormBuilder, RxFormControl, RxFormGroup, RxReactiveFormsModule, RxwebValidators, ValidationAlphabetLocale, allOf, alpha, alphaNumeric, and, ascii, async, blacklist, choice, compare, compose, contains, creditCard, cusip, custom, dataUri, date, different, digit, disable, elementClass, email, endsWith, error, escape, even, extension, factor, file, fileSize, greaterThan, greaterThanEqualTo, grid, hexColor, image, json, latLong, latitude, leapYear, lessThan, lessThanEqualTo, longitude, lowerCase, ltrim, mac, mask, maxDate, maxLength, maxNumber, maxTime, minDate, minLength, minNumber, minTime, model, noneOf, not, notEmpty, numeric, odd, oneOf, or, password, pattern, port, prefix, primeNumber, prop, propArray, propObject, range, required, requiredTrue, rtrim, rule, sanitize, startsWith, stripLow, suffix, time, toBoolean, toDate, toDouble, toFloat, toInt, toString, trim, unique, upperCase, url, whitelist, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageBindingStrategy", function() { return ErrorMessageBindingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderConfiguration", function() { return FormBuilderConfiguration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAbstractControl", function() { return IAbstractControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpVersion", function() { return IpVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericValueType", function() { return NumericValueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormConfig", function() { return ReactiveFormConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetFormType", function() { return ResetFormType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormArray", function() { return RxFormArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormBuilder", function() { return RxFormBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormControl", function() { return RxFormControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxFormGroup", function() { return RxFormGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxReactiveFormsModule", function() { return RxReactiveFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxwebValidators", function() { return RxwebValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationAlphabetLocale", function() { return ValidationAlphabetLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allOf", function() { return allOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNumeric", function() { return alphaNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ascii", function() { return ascii; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blacklist", function() { return blacklist$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCard", function() { return creditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cusip", function() { return cusip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom", function() { return custom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataUri", function() { return dataUri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "different", function() { return different; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return digit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementClass", function() { return elementClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "even", function() { return even; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extension", function() { return extension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factor", function() { return factor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "file", function() { return file; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSize", function() { return fileSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThan", function() { return greaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanEqualTo", function() { return greaterThanEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grid", function() { return grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexColor", function() { return hexColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json", function() { return json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latLong", function() { return latLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latitude", function() { return latitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leapYear", function() { return leapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanEqualTo", function() { return lessThanEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longitude", function() { return longitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerCase", function() { return lowerCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltrim", function() { return ltrim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mac", function() { return mac; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mask", function() { return mask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDate", function() { return maxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxNumber", function() { return maxNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxTime", function() { return maxTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDate", function() { return minDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minNumber", function() { return minNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minTime", function() { return minTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noneOf", function() { return noneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return notEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "odd", function() { return odd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOf", function() { return oneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pattern", function() { return pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "port", function() { return port; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primeNumber", function() { return primeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propArray", function() { return propArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propObject", function() { return propObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredTrue", function() { return requiredTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rtrim", function() { return rtrim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rule", function() { return rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitize", function() { return sanitize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLow", function() { return stripLow$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "suffix", function() { return suffix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDouble", function() { return toDouble$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return toFloat$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperCase", function() { return upperCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whitelist", function() { return whitelist$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return RxwebFormDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return HtmlControlTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ControlHostDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return RxFormControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return BaseValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return ControlExpressionProcess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return DecimalProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return FileControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ImageFileControlDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return AsyncValidationDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return BaseFormBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





const CONTROLS_ERROR = "controlsError";
const VALUE_CHANGED_SYNC = "valueChangedSync";
const FUNCTION_STRING = "function";
const OBJECT_STRING = "object";
const RX_WEB_VALIDATOR = "rxwebValidator";
const NUMBER = "number";
const BOOLEAN = "boolean";
const TEMPLATE_VALIDATION_CONFIG = "template-validation-config";
const CONDITIONAL_VALIDATOR = "conditionalValidator";
const VALIDATOR_CONFIG = "validatorConfig";
const THIS = "this";
const RXCODE = "-rxw-";
const MODEL = "model";
const MODEL_INSTANCE = "modelInstance";
const PATCH = "patch";

class Linq {
    static functionCreator(expression) {
        var functionSetter = [];
        var match = expression.match(/^\s*\(?\s*([^)]*)\s*\)?\s*=>(.*)/);
        var splitSelect = match[2].split(",");
        for (var i = 0; i < splitSelect.length; i++) {
            var equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*|===|!==|==|!=|>=|>|<=|<|(.*)/);
            if (equalToOperator !== null) {
                functionSetter = new Function(match[1], "return " + equalToOperator.input);
            }
            else {
                equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*=(.*)/);
                if (equalToOperator === null) {
                    functionSetter = new Function(match[1], "return " + splitSelect.input);
                }
                else {
                    functionSetter = new Function(match[1], "return " + equalToOperator.input);
                }
            }
        }
        if (splitSelect.length == 0)
            functionSetter = { accessFunction: new Function(match[1], "return " + match[2]) };
        return functionSetter;
    }
    static execute(jObject, config, parentObject, modelInstance, isDynamicConfig) {
        let expressionFunction = isDynamicConfig ? config.dynamicConfig : config.conditionalExpression;
        let lastParam = isDynamicConfig ? config : modelInstance;
        if (parentObject && typeof expressionFunction == "string")
            expressionFunction = Linq.functionCreator(expressionFunction);
        if (parentObject && expressionFunction)
            return modelInstance && modelInstance.constructor !== Object ? expressionFunction.call(modelInstance, parentObject, jObject, lastParam) : expressionFunction(parentObject, jObject, lastParam);
        return true;
    }
    static getConditionPath(texts) {
        let path = "";
        for (var i = 1; i < texts.length; i++)
            path += (texts.length - 1) == i ? texts[i].trim() : `${texts[i].trim()}.`;
        return path;
    }
    static expressionParser(expression, isNonValidationExpression) {
        let columns = [];
        let expressionString = expression.toString();
        let expressionArguments = Linq.extractArguments(expressionString);
        if (expressionArguments.length > 0) {
            let splitTexts = [];
            expressionString.replace(/\s/g, '').replace(new RegExp(/{|}/, "g"), "").split(new RegExp(/return|===|!==|==|!=|>=|>|<=|<|&&/)).forEach(t => {
                let texts = t.replace(/\(|\)/g, "").split("||");
                for (let text of texts)
                    splitTexts.push(text);
            });
            splitTexts.forEach(t => {
                expressionArguments.forEach((x, i) => {
                    t = t.trim();
                    if (t.startsWith(x + '.')) {
                        var splitText = t.split('.');
                        if (splitText.length == 2 || (splitText.length >= 2 && isNonValidationExpression))
                            if (!isNonValidationExpression)
                                columns.push({ propName: splitText[1].trim(), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                            else
                                columns.push({ propName: this.getConditionPath(splitText), argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i });
                        else {
                            var arrayProp = splitText[1].split('[');
                            let jObject = {
                                propName: splitText[splitText.length - 1].trim(),
                                objectPropName: arrayProp[0],
                                arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                                argumentIndex: i === 3 ? 0 : i === 2 ? 1 : i
                            };
                            columns.push(jObject);
                        }
                    }
                });
            });
        }
        return columns;
    }
    static extractArguments(splitText) {
        let expressionArguments = [THIS];
        if (splitText[0].trim() !== "(" && !splitText.trim().startsWith("function")) {
            let text = splitText[0].split("=>")[0];
            expressionArguments.push(text.trim().replace("(", "").replace(")", ""));
        }
        else {
            let splitTexts = splitText.match(/\(([^)]+)\)/g);
            if (splitTexts && splitTexts[0])
                splitTexts[0].split(",").forEach(t => expressionArguments.push(t.trim().replace("(", "").replace(")", "")));
        }
        return expressionArguments;
    }
    static expressionColumns(expression, isNonValidationExpression = false) {
        var columns = [];
        let splitExpressions = [];
        if (typeof expression == "string") {
            expression.split("=>")[1].split(" && ").forEach(t => {
                t.split(" || ").forEach(x => {
                    splitExpressions.push(x.trim().split(' ')[0]);
                });
            });
            splitExpressions.forEach(t => {
                var splitText = t.split('.');
                if (splitText.length == 2)
                    columns.push({ propName: splitText[1].trim() });
                else {
                    var arrayProp = splitText[1].split('[');
                    let jObject = {
                        propName: splitText[splitText.length - 1].trim(),
                        objectPropName: arrayProp[0],
                        arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
                    };
                    columns.push(jObject);
                }
            });
        }
        else {
            columns = Linq.expressionParser(expression, isNonValidationExpression);
        }
        return columns;
    }
    static dynamicConfigParser(expression, propName) {
        let controlNames = [];
        let expressionString = expression.toString();
        let expressionArguments = Linq.extractArguments(expressionString);
        let splitString = expressionString.replace(new RegExp(/\r?\n|\r|;/g), ' ').replace(/["%()\{}=\\?�`'#<>|,;:+-]+/g, " ").split(/ /g);
        if (expressionArguments.length > 3)
            expressionArguments.splice(expressionArguments.length - 1, 1);
        expressionArguments.forEach(t => {
            splitString.filter(x => x != `${t}.${propName}` && x.startsWith(`${t}.`)).forEach(x => {
                let split = x.split('.');
                if (split.length == 2)
                    controlNames.push({ propName: x.replace(`${t}.`, '') });
                else {
                    var arrayProp = split[1].split('[');
                    let jObject = {
                        propName: split[split.length - 1].trim(),
                        objectPropName: arrayProp[0],
                        arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                    };
                    controlNames.push(jObject);
                }
            });
        });
        return controlNames;
    }
}

const AnnotationTypes = {
    numeric: 'numeric',
    required: 'required',
    minLength: 'minLength',
    maxLength: 'maxLength',
    minNumber: 'minNumber',
    maxNumber: 'maxNumber',
    pattern: 'pattern',
    password: 'password',
    compare: 'compare',
    minDate: 'minDate',
    maxDate: 'maxDate',
    alpha: 'alpha',
    alphaNumeric: 'alphaNumeric',
    email: 'email',
    hexColor: 'hexColor',
    lowerCase: 'lowerCase',
    url: 'url',
    upperCase: 'upperCase',
    nested: 'nested',
    propArray: 'propArray',
    propObject: 'propObject',
    contains: 'contains',
    range: 'range',
    custom: 'custom',
    digit: "digit",
    creditCard: "creditCard",
    time: "time",
    json: "json",
    greaterThan: "greaterThan",
    greaterThanEqualTo: "greaterThanEqualTo",
    lessThan: "lessThan",
    lessThanEqualTo: "lessThanEqualTo",
    choice: "choice",
    different: "different",
    even: "even",
    odd: "odd",
    factor: "factor",
    leapYear: "leapYear",
    allOf: "allOf",
    oneOf: "oneOf",
    noneOf: "noneOf",
    mac: "mac",
    ascii: "ascii",
    dataUri: "dataUri",
    port: "port",
    latLong: "latLong",
    extension: "extension",
    fileSize: "fileSize",
    endsWith: "endsWith",
    startsWith: "startsWith",
    primeNumber: "primeNumber",
    latitude: "latitude",
    longitude: "longitude",
    compose: "compose",
    rule: "rule",
    file: "file",
    image: "image",
    unique: "unique",
    notEmpty: "notEmpty",
    ip: "ip",
    cusip: "cusip",
    grid: "grid",
    date: 'date',
    and: 'and',
    or: 'or',
    not: 'not',
    minTime: 'minTime',
    maxTime: 'maxTime',
    requiredTrue: 'requiredTrue',
    mask: 'mask'
};

const PROPERTY = "property";
const OBJECT_PROPERTY = "objectProperty";
const ARRAY_PROPERTY = "arrayProperty";
const STRING = "string";
const MESSAGE = "message";
const BLANK = "";

const ELEMENT_VALUE = "value";
const BLUR = "blur";
const FOCUS = "focus";
const CHANGE = "change";
const KEY_DOWN = "keydown";
const KEY_PRESS = "keypress";
const PASTE = "paste";

const INPUT = "INPUT";
const SELECT = "SELECT";
const CHECKBOX = "checkbox";
const RADIO = "radio";
const FILE = "file";
const TEXTAREA = "textarea";

const ValidationAlphabetLocale = {
    'danish': 'danish',
    'french': 'french',
    'german': 'german',
    'greek': 'greek',
    'spanish': 'spanish',
    'russian': 'russian'
};

const DECORATORS = {
    disabled: 'disabled',
    error: 'error',
    trim: 'trim',
    ltrim: 'ltrim',
    rtrim: 'rtrim',
    blacklist: 'blacklist',
    stripLow: 'stripLow',
    toBoolean: 'toBoolean',
    toDate: 'toDate',
    toDouble: 'toDouble',
    toFloat: 'toFloat',
    toInt: 'toInt',
    string: 'toString',
    whitelist: 'whitelist',
    escape: 'escape',
    prefix: 'prefix',
    suffix: 'suffix',
    sanitize: 'sanitize',
    elementClass: 'elementClass'
};

const defaultContainer = new (class {
    constructor() {
        this.instances = [];
        this.modelIncrementCount = 0;
    }
    get(instanceFunc) {
        let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        return instance;
    }
    getInstance(target, parameterIndex, propertyKey, decoratorType) {
        let isPropertyKey = (propertyKey != undefined);
        let instanceFunc = !isPropertyKey ? target : target.constructor;
        let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (!instance)
            instance = this.addInstanceContainer(instanceFunc);
        return instance;
    }
    addPropsConfig(target, configs) {
        let instanceContainer = this.instances.filter(instance => instance.instance == target)[0];
        if (instanceContainer) {
            for (let config of configs) {
                for (let prop of config.propNames) {
                    let propertyInfo = instanceContainer.properties.filter(t => t.name == prop && (t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY))[0];
                    if (propertyInfo) {
                        this.addPropConfig(target, [propertyInfo], config);
                    }
                    else if (prop === ":all:")
                        this.addPropConfig(target, instanceContainer.properties.filter(t => t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY), config);
                }
            }
        }
        else if (configs === undefined)
            this.addInstanceContainer(target);
    }
    addPropConfig(target, properties, config) {
        for (var propertyInfo of properties) {
            let excludeProp = false;
            if (config.excludePropNames)
                excludeProp = config.excludePropNames.filter(t => t == propertyInfo.name)[0] !== undefined;
            if (!excludeProp) {
                if (config.validationConfig)
                    for (let typeName in config.validationConfig) {
                        this.init({ constructor: target }, 0, propertyInfo.name, typeName, config.validationConfig[typeName] === true ? undefined : config.validationConfig[typeName], false);
                    }
                if (config.error)
                    this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.error, DECORATORS.error);
                if (config.disable)
                    this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.disable, DECORATORS.disabled);
                if (config.elementClass)
                    this.addDecoratorConfig({ constructor: target }, 0, propertyInfo.name, config.elementClass, DECORATORS.elementClass);
                if (config.ignore)
                    propertyInfo.ignore = config.ignore;
            }
        }
    }
    addSanitizer(target, parameterIndex, propertyKey, decoratorType, value) {
        let instance = this.getInstance(target, parameterIndex, propertyKey, decoratorType);
        if (instance) {
            if (!instance.sanitizers[propertyKey])
                instance.sanitizers[propertyKey] = [];
            instance.sanitizers[propertyKey].push({ name: decoratorType, config: value });
        }
    }
    addDecoratorConfig(target, parameterIndex, propertyKey, config, decoratorType) {
        let isPropertyKey = (propertyKey != undefined);
        let instanceFunc = !isPropertyKey ? target : target.constructor;
        let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (!instance)
            instance = this.addInstanceContainer(instanceFunc);
        instance.nonValidationDecorators[decoratorType].conditionalExpressions[propertyKey] = config.conditionalExpression;
        let columns = Linq.expressionColumns(config.conditionalExpression, true);
        columns.forEach(column => {
            if (column.argumentIndex !== -1) {
                let columnName = (!column.objectPropName) ? `${column.propName}${RXCODE}${column.argumentIndex}` : `${column.objectPropName}.${column.propName}${RXCODE}${column.argumentIndex}`;
                if (!instance.nonValidationDecorators[decoratorType].changeDetection[columnName])
                    instance.nonValidationDecorators[decoratorType].changeDetection[columnName] = [];
                let disabledColumns = instance.nonValidationDecorators[decoratorType].changeDetection[columnName];
                if (disabledColumns.indexOf(columnName) === -1)
                    disabledColumns.push(propertyKey);
            }
            else {
                if (!instance.nonValidationDecorators[decoratorType].controlProp[propertyKey])
                    instance.nonValidationDecorators[decoratorType].controlProp[propertyKey] = {};
                instance.nonValidationDecorators[decoratorType].controlProp[propertyKey][column.propName.replace(";", "")] = true;
            }
        });
    }
    init(target, parameterIndex, propertyKey, annotationType, config, isAsync) {
        var decoratorConfiguration = {
            propertyIndex: parameterIndex,
            propertyName: propertyKey,
            annotationType: annotationType,
            config: config,
            isAsync: isAsync
        };
        let isPropertyKey = (propertyKey != undefined);
        this.addAnnotation(!isPropertyKey ? target : target.constructor, decoratorConfiguration);
    }
    initPropertyObject(name, propertyType, entity, target, config) {
        var propertyInfo = {
            name: name,
            propertyType: propertyType,
            entity: entity,
            dataPropertyName: config ? config.name : undefined,
            entityProvider: config ? config.entityProvider : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
    }
    addInstanceContainer(instanceFunc) {
        let instanceContainer = {
            instance: instanceFunc,
            propertyAnnotations: [],
            properties: [],
            nonValidationDecorators: {
                disabled: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }, error: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }, elementClass: {
                    conditionalExpressions: {},
                    changeDetection: {},
                    controlProp: {}
                }
            },
            sanitizers: {}
        };
        this.instances.push(instanceContainer);
        return instanceContainer;
    }
    addProperty(instanceFunc, propertyInfo, isFromAnnotation = false) {
        let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (instance) {
            this.addPropertyInfo(instance, propertyInfo, !isFromAnnotation);
        }
        else {
            instance = this.addInstanceContainer(instanceFunc);
            this.addPropertyInfo(instance, propertyInfo);
        }
    }
    addPropertyInfo(instance, propertyInfo, isAddProperty = false) {
        var property = this.getProperty(instance, propertyInfo);
        if (!property)
            instance.properties.push(propertyInfo);
        else if (isAddProperty)
            this.updateProperty(property, propertyInfo);
    }
    addAnnotation(instanceFunc, decoratorConfiguration) {
        this.addProperty(instanceFunc, { propertyType: PROPERTY, name: decoratorConfiguration.propertyName }, true);
        let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (instance)
            instance.propertyAnnotations.push(decoratorConfiguration);
        else {
            instance = this.addInstanceContainer(instanceFunc);
            instance.propertyAnnotations.push(decoratorConfiguration);
        }
        if (decoratorConfiguration.config && decoratorConfiguration.config.conditionalExpression) {
            let columns = Linq.expressionColumns(decoratorConfiguration.config.conditionalExpression);
            this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
        }
        if (decoratorConfiguration.config && decoratorConfiguration.config.dynamicConfig) {
            let columns = Linq.dynamicConfigParser(decoratorConfiguration.config.dynamicConfig, decoratorConfiguration.propertyName);
            this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
        }
        this.setConditionalColumns(instance, decoratorConfiguration);
    }
    setConditionalColumns(instance, decoratorConfiguration) {
        if (instance && decoratorConfiguration.config) {
            if (decoratorConfiguration.annotationType == AnnotationTypes.and || decoratorConfiguration.annotationType == AnnotationTypes.or || decoratorConfiguration.annotationType == AnnotationTypes.not) {
                Object.keys(decoratorConfiguration.config.validation).forEach(t => {
                    if (typeof decoratorConfiguration.config.validation[t] !== "boolean")
                        this.setLogicalConditional(instance, t, decoratorConfiguration.config.validation[t].fieldName, decoratorConfiguration.propertyName);
                });
            }
            else
                this.setLogicalConditional(instance, decoratorConfiguration.annotationType, decoratorConfiguration.config.fieldName, decoratorConfiguration.propertyName);
        }
    }
    setLogicalConditional(instance, annotationType, fieldName, propertyName) {
        if (instance && ((annotationType == AnnotationTypes.compare || annotationType == AnnotationTypes.greaterThan || annotationType == AnnotationTypes.greaterThanEqualTo || annotationType == AnnotationTypes.lessThan || annotationType == AnnotationTypes.lessThanEqualTo || annotationType == AnnotationTypes.different || annotationType == AnnotationTypes.factor || annotationType == AnnotationTypes.minTime || annotationType == AnnotationTypes.maxTime) || (annotationType == AnnotationTypes.creditCard && fieldName) || ((annotationType == AnnotationTypes.minDate || annotationType == AnnotationTypes.maxDate) && fieldName))) {
            this.setConditionalValueProp(instance, fieldName, propertyName);
        }
    }
    setConditionalValueProp(instance, propName, refPropName) {
        if (propName) {
            let splitProps = propName.split ? propName.split('.') : '';
            if (splitProps.length < 2) {
                if (!instance.conditionalValidationProps)
                    instance.conditionalValidationProps = {};
                if (!instance.conditionalValidationProps[propName])
                    instance.conditionalValidationProps[propName] = [];
                if (instance.conditionalValidationProps[propName].indexOf(refPropName) == -1)
                    instance.conditionalValidationProps[propName].push(refPropName);
            }
            else
                this.addChangeValidation(instance, refPropName, [{ argumentIndex: 1, objectPropName: splitProps[0], propName: splitProps[1], referencePropName: refPropName }]);
        }
    }
    addChangeValidation(instance, propertyName, columns) {
        if (instance) {
            if (!instance.conditionalValidationProps)
                instance.conditionalValidationProps = {};
            columns.forEach(t => {
                if (t.propName && !t.objectPropName) {
                    if (!instance.conditionalValidationProps[t.propName])
                        instance.conditionalValidationProps[t.propName] = [];
                    if (instance.conditionalValidationProps[t.propName].indexOf(propertyName) == -1)
                        instance.conditionalValidationProps[t.propName].push(propertyName);
                }
                else {
                    if (t.propName && t.objectPropName) {
                        if (!instance.conditionalObjectProps)
                            instance.conditionalObjectProps = [];
                        t.referencePropName = propertyName;
                        instance.conditionalObjectProps.push(t);
                    }
                }
            });
        }
    }
    clearInstance(instanceFunc) {
        let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
        if (instance) {
            let indexOf = this.instances.indexOf(instance);
            this.instances.splice(indexOf, 1);
        }
    }
    getProperty(instance, propertyInfo) {
        return instance.properties.filter(t => t.name == propertyInfo.name)[0];
    }
    updateProperty(property, currentProperty) {
        property.dataPropertyName = currentProperty.dataPropertyName;
        property.defaultValue = currentProperty.defaultValue;
    }
})();

const RegExRule = {
    alpha: /^[a-zA-Z]+$/,
    alphaExits: /[a-zA-Z]/,
    alphaWithSpace: /^[a-zA-Z\s]+$/,
    macId: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
    onlyDigit: /^[0-9]+$/,
    isDigitExits: /[0-9]/,
    lowerCase: /[a-z]/,
    upperCase: /[A-Z]/,
    specialCharacter: /[!@#$%^&*(),.?":{}|<>]/,
    advancedEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    basicEmail: /^(([^<>()\[\]\\.,,:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    alphaNumeric: /^[0-9a-zA-Z]+$/,
    alphaNumericWithSpace: /^[0-9a-zA-Z\s]+$/,
    hexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
    strictHexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
    float: /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
    decimal: /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
    hexaDecimal: /^[0-9A-F]+$/i,
    date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    timeWithSeconds: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
    url: /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/,
    localhostUrl: /^(https?:\/\/localhost\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|https?:\/\/localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))$/,
    interanetUrl: /^(https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9])$/,
    ascii: /^[\x00-\x7F]+$/,
    dataUri: /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i,
    lat: /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
    long: /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
    ipV4: /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
    ipV6: /^((?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(:[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(:[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(:[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(:[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,6}|:)|(?::((?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?$/,
    cidrV4: /^(3[0-2]|[12]?[0-9])$/,
    cidrV6: /^(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    cusip: /^[0-9A-Z]{9}$/,
    grid: /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g
};

const ALPHABET = "alphabet";
const DIGIT = "digit";
const CONTAINS = "contains";
const LOWERCASE = "lowerCase";
const UPPERCASE = "upperCase";
const SPECIAL_CHARACTER = "specialCharacter";
const MIN_LENGTH = "minLength";
const MAX_LENGTH = "maxLength";
class RegexValidator {
    static isExits(value, regex) {
        return value.match(regex) != null;
    }
    static isValid(value, regex) {
        return regex.test(value);
    }
    static isNotBlank(value, isRemoveSpace = false) {
        return !isRemoveSpace ?
            (value === 0) || (value !== undefined && value !== null && value !== "") :
            (value === 0) || (value !== undefined && value !== null && String(value).trim() !== "");
    }
    static isValidPassword(passwordValidation, value) {
        let isValid = false;
        let keyName = "status";
        let objectProperties = Object.getOwnPropertyNames(passwordValidation);
        for (let propertyName of objectProperties) {
            switch (propertyName) {
                case ALPHABET:
                    isValid = RegexValidator.isExits(value, RegExRule.alphaExits);
                    keyName = ALPHABET;
                    break;
                case DIGIT:
                    isValid = RegexValidator.isValid(value, RegExRule.isDigitExits);
                    keyName = DIGIT;
                    break;
                case CONTAINS:
                    isValid = value.indexOf(passwordValidation[CONTAINS]) != -1;
                    keyName = CONTAINS;
                    break;
                case LOWERCASE:
                    isValid = RegexValidator.isValid(value, RegExRule.lowerCase);
                    keyName = LOWERCASE;
                    break;
                case UPPERCASE:
                    isValid = RegexValidator.isValid(value, RegExRule.upperCase);
                    keyName = UPPERCASE;
                    break;
                case SPECIAL_CHARACTER:
                    isValid = RegexValidator.isExits(value, RegExRule.specialCharacter);
                    keyName = SPECIAL_CHARACTER;
                    break;
                case MIN_LENGTH:
                    isValid = value.length >= passwordValidation[propertyName];
                    keyName = MIN_LENGTH;
                    break;
                case MAX_LENGTH:
                    isValid = value.length <= passwordValidation[propertyName];
                    keyName = MAX_LENGTH;
                    break;
            }
            if (!isValid)
                break;
        }
        return { isValid: isValid, keyName: keyName };
    }
    static isZero(value) {
        return value == 0;
    }
    static commaRegex() {
        return new RegExp(",", "g");
    }
}

class ReactiveFormConfig {
    static set(jObject) {
        if (jObject)
            ReactiveFormConfig.json = jObject;
    }
    static get(path) {
        let jObject;
        if (ReactiveFormConfig.json) {
            let splitPath = path.split('.');
            for (let columnName of splitPath) {
                jObject = (!jObject) ? ReactiveFormConfig.json[columnName] : jObject[columnName];
                if (!jObject)
                    break;
            }
        }
        return jObject;
    }
}
ReactiveFormConfig.number = {};
ReactiveFormConfig.json = {};
ReactiveFormConfig.autoInstancePush = false;

function isObjectType(value) {
    return !(typeof value == "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Date);
}
function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
function clone(jsonObject) {
    let jObject = {};
    if (isObjectType(jsonObject)) {
        for (var columnName in jsonObject) {
            if (Array.isArray(jsonObject[columnName])) {
                jObject[columnName] = [];
                for (let row of jsonObject[columnName]) {
                    if (isObject(row))
                        jObject[columnName].push(clone(row));
                    else
                        jObject[columnName].push(row);
                }
            }
            else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp))
                jObject[columnName] = clone(jsonObject[columnName]);
            else
                jObject[columnName] = jsonObject[columnName];
        }
        return jObject;
    }
    else
        return jsonObject;
}
function merge(firstObject, secondObject) {
    for (var columnName in secondObject) {
        if (Array.isArray(secondObject[columnName])) {
            if (!firstObject[columnName])
                firstObject[columnName] = [];
            for (let row of secondObject[columnName])
                firstObject[columnName].push(clone(row));
        }
        else if (typeof firstObject[columnName] == "object" && !(firstObject[columnName] instanceof RegExp))
            firstObject[columnName] = merge(firstObject[columnName], secondObject[columnName]);
        else
            firstObject[columnName] = secondObject[columnName];
    }
    return firstObject;
}
function isMatched(jsonObject, compareObject) {
    let isModified = false;
    for (var columnName in compareObject) {
        if (Array.isArray(jsonObject[columnName])) {
            for (var i = 0; i < jsonObject[columnName].length; i++) {
                isModified = isMatched(jsonObject[columnName][i], compareObject[columnName][i]);
            }
        }
        else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp))
            isModified = isMatched(jsonObject[columnName], compareObject[columnName]);
        else
            isModified = !(jsonObject[columnName] == compareObject[columnName]);
        if (isModified)
            break;
    }
    return isModified;
}

class ObjectMaker {
    static toJson(key, config, values) {
        let message = config ? config.message : null;
        let messageKey = undefined;
        if (!message && config && config.messageKey)
            messageKey = config.messageKey;
        let messageText = (message) ? message : (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey || key]) ? ReactiveFormConfig.json.validationMessage[messageKey || key] : '';
        values.forEach((t, index) => {
            messageText = messageText.replace(`{{${index}}}`, t);
        });
        let jObject = {};
        jObject[key] = {
            message: messageText, refValues: values
        };
        if (config && config.isAddMessageKey)
            jObject["messageKey"] = messageKey;
        return jObject;
    }
    static null() {
        return null;
    }
    static getPasswordMessage() {
        let messageKey = "password";
        return (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey]) ? ReactiveFormConfig.json.validationMessage[messageKey] : '';
    }
}

const PROP_ARRAY = "propArray";
class RxFormArray extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] {
    constructor(arrayObject, controls, validatorOrOpts, asyncValidator, arrayConfig) {
        super(controls, validatorOrOpts, asyncValidator);
        this.arrayObject = arrayObject;
        this.arrayConfig = arrayConfig;
        this._isModified = false;
        this._modified = [];
        this.cloneObject(arrayObject);
    }
    get isModified() {
        return this._isModified;
    }
    push(control, isAddedInstance = false) {
        let formGroup = this.root;
        if (this.arrayObject)
            if (control.modelInstance) {
                if (!isAddedInstance)
                    this.arrayObject.push(control.modelInstance);
                else
                    this.arrayObject[this.arrayObject.length] = control.modelInstance;
            }
        super.push(control);
        if (formGroup[VALUE_CHANGED_SYNC])
            formGroup.valueChangedSync();
        this.patch();
        this.checkValidation();
    }
    patch() {
        this.checkModification();
        if (this.parent)
            this.parent[PATCH]();
    }
    resetForm(options) {
        if (options && options.index >= 0 && options.groupOption) {
            this.controls[options.index].resetForm(options.groupOption);
        }
        else {
            for (var i = 0; i < this._baseValue.length; i++) {
                if (this.controls[i] !== undefined)
                    this.controls[i].resetForm({ value: this._baseValue[i] });
                else if (options && options.pushFunction) {
                    let formGroup = options.pushFunction(this._baseValue[i]);
                    this.push(formGroup);
                }
            }
        }
    }
    commit() {
        this._baseValue = [];
        for (let formGroup of this.controls) {
            formGroup.commit();
            this._baseValue.push(clone(formGroup.value));
        }
        this.patch();
    }
    removeAt(index, isRemovedInstance = false) {
        let formGroup = this.root;
        if (!isRemovedInstance)
            this.arrayObject.splice(index, 1);
        else {
            for (var i = index; i < this.arrayObject.length - 1; i++)
                this.arrayObject[i] = this.arrayObject[i + 1];
            this.arrayObject.pop();
        }
        super.removeAt(index);
        if (formGroup[VALUE_CHANGED_SYNC])
            formGroup.valueChangedSync();
        this.patch();
        this.checkValidation();
    }
    checkValidation() {
        setTimeout(() => {
            if (this.arrayConfig != undefined && this.arrayConfig.allowMaxIndex && this.length > this.arrayConfig.allowMaxIndex)
                this.setErrors(ObjectMaker.toJson(PROP_ARRAY, this.arrayConfig, [this.length, this.arrayConfig.allowMaxIndex]));
            else if (this.errors && this.errors[PROP_ARRAY])
                delete this.errors[PROP_ARRAY];
        });
    }
    checkModification() {
        this._isModified = !(this._baseValue.length == this.controls.length);
        if (!this._isModified)
            for (var i = 0; i < this.controls.length; i++) {
                this._isModified = isMatched(this._baseValue[i], this.controls[i].value);
                if (this._isModified)
                    break;
            }
    }
    cloneObject(value) {
        this._baseValue = [];
        for (let row of value) {
            this._baseValue.push(clone(row));
        }
    }
}

var NumericValueType;
(function (NumericValueType) {
    NumericValueType[NumericValueType["PositiveNumber"] = 1] = "PositiveNumber";
    NumericValueType[NumericValueType["NegativeNumber"] = 2] = "NegativeNumber";
    NumericValueType[NumericValueType["Both"] = 3] = "Both";
})(NumericValueType || (NumericValueType = {}));

var IpVersion;
(function (IpVersion) {
    IpVersion[IpVersion["V4"] = 1] = "V4";
    IpVersion[IpVersion["V6"] = 2] = "V6";
    IpVersion[IpVersion["AnyOne"] = 3] = "AnyOne";
})(IpVersion || (IpVersion = {}));

var ErrorMessageBindingStrategy;
(function (ErrorMessageBindingStrategy) {
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["None"] = 0] = "None";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnSubmit"] = 1] = "OnSubmit";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirty"] = 2] = "OnDirty";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouched"] = 3] = "OnTouched";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrTouched"] = 4] = "OnDirtyOrTouched";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrSubmit"] = 5] = "OnDirtyOrSubmit";
    ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouchedOrSubmit"] = 6] = "OnTouchedOrSubmit";
})(ErrorMessageBindingStrategy || (ErrorMessageBindingStrategy = {}));

var ResetFormType;
(function (ResetFormType) {
    ResetFormType[ResetFormType["ControlsOnly"] = 1] = "ControlsOnly";
    ResetFormType[ResetFormType["FormGroupsOnly"] = 2] = "FormGroupsOnly";
    ResetFormType[ResetFormType["FormArraysOnly"] = 3] = "FormArraysOnly";
    ResetFormType[ResetFormType["ControlsAndFormGroupsOnly"] = 4] = "ControlsAndFormGroupsOnly";
    ResetFormType[ResetFormType["DefinedPropsOnly"] = 5] = "DefinedPropsOnly";
    ResetFormType[ResetFormType["All"] = 6] = "All";
})(ResetFormType || (ResetFormType = {}));

const MODEL_INSTANCE_VALUE = "modelInstanceValue";
class ApplicationUtil {
    static getParentObjectValue(control) {
        if (control.parent) {
            let parent = this.parentObjectValue(control.parent);
            return parent.value;
        }
        return {};
    }
    static getParentModelInstanceValue(control) {
        if (control.parent) {
            let parent = this.parentObjectValue(control.parent);
            return parent[MODEL_INSTANCE_VALUE];
        }
        return {};
    }
    static getRootFormGroup(control) {
        if (control.parent) {
            return this.getRootFormGroup(control.parent);
        }
        return control;
    }
    static getParentControl(control) {
        if (control.parent) {
            let parent = this.parentObjectValue(control.parent);
            return parent;
        }
        return control;
    }
    static getFormControlName(control) {
        let controlName = '';
        if (control.parent) {
            for (var formControlName in control.parent.controls) {
                if (control.parent.controls[formControlName] == control) {
                    controlName = formControlName;
                    break;
                }
            }
        }
        return controlName;
    }
    static getParentFormArray(control) {
        if (control.parent && !(control.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || control.parent instanceof RxFormArray)) {
            let parent = this.getParentFormArray(control.parent);
            return parent;
        }
        return control.parent;
    }
    static toLower(value) {
        if (value)
            return String(value).toLowerCase();
        return value;
    }
    static getControl(fieldName, formGroup) {
        let splitText = fieldName.split('.');
        if (splitText.length > 1) {
            var formControl = formGroup;
            splitText.forEach((name, index) => { formControl = formControl.controls[name]; });
            return formControl;
        }
        else
            return formGroup.controls[fieldName];
    }
    static getFormControl(fieldName, control) {
        let splitText = fieldName.split('.');
        if (splitText.length > 1 && control.parent) {
            var formControl = this.getParentControl(control);
            splitText.forEach((name, index) => { formControl = formControl.controls[name]; });
            return formControl;
        }
        return (control.parent) ? control.parent.get([fieldName]) : undefined;
    }
    static parentObjectValue(control) {
        if (!control.parent)
            return control;
        else
            control = this.parentObjectValue(control.parent);
        return control;
    }
    static isNumeric(value) {
        return (value - parseFloat(value) + 1) >= 0;
    }
    static notEqualTo(primaryValue, secondaryValue) {
        let firstValue = (primaryValue === undefined || primaryValue === null) ? "" : primaryValue;
        let secondValue = (secondaryValue === undefined || secondaryValue === null) ? "" : secondaryValue;
        if (firstValue instanceof Date && secondValue instanceof Date)
            return +firstValue != +secondValue;
        return (firstValue != secondValue);
    }
    static numericValidation(allowDecimal, acceptValue) {
        let decimalSymbol;
        if (ReactiveFormConfig && ReactiveFormConfig.number) {
            decimalSymbol = (ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol) ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
        }
        else {
            decimalSymbol = ".";
        }
        acceptValue = (acceptValue == undefined) ? NumericValueType.PositiveNumber : acceptValue;
        let regex = /^[0-9]+$/;
        switch (acceptValue) {
            case NumericValueType.PositiveNumber:
                regex = (!allowDecimal) ? /^[0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[0-9\.]+$/ : /^[0-9\,]+$/;
                break;
            case NumericValueType.NegativeNumber:
                regex = (!allowDecimal) ? /^[-][0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[-][0-9\.]+$/ : /^[-][0-9\,]+$/;
                break;
            case NumericValueType.Both:
                regex = (!allowDecimal) ? /^[-|+]?[0-9]+$/ : (decimalSymbol == "." || decimalSymbol == undefined) ? /^[-|+]?[0-9\.]+$/ : /^[-|+]?[0-9\,]+$/;
                break;
        }
        return regex;
    }
    static configureControl(control, config, type) {
        if (!control.validatorConfig) {
            let jObject = {};
            jObject[type] = config;
            Object.assign(control, { validatorConfig: jObject });
        }
        else
            control.validatorConfig[type] = config;
    }
    static lowerCaseWithTrim(value) {
        return typeof value === "string" ? value.toLowerCase().trim() : String(value).toLowerCase().trim();
    }
    /** Check if a value is an object */
    static isObject(value) {
        return Object.prototype.toString.call(value) === '[object Object]';
    }
    /** Check if a value is an object */
    static isArray(value) {
        return Array.isArray(value);
    }
    static cloneValue(value) {
        return ApplicationUtil.isObject(value) ? ApplicationUtil.isArray(value) ? [...value] : Object.assign({}, value) : value;
    }
}

const ISO_DATE_REGEX = /^(\d{4}-\d{1,2}-\d{1,2})$/;
class DateProvider {
    isDate(value) {
        return value instanceof Date && !isNaN(value.valueOf());
    }
    getRegex(dateFormat) {
        var regExp;
        switch (dateFormat) {
            case 'ymd':
                regExp = "^(?:[0-9]{4})-(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$";
                break;
            case 'dmy':
                regExp = "^(3[01]|[12][0-9]|0?[1-9])-(1[0-2]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;
            case 'mdy':
                regExp = "^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
                break;
        }
        return new RegExp(regExp);
    }
    regex() {
        var regExp;
        if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator)
            regExp = this.getRegex(ReactiveFormConfig.json.internationalization.dateFormat);
        else
            regExp = (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat) ? this.getRegex(ReactiveFormConfig.json.baseConfig.dateFormat) : this.getRegex("mdy");
        return regExp;
    }
    getDate(value, isBaseFormat = false) {
        let year, month, day;
        if (!this.isDate(value)) {
            let seperator;
            let dateFormat;
            if (ISO_DATE_REGEX.test(value)) {
                seperator = "-";
                dateFormat = "ymd";
            }
            else {
                seperator = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator ? ReactiveFormConfig.json.baseConfig.seperator : "/";
                dateFormat = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? ReactiveFormConfig.json.baseConfig.dateFormat : "mdy";
            }
            if (!isBaseFormat && ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) {
                seperator = ReactiveFormConfig.json.internationalization.seperator;
                dateFormat = ReactiveFormConfig.json.internationalization.dateFormat;
            }
            switch (dateFormat) {
                case 'ymd':
                    [year, month, day] = value.split(seperator).map((val) => +val);
                    break;
                case 'dmy':
                    [day, month, year] = value.split(seperator).map((val) => +val);
                    break;
                case 'mdy':
                    [month, day, year] = value.split(seperator).map((val) => +val);
                    break;
            }
            return new Date(year, month - 1, day);
        }
        else
            return value;
    }
    isValid(value, config) {
        if (typeof value == "string") {
            // Fixed issue : https://github.com/rxweb/rxweb/issues/280 & feature request : https://github.com/rxweb/rxweb/issues/295
            if (config && config.allowISODate && ISO_DATE_REGEX.test(value))
                return true;
            let seperator = '/';
            if (ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.seperator)
                seperator = ReactiveFormConfig.json.internationalization.seperator;
            value = value.replace(seperator, '-').replace(seperator, '-');
            return this.regex().test(value);
        }
        else
            return this.isDate(value);
    }
    getConfigDateValue(config) {
        let date = config.value;
        if (config.value && typeof config.value == "string") {
            date = this.getDate(config.value, true);
        }
        return date;
    }
    getCompareDate(config, control) {
        let date = this.getConfigDateValue(config);
        if (config.fieldName) {
            let checkControl = ApplicationUtil.getFormControl(config.fieldName, control);
            if (checkControl && checkControl.value) {
                date = this.getDate(checkControl.value);
            }
        }
        return date;
    }
}

function isNotBlank(value) {
    return (value !== undefined && value !== null && value !== "");
}
function trim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.trim();
    return value;
}
function ltrim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(/^\s+/g, '');
    return value;
}
function rtrim(value) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(/\s+$/g, '');
    return value;
}
function blacklist(value, chars) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(new RegExp('[$' + chars + ']+', 'g'), '');
    return value;
}
function stripLow(value, keepNewLines) {
    let chars = keepNewLines === true ? '\x00-\x09\x0B\x0C\x0E-\x1F\x7F' : '\x00-\x1F\x7F';
    return blacklist(value, chars);
}
function toBoolean(value, strict) {
    if (isNotBlank(value)) {
        if (strict) {
            return value === '1' || value === 'true';
        }
        return value !== '0' && value !== 'false' && value !== '';
    }
    return value;
}
function toFloat(value) {
    if (isNotBlank(value)) {
        var decimalSymbol = '.';
        if (ReactiveFormConfig && ReactiveFormConfig.number) {
            decimalSymbol = (ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol) ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
        }
        if (decimalSymbol == ',' && typeof value == "string")
            value = value.replace(',', '.');
        if (ApplicationUtil.isNumeric(value))
            return parseFloat(value);
    }
    return null;
}
function toDouble(value) {
    return toFloat(value);
}
function toInt(value, radix) {
    if (isNotBlank(value))
        if (ApplicationUtil.isNumeric(value))
            return parseInt(value, radix || 10);
    return null;
}
function toString(value, radix) {
    if (isNotBlank(value))
        return String(value);
    return value;
}
function whitelist(value, chars) {
    if (isNotBlank(value))
        if (typeof value === "string")
            return value.replace(new RegExp(`[^${chars}]+`, 'g'), '');
    return value;
}
function toDate(value) {
    var dateProvider = new DateProvider();
    if (isNotBlank(value))
        if (typeof value === "string" && dateProvider.isValid(value, {})) {
            value = dateProvider.getDate(value);
            return value;
        }
    return null;
}
function escape(value) {
    if (isNotBlank(value))
        return (value.replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\//g, '&#x2F;')
            .replace(/\\/g, '&#x5C;')
            .replace(/`/g, '&#96;'));
    return value;
}
function prefix(value, text) {
    if (isNotBlank(value))
        return `${text}${value}`;
    return value;
}
function suffix(value, text) {
    if (isNotBlank(value))
        return `${value}${text}`;
    return value;
}
function sanitize(value, config) {
    return config.custom(value);
}
const SANITIZERS = {
    trim: trim,
    ltrim: ltrim,
    rtrim: rtrim,
    blacklist: blacklist,
    stripLow: stripLow,
    toBoolean: toBoolean,
    toDouble: toDouble,
    toFloat: toFloat,
    toInt: toInt,
    'toString': toString,
    whitelist: whitelist,
    toDate: toDate,
    escape: escape,
    prefix: prefix,
    suffix: suffix,
    sanitize: sanitize
};

function instanceProvider(instanceFunc, entityObject) {
    let instance = defaultContainer.get(instanceFunc);
    let prototype = entityObject ? entityObject.__proto__ : getInstance(instanceFunc, []).__proto__;
    if (prototype.__proto__) {
        let isLoop = false;
        do {
            isLoop = prototype.__proto__.constructor != Object;
            if (isLoop) {
                let extendClassInstance = defaultContainer.get(prototype.__proto__.constructor);
                instance = merge(clone(instance), clone(extendClassInstance));
                prototype = prototype.__proto__;
            }
        } while (isLoop);
    }
    return instance;
}
function getInstance(model, objectArguments) {
    let classInstance = Object.create(model.prototype);
    try {
        model.apply(classInstance, objectArguments);
    }
    catch (ex) {
        ///resolution of issue https://github.com/rxweb/rxweb/issues/188
        classInstance = Reflect.construct(model, objectArguments);
    }
    return classInstance;
}

class BaseFormBuilder {
    constructor() {
    }
    createInstance() {
        let instance = {};
        defaultContainer.modelIncrementCount = defaultContainer.modelIncrementCount + 1;
        let modelName = `RxWebModel${defaultContainer.modelIncrementCount}`;
        instance.constructor = Function(`"use strict";return(function ${modelName}(){ })`)();
        return instance;
    }
    createClassObject(model, formBuilderConfiguration, classInstance) {
        let instanceContainer = defaultContainer.get(model);
        let autoInstanceConfig = formBuilderConfiguration ? formBuilderConfiguration.autoInstanceConfig : undefined;
        if (!autoInstanceConfig) {
            return classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, []);
        }
        else {
            classInstance = classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, autoInstanceConfig.arguments || []);
            if (autoInstanceConfig.objectPropInstanceConfig && autoInstanceConfig.objectPropInstanceConfig.length > 0) {
                autoInstanceConfig.objectPropInstanceConfig.forEach(t => {
                    let objectProperty = instanceContainer.properties.filter(property => property.name == t.propertyName && property.propertyType == OBJECT_PROPERTY)[0];
                    if (objectProperty) {
                        let data = classInstance[t.propertyName];
                        classInstance[t.propertyName] = getInstance(objectProperty.entity, t.arguments || []);
                        if (data)
                            this.setObjectValue(data, classInstance[t.propertyName]);
                    }
                });
            }
            if (autoInstanceConfig.arrayPropInstanceConfig && autoInstanceConfig.arrayPropInstanceConfig.length > 0) {
                autoInstanceConfig.arrayPropInstanceConfig.forEach(t => {
                    let property = instanceContainer.properties.filter(property => property.name == t.propertyName && property.propertyType == ARRAY_PROPERTY)[0];
                    if (property) {
                        let data = classInstance[t.propertyName];
                        classInstance[t.propertyName] = [];
                        for (var i = 0; i < t.rowItems; i++) {
                            let instance = getInstance(property.entity, t.arguments || []);
                            if (data && data[i])
                                this.setObjectValue(data[i], instance);
                            classInstance[t.propertyName].push(instance);
                        }
                    }
                });
            }
            return classInstance;
        }
    }
    updateObject(model, entityObject, formBuilderConfiguration) {
        let instanceContainer = instanceProvider(model);
        let classInstance = getInstance(model, []);
        if (instanceContainer) {
            instanceContainer.properties.forEach(t => {
                let entity = ((t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY) && t.entity) ? t.entity : (formBuilderConfiguration && formBuilderConfiguration.genericEntities) ? formBuilderConfiguration.genericEntities[t.name] : undefined;
                if (!entity && t.entityProvider)
                    entity = t.entityProvider.call(entityObject);
                switch (t.propertyType) {
                    case PROPERTY:
                        classInstance[t.name] = this.getValue(entityObject, t, formBuilderConfiguration);
                        break;
                    case OBJECT_PROPERTY:
                        let objectValue = this.getValue(entityObject, t, formBuilderConfiguration);
                        if (objectValue)
                            classInstance[t.name] = this.updateObject(entity, objectValue, formBuilderConfiguration);
                        break;
                    case ARRAY_PROPERTY:
                        let arrayObjectValue = this.getValue(entityObject, t, formBuilderConfiguration);
                        if (arrayObjectValue && Array.isArray(arrayObjectValue)) {
                            classInstance[t.name] = [];
                            for (let row of arrayObjectValue) {
                                let instanceObject = this.updateObject(entity, row, formBuilderConfiguration);
                                classInstance[t.name].push(instanceObject);
                            }
                        }
                        break;
                }
            });
        }
        return classInstance;
    }
    instaceProvider(instanceFunc, entityObject) {
        return instanceProvider(instanceFunc, entityObject);
    }
    getDefaultValue(propertyInfo, value, formBuilderConfiguration) {
        let defaultValue = (formBuilderConfiguration && formBuilderConfiguration.propsConfig && formBuilderConfiguration.propsConfig[propertyInfo.name] && formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue && !RegexValidator.isNotBlank(value)) ? formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue : (propertyInfo.defaultValue != undefined && !RegexValidator.isNotBlank(value)) ?
            propertyInfo.defaultValue :
            value;
        return defaultValue;
    }
    sanitizeValue(instanceContainer, propertyName, value, entityObject, baseObject) {
        if (instanceContainer.sanitizers && instanceContainer.sanitizers[propertyName]) {
            for (let sanitizer of instanceContainer.sanitizers[propertyName])
                value = SANITIZERS[sanitizer.name](value, sanitizer.config);
        }
        if (entityObject[propertyName] !== undefined && entityObject[propertyName] !== value)
            entityObject[propertyName] = value;
        if (baseObject[propertyName] !== undefined && baseObject[propertyName] !== value)
            baseObject[propertyName] = value;
        return value;
    }
    getValue(entityObject, propertyInfo, formBuilderConfiguration) {
        let propValue = (propertyInfo.dataPropertyName) ? entityObject[propertyInfo.dataPropertyName] : entityObject[propertyInfo.name];
        return this.getDefaultValue(propertyInfo, propValue, formBuilderConfiguration);
    }
    setObjectValue(entityObject, classInstance) {
        for (var column in entityObject) {
            classInstance[column] = entityObject[column];
        }
    }
}

class FormBuilderConfiguration {
    constructor(formBuilderConfiguration) {
        if (formBuilderConfiguration)
            for (var column in formBuilderConfiguration)
                this[column] = formBuilderConfiguration[column];
    }
}

class DisableProvider {
    constructor(decoratorType, entityObject) {
        this.decoratorType = decoratorType;
        this.entityObject = entityObject;
    }
    getFormGroupName(currentFormGroup) {
        let keyName = '';
        if (currentFormGroup.parent)
            for (var controlName of Object.keys(currentFormGroup.parent.controls))
                if (currentFormGroup.parent.controls[controlName] == currentFormGroup) {
                    keyName = controlName;
                    break;
                }
        return keyName;
    }
    zeroArgumentProcess(control, columnName) {
        let disabledColumns = [];
        this.getDisabledColumns(control.parent, `${columnName}${RXCODE}0`, false).forEach(t => disabledColumns.push(t));
        let path = this.topControlPath(control, columnName);
        let splitPath = path.split(".");
        if (splitPath.length > 1) {
            let rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            this.getDisabledColumns(rootFormGroup, `${path}${RXCODE}0`, true).forEach(t => disabledColumns.push(t));
            let controlPath = '';
            for (var i = 0; i < splitPath.length - 2; i++) {
                let controlName = splitPath[i];
                controlPath = `${path.replace(`${controlName}.`, '')}${RXCODE}-0`;
                if (rootFormGroup.controls[controlName]) {
                    this.getDisabledColumns(rootFormGroup.controls[controlName], controlPath, true, controlName).forEach(t => disabledColumns.push(t));
                    rootFormGroup = rootFormGroup.controls[controlName];
                }
            }
        }
        return disabledColumns;
    }
    getDisabledColumns(formGroup, columnName, isRoot, pathName = "") {
        if (formGroup[MODEL_INSTANCE]) {
            let instanceContainer = instanceProvider(formGroup[MODEL_INSTANCE].constructor, this.entityObject);
            return this.getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName);
        }
        return [];
    }
    getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName = "") {
        let conditionalDisableControls = [];
        let columns = instanceContainer.nonValidationDecorators[this.decoratorType].changeDetection[columnName];
        if (columns) {
            columns.forEach(t => {
                conditionalDisableControls.push({ controlPath: pathName ? `${pathName}.${t}` : t, conditionalExpression: instanceContainer.nonValidationDecorators[this.decoratorType].conditionalExpressions[t], isRoot: isRoot });
            });
        }
        return conditionalDisableControls;
    }
    topControlPath(control, columnName) {
        if (control.parent) {
            let name = this.getFormGroupName(control.parent);
            if (name) {
                columnName = `${name}.${columnName}`;
                return this.topControlPath(control.parent, columnName);
            }
        }
        return columnName;
    }
    childControlDisabledExpression(formGroup, columnName, path = "") {
        let disabledColumns = [];
        if (formGroup[MODEL_INSTANCE]) {
            let instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
            if (instanceContainer) {
                this.getChangeDetectionColumns(instanceContainer, columnName, true, path).forEach(t => disabledColumns.push(t));
                var props = instanceContainer.properties.filter(t => t.propertyType == OBJECT_PROPERTY);
                props.forEach(t => {
                    if (formGroup.controls[t.name]) {
                        let columns = this.getDisabledColumns(formGroup.controls[t.name], columnName, true, path ? `${path}.${t.name}` : `${t.name}`);
                        columns.forEach(x => disabledColumns.push(x));
                        this.childControlDisabledExpression(formGroup.controls[t.name], columnName, path ? `${path}.${t.name}` : `${t.name}`).forEach(y => disabledColumns.push(y));
                    }
                });
            }
        }
        return disabledColumns;
    }
    oneArgumentProcess(control, columnName) {
        let path = this.topControlPath(control, columnName);
        let rootFormGroup = ApplicationUtil.getRootFormGroup(control);
        let childColumns = this.childControlDisabledExpression(rootFormGroup, path);
        return childColumns;
    }
}

const DIRTY = "dirty";
const TOUCHED = "touched";
const UNTOUCHED = "untouched";
const PRISTINE = "pristine";
const PENDING = "pending";
class RxFormControl extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] {
    constructor(formState, validator, asyncValidator, entityObject, baseObject, controlName, _sanitizers) {
        super(formState, validator, asyncValidator);
        this.entityObject = entityObject;
        this.baseObject = baseObject;
        this._sanitizers = _sanitizers;
        this._errorMessages = [];
        this._childColumns = [];
        this._refDisableControls = [];
        this._refMessageControls = [];
        this._refClassNameControls = [];
        this._isPassedExpression = false;
        this._dirty = false;
        this._baseValue = formState === undefined ? null : this.getFormState(formState);
        this._isModified = false;
        this.keyName = controlName;
        this._errorMessageBindingStrategy = ReactiveFormConfig.get("reactiveForm.errorMessageBindingStrategy");
        if (this._sanitizers) {
            var floatSanitizer = this._sanitizers.filter(t => t.name == "toFloat")[0];
            if (floatSanitizer && this._baseValue && ReactiveFormConfig.number && ReactiveFormConfig.number.decimalSymbol == ",") {
                let baseValue = String(this._baseValue);
                if (baseValue.indexOf('.') != -1) {
                    this._baseValue = baseValue.replace(".", ReactiveFormConfig.number.decimalSymbol);
                    super.setValue(this._baseValue);
                }
            }
        }
    }
    get errors() {
        return this._errors;
    }
    set errors(value) {
        this._errors = value;
    }
    get errorMessages() {
        if (!this._messageExpression) {
            if (this._errorMessages.length == 0 && this.errors)
                this.setControlErrorMessages();
        }
        else if (this._messageExpression && !this._isPassedExpression)
            return [];
        if (!this.errors && this._errorMessages.length > 0)
            this.setControlErrorMessages();
        return this._errorMessages;
    }
    get errorMessage() {
        if (!this._messageExpression) {
            if (this._errorMessage == undefined && this.errors)
                this.setControlErrorMessages();
        }
        else if (this._messageExpression && !this._isPassedExpression)
            return undefined;
        if (!this.errors && this._errorMessage)
            this.setControlErrorMessages();
        return this._errorMessage;
    }
    getFormState(value) {
        let baseValue = value;
        if (Array.isArray(value)) {
            baseValue = [];
            value.forEach(t => baseValue.push(t));
        }
        return baseValue;
    }
    get isModified() {
        return this._isModified;
    }
    get dirty() {
        return this._dirty;
    }
    set dirty(value) {
        this._dirty = value;
    }
    setValue(value, options) {
        let parsedValue = this.getSanitizedValue(value);
        if (options && options.dirty)
            this.baseObject[this.keyName] = value;
        this.entityObject[this.keyName] = parsedValue;
        super.setValue(value, options);
        this.bindError();
        this.bindClassName();
        this.executeExpressions();
        this.callPatch();
        if (options && !options.updateChanged && this.root[VALUE_CHANGED_SYNC]) {
            this.root[VALUE_CHANGED_SYNC]();
        }
    }
    getControlValue() {
        return this.getSanitizedValue(this.value);
    }
    bindError() {
        if (this._messageExpression)
            this._isPassedExpression = this.executeExpression(this._messageExpression, this);
        this.setControlErrorMessages();
        this.errors = this.errors;
    }
    bindClassName() {
        if (this.updateOnElementClass && typeof this.updateOnElementClass === "function") {
            let className = this.executeExpression(this._classNameExpression, this);
            let updateElement = this.updateOnElementClass;
            updateElement(className);
        }
    }
    markAsTouched(opts) {
        let currentState = this.touched;
        super.markAsTouched(opts);
        if (currentState != this.touched)
            this.runControlPropChangeExpression([TOUCHED, UNTOUCHED]);
    }
    markAsUntouched(opts) {
        let currentState = this.untouched;
        super.markAsUntouched(opts);
        if (currentState != this.untouched)
            this.runControlPropChangeExpression([UNTOUCHED, TOUCHED]);
    }
    markAsDirty(opts) {
        let currentState = this.dirty;
        super.markAsDirty(opts);
        this.dirty = true;
        if (currentState != this.dirty)
            this.runControlPropChangeExpression([DIRTY]);
    }
    markAsPristine(opts) {
        let currentState = this.pristine;
        super.markAsDirty(opts);
        if (currentState != this.pristine)
            this.runControlPropChangeExpression([PRISTINE]);
    }
    markAsPending(opts) {
        let currentState = this.pending;
        super.markAsDirty(opts);
        if (currentState != this.pending)
            this.runControlPropChangeExpression([PENDING]);
    }
    runControlPropChangeExpression(propNames) {
        propNames.forEach(name => {
            if ((this._controlProp && this._messageExpression && this._controlProp[name]) || (!this._messageExpression && this.checkErrorMessageStrategy()))
                this.bindError();
            if (this._classNameControlProp && this._classNameControlProp[name])
                this.bindClassName();
        });
    }
    refresh() {
        this.getMessageExpression(this.parent, this.keyName);
        this.bindConditionalControls(DECORATORS.disabled, "_refDisableControls");
        this.bindConditionalControls(DECORATORS.error, "_refMessageControls");
        this.bindConditionalControls(DECORATORS.elementClass, "_refClassNameControls");
        this.executeExpressions();
        this.bindError();
    }
    reset(value) {
        if (value !== undefined)
            this.setValue(value);
        else
            this.setValue(this.getFormState(this._baseValue));
        this.dirty = false;
    }
    commit() {
        this._baseValue = this.value;
        this.callPatch();
    }
    callPatch() {
        this._isModified = this.getValue(this._baseValue) != this.getValue(this.value);
        if (this.parent && this.parent[PATCH])
            this.parent[PATCH](this.keyName);
    }
    checkErrorMessageStrategy() {
        let isBind = true;
        switch (this._errorMessageBindingStrategy) {
            case ErrorMessageBindingStrategy.OnSubmit:
                isBind = this.parent.submitted;
                break;
            case ErrorMessageBindingStrategy.OnDirty:
                isBind = this.dirty;
                break;
            case ErrorMessageBindingStrategy.OnTouched:
                isBind = this.touched;
                break;
            case ErrorMessageBindingStrategy.OnDirtyOrTouched:
                isBind = this.dirty || this.touched;
                break;
            case ErrorMessageBindingStrategy.OnDirtyOrSubmit:
                isBind = this.dirty || this.parent.submitted;
                break;
            case ErrorMessageBindingStrategy.OnTouchedOrSubmit:
                isBind = this.touched || this.parent.submitted;
                break;
            default:
                isBind = true;
        }
        return isBind;
    }
    executeExpressions() {
        this.processExpression("_refDisableControls", "disabled");
        this.processExpression("_refMessageControls", "bindError");
        this.processExpression("_refClassNameControls", "bindClassName");
    }
    getMessageExpression(formGroup, keyName) {
        if (formGroup[MODEL_INSTANCE]) {
            let instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
            if (instanceContainer) {
                this._messageExpression = instanceContainer.nonValidationDecorators.error.conditionalExpressions[keyName];
                this._controlProp = instanceContainer.nonValidationDecorators.error.controlProp[this.keyName];
                this._classNameExpression = instanceContainer.nonValidationDecorators.elementClass.conditionalExpressions[keyName];
                this._classNameControlProp = instanceContainer.nonValidationDecorators.elementClass.controlProp[keyName];
                if (this._classNameExpression)
                    this.updateOnElementClass = true;
            }
        }
    }
    getSanitizedValue(value) {
        if (this._sanitizers) {
            for (let sanitizer of this._sanitizers) {
                value = SANITIZERS[sanitizer.name](value, sanitizer.config);
            }
        }
        return value;
    }
    bindConditionalControls(decoratorType, refName) {
        this._disableProvider = new DisableProvider(decoratorType, this.entityObject);
        this[refName] = this._disableProvider.zeroArgumentProcess(this, this.keyName);
        this._disableProvider.oneArgumentProcess(this, `${this.keyName}${RXCODE}1`).forEach(t => this[refName].push(t));
    }
    setControlErrorMessages() {
        if ((!this._messageExpression && this.checkErrorMessageStrategy()) || this._isPassedExpression) {
            this._errorMessages = [];
            if (this.errors) {
                Object.keys(this.errors).forEach(t => {
                    if (this.parent) {
                        this.parent[CONTROLS_ERROR][this.keyName] = this._errorMessage = this.getErrorMessage(this.errors, t);
                        if (!this._errorMessage) {
                            let errorObject = ObjectMaker.toJson(t, undefined, [this.errors[t][t]]);
                            this.parent[CONTROLS_ERROR][this.keyName] = this._errorMessage = this.getErrorMessage(errorObject, t);
                        }
                    }
                    else
                        this._errorMessage = this.getErrorMessage(this.errors, t);
                    this._errorMessages.push(this._errorMessage);
                });
            }
            else {
                this._errorMessage = undefined;
                if (this.parent) {
                    this.parent[CONTROLS_ERROR][this.keyName] = undefined;
                    delete this.parent[CONTROLS_ERROR][this.keyName];
                }
            }
        }
        else {
            this._errorMessages = [];
            this._errorMessage = undefined;
        }
    }
    getErrorMessage(errorObject, keyName) {
        if (errorObject[keyName][MESSAGE])
            return errorObject[keyName][MESSAGE];
        return;
    }
    processExpression(propName, operationType) {
        if (this[propName])
            for (var controlInfo of this[propName]) {
                let control = controlInfo.isRoot ? ApplicationUtil.getControl(controlInfo.controlPath, ApplicationUtil.getRootFormGroup(this)) : ApplicationUtil.getFormControl(controlInfo.controlPath, this);
                if (control) {
                    if (operationType == "disabled") {
                        let result = this.executeExpression(controlInfo.conditionalExpression, control);
                        if (result)
                            control.disable();
                        else
                            control.enable();
                    }
                    else if (operationType == "bindError")
                        control.bindError();
                    else if (operationType == "bindClassName")
                        control.bindClassName();
                }
            }
    }
    executeExpression(expression, control) {
        return expression.call(control.parent[MODEL_INSTANCE], control, ApplicationUtil.getParentModelInstanceValue(this), control.parent[MODEL_INSTANCE]);
    }
    getValue(value) {
        return value !== undefined && value !== null && value !== "" ? value : "";
    }
}

const OBJECT = "object";
const BOOLEAN$1 = "boolean";
class FormDataProvider {
    convertToFormData(jObject) {
        return this.convertFormData(jObject);
    }
    convertFormData(jObject, currentFormData, parentKey) {
        let formData = currentFormData || new FormData();
        let propName = '';
        for (var columnName in jObject) {
            propName = !parentKey ? columnName : `${parentKey}[${columnName}]`;
            if (Array.isArray(jObject[columnName])) {
                jObject[columnName].forEach((row, index) => {
                    propName = `${columnName}[${index}]`;
                    if (typeof row === OBJECT)
                        this.convertFormData(row, formData, propName);
                    else
                        this.nonObjectValueBind(row, formData, propName);
                });
            }
            else if (jObject[columnName] !== null && !(jObject[columnName] instanceof Date) && typeof jObject[columnName] === OBJECT && !(jObject[columnName] instanceof File || jObject[columnName] instanceof FileList)) {
                this.convertFormData(jObject[columnName], formData, propName);
            }
            else {
                this.nonObjectValueBind(jObject[columnName], formData, propName);
            }
        }
        return formData;
    }
    nonObjectValueBind(value, formData, propName) {
        if (typeof value === BOOLEAN$1) {
            let formValue = value ? true : false;
            formData.append(propName, formValue);
        }
        else if (value instanceof FileList) {
            for (var i = 0; i < value.length; i++) {
                formData.append(`${propName}[${i}]`, value.item(i));
            }
        }
        else {
            if (RegexValidator.isNotBlank(value))
                formData.append(propName, value);
        }
    }
}

function isResetControl(controlName, control, options) {
    let isReset = true;
    if (options) {
        isReset = false;
        if (options.resetType)
            switch (options.resetType) {
                case ResetFormType.ControlsOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"];
                    break;
                case ResetFormType.ControlsAndFormGroupsOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"];
                    break;
                case ResetFormType.FormGroupsOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"];
                    break;
                case ResetFormType.FormArraysOnly:
                    isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"];
                    break;
                case ResetFormType.DefinedPropsOnly:
                    isReset = options.value ? Object.keys(options.value).indexOf(controlName) != -1 : false;
                    break;
                default:
                    isReset = true;
                    break;
            }
        if (!isReset && options.with)
            isReset = options.with.filter(x => x.split('.')[0] == controlName.split('.')[0])[0] !== undefined;
        if (!isReset && options.value && (options.resetType === undefined || options.resetType !== ResetFormType.DefinedPropsOnly))
            isReset = true;
    }
    return isReset;
}
function getNestedOptions(controlName, options) {
    if (options) {
        let jObjectOptions = {};
        if (options.resetType)
            jObjectOptions.resetType = (options.resetType == ResetFormType.FormGroupsOnly || options.resetType == ResetFormType.FormArraysOnly) ? ResetFormType.ControlsOnly : options.resetType;
        if (options.with) {
            let nestedControls = options.with.filter(t => t.split('.')[0] == controlName);
            let controlNames = nestedControls.map(x => {
                let splitControls = x.split('.');
                splitControls.splice(0, 1);
                return splitControls.join('.');
            });
            jObjectOptions.with = controlNames;
        }
        if (options.value && options.value[controlName])
            jObjectOptions.value = options.value[controlName];
        jObjectOptions = Object.keys(jObjectOptions).length > 0 ? jObjectOptions : undefined;
        return jObjectOptions;
    }
    return undefined;
}

class RxFormGroup extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] {
    constructor(model, entityObject, controls, validatorOrOpts, asyncValidator) {
        super(controls, validatorOrOpts, asyncValidator);
        this.model = model;
        this.entityObject = entityObject;
        this._modified = {};
        this._isModified = false;
        this.baseObject = {};
        for (var column in this.entityObject)
            this.baseObject[column] = this.entityObject[column];
        this.formDataProvider = new FormDataProvider();
    }
    bindPrimaryKey(modelInstance, jObject) {
        let instanceContainer = defaultContainer.get(modelInstance.constructor);
        if (instanceContainer) {
            let primaryKeyProp = instanceContainer.properties.filter(x => x.isPrimaryKey)[0];
            if (primaryKeyProp && this.modelInstance[primaryKeyProp.name])
                jObject[primaryKeyProp.name] = this.modelInstance[primaryKeyProp.name];
        }
    }
    get modifiedValue() {
        let jObject = {};
        if (Object.keys(this._modified).length > 0) {
            this.bindPrimaryKey(this.modelInstance, jObject);
            for (var columnName in this._modified) {
                if (this.controls[columnName] instanceof RxFormGroup)
                    jObject[columnName] = this.controls[columnName].modifiedValue;
                else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    let formArray = this.controls[columnName];
                    jObject[columnName] = [];
                    for (var i = 0; i < this._modified[columnName].length; i++) {
                        let modifiedValue = formArray.controls[i].modifiedValue;
                        if (Object.keys(modifiedValue).length > 0)
                            jObject[columnName].push(modifiedValue);
                    }
                    if (jObject[columnName].length == 0)
                        delete jObject[columnName];
                }
                else
                    jObject[columnName] = this._modified[columnName];
            }
            return jObject;
        }
        return this._modified;
    }
    get isModified() {
        return this._isModified;
    }
    patch(controlName) {
        if (controlName) {
            let control = this.controls[controlName];
            this.processModified(controlName, control);
        }
        else {
            this.nestedFormsModification();
        }
        this._isModified = Object.keys(this._modified).length > 0;
        if (!this._isModified)
            this.nestedArrayIsModified();
        if (this.parent && this.parent.patch)
            this.parent.patch();
    }
    isDirty() {
        let isDirty = false;
        for (let name in this.value) {
            let currentValue = this.modelInstance[name];
            if (!(this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])) {
                isDirty = ApplicationUtil.notEqualTo(this.baseObject[name], currentValue);
            }
            else if (this.controls[name] instanceof RxFormGroup)
                isDirty = this.controls[name].isDirty();
            else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                for (let formGroup of this.controls[name].controls) {
                    isDirty = formGroup.isDirty();
                }
            }
            if (isDirty)
                break;
        }
        return isDirty;
    }
    ;
    resetForm(options) {
        for (let name in this.controls) {
            if (isResetControl(name, this.controls[name], options)) {
                if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                    this.controls[name].resetForm(getNestedOptions(name, options));
                else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    this.controls[name].resetForm(options && options.value ? options.value[name] : undefined);
                }
                else {
                    if (options && options.value && RegexValidator.isNotBlank(options.value[name]))
                        this.controls[name].reset(options.value[name]);
                    else
                        this.controls[name].reset();
                }
            }
        }
    }
    commit() {
        for (let name in this.controls) {
            if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                this.controls[name].commit();
            else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                this.controls[name].commit();
            }
            else {
                this.controls[name].commit();
            }
        }
    }
    patchModelValue(value, options) {
        if (value) {
            for (let name in this.controls) {
                if (this.controls[name] instanceof RxFormGroup && value[name])
                    this.controls[name].patchModelValue(value[name], options);
                else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] && Array.isArray(value[name])) {
                    let index = 0;
                    for (let formGroup of this.controls[name].controls) {
                        if (value[name][index])
                            formGroup.patchModelValue(value[name][index], options);
                        index = index + 1;
                    }
                }
                else if (value[name] !== undefined)
                    this.controls[name].patchValue(value[name], options);
            }
        }
    }
    getErrorSummary(onlyMessage) {
        let jObject = {};
        Object.keys(this.controls).forEach(columnName => {
            if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                let error = this.controls[columnName].getErrorSummary(false);
                if (Object.keys(error).length > 0)
                    jObject[columnName] = error;
            }
            else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                let index = 0;
                for (let formGroup of this.controls[columnName].controls) {
                    let error = formGroup.getErrorSummary(false);
                    if (Object.keys(error).length > 0) {
                        error.index = index;
                        if (!jObject[columnName])
                            jObject[columnName] = [];
                        jObject[columnName].push(error);
                    }
                    index++;
                }
            }
            else {
                if (this.controls[columnName].errors) {
                    let error = this.controls[columnName].errors;
                    if (onlyMessage)
                        for (let validationName in error)
                            jObject[columnName] = error[validationName].message;
                    else
                        jObject[columnName] = error;
                }
            }
        });
        return jObject;
    }
    valueChangedSync() {
        Object.keys(this.controls).forEach(columnName => {
            if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || this.controls[columnName] instanceof RxFormGroup) && !(this.entityObject[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || this.entityObject[columnName] instanceof RxFormControl) && ApplicationUtil.notEqualTo(this.controls[columnName].getControlValue(), this.entityObject[columnName])) {
                this.controls[columnName].setValue(this.entityObject[columnName], { updateChanged: true });
            }
            else if ((this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || this.controls[columnName] instanceof RxFormArray)) {
                for (let formGroup of this.controls[columnName].controls) {
                    formGroup.valueChangedSync();
                }
            }
            else if ((this.controls[columnName] instanceof RxFormGroup)) {
                this.controls[columnName].valueChangedSync();
            }
        });
    }
    refreshDisable() {
        Object.keys(this.controls).forEach(columnName => {
            if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || this.controls[columnName] instanceof RxFormGroup)) {
                this.controls[columnName].refresh();
            }
            else if ((this.controls[columnName] instanceof RxFormGroup)) {
                this.controls[columnName].refreshDisable();
            }
        });
    }
    bindErrorMessages() {
        Object.keys(this.controls).forEach(columnName => {
            if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"] || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || this.controls[columnName] instanceof RxFormGroup)) {
                this.controls[columnName].bindError();
            }
            else if ((this.controls[columnName] instanceof RxFormGroup)) {
                this.controls[columnName].bindErrorMessages();
            }
        });
    }
    get submitted() {
        return this._submitted;
    }
    set submitted(value) {
        this._submitted = value;
        Object.keys(this.controls).forEach(columnName => {
            if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                let formArray = this.controls[columnName];
                for (let formGroup of formArray.controls)
                    formGroup.submitted = value;
            }
            else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                this.controls[columnName].submitted = value;
            }
            else
                this.controls[columnName].bindError();
        });
    }
    get modelInstanceValue() {
        return clone(this.entityObject);
    }
    get modelInstance() {
        return this.entityObject;
    }
    get controlsError() {
        return this.getErrorSummary(true);
    }
    toFormData() {
        return this.formDataProvider.convertToFormData(this.value);
    }
    processModified(controlName, control) {
        if (control.isModified)
            this._modified[controlName] = control.value;
        else
            delete this._modified[controlName];
        this._isModified = Object.keys(this._modified).length > 0;
    }
    nestedArrayIsModified() {
        for (var controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormArray)
                this._isModified = this.controls[controlName].isModified;
            if (this._isModified)
                break;
        }
    }
    nestedFormsModification() {
        for (var controlName in this.controls) {
            if (this.controls[controlName] instanceof RxFormGroup)
                this.processModified(controlName, this.controls[controlName]);
            else if (this.controls[controlName] instanceof RxFormArray) {
                if (this.controls[controlName].isModified) {
                    let formGroups = this.controls[controlName].controls;
                    this._modified[controlName] = [];
                    for (var formGroup of formGroups) {
                        if (formGroup.isModified) {
                            if (!this._modified[controlName])
                                this._modified[controlName] = [];
                            this._modified[controlName].push(formGroup.modifiedValue);
                        }
                    }
                    if (this._modified[controlName].length == 0)
                        delete this._modified[controlName];
                }
                else if (this._modified[controlName])
                    delete this._modified[controlName];
            }
        }
    }
}

class FormProvider {
    static ProcessRule(control, config, isDynamicConfig = false) {
        const formGroupValue = ApplicationUtil.getParentObjectValue(control);
        const parentObject = (control.parent) ? ApplicationUtil.cloneValue(control.parent.value) : undefined;
        let modelInstance = undefined;
        if (control.parent && control.parent instanceof RxFormGroup)
            modelInstance = control.parent.modelInstance;
        if (parentObject) {
            this.updateFormControlValue(parentObject, control.parent.controls, control, config);
            this.forDisableUpdate(parentObject, config);
        }
        else if (config.conditionalExpression)
            return false;
        return Linq.execute(formGroupValue, config, parentObject, modelInstance, isDynamicConfig);
    }
    static updateFormControlValue(parentObject, controls, control, config) {
        for (var controlName in parentObject) {
            if (!(parentObject[controlName] instanceof Object))
                if (controls[controlName] === control) {
                    parentObject[controlName] = control.value;
                    break;
                }
        }
    }
    static forDisableUpdate(parentObject, config) {
        if (config.disableConfig)
            Object.keys(config.disableConfig).forEach(column => {
                parentObject[column] = config.disableConfig[column];
            });
    }
}

const DISABLED_EXPRESSION = "disableExpression";
function conditionalChangeValidator(conditionalValidationProps) {
    var oldValue = undefined;
    var setTimeOut = (control, config) => {
        if (control[DISABLED_EXPRESSION])
            runDisabledExpression(control, config);
        var timeOut = setTimeout(t => {
            clearTimeout(timeOut);
            control.updateValueAndValidity();
        }, 100);
    };
    return (control) => {
        let value = control.value;
        if (control.parent && oldValue != value) {
            const rootFormGroup = ApplicationUtil.getRootFormGroup(control);
            const parentFormGroup = control.parent;
            oldValue = value;
            let controlName = ApplicationUtil.getFormControlName(control);
            let disabledConfig = { [controlName]: value };
            conditionalValidationProps.forEach(t => {
                if (t.indexOf("[]") != -1) {
                    var splitText = t.split("[]");
                    var formArray = rootFormGroup.get([splitText[0]]);
                    if (formArray)
                        formArray.controls.forEach(formGroup => {
                            var abstractControl = formGroup.get(splitText[1]);
                            if (abstractControl) {
                                setTimeOut(abstractControl, disabledConfig);
                            }
                        });
                }
                else {
                    let splitText = t.split('.');
                    if (splitText.length > 1) {
                        var control = null;
                        t.split('.').forEach((name, index) => { control = (index == 0) ? rootFormGroup.controls[name] : control.controls[name]; });
                    }
                    else {
                        control = parentFormGroup.controls[t];
                    }
                    if (control) {
                        setTimeOut(control, disabledConfig);
                    }
                }
            });
        }
        return ObjectMaker.null();
    };
}
function runDisabledExpression(control, config) {
    let isDisabled = FormProvider.ProcessRule(control, { conditionalExpression: control[DISABLED_EXPRESSION], disableConfig: config });
    if (isDisabled && !control.disabled)
        control.disable();
    else if (control.disabled)
        control.enable();
}

class ValidatorValueChecker {
    static pass(control, config) {
        if (FormProvider.ProcessRule(control, config))
            return RegexValidator.isNotBlank(control.value);
        else
            return false;
    }
    static passArrayValue(control, config) {
        if (FormProvider.ProcessRule(control, config))
            return control.value instanceof Array;
        else
            return false;
    }
}

const ARRAY_CONFIG = "ArrayConfig";
const FIELD_CONFIG = "FieldConfig";
const IP_CONFIG = "IpConfig";
const NUMBER_CONFIG = "NumberConfig";
const PASSWORD_CONFIG = "PasswordConfig";
const PATTERN_CONFIG = "PatternConfig";
const RANGE_CONFIG = "RangeConfig";

const CONFIG_REQUIRED_FIELDS = {
    [ARRAY_CONFIG]: ["matchValues"],
    [FIELD_CONFIG]: ["fieldName"],
    [IP_CONFIG]: ["version"],
    [PASSWORD_CONFIG]: ["validation"],
    [NUMBER_CONFIG]: ["value"],
    [PATTERN_CONFIG]: ["expression"],
    [RANGE_CONFIG]: ["minimumNumber", "maximumNumber"],
};

function getConfigObject(config, control, configName = '') {
    return (config != undefined && config != true) ? configProvider(control, config, configName) : {};
}
function configProvider(control, config, configName) {
    if (config.dynamicConfig) {
        let currentConfig = FormProvider.ProcessRule(control, clone(config), true);
        if (typeof currentConfig != "boolean") {
            currentConfig.conditionalExpression = config.conditionalExpression;
            currentConfig.dynamicConfig = config.dynamicConfig;
            Object.keys(config).forEach(t => {
                if ((t != "conditionalExpression" && t != "dynamicConfig") || currentConfig[t] === undefined) {
                    currentConfig[t] = config[t];
                }
            });
            return currentConfig;
        }
        else
            return config;
    }
    return checkRequiredProps(config, configName);
}
function checkRequiredProps(config, configName) {
    let props = CONFIG_REQUIRED_FIELDS[configName];
    if (configName) {
        props.forEach(prop => {
            if (config[prop] === undefined)
                throw new Error(`Pass the property of '${prop}' with value in the ${configName}, otherwise it won't work.`);
        });
    }
    return config;
}

const alphabet = {
    'danish': /^[A-ZÆØÅ]+$/,
    'french': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/,
    'german': /^[A-ZÄÖÜß]+$/,
    'greek': /^[Α-ω]+$/,
    'spanish': /^[a-zñáéíóúü]+$/i,
    'russian': /^[А-ЯЁ]+$/,
};
const alphaWithWhitespace = {
    'danish': /^[A-ZÆØÅ\s]+$/,
    'french': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]+$/,
    'german': /^[A-ZÄÖÜß\s]+$/,
    'greek': /^[Α-ω\s]+$/,
    'spanish': /^[a-zñáéíóúü\s]+$/i,
    'russian': /^[А-ЯЁ\s]+$/,
};
const alphanumeric = {
    'danish': /^[0-9A-ZÆØÅ]+$/,
    'french': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/,
    'german': /^[0-9A-ZÄÖÜß]+$/,
    'spanish': /^[0-9a-zñáéíóúü]+$/i,
    'russian': /^[0-9А-ЯЁ]+$/,
};
const alphanumericWithWitespace = {
    'danish': /^[0-9A-ZÆØÅ]+$/,
    'french': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/,
    'german': /^[0-9A-ZÄÖÜß]+$/,
    'spanish': /^[0-9a-zñáéíóúü\s]+$/i,
    'russian': /^[0-9А-ЯЁ]+$/,
};

function alphaValidation(configModel, control, regExps, key) {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
        regExps = getRegex(key, regExps, config);
        var isValid = (!config || !config.allowWhiteSpace) ?
            RegexValidator.isValid(control.value, regExps[0]) :
            RegexValidator.isValid(control.value, regExps[1]);
        if (!isValid)
            return ObjectMaker.toJson(key, config, [control.value]);
    }
    return ObjectMaker.null();
}
function getRegex(key, regExps, config) {
    switch (key) {
        case "alpha":
            var alphaLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alpha ? ReactiveFormConfig.json.defaultValidationLocale.alpha : "";
            return [
                alphaLocale && alphaLocale in alphabet ? alphabet[alphaLocale] : regExps[0],
                alphaLocale && alphaLocale in alphaWithWhitespace ? alphaWithWhitespace[alphaLocale] : regExps[1]
            ];
            break;
        case "alphaNumeric":
            var alphaNumericLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric ? ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric : "";
            return [
                alphaNumericLocale && alphaNumericLocale in alphanumeric ? alphanumeric[alphaNumericLocale] : regExps[0],
                alphaNumericLocale && alphaNumericLocale in alphanumericWithWitespace ? alphanumericWithWitespace[alphaNumericLocale] : regExps[1]
            ];
            break;
    }
}

function alphaValidator(configModel) {
    return (control) => {
        return alphaValidation(configModel, control, [RegExRule.alpha, RegExRule.alphaWithSpace], AnnotationTypes.alpha);
    };
}

function alphaNumericValidator(configModel) {
    return (control) => {
        return alphaValidation(configModel, control, [RegExRule.alphaNumeric, RegExRule.alphaNumericWithSpace], AnnotationTypes.alphaNumeric);
    };
}

function compareValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, FIELD_CONFIG);
        const compareControl = ApplicationUtil.getFormControl(config.fieldName, control);
        const controlValue = control.value;
        const compareControlValue = (compareControl) ? compareControl.value : '';
        if (RegexValidator.isNotBlank(controlValue) || RegexValidator.isNotBlank(compareControlValue)) {
            if (!(compareControl && compareControl.value === controlValue))
                return ObjectMaker.toJson(AnnotationTypes.compare, config, [controlValue, compareControlValue]);
        }
        return ObjectMaker.null();
    };
}

function containsValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (control.value.indexOf(config.value) == -1)
                return ObjectMaker.toJson(AnnotationTypes.contains, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function checkLength(length, checks) {
    let isPassed = false;
    for (let check of checks) {
        isPassed = (check == length);
        if (isPassed)
            break;
    }
    return isPassed;
}

function calculate(numbers) {
    let numberSum = 0;
    for (var i = 0; i < numbers.length; i++)
        numberSum += parseInt(numbers.substring(i, i + 1));
    let deltas = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
    for (var i = numbers.length - 1; i >= 0; i -= 2) {
        numberSum += deltas[parseInt(numbers.substring(i, i + 1))];
    }
    let mod = numberSum % 10;
    mod = 10 - mod;
    if (mod == 10)
        mod = 0;
    return mod;
}

function creditCardValidator(configModel) {
    let cardDigits = {
        AmericanExpress: [15],
        DinersClub: [14, 16, 19],
        Discover: [16, 19],
        JCB: [16, 19],
        Maestro: [12, 16, 19],
        MasterCard: [16],
        Visa: [13, 16, 19]
    };
    function validate(creditCardNumber) {
        var digit = parseInt(creditCardNumber.substring(creditCardNumber.length - 1, creditCardNumber.length));
        return calculate(creditCardNumber.substring(0, creditCardNumber.length - 1)) == parseInt(String(digit)) ? !0 : !1;
    }
    function getCardProviderName(cardNumber) {
        var cardProviderName = "";
        return /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/.test(cardNumber) ? cardProviderName = "Maestro" : /^5[1-5]/.test(cardNumber) ? cardProviderName = "MasterCard" : /^4/.test(cardNumber) ? cardProviderName = "Visa" : /^3[47]/.test(cardNumber) ? cardProviderName = "AmericanExpress" : /^(?:2131|1800|35)/.test(cardNumber) ? cardProviderName = "JCB" : /^3(?:0[0-5]|[68])/.test(cardNumber) ? cardProviderName = "DinersClub" : /^6(?:011|5)/.test(cardNumber) && (cardProviderName = "Discover"), cardProviderName;
    }
    return (control) => {
        const controlValue = control.value;
        let config = getConfigObject(configModel, control);
        const parentObject = (control.parent) ? control.parent.value : undefined;
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(controlValue)) {
                let isValid = false;
                let cardTypes = config.fieldName && parentObject[config.fieldName] ? [parentObject[config.fieldName]] : config.creditCardTypes;
                let cardType = '';
                for (let creditCardType of cardTypes) {
                    isValid = checkLength(controlValue.length, cardDigits[creditCardType]) && getCardProviderName(controlValue) == creditCardType && validate(controlValue);
                    cardType = creditCardType;
                    if (isValid)
                        break;
                }
                if (!isValid)
                    return ObjectMaker.toJson(AnnotationTypes.creditCard, config, [controlValue, cardType]);
            }
        }
        return ObjectMaker.null();
    };
}

function regexValidation(configModel, control, regExp, key) {
    let config = getConfigObject(configModel, control);
    return validate(config, control, regExp, key);
}
function validate(config, control, regExp, key) {
    if (ValidatorValueChecker.pass(control, config)) {
        if (!RegexValidator.isValid(control.value, regExp))
            return ObjectMaker.toJson(key, config, [control.value]);
    }
    return ObjectMaker.null();
}

function digitValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.onlyDigit, AnnotationTypes.digit);
    };
}

function emailValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.basicEmail, AnnotationTypes.email);
    };
}

function hexColorValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.strictHexColor, AnnotationTypes.hexColor);
    };
}

function lowercaseValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toLowerCase()))
                return ObjectMaker.toJson(AnnotationTypes.lowerCase, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

const OPERATORS = {
    lessThan: "<",
    greaterThan: ">",
    lessThanEqualTo: "<=",
    greaterThanEqualTo: ">="
};

function runCondition(leftValue, rightValue, operator) {
    let result = false;
    switch (operator) {
        case OPERATORS.lessThan:
        case OPERATORS.greaterThan:
            result = leftValue > rightValue;
            break;
        case OPERATORS.lessThanEqualTo:
        case OPERATORS.greaterThanEqualTo:
            result = leftValue >= rightValue;
            break;
    }
    return result;
}
function dateChecker(control, config, operationType) {
    config = getConfigObject(config, control);
    var dateProvider = new DateProvider();
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (dateProvider.isDate(control.value) || dateProvider.isValid(control.value, config)) {
                let checkDate = dateProvider.getCompareDate(config, control);
                let currentControlValue = dateProvider.getDate(control.value);
                let isValid = operationType == AnnotationTypes.minDate ? runCondition(currentControlValue, checkDate, config.operator || OPERATORS.greaterThanEqualTo) : runCondition(checkDate, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
                if (!isValid)
                    return ObjectMaker.toJson(operationType, config, [control.value]);
            }
            else
                return ObjectMaker.toJson(operationType, config, [control.value]);
        }
    }
    return ObjectMaker.null();
}
function validateDate(control, config, operationType) {
    config = getConfigObject(config, control);
    var dateProvider = new DateProvider();
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (!dateProvider.isDate(control.value) && !dateProvider.isValid(control.value, config)) {
                return ObjectMaker.toJson(operationType, config, [control.value]);
            }
        }
    }
    return ObjectMaker.null();
}

function maxDateValidator(configModel) {
    return (control) => {
        return dateChecker(control, configModel, AnnotationTypes.maxDate);
    };
}

function maxLengthValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value.length <= config.value))
                return ObjectMaker.toJson(AnnotationTypes.maxLength, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function maxNumberValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) <= config.value))
                return ObjectMaker.toJson(AnnotationTypes.maxNumber, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function minDateValidator(configModel) {
    return (control) => {
        return dateChecker(control, configModel, AnnotationTypes.minDate);
    };
}

function minLengthValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(String(control.value).length >= config.value))
                return ObjectMaker.toJson(AnnotationTypes.minLength, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function minNumberValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, NUMBER_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(parseFloat(control.value) >= config.value))
                return ObjectMaker.toJson(AnnotationTypes.minNumber, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function passwordValidator(configModel) {
    function getMessageObject(jObject, keyName) {
        if (!jObject.message && !jObject.messageKey) {
            let message = ObjectMaker.getPasswordMessage();
            jObject.message = message && typeof message == "string" ? message : ApplicationUtil.isObject(message) ? message[keyName] : "";
            if (!jObject.message)
                jObject.message = message["password"];
            jObject.messageKey = "";
        }
        return jObject;
    }
    return (control) => {
        let config = getConfigObject(configModel, control, PASSWORD_CONFIG);
        let controlValue = control.value;
        if (RegexValidator.isNotBlank(controlValue)) {
            let validation = RegexValidator.isValidPassword(config.validation, controlValue);
            let jObject = {};
            jObject.message = (config.message && config.message[validation.keyName]) ? config.message[validation.keyName] : typeof config.message == "string" ? config.message : '';
            jObject.messageKey = (config.messageKey && config.messageKey[validation.keyName]) ? config.messageKey[validation.keyName] : typeof config.messageKey == "string" ? config.messageKey : "";
            jObject = getMessageObject(jObject, validation.keyName);
            if (!validation.isValid)
                return ObjectMaker.toJson(AnnotationTypes.password, jObject, [controlValue]);
        }
        return ObjectMaker.null();
    };
}

function rangeValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, RANGE_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value && parseFloat(control.value) >= config.minimumNumber && parseFloat(control.value) <= config.maximumNumber))
                return ObjectMaker.toJson(AnnotationTypes.range, config, [control.value, config.minimumNumber, config.maximumNumber]);
        }
        return ObjectMaker.null();
    };
}

function uppercaseValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value === control.value.toUpperCase()))
                return ObjectMaker.toJson(AnnotationTypes.upperCase, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function requiredValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value)) {
                return ObjectMaker.toJson(AnnotationTypes.required, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

function patternValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, PATTERN_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            for (var pattern in config.expression)
                if (!(RegexValidator.isValid(control.value, config.expression[pattern])))
                    return ObjectMaker.toJson(pattern, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function timeValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let isValid = config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.time, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function urlValidation(configModel, control) {
    var regex = RegExRule.url;
    let config = getConfigObject(configModel, control);
    if (config && config.urlValidationType) {
        switch (config.urlValidationType) {
            case 1:
                regex = RegExRule.url;
                break;
            case 2:
                regex = RegExRule.localhostUrl;
                break;
            case 3:
                regex = RegExRule.interanetUrl;
                break;
        }
    }
    return validate(config, control, regex, AnnotationTypes.url);
}
function urlValidator(configModel) {
    return (control) => {
        return urlValidation(configModel, control);
    };
}

function jsonValidator(configModel) {
    function process(value) {
        var result = false;
        try {
            var json = JSON.parse(value);
            result = !!json && typeof json === 'object';
        }
        catch (ex) {
            result = false;
        }
        return result;
    }
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!process(control.value))
                return ObjectMaker.toJson(AnnotationTypes.json, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

const operatorOpposite = {
    [AnnotationTypes.greaterThan]: AnnotationTypes.lessThan,
    [AnnotationTypes.lessThan]: AnnotationTypes.greaterThan,
    [AnnotationTypes.greaterThanEqualTo]: AnnotationTypes.lessThanEqualTo,
    [AnnotationTypes.lessThanEqualTo]: AnnotationTypes.greaterThanEqualTo,
};
function relationalCheck(control, config, relationalOperatorName) {
    config = getConfigObject(config, control);
    const matchControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
    const matchControlValue = (matchControl) ? matchControl.value : config.value !== undefined ? config.value : '';
    if (FormProvider.ProcessRule(control, config)) {
        if (config.isArrayControl)
            return arrayControlValidation(control, config, relationalOperatorName);
        if (isValid(control, matchControlValue, relationalOperatorName) === false)
            return ObjectMaker.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
    }
    return ObjectMaker.null();
}
function isValid(control, matchControlValue, relationalOperatorName) {
    if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
        let isValid = false;
        switch (relationalOperatorName) {
            case AnnotationTypes.greaterThan:
                isValid = parseFloat(control.value) > parseFloat(matchControlValue);
                break;
            case AnnotationTypes.lessThan:
                isValid = parseFloat(control.value) < parseFloat(matchControlValue);
                break;
            case AnnotationTypes.greaterThanEqualTo:
                isValid = parseFloat(control.value) >= parseFloat(matchControlValue);
                break;
            case AnnotationTypes.lessThanEqualTo:
                isValid = parseFloat(control.value) <= parseFloat(matchControlValue);
                break;
        }
        return isValid;
    }
    return null;
}
function setTimeFunc(invalidateControls) {
    let timeOut = setTimeout(() => {
        invalidateControls.forEach(t => {
            t.updateValueAndValidity();
        });
        clearTimeout(timeOut);
    }, 200);
}
function arrayControlValidation(control, config, relationalOperatorName) {
    let formArray = ApplicationUtil.getParentFormArray(control);
    let parentFormGroup = control.parent ? control.parent : undefined;
    let oppositeOperator = operatorOpposite[relationalOperatorName];
    let updateValidityControls = [];
    if (formArray && parentFormGroup && formArray.controls.length > 1) {
        let indexOf = formArray.controls.indexOf(parentFormGroup);
        let fieldName = ApplicationUtil.getFormControlName(control);
        let valid = true;
        if (indexOf > 0)
            valid = validateControl(formArray, control, indexOf - 1, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls);
        if (valid && formArray.controls.length > indexOf + 1)
            valid = validateControl(formArray, control, indexOf + 1, fieldName, relationalOperatorName, relationalOperatorName, updateValidityControls);
        if (updateValidityControls.length > 0)
            setTimeFunc(updateValidityControls);
        if (valid === false)
            return ObjectMaker.toJson(relationalOperatorName, config, [control.value]);
    }
    return ObjectMaker.null();
}
function validateControl(formArray, control, indexOf, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls) {
    let valid = false;
    let formGroup = formArray.controls[indexOf];
    if (formGroup && formGroup.controls) {
        let formControl = formGroup.controls[fieldName];
        valid = isValid(control, formControl.value, oppositeOperator);
        if (valid && formControl.errors && formControl.errors[relationalOperatorName])
            updateValidityControls.push(formControl);
    }
    return valid;
}

function greaterThanValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThan);
    };
}

function greaterThanEqualToValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.greaterThanEqualTo);
    };
}

function lessThanEqualToValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.lessThanEqualTo);
    };
}

function lessThanValidator(configModel) {
    return (control) => {
        return relationalCheck(control, configModel, AnnotationTypes.lessThan);
    };
}

function choiceValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (control.value instanceof Array) {
                config.minLength = (config.minLength == undefined) ? 0 : config.minLength;
                config.maxLength = (config.maxLength == undefined) ? 0 : config.maxLength;
                if ((((control.value.length) < config.minLength) || (config.maxLength !== 0 && control.value.length > config.maxLength)))
                    return ObjectMaker.toJson(AnnotationTypes.choice, config, [control.value]);
            }
        }
        return ObjectMaker.null();
    };
}

function differentValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, FIELD_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            const differentControl = ApplicationUtil.getFormControl(config.fieldName, control);
            const differentControlValue = (differentControl) ? differentControl.value : '';
            if (!(differentControl && differentControl.value != control.value))
                return ObjectMaker.toJson(AnnotationTypes.different, config, [control.value, differentControlValue]);
        }
        return ObjectMaker.null();
    };
}

function numericValidator(configModel) {
    return (control) => {
        if (configModel && (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.numeric]))
            ApplicationUtil.configureControl(control, configModel, AnnotationTypes.numeric);
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!RegexValidator.isValid(control.value, ApplicationUtil.numericValidation(config.allowDecimal, config.acceptValue)))
                return ObjectMaker.toJson(AnnotationTypes.numeric, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function evenValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(control.value % 2 == 0))
                return ObjectMaker.toJson(AnnotationTypes.even, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function oddValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!(!(control.value % 2 == 0)) || !ApplicationUtil.isNumeric(control.value))
                return ObjectMaker.toJson(AnnotationTypes.odd, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function factorValidator(configModel) {
    function positiveFactors(dividend, value) {
        let isPositive = false;
        for (var index = 1; index <= Math.floor(Math.sqrt(dividend)); index += 1) {
            if (dividend % index === 0) {
                if (index == value)
                    isPositive = true;
                if (dividend / index !== index)
                    if ((dividend / index) == value)
                        isPositive = true;
                if (isPositive)
                    break;
            }
        }
        return isPositive;
    }
    return (control) => {
        let config = getConfigObject(configModel, control);
        const dividendField = (control.parent && config.fieldName) ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
        const dividend = (config.fieldName && dividendField) ? dividendField.value : config.dividend;
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value) && dividend > 0) {
                if (!RegexValidator.isValid(control.value, RegExRule.onlyDigit) || !positiveFactors(dividend, parseInt(control.value)))
                    return ObjectMaker.toJson(AnnotationTypes.factor, config, [control.value]);
            }
        }
        return ObjectMaker.null();
    };
}

function leapYearValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var isValid = (control.value % 100 === 0) ? (control.value % 400 === 0) : (control.value % 4 === 0);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.leapYear, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function allOfValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (ValidatorValueChecker.passArrayValue(control, config)) {
            var testResult = false;
            for (let value of config.matchValues) {
                testResult = control.value.some((y) => y == value);
                if (!testResult)
                    break;
            }
            if (!testResult)
                return ObjectMaker.toJson(AnnotationTypes.allOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function oneOfValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (ValidatorValueChecker.passArrayValue(control, config)) {
            var testResult = false;
            for (let value of config.matchValues) {
                testResult = control.value.some((y) => y == value);
                if (testResult)
                    break;
            }
            if (!testResult)
                return ObjectMaker.toJson(AnnotationTypes.oneOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function noneOfValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, ARRAY_CONFIG);
        if (FormProvider.ProcessRule(control, config)) {
            var testResult = false;
            for (let value of config.matchValues) {
                let matchValue = ApplicationUtil.lowerCaseWithTrim(value);
                testResult = Array.isArray(control.value) ? control.value.some((y) => ApplicationUtil.lowerCaseWithTrim(y) === matchValue) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
                if (testResult)
                    break;
            }
            if (testResult)
                return ObjectMaker.toJson(AnnotationTypes.noneOf, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function macValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.macId, AnnotationTypes.mac);
    };
}

function asciiValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.ascii, AnnotationTypes.ascii);
    };
}

function dataUriValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.dataUri, AnnotationTypes.dataUri);
    };
}

function portValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let isValid = RegexValidator.isValid(control.value, RegExRule.onlyDigit) && (control.value >= 0 && control.value <= 65535);
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.port, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function latLongValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let splitText = control.value.split(',');
            if (!(splitText.length > 1 && RegexValidator.isValid(splitText[0], RegExRule.lat) && RegexValidator.isValid(splitText[1], RegExRule.long)))
                return ObjectMaker.toJson(AnnotationTypes.latLong, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function extensionValidator(configModel) {
    return (control, files) => {
        let config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.extension])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.extension);
        if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                let testResult = true;
                let extension = '';
                for (var i = 0; i < files.length; i++) {
                    let file = files.item(i);
                    let splitText = file.name.split(".");
                    extension = splitText[splitText.length - 1];
                    let result = config.extensions.filter(t => { return extension.toLowerCase() == t.toLowerCase(); })[0];
                    if (!result) {
                        testResult = false;
                        break;
                    }
                }
                if (!testResult)
                    return ObjectMaker.toJson(AnnotationTypes.extension, config, [extension, config.extensions.join(",")]);
            }
        }
        return ObjectMaker.null();
    };
}

function fileSizeValidator(configModel) {
    return (control, files) => {
        let config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.fileSize])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.fileSize);
        if (files && FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                let minFileSize = config.minSize ? config.minSize : 0;
                let testResult = false;
                let fileSize = 0;
                for (var i = 0; i < files.length; i++) {
                    let file = files.item(i);
                    fileSize = file.size;
                    testResult = (!(fileSize >= minFileSize && fileSize <= config.maxSize));
                    if (testResult)
                        break;
                }
                if (testResult)
                    return ObjectMaker.toJson(AnnotationTypes.fileSize, config, [fileSize, config.maxSize]);
            }
        }
        return ObjectMaker.null();
    };
}

function endsWithValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var endString = String(control.value).substr(control.value.length - config.value.length, config.value.length);
            if (endString != config.value)
                return ObjectMaker.toJson(AnnotationTypes.endsWith, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function startsWithValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var startString = String(control.value).substr(0, config.value.length);
            if ((config.isRestrict && String(startString).toLowerCase() == String(config.value).toLowerCase()) || (!config.isRestrict && startString != config.value))
                return ObjectMaker.toJson(AnnotationTypes.startsWith, config, [control.value, config.value]);
        }
        return ObjectMaker.null();
    };
}

function primeNumberValidator(configModel) {
    function isPrime(value) {
        let isPrimeNumber = value != 1;
        for (var i = 2; i < value; i++) {
            if (value % i == 0) {
                isPrimeNumber = false;
                break;
            }
        }
        return isPrimeNumber;
    }
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            if (!ApplicationUtil.isNumeric(control.value) || !isPrime(control.value))
                return ObjectMaker.toJson(AnnotationTypes.primeNumber, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function latitudeValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.lat, AnnotationTypes.latitude);
    };
}

function longitudeValidator(configModel) {
    return (control) => {
        return regexValidation(configModel, control, RegExRule.long, AnnotationTypes.longitude);
    };
}

function composeValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (config.validators) {
                let result = undefined;
                for (let validator of config.validators) {
                    result = validator(control);
                    if (result)
                        break;
                }
                if (result)
                    return (config.messageKey || config.message) ? ObjectMaker.toJson(config.messageKey || AnnotationTypes.compose, config, [control.value]) : result;
            }
        }
        return ObjectMaker.null();
    };
}

function ruleValidator(configModel, entity) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            let result = null;
            for (let rule of config.customRules) {
                result = rule(entity);
                if (result)
                    break;
            }
            if (result)
                return result;
        }
        return ObjectMaker.null();
    };
}

function fileValidator(configModel) {
    return (control, files) => {
        let config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.file])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.file);
        if (files) {
            if (FormProvider.ProcessRule(control, config)) {
                if (RegexValidator.isNotBlank(control.value)) {
                    let minFiles = config.minFiles ? config.minFiles : 0;
                    let maxFiles = config.maxFiles ? config.maxFiles : files.length;
                    if (!(files.length > 0 && files[0] instanceof File && files.length >= minFiles && files.length <= maxFiles))
                        return ObjectMaker.toJson(AnnotationTypes.file, config, [files.length, minFiles, maxFiles]);
                }
            }
        }
        return ObjectMaker.null();
    };
}

function customValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            const formGroupValue = ApplicationUtil.getParentObjectValue(control);
            const parentObject = (control.parent) ? control.parent.value : undefined;
            let result = null;
            for (let rule of config.customRules) {
                result = rule(formGroupValue, parentObject, config.additionalValue);
                if (result)
                    break;
            }
            if (result)
                return result;
        }
        return ObjectMaker.null();
    };
}

function uniqueValidator(configModel) {
    var setTimeoutFunc = (invalidateControls, controlValues) => {
        let timeOut = setTimeout(() => {
            invalidateControls.forEach(t => {
                let isMatched = controlValues.filter(x => x == t.value)[0];
                if (!isMatched)
                    t.updateValueAndValidity();
            });
            clearTimeout(timeOut);
        }, 200);
    };
    var additionalValidation = (config, fieldName, formGroup, formArray, currentValue) => {
        let indexOf = formArray.controls.indexOf(formGroup);
        let formArrayValue = [];
        if (indexOf != -1) {
            formArray.value.forEach((t, i) => {
                if (indexOf != i)
                    formArrayValue.push(t);
            });
            return config.additionalValidation(currentValue, indexOf, fieldName, formGroup.value, formArrayValue);
        }
        return false;
    };
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                let formArray = ApplicationUtil.getParentFormArray(control);
                let parentFormGroup = control.parent ? control.parent : undefined;
                let invalidateControls = [];
                let controlValues = [];
                if (formArray && parentFormGroup) {
                    let currentValue = control.value;
                    let fieldName = ApplicationUtil.getFormControlName(control);
                    let isMatched = false;
                    for (let formGroup of formArray.controls) {
                        if (formGroup != parentFormGroup) {
                            isMatched = (ApplicationUtil.toLower(formGroup.controls[fieldName].value) == ApplicationUtil.toLower(currentValue) && !(formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]));
                            if (formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]) {
                                var matchedControl = formArray.controls.filter(t => t.controls[fieldName] != formGroup.controls[fieldName] && ApplicationUtil.toLower(t.controls[fieldName].value) == ApplicationUtil.toLower(formGroup.controls[fieldName].value))[0];
                                if (!matchedControl)
                                    invalidateControls.push(formGroup.controls[fieldName]);
                            }
                            else
                                controlValues.push(formGroup.controls[fieldName].value);
                        }
                        if (isMatched)
                            break;
                    }
                    if (invalidateControls.length > 0)
                        setTimeoutFunc(invalidateControls, controlValues);
                    let validation = false;
                    if (config.additionalValidation) {
                        validation = additionalValidation(config, fieldName, parentFormGroup, formArray, currentValue);
                    }
                    if (isMatched && !validation)
                        return ObjectMaker.toJson(AnnotationTypes.unique, config, [control.value]);
                }
            }
        }
        return ObjectMaker.null();
    };
}

function imageValidator(configModel) {
    return (control, files) => {
        let config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.image])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.image);
        if (!files)
            return ObjectMaker.null();
        return new Promise((resolve, reject) => {
            if (FormProvider.ProcessRule(control, config)) {
                if (RegexValidator.isNotBlank(control.value)) {
                    let testResult = false;
                    for (var i = 0; i < files.length; i++) {
                        let file = files.item(i);
                        let type = file.type ? file.type.split('/') : [];
                        testResult = type.length > 1 && type[0] == "image";
                        if (!testResult)
                            break;
                        let image = new Image();
                        config.minWidth = config.minWidth ? config.minWidth : 0;
                        config.minHeight = config.minHeight ? config.minHeight : 0;
                        image.onload = () => {
                            testResult = (image.width >= config.minWidth && image.height >= config.minHeight) && (image.width <= config.maxWidth && image.height <= config.maxHeight);
                            if (!testResult)
                                resolve(ObjectMaker.toJson(AnnotationTypes.image, config, [image.width, image.height]));
                            else
                                resolve(ObjectMaker.null());
                        };
                        image.onerror = () => {
                            resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                        };
                        image.src = URL.createObjectURL(file);
                    }
                    if (!testResult)
                        resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
                }
            }
            return ObjectMaker.null();
        });
    };
}

function notEmptyValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (!RegexValidator.isNotBlank(control.value, true)) {
                return ObjectMaker.toJson(AnnotationTypes.notEmpty, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

function checkIpV4(value) {
    let isValid = RegexValidator.isValid(value, RegExRule.ipV4);
    if (isValid) {
        const splitDots = value.split('.');
        for (let ipNum of splitDots) {
            isValid = ipNum <= 255;
            if (!isValid)
                break;
        }
    }
    return isValid;
}
function checkIpV6(value) {
    return RegexValidator.isValid(value, RegExRule.ipV6);
}

function ipValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control, IP_CONFIG);
        if (ValidatorValueChecker.pass(control, config)) {
            let values = config.isCidr ? control.value.split('/') : [control.value];
            var isValid = (config.version == IpVersion.V4) ?
                checkIpV4(values[0]) :
                (config.version == IpVersion.V6) ?
                    checkIpV6(values[0]) :
                    (checkIpV4(values[0]) || checkIpV6(values[0]));
            if (config.isCidr && isValid) {
                isValid = (values.length > 1) ?
                    config.version == IpVersion.V4 ?
                        RegexValidator.isValid(values[1], RegExRule.cidrV4) :
                        config.version == IpVersion.V6 ?
                            RegexValidator.isValid(values[1], RegExRule.cidrV6) :
                            (RegexValidator.isValid(values[1], RegExRule.cidrV4) || RegexValidator.isValid(values[1], RegExRule.cidrV6)) :
                    false;
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.ip, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function cusipValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            var controlValue = control.value.toUpperCase();
            let isValid = RegexValidator.isValid(controlValue, RegExRule.cusip);
            if (isValid) {
                let numericValues = controlValue.split("").map((value) => {
                    var charCode = value.charCodeAt(0);
                    return charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ? charCode - "A".charCodeAt(0) + 10 : value;
                });
                let totalCount = 0;
                for (var i = 0; i < numericValues.length - 1; i++) {
                    var numericValue = parseInt(numericValues[i], 10);
                    if (i % 2 !== 0) {
                        numericValue *= 2;
                    }
                    if (numericValue > 9) {
                        numericValue -= 9;
                    }
                    totalCount += numericValue;
                }
                totalCount = (10 - (totalCount % 10)) % 10;
                isValid = totalCount == numericValues[numericValues.length - 1];
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.cusip, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function gridValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let controlValue = control.value.toUpperCase();
            var isValid = RegexValidator.isValid(controlValue, RegExRule.grid);
            if (isValid) {
                controlValue = controlValue.replace(/\s/g, '').replace(/-/g, '');
                if ('GRID:' === controlValue.substr(0, 5)) {
                    controlValue = controlValue.substr(5);
                }
                let alphaNums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var alphaNumLength = alphaNums.length, length = controlValue.length, check = Math.floor(alphaNumLength / 2);
                for (var i = 0; i < length; i++) {
                    check = (((check || alphaNumLength) * 2) % (alphaNumLength + 1) + alphaNums.indexOf(controlValue.charAt(i))) % alphaNumLength;
                }
                isValid = (check === 1);
            }
            if (!isValid)
                return ObjectMaker.toJson(AnnotationTypes.grid, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function dateValidator(configModel) {
    return (control) => {
        return validateDate(control, configModel, AnnotationTypes.date);
    };
}

function runCondition$1(leftValue, rightValue, operator) {
    let result = false;
    switch (operator) {
        case OPERATORS.lessThan:
        case OPERATORS.greaterThan:
            result = leftValue > rightValue;
            break;
        case OPERATORS.lessThanEqualTo:
        case OPERATORS.greaterThanEqualTo:
            result = leftValue >= rightValue;
            break;
    }
    return result;
}
function isValid$1(control, config) {
    return config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
}
function getTime(value) {
    let splitTime = (value) ? value.split(':') : [];
    return new Date(1970, 0, 1, splitTime[0] ? splitTime[0] : 0, splitTime[1] ? splitTime[1] : 0, splitTime[2] ? splitTime[2] : 0).getTime();
}
function timeChecker(control, config, operationType) {
    config = getConfigObject(config, control);
    if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
            if (isValid$1(control, config)) {
                let crossFormControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
                let crossControlValue = crossFormControl ? getTime(crossFormControl.value) : getTime(config.value);
                let currentControlValue = getTime(control.value);
                let isValid = operationType == AnnotationTypes.minTime ? runCondition$1(currentControlValue, crossControlValue, config.operator || OPERATORS.greaterThanEqualTo) : runCondition$1(crossControlValue, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
                if (!isValid)
                    return ObjectMaker.toJson(operationType, config, [control.value]);
            }
            else
                return ObjectMaker.toJson(operationType, config, [control.value]);
        }
    }
    return ObjectMaker.null();
}

function minTimeValidator(configModel) {
    return (control) => {
        return timeChecker(control, configModel, AnnotationTypes.minTime);
    };
}

function maxTimeValidator(configModel) {
    return (control) => {
        return timeChecker(control, configModel, AnnotationTypes.maxTime);
    };
}

function requiredTrueValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (FormProvider.ProcessRule(control, config)) {
            if (control.value !== true) {
                return ObjectMaker.toJson(AnnotationTypes.requiredTrue, config, []);
            }
        }
        return ObjectMaker.null();
    };
}

function maskValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (!control[VALIDATOR_CONFIG] || !control[VALIDATOR_CONFIG][AnnotationTypes.mask])
            ApplicationUtil.configureControl(control, config, AnnotationTypes.mask);
        return null;
    };
}

const APP_VALIDATORS = {
    "alphaNumeric": alphaNumericValidator,
    "alpha": alphaValidator,
    "compare": compareValidator,
    "email": emailValidator,
    "hexColor": hexColorValidator,
    "lowerCase": lowercaseValidator,
    "maxDate": maxDateValidator,
    "maxNumber": maxNumberValidator,
    "minDate": minDateValidator,
    "minNumber": minNumberValidator,
    "contains": containsValidator,
    "upperCase": uppercaseValidator,
    "maxLength": maxLengthValidator,
    "minLength": minLengthValidator,
    "password": passwordValidator,
    "range": rangeValidator,
    "required": requiredValidator,
    "creditCard": creditCardValidator,
    "digit": digitValidator,
    "pattern": patternValidator,
    "time": timeValidator,
    "url": urlValidator,
    "json": jsonValidator,
    "greaterThan": greaterThanValidator,
    "greaterThanEqualTo": greaterThanEqualToValidator,
    "lessThan": lessThanValidator,
    "lessThanEqualTo": lessThanEqualToValidator,
    "choice": choiceValidator,
    "different": differentValidator,
    "numeric": numericValidator,
    "even": evenValidator,
    "odd": oddValidator,
    "factor": factorValidator,
    "leapYear": leapYearValidator,
    "allOf": allOfValidator,
    "oneOf": oneOfValidator,
    "noneOf": noneOfValidator,
    "mac": macValidator,
    "ascii": asciiValidator,
    "dataUri": dataUriValidator,
    "port": portValidator,
    "latLong": latLongValidator,
    "extension": extensionValidator,
    "fileSize": fileSizeValidator,
    "endsWith": endsWithValidator,
    "startsWith": startsWithValidator,
    "primeNumber": primeNumberValidator,
    "latitude": latitudeValidator,
    "longitude": longitudeValidator,
    "compose": composeValidator,
    "rule": ruleValidator,
    "file": fileValidator,
    "unique": uniqueValidator,
    "image": imageValidator,
    "notEmpty": notEmptyValidator,
    "ip": ipValidator,
    "cusip": cusipValidator,
    "grid": gridValidator,
    "date": dateValidator,
    "minTime": minTimeValidator,
    "maxTime": maxTimeValidator,
    "requiredTrue": requiredTrueValidator,
    "mask": maskValidator
};

function andValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let validatorNames = Object.keys(config.validation);
            let failed = false;
            for (var validatorName of validatorNames) {
                failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                if (failed)
                    break;
            }
            if (failed)
                return ObjectMaker.toJson(AnnotationTypes.and, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function orValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let validatorNames = Object.keys(config.validation);
            let failed = false;
            for (var validatorName of validatorNames) {
                failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                if (!failed)
                    break;
            }
            if (failed)
                return ObjectMaker.toJson(AnnotationTypes.or, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

function notValidator(configModel) {
    return (control) => {
        let config = getConfigObject(configModel, control);
        if (ValidatorValueChecker.pass(control, config)) {
            let validatorNames = Object.keys(config.validation);
            let failed = false;
            for (var validatorName of validatorNames) {
                failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
                if (!failed)
                    break;
            }
            if (!failed)
                return ObjectMaker.toJson(AnnotationTypes.not, config, [control.value]);
        }
        return ObjectMaker.null();
    };
}

const LOGICAL_VALIDATORS = { and: andValidator, or: orValidator, not: notValidator };
const ASYNC = "async";
const ENTITY_OBJECT = "entityObject";
let RxFormBuilder = class RxFormBuilder extends BaseFormBuilder {
    constructor() {
        super();
        this.conditionalObjectProps = [];
        this.conditionalValidationInstance = {};
        this.builderConfigurationConditionalObjectProps = [];
        this.formGroupPropOtherValidator = {};
        this.currentFormGroupPropOtherValidator = {};
        this.isNested = false;
        this.isGroupCalled = false;
        this.isNestedBinding = false;
    }
    getInstanceContainer(instanceFunc, entityObject) {
        return this.instaceProvider(instanceFunc, entityObject);
    }
    setValue(formGroup, object) {
        for (var col in object) {
            var control = formGroup.get([col]);
            control.setValue(object[col]);
            control.updateValueAndValidity();
        }
    }
    extractExpressions(fomrBuilderConfiguration) {
        if (fomrBuilderConfiguration && fomrBuilderConfiguration.dynamicValidation) {
            for (var property in fomrBuilderConfiguration.dynamicValidation) {
                for (var decorator in fomrBuilderConfiguration.dynamicValidation[property]) {
                    if (fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression) {
                        let columns = Linq.expressionColumns(fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression);
                        defaultContainer.addChangeValidation(this.conditionalValidationInstance, property, columns);
                    }
                }
            }
        }
        return null;
    }
    addAsyncValidation(property, propertyValidators, propValidationConfig) {
        let asyncValidators = [];
        if (propertyValidators) {
            for (let propertyValidator of propertyValidators) {
                if (propertyValidator.isAsync)
                    propertyValidator.config.forEach(t => { asyncValidators.push(t); });
            }
        }
        if (propValidationConfig && propValidationConfig[ASYNC]) {
            propValidationConfig[ASYNC].forEach(t => { asyncValidators.push(t); });
        }
        return asyncValidators;
    }
    addFormControl(property, propertyValidators, propValidationConfig, instance, entity) {
        let validators = [];
        let columns = [];
        if ((instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]) || (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name])) {
            let props = [];
            if ((instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]))
                instance.conditionalValidationProps[property.name].forEach(t => props.push(t));
            if (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name])
                this.conditionalValidationInstance.conditionalValidationProps[property.name].forEach(t => props.push(t));
            validators.push(conditionalChangeValidator(props));
        }
        if (this.conditionalObjectProps.length > 0 || this.builderConfigurationConditionalObjectProps.length > 0) {
            let propConditions = [];
            if (this.conditionalObjectProps)
                propConditions = this.conditionalObjectProps.filter(t => t.propName == property.name);
            if (this.builderConfigurationConditionalObjectProps)
                this.builderConfigurationConditionalObjectProps.filter(t => t.propName == property.name).forEach(t => propConditions.push(t));
            propConditions.forEach(t => {
                if (t.referencePropName && columns.indexOf(t.referencePropName) == -1)
                    columns.push(t.referencePropName);
            });
            if (columns.length > 0)
                validators.push(conditionalChangeValidator(columns));
        }
        for (let propertyValidator of propertyValidators) {
            if (!propertyValidator.isAsync)
                switch (propertyValidator.annotationType) {
                    case AnnotationTypes.rule:
                        validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config, entity));
                        break;
                    case AnnotationTypes.and:
                    case AnnotationTypes.or:
                    case AnnotationTypes.not:
                        validators.push(LOGICAL_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                        break;
                    default:
                        validators.push(APP_VALIDATORS[propertyValidator.annotationType](propertyValidator.config));
                        break;
                }
        }
        if (propValidationConfig)
            this.additionalValidation(validators, propValidationConfig);
        if (this.currentFormGroupPropOtherValidator[property.name])
            this.currentFormGroupPropOtherValidator[property.name].forEach(t => { validators.push(t); });
        return validators;
    }
    additionalValidation(validations, propValidationConfig) {
        for (var col in AnnotationTypes) {
            if (propValidationConfig[AnnotationTypes[col]] && col != "custom") {
                validations.push(APP_VALIDATORS[AnnotationTypes[col]](propValidationConfig[AnnotationTypes[col]]));
            }
            else if (col == AnnotationTypes.custom && propValidationConfig[AnnotationTypes[col]])
                validations.push(propValidationConfig[col]);
        }
    }
    getEntity(object, formBuilderConfiguration, propertyName, isSameObjectConstructor = false) {
        if (formBuilderConfiguration && formBuilderConfiguration.genericEntities && formBuilderConfiguration.genericEntities[propertyName])
            return formBuilderConfiguration.genericEntities[propertyName];
        return isSameObjectConstructor ? object.constructor : undefined;
    }
    getObjectPropertyInstance(object, propertyInfo, formBuilderConfiguration) {
        if (propertyInfo.propertyType == OBJECT_PROPERTY && object[propertyInfo.name])
            return object[propertyInfo.name].constructor;
        else if (propertyInfo.propertyType == ARRAY_PROPERTY && object[propertyInfo.name] && object[propertyInfo.name].length > 0)
            return object[propertyInfo.name][0].constructor;
        return this.getEntity(object, formBuilderConfiguration, propertyInfo.name);
    }
    checkObjectPropAdditionalValidation(instanceContainer, object, formBuilderConfiguration) {
        var props = instanceContainer.properties.filter(t => t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY);
        props.forEach(t => {
            let entity = t.entity;
            if (!t.entity)
                entity = this.getObjectPropertyInstance(object, t, formBuilderConfiguration);
            if (entity) {
                let instance = this.getInstanceContainer(entity, null);
                if (instance && instance.conditionalValidationProps) {
                    for (var key in instance.conditionalValidationProps) {
                        var prop = instanceContainer.properties.filter(t => t.name == key)[0];
                        if (prop) {
                            if (!instanceContainer.conditionalValidationProps)
                                instanceContainer.conditionalValidationProps = {};
                            if (!instanceContainer.conditionalValidationProps[key])
                                instanceContainer.conditionalValidationProps[key] = [];
                            instance.conditionalValidationProps[key].forEach(x => {
                                if (t.propertyType != ARRAY_PROPERTY)
                                    instanceContainer.conditionalValidationProps[key].push([t.name, x].join('.'));
                                else
                                    instanceContainer.conditionalValidationProps[key].push([t.name, x].join('[]'));
                            });
                        }
                    }
                }
            }
        });
    }
    getObject(model, entityObject, formBuilderConfiguration) {
        let json = {};
        if (typeof model == FUNCTION_STRING)
            json.model = model;
        if (typeof model == FUNCTION_STRING && (entityObject instanceof FormBuilderConfiguration)) {
            json.entityObject = this.createClassObject(json.model, entityObject);
        }
        if (entityObject && !(entityObject instanceof FormBuilderConfiguration))
            json.entityObject = entityObject;
        if (entityObject instanceof FormBuilderConfiguration && !formBuilderConfiguration)
            json.formBuilderConfiguration = entityObject;
        else if (!(entityObject instanceof FormBuilderConfiguration) && formBuilderConfiguration) {
            json.formBuilderConfiguration = formBuilderConfiguration;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, json.entityObject);
        }
        if (!entityObject) {
            if (typeof model == OBJECT_STRING)
                json.model = model.constructor;
            json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, model);
        }
        else if (model && (entityObject instanceof FormBuilderConfiguration) && (typeof model == OBJECT_STRING)) {
            json[MODEL] = model.constructor;
            json[ENTITY_OBJECT] = this.createClassObject(json.model, json.formBuilderConfiguration, model);
        }
        return json;
    }
    control(value, validators, asyncValidators) {
        return new RxFormControl(value, validators, asyncValidators, {}, {}, '', []);
    }
    array(values, validatorConfig) {
        let formArray = this.group({ temp: values }, validatorConfig).get("temp");
        var formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]();
        return formBuilder.array(formArray.controls);
    }
    group(groupObject, validatorConfig) {
        let modelInstance = super.createInstance();
        let entityObject = {};
        this.formGroupPropOtherValidator = {};
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig);
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.isGroupCalled = true;
        let formGroup = this.formGroup(modelInstance.constructor, entityObject, validatorConfig);
        this.isGroupCalled = false;
        this.formGroupPropOtherValidator = {};
        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
        this.formGroupPropOtherValidator = {};
        return formGroup;
    }
    applyAllPropValidator(propName, validatorConfig, modelInstance) {
        if (validatorConfig && validatorConfig.applyAllProps) {
            if (!(validatorConfig.excludeProps && validatorConfig.excludeProps.length > 0 && validatorConfig.excludeProps.indexOf(propName) == -1)) {
                validatorConfig.applyAllProps.forEach((t) => {
                    if (t.name == RX_WEB_VALIDATOR) {
                        t(propName, modelInstance);
                    }
                    else {
                        if (!this.currentFormGroupPropOtherValidator[propName])
                            this.currentFormGroupPropOtherValidator[propName] = [];
                        this.currentFormGroupPropOtherValidator[propName].push(t);
                    }
                });
            }
        }
    }
    dynamicValidationPropCheck(propName, validatorConfig) {
        return (validatorConfig == undefined) ? true : (!validatorConfig.dynamicValidationConfigurationPropertyName) ? true : validatorConfig.dynamicValidationConfigurationPropertyName == propName ? false : true;
    }
    isNotObject(value) {
        return value instanceof Date || value === null || typeof value != OBJECT_STRING;
    }
    createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig) {
        for (var propName in groupObject) {
            var prop = groupObject[propName];
            if (prop instanceof Array && prop.length > 0 && this.isNotObject(prop[0])) {
                let propValidators = (prop.length > 1 && prop[1] instanceof Array) ? prop[1] : (prop.length == 2) ? [prop[1]] : [];
                let propertyAdded = false;
                for (var i = 0; i < propValidators.length; i++) {
                    if (propValidators[i].name == RX_WEB_VALIDATOR) {
                        propValidators[i](propName, modelInstance);
                        propertyAdded = true;
                    }
                    else {
                        if (!this.currentFormGroupPropOtherValidator[propName])
                            this.currentFormGroupPropOtherValidator[propName] = [];
                        this.currentFormGroupPropOtherValidator[propName].push(propValidators[i]);
                    }
                }
                if (!propertyAdded)
                    defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : { constructor: modelInstance });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            }
            else if (prop === null || prop === undefined || typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : { constructor: modelInstance });
                this.applyAllPropValidator(propName, validatorConfig, modelInstance);
            }
            else if (prop instanceof Array) {
                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    entityObject[propName] = prop;
                }
                else {
                    let propModelInstance = super.createInstance();
                    if (typeof modelInstance == "function")
                        modelInstance.constructor = modelInstance;
                    defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, propModelInstance.constructor, modelInstance);
                    entityObject[propName] = [];
                    for (let row of prop) {
                        let jObject = {};
                        entityObject[propName].push(jObject);
                        this.createValidatorFormGroup(row, jObject, propModelInstance.constructor, validatorConfig);
                    }
                }
            }
            else if (typeof prop == OBJECT_STRING && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl)) {
                let formGroup = (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) ? prop.controls[0] : prop;
                if (!formGroup.model && (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || prop instanceof RxFormGroup)) {
                    formGroup = this.group(formGroup.controls);
                }
                if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || prop instanceof RxFormGroup) {
                    entityObject[propName] = prop;
                    defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, formGroup.model, modelInstance);
                }
                else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                    entityObject[propName] = prop;
                    defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, formGroup.model, modelInstance);
                }
                else {
                    if (this.dynamicValidationPropCheck(propName, validatorConfig)) {
                        this.formGroupPropOtherValidator[propName] = {};
                        this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[propName];
                        let propModelInstance = super.createInstance();
                        entityObject[propName] = {};
                        entityObject[propName].constructor = propModelInstance.constructor;
                        defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, entityObject[propName].constructor, modelInstance.constructor == Function ? { constructor: modelInstance } : modelInstance);
                        let objectValidationConfig = this.getValidatorConfig(validatorConfig, groupObject, propName + ".");
                        this.createValidatorFormGroup(groupObject[propName], entityObject[propName], entityObject[propName].constructor, objectValidationConfig);
                    }
                    else
                        entityObject[propName] = groupObject[propName];
                }
            }
            if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN || prop instanceof Date) {
                entityObject[propName] = prop;
            }
            else if ((prop && prop.length > 0 && this.isNotObject(prop[0]) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]))) {
                entityObject[propName] = prop[0];
            }
            else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                entityObject[propName] = prop;
            }
            else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || prop instanceof RxFormControl) {
                entityObject[propName] = prop;
                defaultContainer.initPropertyObject(propName, PROPERTY, undefined, modelInstance.constructor ? modelInstance : { constructor: modelInstance });
            }
        }
    }
    getValidatorConfig(validatorConfig, entityObject, rootPropertyName, arrayPropertyName) {
        let validationProps = {};
        let excludeProps = [];
        let includeProps = [];
        let ignoreUndefinedProps = [];
        if (validatorConfig) {
            for (var propName in validatorConfig.dynamicValidation) {
                if (propName.indexOf(rootPropertyName) != -1 || (arrayPropertyName && propName.indexOf(arrayPropertyName) != -1)) {
                    let splitProp = propName.split(".")[1];
                    if (splitProp)
                        validationProps[splitProp] = validatorConfig.dynamicValidation[propName];
                }
            }
            if (validatorConfig.excludeProps)
                excludeProps = this.getProps(validatorConfig.excludeProps, rootPropertyName);
            if (validatorConfig.includeProps)
                includeProps = this.getProps(validatorConfig.includeProps, rootPropertyName);
            if (validatorConfig.ignoreUndefinedProps)
                ignoreUndefinedProps = this.getProps(validatorConfig.ignoreUndefinedProps, rootPropertyName, true);
            return { ignoreUndefinedProps: ignoreUndefinedProps, includeProps: includeProps, dynamicValidation: (validatorConfig.dynamicValidationConfigurationPropertyName && entityObject[validatorConfig.dynamicValidationConfigurationPropertyName]) ? entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] : validationProps, excludeProps: excludeProps };
        }
        return {};
    }
    getProps(properties, rootPropertyName, isIgnoreProp = false) {
        let props = [];
        for (let prop of properties) {
            if (prop.indexOf(rootPropertyName) != -1) {
                let splitProps = prop.split(".");
                if (splitProps.length == 2) {
                    props.push(splitProps[1]);
                }
                else if (splitProps.length > 2) {
                    splitProps.splice(0, 1);
                    props.push(splitProps.join("."));
                }
            }
        }
        if (isIgnoreProp && properties.filter(x => x == rootPropertyName.replace('.', '')).length == 1)
            props.push(':self:');
        return props;
    }
    formGroup(model, entityObject, formBuilderConfiguration) {
        let json = this.getObject(model, entityObject, formBuilderConfiguration);
        model = json.model;
        entityObject = json.entityObject;
        if (entityObject.constructor != model && !this.isGroupCalled) {
            entityObject = json.entityObject = this.updateObject(model, json.entityObject, formBuilderConfiguration);
        }
        formBuilderConfiguration = json.formBuilderConfiguration;
        if (formBuilderConfiguration)
            this.extractExpressions(formBuilderConfiguration);
        let instanceContainer = this.getInstanceContainer(model, entityObject);
        this.checkObjectPropAdditionalValidation(instanceContainer, entityObject, formBuilderConfiguration);
        let formGroupObject = {};
        var additionalValidations = {};
        instanceContainer.properties.forEach(property => {
            let isIncludeProp = true;
            if (formBuilderConfiguration) {
                if (formBuilderConfiguration.excludeProps && formBuilderConfiguration.excludeProps.length > 0)
                    isIncludeProp = formBuilderConfiguration.excludeProps.indexOf(property.name) == -1;
                if (formBuilderConfiguration.dynamicValidation)
                    additionalValidations = formBuilderConfiguration.dynamicValidation;
                if (formBuilderConfiguration.includeProps && formBuilderConfiguration.includeProps.length > 0)
                    isIncludeProp = formBuilderConfiguration.includeProps.indexOf(property.name) != -1;
                if (formBuilderConfiguration.ignoreUndefinedProps && formBuilderConfiguration.ignoreUndefinedProps.length > 0) {
                    isIncludeProp = !(property.propertyType == PROPERTY && !RegexValidator.isNotBlank(json.entityObject[property.name]) && (formBuilderConfiguration.ignoreUndefinedProps.indexOf(property.name) !== -1 || formBuilderConfiguration.ignoreUndefinedProps.indexOf(":self:") !== -1));
                }
            }
            if (property.ignore)
                isIncludeProp = !property.ignore.call(json.entityObject, json.entityObject);
            if (isIncludeProp) {
                switch (property.propertyType) {
                    case PROPERTY:
                        if (!(entityObject[property.name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"] || entityObject[property.name] instanceof RxFormControl)) {
                            var propertyValidators = instanceContainer.propertyAnnotations.filter(t => t.propertyName == property.name);
                            let sanitizeValue = super.sanitizeValue(instanceContainer, property.name, super.getDefaultValue(property, entityObject[property.name], formBuilderConfiguration), json.entityObject, Object.assign({}, json.entityObject));
                            if (entityObject[property.name] === undefined && sanitizeValue)
                                entityObject[property.name] = sanitizeValue;
                            let validators = this.addFormControl(property, propertyValidators, additionalValidations[property.name], instanceContainer, entityObject);
                            let abstractControlOptions = { validators: validators, asyncValidators: this.addAsyncValidation(property, propertyValidators, additionalValidations[property.name]) };
                            if (formBuilderConfiguration && formBuilderConfiguration.abstractControlOptions && formBuilderConfiguration.abstractControlOptions[property.name])
                                abstractControlOptions.updateOn = formBuilderConfiguration.abstractControlOptions[property.name];
                            formGroupObject[property.name] = new RxFormControl(sanitizeValue, abstractControlOptions, [], json.entityObject, Object.assign({}, json.entityObject), property.name, instanceContainer.sanitizers[property.name]);
                            this.isNested = false;
                        }
                        else
                            formGroupObject[property.name] = super.getDefaultValue(property, entityObject[property.name], formBuilderConfiguration);
                        break;
                    case OBJECT_PROPERTY:
                        let objectValue = entityObject[property.name];
                        if (objectValue && objectValue instanceof Object && !(objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || objectValue instanceof RxFormGroup)) {
                            this.isNestedBinding = this.isNested = true;
                            if (instanceContainer && instanceContainer.conditionalObjectProps)
                                this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(t => t.objectPropName == property.name);
                            if (this.conditionalValidationInstance && this.conditionalValidationInstance.conditionalObjectProps)
                                this.builderConfigurationConditionalObjectProps = this.conditionalValidationInstance.conditionalObjectProps.filter(t => t.objectPropName == property.name);
                            if (this.formGroupPropOtherValidator[property.name])
                                this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[property.name];
                            let objectValidationConfig = this.getValidatorConfig(formBuilderConfiguration, objectValue, `${property.name}.`);
                            let entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                            formGroupObject[property.name] = this.formGroup(entity || property.entity || this.getEntity(objectValue, formBuilderConfiguration, property.name, true), objectValue, objectValidationConfig);
                            this.conditionalObjectProps = [];
                            this.builderConfigurationConditionalObjectProps = [];
                            this.isNestedBinding = this.isNested = false;
                        }
                        else if (objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] || objectValue instanceof RxFormGroup)
                            formGroupObject[property.name] = objectValue;
                        break;
                    case ARRAY_PROPERTY:
                        let arrayObjectValue = entityObject[property.name];
                        if (arrayObjectValue && arrayObjectValue instanceof Array && !(arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])) {
                            this.isNestedBinding = this.isNested = true;
                            var formArrayGroup = [];
                            let index = 0;
                            let entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
                            let objectValidationConfig = null;
                            for (let subObject of arrayObjectValue) {
                                if (instanceContainer && instanceContainer.conditionalObjectProps)
                                    this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(t => t.objectPropName == property.name && t.arrayIndex == index);
                                if (this.conditionalValidationInstance && this.conditionalValidationInstance.conditionalObjectProps)
                                    this.builderConfigurationConditionalObjectProps = this.conditionalValidationInstance.conditionalObjectProps.filter(t => t.objectPropName == property.name && t.arrayIndex == index);
                                if (this.formGroupPropOtherValidator[property.name])
                                    this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[property.name];
                                objectValidationConfig = this.getValidatorConfig(formBuilderConfiguration, subObject, `${property.name}.`, `${property.name}[${index}].`);
                                formArrayGroup.push(this.formGroup(entity || property.entity || this.getEntity(subObject, formBuilderConfiguration, property.name, true), subObject, objectValidationConfig));
                                index++;
                                this.conditionalObjectProps = [];
                                this.builderConfigurationConditionalObjectProps = [];
                            }
                            formGroupObject[property.name] = new RxFormArray(arrayObjectValue, formArrayGroup, null, null, property.arrayConfig);
                            if (ReactiveFormConfig.autoInstancePush) {
                                arrayObjectValue.push = (instance) => { let formGroup = this.formGroup(instance.constructor, instance, objectValidationConfig); formGroupObject[property.name].push(formGroup, true); return 0; };
                                arrayObjectValue.splice = (start, deleteCount) => {
                                    let end = start + deleteCount;
                                    for (var i = start; i <= end; i++) {
                                        formGroupObject[property.name].removeAt(i, true);
                                    }
                                    return [];
                                };
                            }
                            this.isNestedBinding = this.isNested = false;
                        }
                        else if (arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])
                            formGroupObject[property.name] = arrayObjectValue;
                        else if (property.arrayConfig && property.arrayConfig.createBlank)
                            formGroupObject[property.name] = new RxFormArray([], [], null, null, property.arrayConfig);
                        break;
                }
            }
        });
        if (!this.isNested) {
            this.conditionalValidationInstance = {};
            this.builderConfigurationConditionalObjectProps = [];
        }
        let formGroup = new RxFormGroup(json.model, json.entityObject, formGroupObject, undefined);
        if (!this.isNestedBinding && !this.isGroupCalled)
            formGroup.refreshDisable();
        return formGroup;
    }
};
RxFormBuilder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RxFormBuilder);

class BaseDirective {
    applyValidations(controls, model = null) {
        if (this.model) {
            let modelConfig = defaultContainer.get(model || this.model.constructor);
            if (modelConfig) {
                modelConfig.properties.forEach(property => {
                    if (controls[property.name]) {
                        switch (property.propertyType) {
                            case PROPERTY:
                                this.setValidatorConfig(controls[property.name], modelConfig, property);
                                break;
                            case OBJECT_PROPERTY:
                                this.applyValidations(controls[property.name].controls, property.entity);
                                break;
                        }
                    }
                });
            }
        }
    }
    setValidatorConfig(control, modelConfig, property) {
        let annotations = modelConfig.propertyAnnotations.filter(t => t.propertyName == property.name);
        annotations.forEach(annotation => {
            if (!control[TEMPLATE_VALIDATION_CONFIG])
                control[TEMPLATE_VALIDATION_CONFIG] = {};
            ApplicationUtil.configureControl(control, annotation.config ? annotation.config : "", annotation.annotationType);
        });
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BaseDirective.prototype, "model", void 0);

let RxwebFormDirective = class RxwebFormDirective extends BaseDirective {
    constructor() {
        super(...arguments);
        this.clearTimeoutNumber = 0;
        this.validationRule = {};
    }
    ngAfterContentInit() {
        if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent == null) {
            this.expressionProcessor(this.formGroup.controls);
            this.setConditionalValidator(this.formGroup.controls);
        }
        else if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
            this.expressionProcessor(this.formGroup.controls);
            this.setConditionalValidator(this.formGroup.controls);
        }
        else if (this.ngForm) {
            this.configureModelValidations();
        }
    }
    configureModelValidations() {
        this.clearTimeoutNumber = setTimeout(() => {
            clearTimeout(this.clearTimeoutNumber);
            this.applyValidations(this.ngForm.form.controls);
            this.expressionProcessor(this.ngForm.form.controls);
            this.setConditionalValidator(this.ngForm.form.controls);
            this.updateValueAndValidity(this.ngForm.form.controls);
        }, 500);
    }
    updateValueAndValidity(controls) {
        Object.keys(controls).forEach(key => {
            if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
                this.updateValueAndValidity(controls[key].controls);
            else if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"])
                this.updateValueAndValidity(controls[key].controls);
            else
                controls[key].updateValueAndValidity();
        });
    }
    expressionProcessor(controls, rootFieldName = "") {
        Object.keys(controls).forEach(fieldName => {
            let formControl = controls[fieldName];
            if (formControl.validatorConfig) {
                Object.keys(AnnotationTypes).forEach(validatorName => {
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].disableExpression) {
                        formControl["disableExpression"] = formControl.validatorConfig[validatorName].disableExpression;
                        let columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].disableExpression);
                        defaultContainer.addChangeValidation(this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].conditionalExpression) {
                        let columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].conditionalExpression);
                        defaultContainer.addChangeValidation(this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].dynamicConfig) {
                        let columns = Linq.dynamicConfigParser(formControl.validatorConfig[validatorName].dynamicConfig, fieldName);
                        defaultContainer.addChangeValidation(this.validationRule, rootFieldName + fieldName, columns);
                    }
                    if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.and || validatorName == AnnotationTypes.or || validatorName == AnnotationTypes.not)) {
                        Object.keys(formControl.validatorConfig[validatorName].validation).forEach(t => {
                            if (typeof formControl.validatorConfig[validatorName].validation[t] !== "boolean")
                                defaultContainer.setLogicalConditional(this.validationRule, t, formControl.validatorConfig[validatorName].validation[t].fieldName, fieldName);
                        });
                    }
                    else if (formControl.validatorConfig[validatorName] && ((validatorName == AnnotationTypes.compare || validatorName == AnnotationTypes.greaterThan || validatorName == AnnotationTypes.greaterThanEqualTo || validatorName == AnnotationTypes.lessThan || validatorName == AnnotationTypes.lessThanEqualTo || validatorName == AnnotationTypes.different || validatorName == AnnotationTypes.factor || validatorName == AnnotationTypes.minTime || validatorName == AnnotationTypes.maxTime) || (validatorName == AnnotationTypes.creditCard && formControl.validatorConfig[validatorName].fieldName) || ((validatorName == AnnotationTypes.minDate || validatorName == AnnotationTypes.maxDate) && formControl.validatorConfig[validatorName].fieldName))) {
                        defaultContainer.setConditionalValueProp(this.validationRule, formControl.validatorConfig[validatorName].fieldName, fieldName);
                    }
                });
            }
            else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
                this.expressionProcessor(formControl.controls, `${fieldName}.`);
            }
            else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                if (formControl.controls)
                    formControl.controls.forEach((t, i) => {
                        if (t.controls)
                            this.expressionProcessor(t.controls, `${fieldName}[]`);
                    });
            }
        });
    }
    setConditionalValidator(controls) {
        Object.keys(controls).forEach(fieldName => {
            if (this.validationRule.conditionalValidationProps && this.validationRule.conditionalValidationProps[fieldName]) {
                controls[fieldName][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(this.validationRule.conditionalValidationProps[fieldName]);
            }
            else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"] && this.validationRule.conditionalObjectProps) {
                var fields = this.validationRule.conditionalObjectProps.filter(t => t.objectPropName == fieldName);
                let nestedFormGroup = controls[fieldName];
                let propWiseConditionalControls = {};
                fields.forEach(x => {
                    if (!propWiseConditionalControls[x.propName])
                        propWiseConditionalControls[x.propName] = [];
                    propWiseConditionalControls[x.propName].push(x.referencePropName);
                });
                Object.keys(propWiseConditionalControls).forEach(key => {
                    nestedFormGroup.controls[key][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(propWiseConditionalControls[key]);
                });
            }
            else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]) {
                //fix https://github.com/rxweb/rxweb/issues/274
                controls[fieldName].controls.forEach((t, i) => {
                    if (t.controls == undefined)
                        this.setConditionalValidator({ [i]: t });
                    else
                        this.setConditionalValidator(t.controls);
                });
            }
        });
    }
    ngOnDestroy() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
], RxwebFormDirective.prototype, "formGroup", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rxwebForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxwebFormDirective.prototype, "ngForm", void 0);
RxwebFormDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[formGroup],[rxwebForm]',
    })
], RxwebFormDirective);

let DecimalProvider = class DecimalProvider {
    constructor(decimalPipe, localeId) {
        this.decimalPipe = decimalPipe;
        this.localeId = localeId;
        this.decimalSeperator = ".";
        this.groupSeperator = ",";
        this.isSetConfig = false;
        this.decimalSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NumberSymbol"].Decimal);
        this.groupSeperator = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["getLocaleNumberSymbol"])(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NumberSymbol"].Group);
        this.setSymbolInConfig();
    }
    replacer(value) {
        value = String(value);
        if (!this.isSetConfig)
            this.bindConfig();
        value = value.split(this.groupSeperator).join(BLANK);
        if (this.allowDecimalSymbol)
            value = value.replace(this.decimalSeperator, this.allowDecimalSymbol);
        var splitValue = value.split(this.decimalSeperator);
        value = (splitValue.length > 1 && splitValue[1] && RegexValidator.isZero(splitValue[1])) ? splitValue[0] : value;
        return value;
    }
    transFormDecimal(value, digitsInfo) {
        value = String(value);
        if (!value) {
            return value;
        }
        return this.decimalPipe.transform(value.replace(ReactiveFormConfig.number.groupSymbol, "").replace(this.decimalSeperator, "."), digitsInfo, this.localeId);
    }
    setSymbolInConfig() {
        ReactiveFormConfig.number = { decimalSymbol: this.decimalSeperator, groupSymbol: this.groupSeperator };
    }
    bindConfig() {
        if (ReactiveFormConfig.json) {
            if (ReactiveFormConfig.json.localeId)
                this.localeId = ReactiveFormConfig.json.localeId;
            if (ReactiveFormConfig.json.allowDecimalSymbol)
                this.allowDecimalSymbol = ReactiveFormConfig.json.allowDecimalSymbol;
        }
        this.isSetConfig = true;
    }
};
DecimalProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], String])
], DecimalProvider);

let HtmlControlTemplateDirective = class HtmlControlTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    ;
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('htmlControlTemplate'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HtmlControlTemplateDirective.prototype, "type", void 0);
HtmlControlTemplateDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[htmlControlTemplate]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
], HtmlControlTemplateDirective);

let ControlHostDirective = class ControlHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    set portal(context) {
        if (context.templateRef) {
            if (this.view) {
                this.view.destroy();
                this.view = undefined;
            }
            this.view = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
        }
    }
    ngOnDestroy() {
        if (this.view)
            this.view.destroy();
        if (this.viewContainerRef)
            this.viewContainerRef.clear();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('controlHost'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], ControlHostDirective.prototype, "portal", null);
ControlHostDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[controlHost]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
], ControlHostDirective);

class ControlExpressionProcess {
    constructor() {
        this.controlConfig = {};
        this.isProcessed = false;
    }
    setModelConfig(control) {
        this.isProcessed = true;
        if (this.controlConfig && this.controlConfig.validatorConfig) {
            control[VALIDATOR_CONFIG] = this.controlConfig.validatorConfig;
            this.controlConfig = undefined;
        }
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ControlExpressionProcess.prototype, "name", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ControlExpressionProcess.prototype, "formControlName", void 0);

class BaseValidator extends ControlExpressionProcess {
    constructor() {
        super(...arguments);
        this.validators = [];
    }
    validation(control) {
        let result = null;
        for (let validator of this.validators) {
            result = validator(control);
            if (result)
                break;
        }
        if (!result && this.maskProvider)
            result = this.maskProvider.validate();
        return result;
    }
    setEventName() {
        var eventName = '';
        switch (this.element.tagName) {
            case INPUT:
            case TEXTAREA:
                eventName = (this.element.type == CHECKBOX || this.element.type == RADIO || this.element.type == FILE) ? CHANGE : INPUT;
                break;
            case SELECT:
                eventName = CHANGE;
                break;
        }
        this.eventName = eventName.toLowerCase();
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], BaseValidator.prototype, "formControl", void 0);

class MaskProvider {
    constructor(input, mask, renderer, formControl, config) {
        this.input = input;
        this.mask = mask;
        this.renderer = renderer;
        this.formControl = formControl;
        this.config = config;
        this.eventListeners = [];
        this.type = 'text';
        this.slotChar = '_';
        this.autoClear = false;
        this.isInvalid = false;
        this.internalProcess = false;
        this.bind();
    }
    bind() {
        if (RegexValidator.isNotBlank(this.formControl.value))
            this.input.value = this.formControl.value;
        this.tests = [];
        this.partialPosition = this.mask.length;
        this.len = this.mask.length;
        this.firstNonMaskPos = null;
        this.defs = {
            '9': '[0-9]',
            'a': '[A-Za-z]',
            '*': '[A-Za-z0-9]'
        };
        this.androidChrome = false;
        let maskTokens = this.mask.split('');
        for (let i = 0; i < maskTokens.length; i++) {
            let c = maskTokens[i];
            if (c == '?') {
                this.len--;
                this.partialPosition = i;
            }
            else if (this.defs[c]) {
                this.tests.push(new RegExp(this.defs[c]));
                if (this.firstNonMaskPos === null) {
                    this.firstNonMaskPos = this.tests.length - 1;
                }
                if (i < this.partialPosition) {
                    this.lastRequiredNonMaskPos = this.tests.length - 1;
                }
            }
            else {
                this.tests.push(null);
            }
        }
        this.buffer = [];
        for (let i = 0; i < maskTokens.length; i++) {
            let c = maskTokens[i];
            if (c != '?') {
                if (this.defs[c])
                    this.buffer.push(this.getPlaceholder(i));
                else
                    this.buffer.push(c);
            }
        }
        this.defaultBuffer = this.buffer.join('');
        this.focusText = this.input.value;
        this.bindEvents();
        this.checkVal();
    }
    bindEvents() {
        this.eventListeners.push(this.renderer.listen(this.input, FOCUS, this.onFocus.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, BLUR, this.onBlur.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, KEY_DOWN, this.onKeyDown.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, KEY_PRESS, this.onKeyPress.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, "input", this.onInput.bind(this)));
        this.eventListeners.push(this.renderer.listen(this.input, PASTE, this.handleInputChange.bind(this)));
    }
    validate() {
        let config = getConfigObject(this.config, this.formControl);
        if (RegexValidator.isNotBlank(this.getUnmaskedValue()) && FormProvider.ProcessRule(this.formControl, config)) {
            if (this.isInvalid) {
                return ObjectMaker.toJson(AnnotationTypes.mask, config, [this.formControl.value]);
            }
        }
        return ObjectMaker.null();
    }
    writeValue(value) {
        this.value = value;
        if (this.input) {
            if (this.value == undefined || this.value == null) {
                this.input.value = '';
            }
            this.checkVal();
        }
        this.updateFilledState();
    }
    caret(first, last) {
        let range, begin, end;
        if (!this.input.offsetParent || this.input !== document.activeElement) {
            return;
        }
        if (typeof first == 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.input.setSelectionRange) {
                this.input.setSelectionRange(begin, end);
            }
            else if (this.input['createTextRange']) {
                range = this.input['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.input.setSelectionRange) {
                begin = this.input.selectionStart;
                end = this.input.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    }
    isCompleted() {
        for (let i = this.firstNonMaskPos; i <= this.lastRequiredNonMaskPos; i++) {
            if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
                return false;
            }
        }
        this.isInvalid = false;
        this.formControl.updateValueAndValidity();
        return true;
    }
    getPlaceholder(i) {
        if (i < this.slotChar.length) {
            return this.slotChar.charAt(i);
        }
        return this.slotChar.charAt(0);
    }
    seekNext(pos) {
        while (++pos < this.len && !this.tests[pos])
            ;
        return pos;
    }
    seekPrev(pos) {
        while (--pos >= 0 && !this.tests[pos])
            ;
        return pos;
    }
    shiftL(begin, end) {
        let i, j;
        if (begin < 0) {
            return;
        }
        for (i = begin, j = this.seekNext(end); i < this.len; i++) {
            if (this.tests[i]) {
                if (j < this.len && this.tests[i].test(this.buffer[j])) {
                    this.buffer[i] = this.buffer[j];
                    this.buffer[j] = this.getPlaceholder(j);
                }
                else {
                    break;
                }
                j = this.seekNext(j);
            }
        }
        this.writeBuffer();
        this.caret(Math.max(this.firstNonMaskPos, begin));
    }
    shiftR(pos) {
        let i, c, j, t;
        for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
            if (this.tests[i]) {
                j = this.seekNext(i);
                t = this.buffer[i];
                this.buffer[i] = c;
                if (j < this.len && this.tests[j].test(t)) {
                    c = t;
                }
                else {
                    break;
                }
            }
        }
    }
    handleAndroidInput(e) {
        var curVal = this.input.value;
        var pos = this.caret();
        if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
            this.checkVal(true);
            while (pos.begin > 0 && !this.tests[pos.begin - 1])
                pos.begin--;
            if (pos.begin === 0) {
                while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin])
                    pos.begin++;
            }
            this.caret(pos.begin, pos.begin);
        }
        else {
            var pos2 = this.checkVal(true);
            while (pos.begin < this.len && !this.tests[pos.begin])
                pos.begin++;
            this.caret(pos.begin, pos.begin);
        }
        if (this.isCompleted()) {
            this.isInvalid = false;
        }
        else {
            this.isInvalid = true;
            this.formControl.updateValueAndValidity();
        }
    }
    onBlur(e) {
        this.focus = false;
        this.checkVal();
        this.updateModel(e);
        this.updateFilledState();
        if (this.input.value != this.focusText) {
            let event = document.createEvent('HTMLEvents');
            event.initEvent('change', true, false);
            this.input.dispatchEvent(event);
            let maskedValue = this.input.value;
            this.formControl.setValue(this.getUnmaskedValue());
            this.input.value = maskedValue;
        }
    }
    onKeyDown(e) {
        let k = e.which || e.keyCode, pos, begin, end;
        let iPhone = false;
        this.oldVal = this.input.value;
        if (k === 8 || k === 46 || (iPhone )) {
            pos = this.caret();
            begin = pos.begin;
            end = pos.end;
            if (end - begin === 0) {
                begin = k !== 46 ? this.seekPrev(begin) : (end = this.seekNext(begin - 1));
                end = k === 46 ? this.seekNext(end) : end;
            }
            this.clearBuffer(begin, end);
            this.shiftL(begin, end - 1);
            this.setControlValue(e, false);
            this.updateModel(e);
            e.preventDefault();
        }
        else if (k === 13) {
            this.onBlur(e);
            this.setControlValue(e, false);
            this.updateModel(e);
        }
        else if (k === 27) {
            this.input.value = this.focusText;
            this.caret(0, this.checkVal());
            this.updateModel(e);
            this.setControlValue(e, false);
            e.preventDefault();
        }
    }
    onKeyPress(e) {
        var k = e.which || e.keyCode, pos = this.caret(), p, c, next, completed;
        if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
            return;
        }
        else if (k && k !== 13) {
            if (pos.end - pos.begin !== 0) {
                this.clearBuffer(pos.begin, pos.end);
                this.shiftL(pos.begin, pos.end - 1);
            }
            p = this.seekNext(pos.begin - 1);
            if (p < this.len) {
                c = String.fromCharCode(k);
                if (this.tests[p].test(c)) {
                    this.shiftR(p);
                    this.buffer[p] = c;
                    this.writeBuffer();
                    next = this.seekNext(p);
                    this.caret(next);
                    if (pos.begin <= this.lastRequiredNonMaskPos) {
                        completed = this.isCompleted();
                    }
                }
            }
            e.preventDefault();
        }
        this.updateModel(e);
        if (completed === undefined)
            completed = this.isCompleted();
        this.setControlValue(e, completed);
    }
    clearBuffer(start, end) {
        let i;
        for (i = start; i < end && i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
            }
        }
    }
    writeBuffer() {
        this.input.value = this.buffer.join('');
    }
    checkVal(allow) {
        let test = this.input.value, lastMatch = -1, i, c, pos;
        for (i = 0, pos = 0; i < this.len; i++) {
            if (this.tests[i]) {
                this.buffer[i] = this.getPlaceholder(i);
                while (pos++ < test.length) {
                    c = test.charAt(pos - 1);
                    if (this.tests[i].test(c)) {
                        this.buffer[i] = c;
                        lastMatch = i;
                        break;
                    }
                }
                if (pos > test.length) {
                    this.clearBuffer(i + 1, this.len);
                    break;
                }
            }
            else {
                if (this.buffer[i] === test.charAt(pos)) {
                    pos++;
                }
                if (i < this.partialPosition) {
                    lastMatch = i;
                }
            }
        }
        if (allow) {
            this.writeBuffer();
        }
        else if (lastMatch + 1 < this.partialPosition) {
            if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
                this.isInvalid = true;
            }
            else {
                this.isInvalid = true;
                this.writeBuffer();
            }
        }
        else {
            this.writeBuffer();
            this.input.value = this.input.value.substring(0, lastMatch + 1);
        }
        return (this.partialPosition ? i : this.firstNonMaskPos);
    }
    onFocus(event) {
        this.focus = true;
        clearTimeout(this.caretTimeoutId);
        let pos;
        this.focusText = this.input.value;
        pos = this.checkVal();
        this.caretTimeoutId = setTimeout(() => {
            if (this.input !== document.activeElement) {
                return;
            }
            this.writeBuffer();
            if (pos == this.mask.replace("?", "").length) {
                this.caret(0, pos);
            }
            else {
                this.caret(pos);
            }
            this.updateFilledState();
        }, 10);
    }
    onInput(event) {
        if (this.androidChrome)
            this.handleAndroidInput(event);
        else
            this.handleInputChange(event);
    }
    setControlValue(e, isValid) {
        this.isInvalid = !isValid;
        let value = this.input.value;
        let controlValue = '';
        if (!this.isInvalid)
            controlValue = this.getUnmaskedValue();
        this.formControl.setValue(controlValue);
        this.input.value = value;
        if (!isValid)
            this.onFocus(e);
    }
    handleInputChange(event) {
        setTimeout(() => {
            var pos = this.checkVal(true);
            this.caret(pos);
            this.updateModel(event);
            this.setControlValue(event, this.isCompleted());
        }, 0);
    }
    getUnmaskedValue() {
        let unmaskedBuffer = [];
        for (let i = 0; i < this.buffer.length; i++) {
            let c = this.buffer[i];
            if (this.tests[i] && c != this.getPlaceholder(i)) {
                unmaskedBuffer.push(c);
            }
        }
        return unmaskedBuffer.join('');
    }
    updateModel(e) {
    }
    updateFilledState() {
        this.filled = this.input && this.input.value != '';
    }
    onDestroy() {
        let eventCount = this.eventListeners.length;
        for (var i = 0; i < eventCount; i++) {
            this.eventListeners[0]();
            this.eventListeners.splice(0, 1);
        }
        this.eventListeners = [];
    }
}

const NGMODEL_BINDING = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RxFormControlDirective),
    multi: true
};
const ALLOW_VALIDATOR_WITHOUT_CONFIG = ['required', 'notEmpty', 'alpha', 'alphaNumeric', 'ascii', 'dataUri', 'digit', 'email', 'even', 'hexColor', 'json', 'latitude', 'latLong', 'leapYear', 'longitude', 'lowerCase', 'mac', 'odd', 'port', 'primeNumber', 'time', 'upperCase', 'url', 'unique', 'cusip', 'gird'];
const NUMERIC = "numeric";
const IS_FORMAT = "isFormat";
const DIGITS_INFO = "digitsInfo";
let RxFormControlDirective = class RxFormControlDirective extends BaseValidator {
    constructor(elementRef, renderer, decimalProvider) {
        super();
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.decimalProvider = decimalProvider;
        this.eventListeners = [];
        this.isNumericSubscribed = false;
        this.isFocusCalled = false;
        this.isMasked = false;
        this.element = elementRef.nativeElement;
        this.setEventName();
    }
    set validationControls(value) {
        this.controls = value;
    }
    get validationControls() {
        return this.controls;
    }
    ngOnInit() {
        let validators = [];
        Object.keys(APP_VALIDATORS).forEach(validatorName => {
            if ((this[`rx${validatorName}`]) || (ALLOW_VALIDATOR_WITHOUT_CONFIG.indexOf(validatorName) != -1 && this[`rx${validatorName}`] == BLANK)) {
                validators.push(APP_VALIDATORS[validatorName](this[`rx${validatorName}`]));
                if (this.name && !(this.formControlName && this.formControl)) {
                    ApplicationUtil.configureControl(this.controlConfig, this[`rx${validatorName}`], validatorName);
                }
            }
        });
        if (validators.length > 0)
            this.validators = validators;
        if (this.rxnumeric && (this.rxnumeric.isFormat || this.rxnumeric.digitsInfo)) {
            this.bindNumericElementEvent();
        }
    }
    blurEvent() {
        if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric)) {
            if (this.formControl.value !== null && this.formControl.value !== undefined) {
                let value = this.decimalProvider.transFormDecimal(this.formControl.value, this.rxnumeric.digitsInfo);
                value = (!this.rxnumeric.isFormat) ? this.decimalProvider.replacer(value) : value;
                this.setValueOnElement(value);
            }
            this.isFocusCalled = false;
        }
    }
    bindNumericElementEvent(config) {
        if (config)
            this.rxnumeric = config;
        let listener = this.renderer.listen(this.element, BLUR, this.blurEvent.bind(this));
        this.eventListeners.push(listener);
        listener = this.renderer.listen(this.element, FOCUS, (event) => {
            this.isFocusCalled = true;
            if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric) && this.formControl.value != null) {
                let value = this.decimalProvider.replacer(this.element.value);
                this.setValueOnElement(value);
            }
        });
        this.eventListeners.push(listener);
    }
    bindValueChangeEvent() {
        if (this.eventName != BLANK) {
            let listener = this.renderer.listen(this.element, this.eventName, () => {
                Object.keys(this.validationControls).forEach(fieldName => {
                    this.validationControls[fieldName].updateValueAndValidity();
                });
            });
            this.eventListeners.push(listener);
        }
    }
    subscribeNumericFormatter() {
        if (this.formControl[VALIDATOR_CONFIG] && this.formControl[VALIDATOR_CONFIG][NUMERIC] && (this.formControl[VALIDATOR_CONFIG][NUMERIC][IS_FORMAT] || this.formControl[VALIDATOR_CONFIG][NUMERIC][DIGITS_INFO])) {
            if (!this.isNumericSubscribed) {
                this.bindNumericElementEvent(this.formControl[VALIDATOR_CONFIG][NUMERIC]);
                this.isNumericSubscribed = true;
            }
            if (!this.isFocusCalled && RegexValidator.isNotBlank(this.formControl.value)) {
                this.blurEvent();
            }
        }
    }
    subscribeMaskValidator() {
        if (this.formControl[VALIDATOR_CONFIG] && this.formControl[VALIDATOR_CONFIG]["mask"] && !this.isMasked) {
            let config = this.formControl[VALIDATOR_CONFIG]["mask"];
            this.maskProvider = new MaskProvider(this.element, config.mask, this.renderer, this.formControl, config);
            this.isMasked = true;
        }
    }
    setValueOnElement(value) {
        this.renderer.setProperty(this.element, ELEMENT_VALUE, value);
    }
    setTemplateValidators(control) {
        for (let validatorName in control[VALIDATOR_CONFIG]) {
            this[validatorName] = control[VALIDATOR_CONFIG][validatorName];
        }
        delete control[TEMPLATE_VALIDATION_CONFIG];
        delete control[VALIDATOR_CONFIG];
        this.ngOnInit();
    }
    updateOnElementClass(element) {
        var previousClassName = '';
        return function (className) {
            if (previousClassName)
                element.classList.remove(previousClassName);
            if (className)
                element.classList.add(className);
            previousClassName = className;
        };
    }
    setValidatorConfig(control) {
        if (!this.formControl) {
            this.formControl = control;
            let rxFormControl = this.formControl;
            if (rxFormControl.updateOnElementClass)
                rxFormControl.updateOnElementClass = this.updateOnElementClass(this.element);
        }
        this.subscribeMaskValidator();
        this.subscribeNumericFormatter();
        if (control[TEMPLATE_VALIDATION_CONFIG])
            this.setTemplateValidators(control);
        if (control[CONDITIONAL_VALIDATOR]) {
            this.conditionalValidator = control[CONDITIONAL_VALIDATOR];
            delete control[CONDITIONAL_VALIDATOR];
        }
    }
    validate(control) {
        this.setValidatorConfig(control);
        if (this.conditionalValidator)
            this.conditionalValidator(control);
        if (!this.isProcessed)
            this.setModelConfig(control);
        return ((this.validators && this.validators.length > 0) || this.maskProvider) ? this.validation(control) : null;
    }
    ngOnDestroy() {
        this.controls = undefined;
        let eventCount = this.eventListeners.length;
        for (var i = 0; i < eventCount; i++) {
            this.eventListeners[0]();
            this.eventListeners.splice(0, 1);
        }
        this.eventListeners = [];
        if (this.maskProvider)
            this.maskProvider.onDestroy();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxalpha", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxalphaNumeric", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxascii", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxcompare", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxcompose", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxcontains", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxcreditCard", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxdataUri", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxdifferent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxdigit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxemail", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxendsWith", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxeven", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxextension", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxfactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxfileSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxgreaterThanEqualTo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxgreaterThan", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxhexColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxjson", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxlatitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxlatLong", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxleapYear", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxlessThan", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxlessThanEqualTo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxlongitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxlowerCase", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxmac", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxmaxDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxmaxLength", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxmaxNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxminDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxminLength", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxminNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxnumeric", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxodd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxpassword", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxport", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxprimeNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxrequired", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxrange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxrule", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxstartsWith", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxtime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxupperCase", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxurl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxunique", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxnotEmpty", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxcusip", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxgrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], RxFormControlDirective.prototype, "rxdate", void 0);
RxFormControlDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngModel],[formControlName],[formControl]',
        providers: [NGMODEL_BINDING],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], DecimalProvider])
], RxFormControlDirective);

var FileControlDirective_1;
const VALIDATOR_CONFIG$1 = "validatorConfig";
const FILE_VALIDATOR_NAMES = ["extension", "fileSize", "file"];
let FileControlDirective = FileControlDirective_1 = class FileControlDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isProcessed = false;
        this.validators = [];
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.element = elementRef.nativeElement;
    }
    onChangeCall(element) {
        let files = element.files;
        if (this.writeFile)
            this.onChange(files);
        else {
            if (files.length > 0)
                this.onChange(element.value);
            else
                this.onChange(undefined);
        }
    }
    writeValue(value) { }
    registerOnChange(invocation) { this.onChange = invocation; }
    registerOnTouched(invocation) { this.onTouched = invocation; }
    set extension(config) {
        this.pushValidator(FILE_VALIDATOR_NAMES[0], config);
    }
    set fileSize(config) {
        this.pushValidator(FILE_VALIDATOR_NAMES[1], config);
    }
    set file(config) {
        this.pushValidator(FILE_VALIDATOR_NAMES[2], config);
    }
    setConfig(control) {
        FILE_VALIDATOR_NAMES.forEach(t => {
            if (!this[t] && control[VALIDATOR_CONFIG$1] && control[VALIDATOR_CONFIG$1][t])
                this[t] = control[VALIDATOR_CONFIG$1][t];
        });
        this.isProcessed = true;
    }
    pushValidator(validatorName, config) {
        if (config)
            this.validators.push(APP_VALIDATORS[validatorName](config));
    }
    validate(control) {
        if (!this.isProcessed)
            this.setConfig(control);
        var result = null;
        for (var validator of this.validators) {
            result = validator(control, this.element.files);
            if (result)
                break;
        }
        return result;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], FileControlDirective.prototype, "writeFile", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], FileControlDirective.prototype, "extension", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], FileControlDirective.prototype, "fileSize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], FileControlDirective.prototype, "file", null);
FileControlDirective = FileControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "input[type=file]",
        host: {
            "(change)": "onChangeCall($event.target)",
            "(blur)": "onTouched()"
        },
        providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], useExisting: FileControlDirective_1, multi: true }, {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => FileControlDirective_1),
                multi: true
            }]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FileControlDirective);

var ImageFileControlDirective_1;
const VALIDATOR_CONFIG$2 = "validatorConfig";
let ImageFileControlDirective = ImageFileControlDirective_1 = class ImageFileControlDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.isProcessed = false;
        this.element = elementRef.nativeElement;
    }
    set image(config) {
        this.imageValidation = APP_VALIDATORS.image(config);
    }
    setConfig(control) {
        let image = "image";
        if (!this[image] && control[VALIDATOR_CONFIG$2] && control[VALIDATOR_CONFIG$2][image])
            this[image] = control[VALIDATOR_CONFIG$2][image];
        this.isProcessed = true;
    }
    validate(control) {
        if (!this.isProcessed)
            this.setConfig(control);
        if (this.imageValidation) {
            return this.imageValidation(control, this.element.files);
        }
        return new Promise((resolve, reject) => { resolve(null); });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], ImageFileControlDirective.prototype, "image", null);
ImageFileControlDirective = ImageFileControlDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "input[type=file]",
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ImageFileControlDirective_1),
                multi: true
            }]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ImageFileControlDirective);

var AsyncValidationDirective_1;
let AsyncValidationDirective = AsyncValidationDirective_1 = class AsyncValidationDirective {
    validate(control) {
        if (this.async)
            return this.async(control);
        return new Promise((resolve, reject) => { resolve(null); });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AsyncValidationDirective.prototype, "async", void 0);
AsyncValidationDirective = AsyncValidationDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[ngModel],[formControlName],[formControl]',
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_ASYNC_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AsyncValidationDirective_1),
                multi: true
            }]
    })
], AsyncValidationDirective);

var RxReactiveFormsModule_1;
let RxReactiveFormsModule = RxReactiveFormsModule_1 = class RxReactiveFormsModule {
    static forRoot() { return { ngModule: RxReactiveFormsModule_1, providers: [] }; }
};
RxReactiveFormsModule = RxReactiveFormsModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective, AsyncValidationDirective],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
        exports: [AsyncValidationDirective, RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]
    })
], RxReactiveFormsModule);

function baseDecoratorFunction(annotationType, config, isAsync = false) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.init(target, parameterIndex, propertyKey, annotationType, config, isAsync);
    };
}

function alpha(config) {
    return baseDecoratorFunction(AnnotationTypes.alpha, config);
}

function alphaNumeric(config) {
    return baseDecoratorFunction(AnnotationTypes.alphaNumeric, config);
}

function compare(config) {
    return baseDecoratorFunction(AnnotationTypes.compare, config);
}

function contains(config) {
    return baseDecoratorFunction(AnnotationTypes.contains, config);
}

function creditCard(config) {
    return baseDecoratorFunction(AnnotationTypes.creditCard, config);
}

function digit(config) {
    return baseDecoratorFunction(AnnotationTypes.digit, config);
}

function email(config) {
    return baseDecoratorFunction(AnnotationTypes.email, config);
}

function hexColor(config) {
    return baseDecoratorFunction(AnnotationTypes.hexColor, config);
}

function lowerCase(config) {
    return baseDecoratorFunction(AnnotationTypes.lowerCase, config);
}

function maxDate(config) {
    return baseDecoratorFunction(AnnotationTypes.maxDate, config);
}

function maxLength(config) {
    return baseDecoratorFunction(AnnotationTypes.maxLength, config);
}

function minDate(config) {
    return baseDecoratorFunction(AnnotationTypes.minDate, config);
}

function maxNumber(config) {
    return baseDecoratorFunction(AnnotationTypes.maxNumber, config);
}

function minLength(config) {
    return baseDecoratorFunction(AnnotationTypes.minLength, config);
}

function minNumber(config) {
    return baseDecoratorFunction(AnnotationTypes.minNumber, config);
}

function password(config) {
    return baseDecoratorFunction(AnnotationTypes.password, config);
}

function pattern(config) {
    return baseDecoratorFunction(AnnotationTypes.pattern, config);
}

function propArray(entity, config) {
    return function (target, propertyKey, parameterIndex) {
        var propertyInfo = {
            name: propertyKey,
            propertyType: ARRAY_PROPERTY,
            entity: entity,
            dataPropertyName: config ? config.name : undefined,
            entityProvider: config ? config.entityProvider : undefined,
            arrayConfig: config ? {
                allowMaxIndex: config.allowMaxIndex, messageKey: config.messageKey, createBlank: config.createBlank
            } : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
    };
}

function propObject(entity, config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.initPropertyObject(propertyKey, OBJECT_PROPERTY, entity, target, config);
    };
}

function prop(config) {
    return function (target, propertyKey, parameterIndex) {
        var propertyInfo = {
            name: propertyKey,
            propertyType: PROPERTY,
            dataPropertyName: config ? config.name : undefined,
            defaultValue: config ? config.defaultValue : undefined,
            ignore: config ? config.ignore : undefined,
            isPrimaryKey: config ? config.isPrimaryKey : undefined
        };
        defaultContainer.addProperty(target.constructor, propertyInfo);
    };
}

function range(config) {
    return baseDecoratorFunction(AnnotationTypes.range, config);
}

function required(config) {
    return baseDecoratorFunction(AnnotationTypes.required, config);
}

function upperCase(config) {
    return baseDecoratorFunction(AnnotationTypes.upperCase, config);
}

function time(config) {
    return baseDecoratorFunction(AnnotationTypes.time, config);
}

function url(config) {
    return baseDecoratorFunction(AnnotationTypes.url, config);
}

function json(config) {
    return baseDecoratorFunction(AnnotationTypes.json, config);
}

function greaterThan(config) {
    return baseDecoratorFunction(AnnotationTypes.greaterThan, config);
}

function greaterThanEqualTo(config) {
    return baseDecoratorFunction(AnnotationTypes.greaterThanEqualTo, config);
}

function lessThanEqualTo(config) {
    return baseDecoratorFunction(AnnotationTypes.lessThanEqualTo, config);
}

function lessThan(config) {
    return baseDecoratorFunction(AnnotationTypes.lessThan, config);
}

function choice(config) {
    return baseDecoratorFunction(AnnotationTypes.choice, config);
}

function different(config) {
    return baseDecoratorFunction(AnnotationTypes.different, config);
}

function numeric(config) {
    return baseDecoratorFunction(AnnotationTypes.numeric, config);
}

function even(config) {
    return baseDecoratorFunction(AnnotationTypes.even, config);
}

function odd(config) {
    return baseDecoratorFunction(AnnotationTypes.odd, config);
}

function factor(config) {
    return baseDecoratorFunction(AnnotationTypes.factor, config);
}

function leapYear(config) {
    return baseDecoratorFunction(AnnotationTypes.leapYear, config);
}

function allOf(config) {
    return baseDecoratorFunction(AnnotationTypes.allOf, config);
}

function oneOf(config) {
    return baseDecoratorFunction(AnnotationTypes.oneOf, config);
}

function noneOf(config) {
    return baseDecoratorFunction(AnnotationTypes.noneOf, config);
}

function mac(config) {
    return baseDecoratorFunction(AnnotationTypes.mac, config);
}

function ascii(config) {
    return baseDecoratorFunction(AnnotationTypes.ascii, config);
}

function dataUri(config) {
    return baseDecoratorFunction(AnnotationTypes.dataUri, config);
}

function port(config) {
    return baseDecoratorFunction(AnnotationTypes.port, config);
}

function latLong(config) {
    return baseDecoratorFunction(AnnotationTypes.latLong, config);
}

function extension(config) {
    return baseDecoratorFunction(AnnotationTypes.extension, config);
}

function fileSize(config) {
    return baseDecoratorFunction(AnnotationTypes.fileSize, config);
}

function endsWith(config) {
    return baseDecoratorFunction(AnnotationTypes.endsWith, config);
}

function startsWith(config) {
    return baseDecoratorFunction(AnnotationTypes.startsWith, config);
}

function primeNumber(config) {
    return baseDecoratorFunction(AnnotationTypes.primeNumber, config);
}

function latitude(config) {
    return baseDecoratorFunction(AnnotationTypes.latitude, config);
}

function longitude(config) {
    return baseDecoratorFunction(AnnotationTypes.longitude, config);
}

function rule(config) {
    return baseDecoratorFunction(AnnotationTypes.rule, config);
}

function file(config) {
    return baseDecoratorFunction(AnnotationTypes.file, config);
}

function custom(config) {
    return baseDecoratorFunction(AnnotationTypes.custom, config);
}

function unique(config) {
    return baseDecoratorFunction(AnnotationTypes.unique, config);
}

function image(config) {
    return baseDecoratorFunction(AnnotationTypes.image, config);
}

function notEmpty(config) {
    return baseDecoratorFunction(AnnotationTypes.notEmpty, config);
}

function async(validators) {
    return baseDecoratorFunction(AnnotationTypes.async, validators, true);
}

function cusip(config) {
    return baseDecoratorFunction(AnnotationTypes.cusip, config);
}

function grid(config) {
    return baseDecoratorFunction(AnnotationTypes.grid, config);
}

function date(config) {
    return baseDecoratorFunction(AnnotationTypes.date, config);
}

function disable(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.disabled);
    };
}

function error(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.error);
    };
}

function and(config) {
    return baseDecoratorFunction(AnnotationTypes.and, config);
}

function or(config) {
    return baseDecoratorFunction(AnnotationTypes.or, config);
}

function not(config) {
    return baseDecoratorFunction(AnnotationTypes.not, config);
}

function trim$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.trim);
    };
}

function ltrim$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.ltrim);
    };
}

function rtrim$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.rtrim);
    };
}

function blacklist$1(chars) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.blacklist, chars);
    };
}

function stripLow$1(keepNewLines) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.stripLow, keepNewLines);
    };
}

function toBoolean$1(strict) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toBoolean, strict);
    };
}

function toDouble$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDouble);
    };
}

function toFloat$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toFloat);
    };
}

function toInt$1(radix) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toInt, radix);
    };
}

function toString$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.string);
    };
}

function whitelist$1(chars) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.whitelist, chars);
    };
}

function toDate$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDate);
    };
}

function escape$1() {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.escape);
    };
}

function prefix$1(text) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.prefix, text);
    };
}

function suffix$1(text) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.suffix, text);
    };
}

function model(config) {
    return function (target) {
        defaultContainer.addPropsConfig(target, config);
    };
}

function sanitize$1(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.sanitize, config);
    };
}

function elementClass(config) {
    return function (target, propertyKey, parameterIndex) {
        defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.elementClass);
    };
}

function minTime(config) {
    return baseDecoratorFunction(AnnotationTypes.minTime, config);
}

function maxTime(config) {
    return baseDecoratorFunction(AnnotationTypes.maxTime, config);
}

function compose(config) {
    return baseDecoratorFunction(AnnotationTypes.compose, config);
}

function requiredTrue(config) {
    return baseDecoratorFunction(AnnotationTypes.requiredTrue, config);
}

function mask(config) {
    return baseDecoratorFunction(AnnotationTypes.mask, config);
}

function baseValidator(config, type, validator) {
    var rxwebValidator = (control, target) => {
        if (typeof control == STRING)
            defaultContainer.init(target, 0, control, type, config, false);
        else {
            if (config && (!control.validatorConfig || !control.validatorConfig[type]))
                ApplicationUtil.configureControl(control, config, type);
            return validator(control);
        }
        return null;
    };
    Object.defineProperty(rxwebValidator, "name", { value: RX_WEB_VALIDATOR });
    return rxwebValidator;
}

function alphaValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.alpha, alphaValidator(config));
}

function allOfValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.allOf, allOfValidator(config));
}

function alphaNumericValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.alphaNumeric, alphaNumericValidator(config));
}

function choiceValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.choice, choiceValidator(config));
}

function compareValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.compare, compareValidator(config));
}

function containsValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.contains, containsValidator(config));
}

function creditCardValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.creditCard, creditCardValidator(config));
}

function differentValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.different, differentValidator(config));
}

function digitValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.digit, digitValidator(config));
}

function emailValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.email, emailValidator(config));
}

function evenValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.even, evenValidator(config));
}

function factorValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.factor, factorValidator(config));
}

function greaterThanEqualToValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.greaterThanEqualTo, greaterThanEqualToValidator(config));
}

function greaterThanValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.greaterThan, greaterThanValidator(config));
}

function hexColorValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.hexColor, hexColorValidator(config));
}

function jsonValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.json, jsonValidator(config));
}

function leapYearValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.leapYear, leapYearValidator(config));
}

function lessThanEqualToValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.lessThanEqualTo, lessThanEqualToValidator(config));
}

function lessThanValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.lessThan, lessThanValidator(config));
}

function lowerCaseValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.lowerCase, lowercaseValidator(config));
}

function macValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.mac, macValidator(config));
}

function maxDateValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxDate, maxDateValidator(config));
}

function maxLengthValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxLength, maxLengthValidator(config));
}

function maxNumberValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxNumber, maxNumberValidator(config));
}

function minDateValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minDate, minDateValidator(config));
}

function minLengthValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minLength, minLengthValidator(config));
}

function minNumberValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minNumber, minNumberValidator(config));
}

function noneOfValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.noneOf, noneOfValidator(config));
}

function numericValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.numeric, numericValidator(config));
}

function oddValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.odd, oddValidator(config));
}

function oneOfValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.oneOf, oneOfValidator(config));
}

function passwordcValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.password, passwordValidator(config));
}

function patternValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.pattern, patternValidator(config));
}

function rangeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.range, rangeValidator(config));
}

function requiredValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.required, requiredValidator(config));
}

function timeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.time, timeValidator(config));
}

function upperCaseValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.upperCase, uppercaseValidator(config));
}

function urlValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.url, urlValidator(config));
}

function asciiValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.ascii, asciiValidator(config));
}

function dataUriValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.dataUri, dataUriValidator(config));
}

function portValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.port, portValidator(config));
}

function latLongValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.latLong, latLongValidator(config));
}

function extensionValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.extension, (control) => { return null; });
}

function fileSizeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.fileSize, (control) => { return null; });
}

function endsWithValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.endsWith, endsWithValidator(config));
}

function startsWithValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.startsWithWith, startsWithValidator(config));
}

function primeNumberValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.primeNumber, primeNumberValidator(config));
}

function latitudeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.latitude, latitudeValidator(config));
}

function longitudeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.longitude, longitudeValidator(config));
}

function composeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.compose, composeValidator(config));
}

function fileValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.file, (control) => { return null; });
}

function customValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.custom, customValidator(config));
}

function uniqueValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.unique, uniqueValidator(config));
}

function imageValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.image, (control) => { return null; });
}

function notEmptyValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.notEmpty, notEmptyValidator(config));
}

function ipValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.ip, ipValidator(config));
}

function cusipValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.cusip, cusipValidator(config));
}

function gridValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.grid, gridValidator(config));
}

function dateValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.date, dateValidator(config));
}

function andValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.and, andValidator(config));
}

function orValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.or, orValidator(config));
}

function notValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.not, notValidator(config));
}

function minTimeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.minTime, minTimeValidator(config));
}

function maxTimeValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.maxTime, maxTimeValidator(config));
}

function requiredTrueValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.requiredTrue, requiredTrueValidator(config));
}

function maskValidatorExtension(config) {
    return baseValidator(config, AnnotationTypes.mask, maskValidator(config));
}

class RxwebValidators {
}
RxwebValidators.alpha = alphaValidatorExtension;
RxwebValidators.allOf = allOfValidatorExtension;
RxwebValidators.alphaNumeric = alphaNumericValidatorExtension;
RxwebValidators.choice = choiceValidatorExtension;
RxwebValidators.compare = compareValidatorExtension;
RxwebValidators.contains = containsValidatorExtension;
RxwebValidators.creditCard = creditCardValidatorExtension;
RxwebValidators.different = differentValidatorExtension;
RxwebValidators.digit = digitValidatorExtension;
RxwebValidators.email = emailValidatorExtension;
RxwebValidators.even = evenValidatorExtension;
RxwebValidators.factor = factorValidatorExtension;
RxwebValidators.greaterThanEqualTo = greaterThanEqualToValidatorExtension;
RxwebValidators.greaterThan = greaterThanValidatorExtension;
RxwebValidators.hexColor = hexColorValidatorExtension;
RxwebValidators.json = jsonValidatorExtension;
RxwebValidators.leapYear = leapYearValidatorExtension;
RxwebValidators.lessThanEqualTo = lessThanEqualToValidatorExtension;
RxwebValidators.lessThan = lessThanValidatorExtension;
RxwebValidators.lowerCase = lowerCaseValidatorExtension;
RxwebValidators.mac = macValidatorExtension;
RxwebValidators.maxDate = maxDateValidatorExtension;
RxwebValidators.maxLength = maxLengthValidatorExtension;
RxwebValidators.maxNumber = maxNumberValidatorExtension;
RxwebValidators.minDate = minDateValidatorExtension;
RxwebValidators.minLength = minLengthValidatorExtension;
RxwebValidators.minNumber = minNumberValidatorExtension;
RxwebValidators.noneOf = noneOfValidatorExtension;
RxwebValidators.numeric = numericValidatorExtension;
RxwebValidators.odd = oddValidatorExtension;
RxwebValidators.oneOf = oneOfValidatorExtension;
RxwebValidators.password = passwordcValidatorExtension;
RxwebValidators.pattern = patternValidatorExtension;
RxwebValidators.range = rangeValidatorExtension;
RxwebValidators.required = requiredValidatorExtension;
RxwebValidators.time = timeValidatorExtension;
RxwebValidators.upperCase = upperCaseValidatorExtension;
RxwebValidators.url = urlValidatorExtension;
RxwebValidators.ascii = asciiValidatorExtension;
RxwebValidators.dataUri = dataUriValidatorExtension;
RxwebValidators.port = portValidatorExtension;
RxwebValidators.latLong = latLongValidatorExtension;
RxwebValidators.extension = extensionValidatorExtension;
RxwebValidators.fileSize = fileSizeValidatorExtension;
RxwebValidators.endsWith = endsWithValidatorExtension;
RxwebValidators.startsWith = startsWithValidatorExtension;
RxwebValidators.primeNumber = primeNumberValidatorExtension;
RxwebValidators.latitude = latitudeValidatorExtension;
RxwebValidators.longitude = longitudeValidatorExtension;
RxwebValidators.compose = composeValidatorExtension;
RxwebValidators.file = fileValidatorExtension;
RxwebValidators.custom = customValidatorExtension;
RxwebValidators.unique = uniqueValidatorExtension;
RxwebValidators.image = imageValidatorExtension;
RxwebValidators.notEmpty = notEmptyValidatorExtension;
RxwebValidators.ip = ipValidatorExtension;
RxwebValidators.cusip = cusipValidatorExtension;
RxwebValidators.grid = gridValidatorExtension;
RxwebValidators.date = dateValidatorExtension;
RxwebValidators.and = andValidatorExtension;
RxwebValidators.or = orValidatorExtension;
RxwebValidators.not = notValidatorExtension;
RxwebValidators.minTime = minTimeValidatorExtension;
RxwebValidators.maxTime = maxTimeValidatorExtension;
RxwebValidators.requiredTrue = requiredTrueValidatorExtension;
RxwebValidators.mask = maskValidatorExtension;

class IAbstractControl extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["AbstractControl"] {
}


//# sourceMappingURL=rxweb-reactive-form-validators.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content class=\"content\">\n  <ion-grid class=\"gradient\" >\n    <ion-row >\n      <ion-col size-sm=\"10\" offset-sm=\"1\">\n        \n     <!-- LOGO -->\n  <div class=\"mb-2\">\n    <ion-img src=\"../assets/img/logo1.png\" class=\"logo-img\"></ion-img>\n  </div>\n\n  <!-- FORM START -->\n  <form  class=\"ion-padding-horizontal\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit(registerForm)\">\n    <div class=\"d-flex column\">\n\n      <div class=\"mb-2\">\n        <input type=\"text\" \n        placeholder=\"User Name\" \n        class=\"form-control\" \n        formControlName=\"name\"\n        [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('name').errors }\" \n         >\n         <div *ngIf=\"submitted && registerForm.get('name').hasError('required')\"\n         class=\"invalid-feedback\">\n          User name required !</div>\n      </div>\n      \n        \n    \n     \n      <div class=\"mb-2\">\n        <input type=\"text\"\n         placeholder=\"Email Address \" \n         class=\"form-control\"  \n         formControlName=\"email\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('email').errors }\" \n         >\n         <div\n          *ngIf=\"submitted && registerForm.get('email').errors\"\n          class=\"invalid-feedback\">\n         <div \n         *ngIf=\"registerForm.get('email').hasError('required')\">\n          Email address is required !\n         </div>\n         <div \n         *ngIf=\" registerForm.get('email').hasError('email')\">\n          Please enter valid email address !\n         </div>\n        </div>\n      \n      \n      </div>\n\n      <div class=\"mb-2\">\n        <input type=\"number\"\n         placeholder=\"Mobile\"\n         class=\"form-control\" \n         formControlName=\"mobile\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('mobile').errors }\" \n         >\n         <div\n         *ngIf=\"submitted && registerForm.get('mobile').errors\"\n         class=\"invalid-feedback\">\n        <div \n        *ngIf=\"registerForm.get('mobile').hasError('required')\">\n        Mobile no. is required !\n        </div>\n        <div \n        *ngIf=\" registerForm.get('mobile').hasError('pattern')\">\n        Mobile no. must be 10 digits !\n        </div>\n       </div>\n      </div>\n\n\n      <div class=\"mb-2\">\n        <input type=\"password\"\n         placeholder=\"Password\"\n         class=\"form-control\" \n         formControlName=\"password\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('password').errors }\" \n         >\n         <div\n         *ngIf=\"submitted && registerForm.get('password').errors\"\n         class=\"invalid-feedback\">\n        <div \n        *ngIf=\"registerForm.get('password').hasError('required')\">\n         Password is required !\n        </div>\n        <div \n        *ngIf=\" registerForm.get('password').hasError('minlength')\">\n        Password must be at least 6 characters !\n        </div>\n       </div>\n      </div>\n\n\n      <div class=\"mb-2\">\n        <input type=\"password\"\n         placeholder=\"Confirm Password\"\n         class=\"form-control\" \n         formControlName=\"passwordConfirm\"\n         [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('passwordConfirm').errors }\" \n         >\n         <div\n         *ngIf=\"submitted && registerForm.get('passwordConfirm').errors\"\n         class=\"invalid-feedback\">\n        <div \n        *ngIf=\"registerForm.get('passwordConfirm').hasError('required')\">\n         Confirm password is required !\n        </div>\n        <div \n        *ngIf=\" registerForm.get('passwordConfirm').hasError('mustMatch')\">\n        Confirm password must match !\n        </div>\n       </div>\n      </div>\n\n      <div class=\"mb-2\">\n        <textarea\n        type=\"text\"\n        formControlName=\"address\"\n        [ngClass]=\"{ 'is-invalid': submitted && registerForm.get('address').errors }\" \n         placeholder=\"Address\"\n         class=\"form-control\">\n        </textarea>\n        <div\n        *ngIf=\"submitted && registerForm.get('address').errors\"\n        class=\"invalid-feedback\">\n       <div \n       *ngIf=\"registerForm.get('address').hasError('required')\">\n        Address is required !\n       </div>\n      \n      </div>\n      </div>\n\n\n      <ion-item lines=\"none\" class=\"mb-2 file\">\n        <ion-label slot=\"start\" class=\"ion-text-wrap text\">Select PAN Card</ion-label >\n          <input\n          style=\"display: none\"[writeFile]=\"true\"\n          type=\"file\" (change)=\"onFileChanged($event)\"\n          #fileInput>\n          <div slot=\"end\">\n            <ion-icon name=\"image-outline\" (click)=\"fileInput.click()\"[ngClass]=\"{'icon-color':pancard!==null}\"></ion-icon>\n          </div>\n  \n        </ion-item>\n\n\n      <ion-item lines=\"none\" class=\"mb-3 file\">\n        <ion-label slot=\"start\" class=\"text\">Select Adhaar Card</ion-label >\n        <input\n        style=\"display: none\"[writeFile]=\"true\"\n        type=\"file\" (change)=\"onAdhaar($event)\"\n        #file1Input>\n        <div slot=\"end\">\n          <ion-icon name=\"image-outline\" (click)=\"file1Input.click()\" [ngClass]=\"{'icon-color':adhaarcard !==null}\"></ion-icon>\n        </div>\n\n        </ion-item>\n  \n\n      <!-- SIGNUP BUTTON -->\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">Create New Account</button>\n  \n    </div>\n\n  </form>\n   <!-- FORM END-->\n \n\n  \n   <!-- SIGNIN BUTTON -->\n   <div class=\"d-flex text-white mb-4 mt-5\"\n    style=\"justify-content: center; outline: none;\"\n    [routerLink]=\"['/','auth','signin']\">\n    <span expand=\"block\"  class=\"ion-padding-horizontal\">Sign In</span>\n    <ion-icon name=\"arrow-forward-outline\" class=\"pt-1 icon-only\"></ion-icon>\n  </div>\n  \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SignUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function() { return SignUpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/auth/sign-up/sign-up.page.ts");




const routes = [
    {
        path: '',
        component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }
];
let SignUpPageRoutingModule = class SignUpPageRoutingModule {
};
SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignUpPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.module.ts":
/*!************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.module.ts ***!
  \************************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/auth/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ "./node_modules/@rxweb/reactive-form-validators/fesm2015/rxweb-reactive-form-validators.js");
/* harmony import */ var _sign_up_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign-up.page */ "./src/app/auth/sign-up/sign-up.page.ts");









let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_7__["RxReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignUpPageRoutingModule"]
        ],
        declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_8__["SignUpPage"]]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.page.scss":
/*!************************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-img {\n  height: 150px;\n  margin-top: 20px;\n}\n\n.terms {\n  font-size: small;\n}\n\n.content {\n  overflow-y: scroll !important;\n}\n\nion-icon {\n  font-size: 18px;\n}\n\n.icon-color {\n  color: var(--ion-color-primary);\n}\n\n.text {\n  font-size: 12px;\n}\n\n.file {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduLXVwL0Q6XFx2b3dHb2xkQXBwL3NyY1xcYXBwXFxhdXRoXFxzaWduLXVwXFxzaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsNkJBQUE7QUNHSjs7QURERTtFQUVFLGVBQUE7QUNHSjs7QURERTtFQUNFLCtCQUFBO0FDSUo7O0FERkU7RUFDRSxlQUFBO0FDS0o7O0FESEU7RUFDRSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC50ZXJtc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG4gIC5jb250ZW50e1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5pY29uLWNvbG9ye1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgLnRleHR7XHJcbiAgICBmb250LXNpemU6MTJweFxyXG4gIH1cclxuICAuZmlsZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9IiwiLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRlcm1zIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLmNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBzY3JvbGwgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pY29uLWNvbG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/sign-up/sign-up.page.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/sign-up/sign-up.page.ts ***!
  \**********************************************/
/*! exports provided: SignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPage", function() { return SignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/helper */ "./src/app/services/helper.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/fesm2015/auth0-angular-jwt.js");









const TOKEN_KEY = 'access_token';
const USER_ROLE = 'access_role';
let SignUpPage = class SignUpPage {
    constructor(formBuilder, auth, http, storage, helper, loading) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.http = http;
        this.storage = storage;
        this.helper = helper;
        this.loading = loading;
        this.submitted = false;
        this.pancard = null;
        this.adhaarcard = null;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d{10}$/)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            panCard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            adhaar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(_services_helper__WEBPACK_IMPORTED_MODULE_3__["MustMatch"])('password', 'confirmPassword')
        });
    }
    onSubmit(form) {
        this.submitted = true;
        this.loading.create({ message: 'SignUp...' }).then(el => {
            el.present();
        });
        const userData = new FormData();
        userData.append("name", this.registerForm.value.name);
        userData.append("email", this.registerForm.value.email);
        userData.append("password", this.registerForm.value.password);
        userData.append("passwordConfirm", this.registerForm.value.passwordConfirm);
        userData.append("mobile", this.registerForm.value.mobile);
        userData.append("address", this.registerForm.value.address);
        userData.append("panCard", this.registerForm.value.panCard);
        userData.append("adhaar", this.registerForm.value.adhaar);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.loading.dismiss();
            return;
        }
        this.http.post(`${this.auth.url}/api/v1/users/signup`, userData).subscribe(res => {
            this.loading.dismiss();
            this.auth.token = res.token;
            this.auth.userRole = res.user.role;
            this.storage.set(TOKEN_KEY, res.token);
            this.storage.set(USER_ROLE, res.user);
            this.auth.user = this.helper.decodeToken(res['token']);
            this.auth.authenticationState.next(true);
            this.adhaarcard = null;
            this.pancard = null;
            this.registerForm.reset();
        }, err => {
            this.loading.dismiss();
            this.auth.showAlert(err);
            throw new Error(JSON.stringify(err));
        });
    }
    onFileChanged(event) {
        const file = event.target.files[0];
        this.pancard = file;
        this.registerForm.patchValue({ panCard: file });
        this.registerForm.get('panCard').updateValueAndValidity();
    }
    onAdhaar(event) {
        const file = event.target.files[0];
        this.adhaarcard = file;
        this.registerForm.patchValue({ adhaar: file });
        this.registerForm.get('adhaar').updateValueAndValidity();
    }
};
SignUpPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] }
];
SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-up/sign-up.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.page.scss */ "./src/app/auth/sign-up/sign-up.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtHelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
], SignUpPage);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map