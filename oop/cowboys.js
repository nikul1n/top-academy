// 3. Создайте класс Cowboy(Ковбой), который имеет здоровье, количество урона
// и возможность стрельбы в другого ковбоя. Сделайте, чтобы два ковбоя
// выстрелили друг в друга по очереди.

class Cowboy {
    constructor(health, power) {
        this.health = health;
        this.power = power;
    }

    shot(cowboy1, cowboy2) {
        console.log(`Нанесён урон ${cowboy1.power}`);
        cowboy2.health -= cowboy1.power;
    }

    displayHealth = () => console.log(`Осталось здоровья ${this.health}`)
}

const cowboy1 = new Cowboy(100, 5);
const cowboy2 = new Cowboy(100, 6);

console.log(`Первый ковбой совершает выстрел: `);
cowboy1.shot(cowboy1, cowboy2);
cowboy2.displayHealth();
console.log(`Второй ковбой совершает выстрел: `);
cowboy2.shot(cowboy2, cowboy1);
cowboy1.displayHealth();