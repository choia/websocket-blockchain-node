import * as WebSocket from 'ws';
import { Message, MessageTypes, UUID } from "../shared/messages";
import { MessageServer } from "./message-server";

type Replies = Map<WebSocket, Message>;

export class BlockchainServer extends MessageServer<Message> {

}