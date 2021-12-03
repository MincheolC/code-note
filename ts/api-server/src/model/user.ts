import { Schema, model, connect } from 'mongoose'

// Data 정의
type User = {
    name: string;
    email: string;
    phone: string;
}

// Schema 정의
const schema = new Schema<User>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
})

// Model 정의
export const UserModel = model<User>('User', schema);
