// Tool Hub Interaction Script
document.addEventListener('DOMContentLoaded', () => {
  const toolCards = document.querySelectorAll('.tool-card');
  
  toolCards.forEach(card => {
    card.addEventListener('click', () => {
      const toolName = card.dataset.tool;
      handleToolClick(toolName);
    });
  });
});

function handleToolClick(tool) {
  switch(tool) {
    case 'calculator':
      alert('Calculator tool selected');
      break;
    case 'converter':
      alert('Unit Converter tool selected');
      break;
    case 'timer':
      alert('Timer tool selected');
      break;
    case 'notes':
      alert('Notes tool selected');
      break;
    default:
      console.log('Unknown tool selected');
  }
}

// Utility function to show loading state
function showLoading(card) {
  card.classList.add('loading');
  card.innerHTML = `
    <div class="loader"></div>
    <p>Loading tool...</p>
  `;
}
