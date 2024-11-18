function appendTovisor(value) {
    let visor = document.getElementById('visor');
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(visor.innerText.slice(-1))) {
        return;
    }
    visor.innerText += value;
}

function calculate() {
    let expression = document.getElementById('visor').innerText;
    try {
        if (expression.includes('/0')) {
            document.getElementById('visor').innerText = 'Erro';
            return;
        }
        let result = eval(expression);
        document.getElementById('visor').innerText = result;
    } catch (error) {
        document.getElementById('visor').innerText = 'Erro';
    }
}

function clearVisor() {
    document.getElementById('visor').innerText = '';
}

function percentage() {
    let visor = document.getElementById('visor');
    let currentValue = parseFloat(visor.innerText);
    // Calcula o valor percentual
    let result = currentValue / 100;
    visor.innerText = result;
}

document.querySelectorAll('.n').forEach(button => {
    button.addEventListener('click', function() {
        const value = button.innerText;
        if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearVisor();
        } else if (value === '%') {
            percentage();
        } else {
            appendTovisor(value);
        }
    });
});