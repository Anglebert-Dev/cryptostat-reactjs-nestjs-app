import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({versionKey:false})
export class User extends Document{
    @Prop()
    email:string;
    
    @Prop()
    password:string;
}

export const  UserSchema = SchemaFactory.createForClass(User); 