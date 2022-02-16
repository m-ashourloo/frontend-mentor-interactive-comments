import { UserModel } from "./user.model";

export interface CommentModel {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: UserModel;
    replies: CommentModel[];
    replyTo?: CommentModel;
    replyingTo?: string;
}
