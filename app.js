const ws = new WebSocket('wss://your-replit-server-url');

ws.onopen = () => {
    console.log('WebSocket conectado');
};

ws.onmessage = (msg) => {
    console.log('Mensaje del servidor:', msg.data);
};

document.getElementById('adelante').onclick = () => {
    ws.send(JSON.stringify({ action: 'mover', direction: 'adelante' }));
};

document.getElementById('detener').onclick = () => {
    ws.send(JSON.stringify({ action: 'mover', direction: 'detener' }));
};
