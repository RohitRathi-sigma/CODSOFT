document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('result');
    const buttons = document.querySelectorAll('button[data-value]');
    const equalsBtn = document.getElementById('equals');
    const clearBtn = document.getElementById('clear');
    const showHistoryBtn = document.getElementById('showHistory');
    const historyList = document.getElementById('historyList');
  
    let history = [];
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        display.value += button.getAttribute('data-value');
      });
    });
  
    equalsBtn.addEventListener('click', () => {
      try {
        const expression = display.value;
        const result = eval(expression);
        display.value = result;
        history.push(`${expression} = ${result}`);
      } catch {
        display.value = 'Invalid';
      }
    });
  
    clearBtn.addEventListener('click', () => {
      display.value = '';
    });
  
    showHistoryBtn.addEventListener('click', () => {
      if (history.length === 0) {
        historyList.innerHTML = "<em>No history yet.</em>";
      } else {
        historyList.innerHTML = history.map(entry => `<div>${entry}</div>`).join('');
      }
      historyList.style.display = historyList.style.display === 'none' ? 'block' : 'none';
    });
  });
  