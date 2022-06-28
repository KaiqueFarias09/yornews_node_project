import path from "path";
import express, {
    Request,
    Response,
} from "express"

const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (_req: Request, res: Response) => {
    res.render('index');
});

app.get("/news/")

app.listen(port, () => {
    console.log('listening on port ' + port);
});