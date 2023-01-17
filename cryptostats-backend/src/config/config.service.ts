import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
    private readonly envConfig: { [key: string]: string };

    constructor() {
        dotenv.config();
        this.envConfig = process.env;
    }

    get(key: string): string {
        return this.envConfig[key];
    }
}