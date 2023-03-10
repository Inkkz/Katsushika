import { prop, getModelForClass } from '@typegoose/typegoose'
import { Document } from 'mongoose'

export class Group {
    @prop({ type: String, unique: true, required: true })
    public jid!: string

    @prop({ type: Boolean, required: true, default: false })
    public events!: boolean

    @prop({ type: Boolean, required: true, default: false })
    public mods!: boolean

    @prop({ type: Boolean, required: true, default: false })
    public nsfw!: boolean
}

export type TGroupModel = Group & Document

export const groupSchema = getModelForClass(Group)
