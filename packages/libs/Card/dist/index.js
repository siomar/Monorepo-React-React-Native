"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var Card = function () {
    return (react_1.default.createElement(styles_1.Card, null,
        react_1.default.createElement(styles_1.CardText, null, "Component Compartilhado"),
        react_1.default.createElement(styles_1.CardParagraph, null, "Este component \u00E9 compartilhado para aplica\u00E7\u00E3o web e mobile"),
        react_1.default.createElement(styles_1.LinkRepositorio, null,
            react_1.default.createElement(styles_1.LinkText, null, "Reposit\u00F3rio"))));
};
exports.Card = Card;
