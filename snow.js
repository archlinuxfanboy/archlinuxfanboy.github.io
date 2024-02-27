document.addEventListener('DOMContentLoaded', function() {
    const NUM_SYMBOLS = 30;
    const SYMBOL_SIZE = 20;
    const FALL_SPEED = 4;

    let symbolsActive = false;

    function createSymbol() {
        const symbol = document.createElement('div');
        symbol.innerHTML = '*';
        symbol.classList.add('mouse-symbol');
        document.body.appendChild(symbol);
        
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        symbol.style.left = initialX + 'px';
        symbol.style.top = initialY + 'px';
    }

    function fallSymbols() {
        const symbols = document.getElementsByClassName('mouse-symbol');
        for (let i = 0; i < symbols.length; i++) {
            const symbol = symbols[i];
            const currentTop = parseFloat(symbol.style.top);
            if (currentTop < window.innerHeight - SYMBOL_SIZE) {
                symbol.style.top = (currentTop + FALL_SPEED) + 'px';
            } else {
                symbol.style.top = -SYMBOL_SIZE + 'px';
                symbol.style.left = Math.random() * window.innerWidth + 'px';
            }
        }
    }

    let fallInterval;
    function startFalling() {
        if (!symbolsActive) {
            for (let i = 0; i < NUM_SYMBOLS; i++) {
                createSymbol();
            }
            fallInterval = setInterval(fallSymbols, 30);
            symbolsActive = true;
        }
    }

    $("#yes-btn").click(function() {
        $(".button-layer").fadeOut();
        $("#enter-type-in").fadeOut();
        startFalling();
    });
});
