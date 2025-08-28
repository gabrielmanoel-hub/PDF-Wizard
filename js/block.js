// Bloquear o clique direito
//-------------------------------
// ...adicione dentro da tag <script>...
document.addEventListener('contextmenu', e => e.preventDefault());

//Bloquear teclas comuns (F12, Ctrl+Shift+I, Ctrl+U)
//--------------------------------------------------
// ...adicione dentro da tag <script>...
document.addEventListener('keydown', function(e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i') ||
    (e.ctrlKey && e.key.toLowerCase() === 'u')
  ) {
    e.preventDefault();
  }
});