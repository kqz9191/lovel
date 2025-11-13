document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startOverlay = document.getElementById('start-overlay');
    const character = document.getElementById('character');
    const biuText = document.getElementById('biu-text');
    const loveText = document.getElementById('love-text');
    const heartsContainer = document.getElementById('hearts-container');
    const audio = document.getElementById('background-audio');
    const animationContainer = document.getElementById('animation-container');

    // Координаты для сердечек в виде % от ширины/высоты контейнера.
    // Это делает их положение адаптивным для любого экрана.
    const heartRatios = [
        // Верхняя часть сердца
        { x: 0.60, y: 0.18 }, { x: 0.52, y: 0.15 }, { x: 0.68, y: 0.15 },
        { x: 0.46, y: 0.20 }, { x: 0.74, y: 0.20 }, { x: 0.42, y: 0.28 },
        { x: 0.78, y: 0.28 }, { x: 0.40, y: 0.38 }, { x: 0.80, y: 0.38 },
        
        // Средняя часть
        { x: 0.60, y: 0.25 }, { x: 0.52, y: 0.22 }, { x: 0.68, y: 0.22 },
        { x: 0.48, y: 0.30 }, { x: 0.72, y: 0.30 }, { x: 0.45, y: 0.40 },
        { x: 0.75, y: 0.40 }, { x: 0.44, y: 0.50 }, { x: 0.76, y: 0.50 },
        
        // Нижняя часть
        { x: 0.48, y: 0.60 }, { x: 0.72, y: 0.60 }, { x: 0.53, y: 0.70 },
        { x: 0.67, y: 0.70 }, { x: 0.58, y: 0.80 }, { x: 0.62, y: 0.80 },
        { x: 0.60, y: 0.88 }
    ];

    // Добавим больше точек для плотности
    const denseHeartRatios = [...heartRatios];
    heartRatios.forEach(p => {
        denseHeartRatios.push({x: p.x + 0.01, y: p.y + 0.01});
        denseHeartRatios.push({x: p.x - 0.01, y: p.y - 0.01});
    });


    function startAnimation() {
        // 1. Скрываем кнопку и запускаем музыку
        startOverlay.style.opacity = '0';
        setTimeout(() => startOverlay.style.display = 'none', 500);
        audio.play();

        // 2. Начинаем рисовать персонажа
        character.classList.add('drawing');

        // 3. (ЗАМЕДЛЕНО) Показываем "biu" после отрисовки
        setTimeout(() => {
            biuText.style.opacity = '1';
        }, 4500);

        // 4. (ЗАМЕДЛЕНО) Начинаем создавать сердечки
        setTimeout(() => {
            const containerRect = animationContainer.getBoundingClientRect();
            
            // Начальная позиция "вылета" сердечка (у рта/руки) в %
            const startXRatio = 0.28;
            const startYRatio = 0.65;
            
            denseHeartRatios.forEach((ratio, index) => {
                // Задержка между появлением каждого сердечка увеличена
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '♥';
                    
                    // Рассчитываем начальные и конечные координаты в пикселях
                    const startX = containerRect.width * startXRatio;
                    const startY = containerRect.height * startYRatio;
                    const targetX = containerRect.width * ratio.x;
                    const targetY = containerRect.height * ratio.y;

                    // Устанавливаем начальное положение
                    heart.style.left = `${startX}px`;
                    heart.style.top = `${startY}px`;
                    
                    heartsContainer.appendChild(heart);
                    
                    // Запускаем анимацию полета
                    requestAnimationFrame(() => {
                        const translateX = targetX - startX;
                        const translateY = targetY - startY;
                        heart.style.opacity = '1';
                        heart.style.transform = `translate(${translateX}px, ${translateY}px) scale(1)`;
                    });
                }, index * 80); // Увеличенная задержка
            });
        }, 5000);
        
        // 5. (ЗАМЕДЛЕНО) Показываем финальный текст, когда все сердечки на месте
        setTimeout(() => {
            loveText.style.opacity = '1';
        }, 10000); // Появляется значительно позже
    }

    startButton.addEventListener('click', startAnimation);
});
