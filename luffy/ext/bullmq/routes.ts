import BullMQProvider from "./provider";
import Router from "../../routes";

export default class BullMQRouter extends Router {
    constructor(
        queueName: string,
        handler: Function,
        name: string,
        ...args: any[]
    ) {
        if (!queueName) {
            throw new Error("Queue name must be provided");
        }

        name = name || queueName;
        super(new BullMQProvider(queueName), handler, ...args);
    }
}
