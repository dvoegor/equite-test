import {Injectable} from '@nestjs/common';
const path = require("path");
const fs = require("fs");

@Injectable()
export class DataService {
    getFileContent(file): string {
        const filePath: string = path.join(__dirname, '..', '..', 'content', 'root', `${file}`)
        if (fs.existsSync(filePath)) {
            const fileContent: string = fs.readFileSync(filePath);
            return `${fileContent}`
        } else {
            return 'No such file'
        }
    }
}
