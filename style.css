/* Общие стили */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #1a1a1a; /* Сделаем фон темнее для контраста */
    font-family: 'Comic Sans MS', cursive, sans-serif;
}

#animation-container {
    position: relative;
    /* Адаптивные размеры: занимает 95% ширины экрана, но не больше 600px */
    width: 95vw;
    max-width: 600px;
    /* Сохраняем пропорции 3:2 */
    aspect-ratio: 3 / 2;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
    overflow: hidden;
}

/* Стили для SVG-персонажа (адаптивные) */
#character {
    position: absolute;
    bottom: 5%;
    left: 8%;
    width: 25%; /* Размер персонажа зависит от размера контейнера */
    height: auto;
}

#character path {
    fill: none;
    stroke: #000;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
}

/* ЗАМЕДЛЕННАЯ анимация рисования */
@keyframes draw {
    to { stroke-dashoffset: 0; }
}

/* Применяем замедленную анимацию */
.drawing #head { animation: draw 2s forwards; }
.drawing #body { animation: draw 1s 1.8s forwards; }
.drawing #leg1 { animation: draw 0.6s 2.5s forwards; }
.drawing #leg2 { animation: draw 0.6s 2.5s forwards; }
.drawing #arm { animation: draw 1s 2.8s forwards; }
.drawing #fingers { animation: draw 1s 3.5s forwards; }

/* Элементы лица появляются позже */
.face-feature { opacity: 0; transition: opacity 1s; }
.drawing .face-feature {
    transition-delay: 4s; /* Появляются после отрисовки */
    opacity: 1;
}
.eye { fill: #000; }
.blush { stroke: #ff9999; stroke-width: 2; fill: none; }

/* Стили для сердечек (адаптивный размер) */
.heart {
    position: absolute;
    color: #ff477e;
    /* Размер шрифта сердечка зависит от ширины экрана */
    font-size: clamp(12px, 3vw, 22px);
    opacity: 0;
    transform: scale(0);
    /* Анимация полета стала медленнее */
    transition: transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 1s;
}

/* Стили для текста (адаптивные) */
.text {
    position: absolute;
    opacity: 0;
    /* Плавное появление */
    transition: opacity 2s ease-in-out;
}

#biu-text {
    /* Позиционируем относительно персонажа */
    left: 28%;
    bottom: 28%;
    font-size: clamp(16px, 4vw, 24px);
    color: #555;
    transform: rotate(-15deg);
}

#love-text {
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: clamp(28px, 10vw, 50px);
    color: #e83e8c;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* Кнопка запуска */
#start-overlay {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    transition: opacity 0.5s;
}
#start-button {
    padding: 15px 30px;
    font-size: clamp(18px, 5vw, 22px);
    border: none;
    background-color: #ff477e;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
