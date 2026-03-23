// Utility functions

function dist(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}

function midpoint(a, b) {
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

function getTouchPos(canvas, touch) {
    const rect = canvas.getBoundingClientRect();
    // Return CSS pixel coordinates (not canvas pixels)
    // because the canvas context already has dpr scaling via setTransform
    return {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top
    };
}

function getMousePos(canvas, e) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
