import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

const mongooseModuleOptions: MongooseModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }),
    inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync(mongooseModuleOptions)
  ],
  providers: [ConfigService]
})
export class DatabaseModule {}