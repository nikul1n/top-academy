// enum - enumerate - перечисление

/**
 * @enum {string}
 */
export const NotificationType = {
    INFO: 'info',
    WARNING: 'warning',
    SUCCESS: 'success',
    ERROR: 'error',
}

export class Notification {
    /**
     * @param {HTMLElement} element 
     * @param {NotificationType} type 
     * @param {string} text 
     */
    constructor(element, type, text) {
        this._element = element;
        this._type = type;
        this._text = text;
    }

    show(params) {

    }

    _hide() {

    }

    initElement() {
        
        // const textElement = document.createElement('div');
        // textElement.className = `Notification ${this._getTypeClassName()} `;
        // textElement.textContent = this._text;
        
        this._element.className = `Notification ${this._getTypeClassName()} `;
        this._element.textContent = this._text;

        const btnClose = document.createElement('button');
        btnClose.innerHTML = "&times;";
        btnClose.className = 'button-close-notification';
        this._element.appendChild(btnClose);

        btnClose.addEventListener('click', () => {
           this._element.style.display = 'none';
        });

    }

    // Notification.btnClose.addEventListener('click', () => {

    _getTypeClassName() {
        switch (this._type) {
            case NotificationType.INFO: return "Notification_info";
            case NotificationType.WARNING: return "Notification_warning";
            case NotificationType.SUCCESS: return "Notification_success";
            case NotificationType.ERROR: return "Notification_error";
        }
    }
}

// notifier.showWarning(text);
// notifier.showSuccess(text);
