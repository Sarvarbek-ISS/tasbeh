var count = 0; 
 
function incre() { 
  count++; 
  document.getElementById('tnum').innerHTML = count; 
} 
 
function reset() { 
  count = 0; 
  document.getElementById('tnum').innerHTML = count; 
} 

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  hours = hours % 12; 
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0' + minutes : minutes; 
  seconds = seconds < 10 ? '0' + seconds : seconds; 

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();


document.getElementById('toggleButton').onclick = function() {
  var div = document.getElementById('clock');
  div.style.display = (div.style.display === 'none') ? 'block' : 'none';
};
