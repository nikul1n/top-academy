// TODO: панелька с уведомлениями 
import {Notification} from "notification.js"

class Notifier {
    constructor(element) {
        this._element = element;
    }

    showWarning(text) {
        new Notification(document.createElement(), Notification.types.warning);
    }
}

