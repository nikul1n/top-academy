// TODO: панелька с уведомлениями 
import { Notification, NotificationType } from "./notification.js"

export class Notifier {
    constructor(element) {
        this._element = element;
    }

    setDefaulTimeout(ms) {
        this._defaultTime = ms;
    }
    showNotifier(notificationType, text, timeoutMs = null) {
        const item = document.createElement('li');
        const notification = new Notification(item, notificationType, text, timeoutMs ?? this._defaultTime);
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
