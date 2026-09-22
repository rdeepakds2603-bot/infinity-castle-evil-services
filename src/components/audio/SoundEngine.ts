/**
 * Procedural Web Audio Engine for A Villain's Lair
 * Zero external audio dependencies - 100% reliable synthesized sound design.
 */

class VillainSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambientGainNode: GainNode | null = null;
  private ambientOscillators: OscillatorNode[] = [];
  private isAmbientRunning: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.stopAmbientCastle();
    } else {
      this.initContext();
      this.startAmbientCastle();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  /**
   * Japanese Biwa / Shamisen string pluck
   */
  public playBiwaPluck(freq: number = 220, intensity: number = 1.0) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, now);
    osc.frequency.exponentialRampToValueAtTime(freq * 0.96, now + 0.8);

    oscHarmonic.type = 'triangle';
    oscHarmonic.frequency.setValueAtTime(freq * 2.01, now);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 3, now);
    filter.Q.setValueAtTime(4.0, now);
    filter.frequency.exponentialRampToValueAtTime(freq * 0.8, now + 1.2);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.4 * intensity, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

    osc.connect(filter);
    oscHarmonic.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    oscHarmonic.start(now);
    osc.stop(now + 1.5);
    oscHarmonic.stop(now + 1.5);
  }

  /**
   * Deep Japanese Taiko drum impact
   */
  public playTaikoDrum(pitch: number = 65, duration: number = 1.2) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Thump oscillator
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch * 2.2, now);
    osc.frequency.exponentialRampToValueAtTime(pitch, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(30, now + duration);

    // Initial click/transient
    const noiseBuffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.05, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < noiseBuffer.length; i++) {
      output[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(400, now);
    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.3, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);

    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    osc.start(now);
    osc.stop(now + duration);
  }

  /**
   * Kokushibo: Sharp Moon Katana unsheathe and crescent slash
   */
  public playKatanaSlash() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // White noise sweep
    const bufferSize = this.ctx.sampleRate * 0.4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(4800, now + 0.15);
    filter.frequency.exponentialRampToValueAtTime(300, now + 0.38);
    filter.Q.setValueAtTime(6.0, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.5, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    // High blade ring tone
    const osc = this.ctx.createOscillator();
    const oscGain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(3200, now);
    osc.frequency.exponentialRampToValueAtTime(2800, now + 0.6);
    oscGain.gain.setValueAtTime(0.15, now + 0.05);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    osc.connect(oscGain);
    oscGain.connect(this.ctx.destination);

    noise.start(now);
    osc.start(now + 0.05);
    osc.stop(now + 0.8);
  }

  /**
   * Doma: Crystalline frost crackle and chilling wind
   */
  public playFrostCrackle() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    // Chime resonance
    [1046, 1318, 1567, 2093].forEach((f, idx) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + idx * 0.06);
      gain.gain.setValueAtTime(0.001, now + idx * 0.06);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.06 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.9);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 1.0);
    });

    // Crackle noise burst
    const bufferSize = this.ctx.sampleRate * 0.6;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() > 0.92 ? 1 : 0) * (Math.random() * 2 - 1);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(3000, now);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    noise.start(now);
  }

  /**
   * Akaza: Dual Heartbeat thump + martial arts shockwave
   */
  public playAkazaHeartbeat() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // First heartbeat beat
    this.playHeartbeatThud(now, 0.45, 75);
    // Second heartbeat beat
    this.playHeartbeatThud(now + 0.22, 0.6, 68);

    // Shockwave rumble
    const rumble = this.ctx.createOscillator();
    const rumbleGain = this.ctx.createGain();
    rumble.type = 'triangle';
    rumble.frequency.setValueAtTime(110, now + 0.25);
    rumble.frequency.exponentialRampToValueAtTime(35, now + 0.9);
    rumbleGain.gain.setValueAtTime(0.4, now + 0.25);
    rumbleGain.gain.exponentialRampToValueAtTime(0.001, now + 1.1);

    rumble.connect(rumbleGain);
    rumbleGain.connect(this.ctx.destination);
    rumble.start(now + 0.25);
    rumble.stop(now + 1.2);
  }

  private playHeartbeatThud(time: number, volume: number, pitch: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, time);
    osc.frequency.exponentialRampToValueAtTime(25, time + 0.16);
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(time);
    osc.stop(time + 0.2);
  }

  /**
   * Hantengu: Thunder crackle + wooden dragon roar
   */
  public playHantenguThunder() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.linearRampToValueAtTime(45, now + 0.7);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.9);
  }

  /**
   * Gyokko: Water pot warp bubble
   */
  public playWaterWarp() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.35);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);
  }

  /**
   * Gyutaro & Daki: Dual razor slash & ribbon whistle
   */
  public playDualSlash() {
    if (this.isMuted) return;
    this.playKatanaSlash();
    setTimeout(() => {
      this.playBiwaPluck(440, 0.7);
    }, 120);
  }

  /**
   * Muzan: Deep ominous supernatural drone pulse
   */
  public playMuzanDarkPulse() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    [43.65, 46.25, 87.31].forEach((f) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 2.6);
    });
  }

  /**
   * Blood Contract Seal Stamp
   */
  public playBloodSealStamp() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    this.playTaikoDrum(45, 1.6);
    this.playBiwaPluck(110, 1.2);
  }

  /**
   * Ambient Castle Drone loop
   */
  private startAmbientCastle() {
    if (this.isAmbientRunning || !this.ctx) return;
    this.isAmbientRunning = true;

    const now = this.ctx.currentTime;
    this.ambientGainNode = this.ctx.createGain();
    this.ambientGainNode.gain.setValueAtTime(0.001, now);
    this.ambientGainNode.gain.linearRampToValueAtTime(0.06, now + 2.0);

    const f1 = this.ctx.createOscillator();
    f1.type = 'sine';
    f1.frequency.setValueAtTime(55, now); // A1 note

    const f2 = this.ctx.createOscillator();
    f2.type = 'triangle';
    f2.frequency.setValueAtTime(82.41, now); // E2 fifth

    f1.connect(this.ambientGainNode);
    f2.connect(this.ambientGainNode);
    this.ambientGainNode.connect(this.ctx.destination);

    f1.start(now);
    f2.start(now);
    this.ambientOscillators = [f1, f2];
  }

  private stopAmbientCastle() {
    if (!this.isAmbientRunning || !this.ctx || !this.ambientGainNode) return;
    const now = this.ctx.currentTime;
    this.ambientGainNode.gain.linearRampToValueAtTime(0.0001, now + 0.5);
    setTimeout(() => {
      this.ambientOscillators.forEach(osc => {
        try { osc.stop(); } catch {}
      });
      this.ambientOscillators = [];
      this.isAmbientRunning = false;
    }, 600);
  }
}

export const soundEngine = new VillainSoundEngine();
