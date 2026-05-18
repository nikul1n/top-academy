// TODO: панелька с уведомлениями 
import { Notification, NotificationType } from "./notification.js"

export class Notifier {
    constructor(element) {
        this._element = element;
    }

    showNotifier(notificationType, text) {
        const item = document.createElement('li');
        const notification = new Notification(item, notificationType, text);
        notification.initElement();
        this._element.appendChild(item);
    }
}

function createNotifierAttached() {
    const boxNotifier = document.createElement('ul');
    boxNotifier.className = 'Notifier';

    document.body.appendChild(boxNotifier);


    return new Notifier(boxNotifier);
}

export const notifier = createNotifierAttached();
