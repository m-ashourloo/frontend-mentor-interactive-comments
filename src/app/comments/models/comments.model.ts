import { UserModel } from "./user.model";

export interface CommentModel {
    id: number;
    content: string;
    createdAt: string;
    score: Number;
    user: UserModel;
    replies: CommentModel[];
}