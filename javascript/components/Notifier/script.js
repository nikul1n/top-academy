import { Notification, NotificationType } from "./Notifier/notification.js";

const element = document.createElement('div');

const notification = new Notification(element, NotificationType.WARNING,"123123123123123");
notification.initElement();
document.body.appendChild(element);