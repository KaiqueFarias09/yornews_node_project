"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static('public'));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../views'));
app.get('/', (_req, res) => {
    res.render('index');
});
app.get("/news/:news_name", (req, res) => {
    const news_title = req.params.news_name;
    res.render('news', { news_title });
});
app.listen(port, () => {
    console.log('listening on port ' + port);
});
