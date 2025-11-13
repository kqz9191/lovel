document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startOverlay = document.getElementById('start-overlay');
    const character = document.getElementById('character');
    const biuText = document.getElementById('biu-text');
    const loveText = document.getElementById('love-text');
    const heartsContainer = document.getElementById('hearts-container');
    const audio = document.getElementById('background-audio');

    // Координаты для маленьких сердечек, чтобы они сформировали большое сердце
    const heartPositions = [
        // Верхние ряды
        { x: 280, y: 100 }, { x: 320, y: 80 }, { x: 360, y: 70 }, { x: 400, y: 80 }, { x: 440, y: 100 },
        { x: 240, y: 130 }, { x: 480, y: 130 },
        // Средние ряды
        { x: 220, y: 160 }, { x: 260, y: 130 }, { x: 300, y: 110 }, { x: 340, y: 100 }, { x: 380, y: 100 }, { x: 420, y: 110 }, { x: 460, y: 130 }, { x: 500, y: 160 },
        { x: 210, y: 190 }, { x: 250, y: 160 }, { x: 290, y: 140 }, { x: 330, y: 130 }, { x: 370, y: 130 }, { x: 410, y: 140 }, { x: 450, y: 160 }, { x: 490, y: 190 },
        { x: 210, y: 220 }, { x: 250, y: 190 }, { x: 290, y: 170 }, { x: 330, y: 160 }, { x: 370, y: 160 }, { x: 410, y: 170 }, { x: 450, y: 190 }, { x: 490, y: 220 },
        // Нижние ряды
        { x: 220, y: 250 }, { x: 260, y: 220 }, { x: 300, y: 200 }, { x: 340, y: 190 }, { x: 380, y: 190 }, { x: 420, y: 200 }, { x: 460, y: 220 }, { x: 500, y: 250 },
        { x: 240, y: 280 }, { x: 280, y: 250 }, { x: 320, y: 230 }, { x: 360, y: 220 }, { x: 400, y: 230 }, { x: 440, y: 250 }, { x: 480, y: 280 },
        { x: 270, y: 300 }, { x: 310, y: 270 }, { x: 350, y: 260 }, { x: 390, y: 270 }, { x: 430, y: 300 },
        { x: 300, y: 320 }, { x: 340, y: 290 }, { x: 380, y: 290 }, { x: 420, y: 320 },
        { x: 360, y: 320 },
    ];

    function startAnimation() {
        // 1. Скрываем кнопку и запускаем музыку
        startOverlay.style.opacity = '0';
        setTimeout(() => startOverlay.style.display = 'none', 500);
        audio.play();

        // 2. Начинаем рисовать персонажа, добавив класс
        character.classList.add('drawing');

        // 3. Через 2.5 секунды показываем "biu"
        setTimeout(() => {
            biuText.style.transition = 'opacity 0.5s';
            biuText.style.opacity = '1';
        }, 2500);

        // 4. Через 3 секунды начинаем "стрелять" сердечками
        setTimeout(() => {
            // Создаем и анимируем каждое сердечко с небольшой задержкой
            heartPositions.forEach((pos, index) => {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '♥';
                    
                    // Начальная позиция - у руки персонажа
                    heart.style.left = '140px';
                    heart.style.bottom = '90px';
                    
                    heartsContainer.appendChild(heart);
                    
                    // Через мгновение запускаем анимацию полета
                    requestAnimationFrame(() => {
                        heart.style.opacity = '1';
                        heart.style.transform = `translate(${pos.x - 140}px, ${-(pos.y - 90)}px) scale(1)`;
                    });
                }, index * 40); // Задержка между появлением сердечек
            });
        }, 3000);
        
        // 5. Через 6 секунд (когда все сердечки на месте) показываем "I Love You"
        setTimeout(() => {
            loveText.style.transition = 'opacity 1s';
            loveText.style.opacity = '1';
        }, 6000);
    }

    startButton.addEventListener('click', startAnimation);
});