"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkRepositorio = exports.LinkText = exports.CardParagraph = exports.CardText = exports.Card = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.Card = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #efefef;\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n  padding: 3rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"], ["\n  background-color: #efefef;\n  border-radius: 5px;\n  width: 100%;\n  height: 200px;\n  padding: 3rem;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"])));
exports.CardText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-transform:uppercase;\n  color: #303030;\n  font-size: 16px;\n  margin-bottom: 10px;\n"], ["\n  text-transform:uppercase;\n  color: #303030;\n  font-size: 16px;\n  margin-bottom: 10px;\n"])));
exports.CardParagraph = styled_components_1.default.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  text-transform:uppercase;\n  color: #303030;\n  font-size: 16px;\n  text-align: center;\n"], ["\n  text-transform:uppercase;\n  color: #303030;\n  font-size: 16px;\n  text-align: center;\n"])));
exports.LinkText = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-transform:uppercase;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n"], ["\n  text-transform:uppercase;\n  color: #fff;\n  font-size: 14px;\n  text-align: center;\n"])));
exports.LinkRepositorio = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background-color: #0466c8;\n  padding: 15px 50px;\n  line-height: 10px;\n  margin: 15px;\n  border-radius: 5px;\n"], ["\n  background-color: #0466c8;\n  padding: 15px 50px;\n  line-height: 10px;\n  margin: 15px;\n  border-radius: 5px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
