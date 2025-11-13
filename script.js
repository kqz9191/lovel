document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const startOverlay = document.getElementById('start-overlay');
    const character = document.getElementById('character');
    const biuText = document.getElementById('biu-text');
    const loveText = document.getElementById('love-text');
    const heartsContainer = document.getElementById('hearts-container');
    const audio = document.getElementById('background-audio');
    const animationContainer = document.getElementById('animation-container');

    // СКОРРЕКТИРОВАННЫЕ, более компактные координаты сердца в %
    const heartRatios = [
        // Верхние дуги
        { x: 0.65, y: 0.25 }, { x: 0.55, y: 0.20 }, { x: 0.75, y: 0.20 },
        { x: 0.48, y: 0.28 }, { x: 0.82, y: 0.28 }, { x: 0.45, y: 0.38 },
        { x: 0.85, y: 0.38 },
        
        // Средняя часть
        { x: 0.48, y: 0.50 }, { x: 0.82, y: 0.50 },
        { x: 0.55, y: 0.60 }, { x: 0.75, y: 0.60 },
        
        // Нижняя точка
        { x: 0.65, y: 0.75 },

        // Заполнение для плотности
        { x: 0.65, y: 0.35 }, { x: 0.58, y: 0.30 }, { x: 0.72, y: 0.30 },
        { x: 0.52, y: 0.40 }, { x: 0.78, y: 0.40 }, { x: 0.65, y: 0.50 },
        { x: 0.56, y: 0.50 }, { x: 0.74, y: 0.50 }, { x: 0.60, y: 0.68 },
        { x: 0.70, y: 0.68 },
    ];

    function startAnimation() {
        startOverlay.style.opacity = '0';
        setTimeout(() => startOverlay.style.display = 'none', 500);
        audio.play().catch(e => console.log("Audio play failed:", e));

        character.classList.add('drawing');

        setTimeout(() => {
            biuText.style.opacity = '1';
        }, 4500);

        setTimeout(() => {
            const containerRect = animationContainer.getBoundingClientRect();
            
            // Скорректированная начальная позиция "вылета"
            const startXRatio = 0.25; 
            const startYRatio = 0.70; // 70% от верха = ~30% от низа
            
            heartRatios.forEach((ratio, index) => {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '♥';
                    
                    const startX = containerRect.width * startXRatio;
                    const startY = containerRect.height * startYRatio;
                    const targetX = containerRect.width * ratio.x;
                    const targetY = containerRect.height * ratio.y;

                    heart.style.left = `${startX}px`;
                    heart.style.top = `${startY}px`;
                    
                    heartsContainer.appendChild(heart);
                    
                    requestAnimationFrame(() => {
                        const translateX = targetX - startX;
                        const translateY = targetY - startY;
                        heart.style.opacity = '1';
                        heart.style.transform = `translate(${translateX}px, ${translateY}px) scale(1)`;
                    });
                }, index * 100); // Немного увеличим интервал для плавности
            });
        }, 5000);
        
        setTimeout(() => {
            loveText.style.opacity = '1';
        }, 9000); // Задержка, чтобы все сердечки успели появиться
    }

    startButton.addEventListener('click', startAnimation);
});