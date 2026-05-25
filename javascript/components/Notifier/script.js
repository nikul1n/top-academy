import { Notification, NotificationType } from "./Notifier/notification.js";
import { notifier } from "./Notifier/notifier.js";

// const element = document.createElement('div');

notifier.setDefaulTimeout(30000);
notifier.showNotifier(NotificationType.WARNING, "235235adsgaerg");
notifier.showNotifier(NotificationType.ERROR, "235235adsgaerg");
notifier.showNotifier(NotificationType.SUCCESS, "235235adsgaerg");
notifier.showNotifier(NotificationType.INFO, "235235adsgaerg");