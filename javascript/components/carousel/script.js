import { Carousel } from "./carousel/carousel.js"

const boxCarousel = document.createElement('div');
boxCarousel.className = 'carousel';


const leftSection = document.querySelector('.left-section');
const leftButton = document.createElement('button');
leftButton.className = 'left-button';
leftButton.innerHTML = "&lt";
leftSection.appendChild(leftButton);

const centerSection = document.querySelector('.center-section');
centerSection.appendChild(boxCarousel);
const carousel = new Carousel(boxCarousel);

carousel.createElement("Заголовок 1", "Описание", "https://cdn.culture.ru/images/9632c4c5-80e2-5db1-a4f2-5676986c9c41");
carousel.createElement("Заголовок 2", "Описание", "https://media.istockphoto.com/id/1332908450/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B5%D0%B6-%D0%BD%D0%B0-%D1%82%D1%80%D0%B0%D0%B2%D0%B5.jpg?s=612x612&w=0&k=20&c=9tClRSdBQ0wW-AKjkeTa7GzbTJTk7iM5G6F8Ft5DlLw=");
carousel.createElement("Заголовок 3", "Описание", "https://img.freepik.com/free-photo/cute-hedgehog-sitting-grass-looking-camera-generated-by-artificial-intelligence_188544-127826.jpg?semt=ais_hybrid&w=740");
carousel.createElement("Заголовок 4", "Описание", "https://img.magnific.com/premium-photo/cute-happy-wild-hedgehog-lying-soft-blanket-smiling-white-surface_113111-576.jpg?semt=ais_hybrid&w=740&q=80");
carousel.createElement("Заголовок 5", "Описание", "https://i.pinimg.com/736x/39/bf/6b/39bf6b8afe6802d6b5b91c4a62cd3161.jpg");
carousel.createElement("Заголовок 6", "Описание", "https://img.freepik.com/free-photo/cute-hedgehog-sitting-outdoors-looking-camera-with-fluffy-fur-generated-by-artificial-intelligence_188544-126831.jpg?semt=ais_hybrid");
carousel.createElement("Заголовок 7", "Описание", "https://t4.ftcdn.net/jpg/09/87/34/63/360_F_987346372_HqlQqiYjt37R0bs6eRokrQVty72GUXfN.jpg");
carousel.switchItem(0);


const rightSection = document.querySelector('.right-section');
const rightButton = document.createElement('button');
rightButton.className = 'right-button';
rightButton.innerHTML = "&gt";
rightSection.appendChild(rightButton);

leftButton.addEventListener('click', () => {
    carousel.previousItem();
});

rightButton.addEventListener('click', () => {
    // копирование первого элемента массива для возврата к первому элементу (С АНИМАЦИЕЙ!)
    // if (carousel._index === carousel._items.length - 1) {
    //     carousel.createElement(carousel._items[0]._title, carousel._items[0]._description, carousel._items[0]._image)
    // }
    carousel.nextItem();
});

// addSwitchingHandlers() {
//     this._leftButton.addEventListener('click', () => {
//         this.switchToDirection(-1)
//     })

//     this._rightButton.addEventListener('click', () => {
//         this.switchToDirection(+1)
//     })
// };
