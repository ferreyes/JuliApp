// Sound effects using Web Audio API (no external files needed)

const Sounds = {
    ctx: null,
    enabled: true,

    init() {
        // Create AudioContext on first user interaction (required by browsers)
        const initAudio = () => {
            if (!this.ctx) {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            }
            document.removeEventListener('touchstart', initAudio);
            document.removeEventListener('mousedown', initAudio);
        };
        document.addEventListener('touchstart', initAudio, { once: true });
        document.addEventListener('mousedown', initAudio, { once: true });
    },

    play(type) {
        if (!this.enabled || !this.ctx) return;

        try {
            switch (type) {
                case 'click':
                    this._playTone(800, 0.05, 'sine', 0.15);
                    break;
                case 'pop':
                    this._playTone(600, 0.08, 'sine', 0.2);
                    setTimeout(() => this._playTone(900, 0.06, 'sine', 0.12), 50);
                    break;
                case 'swoosh':
                    this._playSweep(400, 200, 0.15, 0.1);
                    break;
                case 'fanfare':
                    this._playTone(523, 0.15, 'sine', 0.2);
                    setTimeout(() => this._playTone(659, 0.15, 'sine', 0.2), 150);
                    setTimeout(() => this._playTone(784, 0.15, 'sine', 0.2), 300);
                    setTimeout(() => this._playTone(1047, 0.3, 'sine', 0.25), 450);
                    break;
                case 'error':
                    this._playTone(200, 0.2, 'sawtooth', 0.1);
                    break;
            }
        } catch (e) {
            // Silently fail if audio context is not ready
        }
    },

    _playTone(freq, duration, type, volume) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type || 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(volume || 0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + duration);
    },

    _playSweep(startFreq, endFreq, duration, volume) {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(endFreq, this.ctx.currentTime + duration);
        gain.gain.setValueAtTime(volume || 0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime);
        osc.stop(this.ctx.currentTime + duration);
    }
};
