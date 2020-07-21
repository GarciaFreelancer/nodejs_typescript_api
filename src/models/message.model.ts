import { Schema, model } from "mongoose";

const MessageSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false,
    },
    recipient: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: false,
    }
});

export default model('message', MessageSchema);