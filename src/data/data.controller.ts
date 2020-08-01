import {Controller, Get, Param} from '@nestjs/common';
import {DataService} from "./data.service";

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) {}

    @Get(':file')
    getContent(@Param('file') file): string {
        return this.dataService.getFileContent(file)
    }
}
