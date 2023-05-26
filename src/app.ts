import express,{Application,Response,Request} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT :Number = 2000;
const app:Application = express();

app.use(cors({
    origin:"*",
    methods:["POST","GET"]
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.contentType('application/json');
    res.json({
        msg:"Hellow"
    })
});

app.post('/upload', (req: Request, res: Response) => {
    try{
        res.contentType('application/json');
        const imageText:String = req.body.image;
        console.log(imageText);
        res.status(200).json({
            msg:imageText
        })
    }catch(e){
        res.status(500).json({
            error:e
        })
    }
});

app.listen(PORT, () => {
    return console.log(`server is listening on ${PORT}`);
});