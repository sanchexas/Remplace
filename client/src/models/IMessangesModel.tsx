export interface IMessagesModel{
    id?: number;
    text: string;
    chatRoomId: number;
    sentFromId: number;
    sentToId: number;
    sentAt: string;
}