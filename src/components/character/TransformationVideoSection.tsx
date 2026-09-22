import React, { useState, useRef } from 'react';
import type { CharacterData } from '../../types';
import { soundEngine } from '../audio/SoundEngine';
import {
  Play,
  Pause,
  RotateCcw,
  Upload,
  Video,
  Sparkles,
  Zap,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface TransformationVideoSectionProps {
  character: CharacterData;
}

export const TransformationVideoSection: React.FC<TransformationVideoSectionProps> = ({
  character,
}) => {
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simSecond, setSimSecond] = useState(0);
  const [isLooping, setIsLooping] = useState(true);
  const [videoMuted, setVideoMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const simTimerRef = useRef<number | null>(null);

  // Handle local video file upload (MP4/WebM)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (uploadedVideoUrl) {
        URL.revokeObjectURL(uploadedVideoUrl);
      }
      const url = URL.createObjectURL(file);
      setUploadedVideoUrl(url);
      setIsPlaying(true);
      soundEngine.playTaikoDrum(55, 1.2);
    }
  };

  // Start 25-second cinematic transformation sequence simulator
  const startSimulation = () => {
    setIsSimulating(true);
    setSimSecond(0);

    // Play signature transformation sound
    switch (character.id) {
      case 'kokushibo':
        soundEngine.playKatanaSlash();
        break;
      case 'doma':
        soundEngine.playFrostCrackle();
        break;
      case 'akaza':
        soundEngine.playAkazaHeartbeat();
        break;
      case 'hantengu':
        soundEngine.playHantenguThunder();
        break;
      case 'gyokko':
        soundEngine.playWaterWarp();
        break;
      case 'gyutaro-daki':
        soundEngine.playDualSlash();
        break;
      default:
        soundEngine.playMuzanDarkPulse();
        break;
    }

    if (simTimerRef.current) clearInterval(simTimerRef.current);

    let sec = 0;
    simTimerRef.current = window.setInterval(() => {
      sec++;
      setSimSecond(sec);

      // Trigger mid-transformation sound bursts
      if (sec === 6) soundEngine.playBiwaPluck(220, 0.7);
      if (sec === 13) soundEngine.playTaikoDrum(45, 1.5);
      if (sec === 19) soundEngine.playBiwaPluck(440, 1.0);

      if (sec >= 25) {
        if (simTimerRef.current) clearInterval(simTimerRef.current);
        setIsSimulating(false);
      }
    }, 1000);
  };

  const stopSimulation = () => {
    if (simTimerRef.current) clearInterval(simTimerRef.current);
    setIsSimulating(false);
    setSimSecond(0);
  };

  const currentStage =
    simSecond < 6
      ? character.transformation.transformationStages[0]
      : simSecond < 13
      ? character.transformation.transformationStages[1]
      : simSecond < 19
      ? character.transformation.transformationStages[2]
      : character.transformation.transformationStages[3];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-black/90 border border-red-900/60 shadow-2xl backdrop-blur-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-600/60 text-red-400 text-xs font-cinzel font-bold tracking-widest mb-2">
            <Video className="w-3.5 h-3.5 text-amber-400" />
            <span>25-SECOND TRANSFORMATION VIDEO VAULT</span>
          </div>
          <h3 className="font-cinzel-dec text-2xl sm:text-3xl font-black text-white tracking-wider">
            FINAL FORM AWAKENING SEQUENCE
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 font-cinzel tracking-wider">
            Anime-style transformation timing, cinematic camera movement, and final attack reveal.
          </p>
        </div>

        {/* Upload Video Button */}
        <div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="video/mp4,video/webm,video/ogg,video/quicktime"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-900 to-red-950 hover:from-red-800 hover:to-red-900 text-white font-cinzel text-xs font-bold tracking-widest border border-red-500/70 shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4 text-amber-300" />
            <span>UPLOAD REFERENCE CLIP (20–30s)</span>
          </button>
        </div>
      </div>

      {/* Main Video / Interactive Animation Screen */}
      <div className="relative rounded-2xl overflow-hidden bg-neutral-950 border-2 border-red-900/80 aspect-video flex items-center justify-center group shadow-[0_0_40px_rgba(0,0,0,0.9)]">
        {/* If user uploaded a real MP4/WebM video */}
        {uploadedVideoUrl ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={uploadedVideoUrl}
              autoPlay
              loop={isLooping}
              muted={videoMuted}
              playsInline
              className="w-full h-full object-cover"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {/* Custom Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      if (isPlaying) videoRef.current.pause();
                      else videoRef.current.play();
                      setIsPlaying(!isPlaying);
                    }
                  }}
                  className="p-2 rounded-lg bg-black/80 hover:bg-neutral-800 text-white cursor-pointer border border-neutral-700"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play();
                      setIsPlaying(true);
                    }
                  }}
                  className="p-2 rounded-lg bg-black/80 hover:bg-neutral-800 text-white cursor-pointer border border-neutral-700"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsLooping(!isLooping)}
                  className={`p-2 rounded-lg bg-black/80 hover:bg-neutral-800 text-xs font-cinzel cursor-pointer border ${
                    isLooping ? 'border-amber-400 text-amber-300' : 'border-neutral-700 text-neutral-400'
                  }`}
                  title={isLooping ? 'Loop Enabled' : 'Loop Disabled'}
                >
                  LOOP {isLooping ? 'ON' : 'OFF'}
                </button>
                <button
                  onClick={() => setVideoMuted(!videoMuted)}
                  className="p-2 rounded-lg bg-black/80 hover:bg-neutral-800 text-white cursor-pointer border border-neutral-700"
                >
                  {videoMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                </button>
              </div>
              <span className="text-xs font-cinzel text-neutral-300 tracking-wider">
                CUSTOM USER REFERENCE CLIP ACTIVE
              </span>
            </div>
          </div>
        ) : (
          /* Built-in Cinematic Transformation Scene Simulation */
          <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
            {/* Character Real Image with Dynamic Transformation Filters */}
            <img
              src={character.visualAsset.imageSrc}
              alt={character.name}
              className={`w-full h-full object-cover object-center transition-all duration-1000 ${
                isSimulating
                  ? 'scale-115 brightness-125 contrast-125 saturate-150 animate-pulse'
                  : 'scale-100 brightness-90 contrast-110'
              }`}
            />

            {/* Glowing Energy Aura Overlay during Transformation */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                isSimulating ? 'opacity-80' : 'opacity-20'
              }`}
              style={{
                background: `radial-gradient(circle at 50% 50%, ${character.themeColor.glow}, transparent 70%)`,
              }}
            />

            {/* Simulation Progress & Stage HUD */}
            {isSimulating ? (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex flex-col justify-between p-6 sm:p-8 pointer-events-none animate-fade-in">
                {/* Top HUD: Timer and Stage Badge */}
                <div className="flex items-center justify-between">
                  <div className="px-3.5 py-1.5 rounded-full bg-red-950/90 border border-red-500 text-amber-300 font-cinzel text-xs font-bold tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>AWAKENING IN PROGRESS: {simSecond}s / 25s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={stopSimulation}
                      className="pointer-events-auto px-2.5 py-1 rounded bg-black/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 text-[10px] font-cinzel cursor-pointer"
                    >
                      RESET
                    </button>
                    <span className="font-cinzel text-xs text-neutral-300 uppercase tracking-widest bg-black/80 px-3 py-1 rounded border border-neutral-800">
                      STAGE {simSecond < 6 ? '1' : simSecond < 13 ? '2' : simSecond < 19 ? '3' : '4'} OF 4
                    </span>
                  </div>
                </div>

                {/* Center Dramatic Text */}
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <h4 className="font-cinzel-dec text-2xl sm:text-4xl font-black text-white tracking-widest drop-shadow-[0_0_25px_rgba(220,38,38,0.9)] animate-pulse">
                    {currentStage?.stage}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed bg-black/70 p-3 rounded-xl border border-red-900/60">
                    {currentStage?.description}
                  </p>
                </div>

                {/* Bottom 25-Second Progress Bar */}
                <div>
                  <div className="w-full h-2 rounded-full bg-neutral-900 border border-neutral-800 overflow-hidden mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 via-amber-400 to-red-600 transition-all duration-300"
                      style={{ width: `${(simSecond / 25) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-cinzel text-neutral-400">
                    <span>00:00 INITIAL FORM</span>
                    <span>00:12 AURA SURGE</span>
                    <span>00:25 FINAL ATTACK STANCE</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Idle — character POSE always visible, text floats on top */
              <div className="absolute inset-0 flex flex-col items-center justify-end pointer-events-none">
                {/* Subtle top vignette only — pose remains fully visible */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none" />

                {/* Character name watermark top-left */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="font-cinzel text-[10px] font-bold tracking-[0.3em] text-amber-400/80 uppercase">
                    {character.name} — FINAL FORM
                  </span>
                </div>

                {/* Pulsing aura ring in center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-32 h-32 rounded-full opacity-25 animate-ping"
                    style={{ background: `radial-gradient(circle, ${character.themeColor.glow}, transparent 70%)` }}
                  />
                </div>

                {/* Bottom overlay with title + button */}
                <div className="relative z-10 w-full px-6 pb-6 pt-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-center space-y-3 pointer-events-auto">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-950/90 border border-red-500 flex items-center justify-center shadow-[0_0_18px_rgba(220,38,38,0.8)]">
                      <Play className="w-4 h-4 text-amber-300 translate-x-0.5" />
                    </div>
                    <h4 className="font-cinzel text-base sm:text-lg font-black text-white tracking-wider">
                      CINEMATIC FINAL FORM TRANSFORMATION (25s)
                    </h4>
                  </div>
                  <p className="text-[11px] text-neutral-300 font-cinzel max-w-md mx-auto">
                    Trigger the full anime transformation scene with dynamic lighting, camera zooms, and energy aura.
                  </p>
                  <button
                    onClick={startSimulation}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-cinzel text-xs font-bold tracking-[0.2em] border border-red-400 shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all cursor-pointer flex items-center gap-2 mx-auto"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>PLAY TRANSFORMATION SCENE</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 25-Second Anime Transformation Sequence Timeline Breakdown */}
      <div className="space-y-3 pt-2">
        <h4 className="font-cinzel text-xs font-bold text-amber-400 tracking-widest uppercase flex items-center gap-2">
          <Zap className="w-4 h-4 text-red-500" />
          <span>CINEMATIC TRANSFORMATION STAGES BREAKDOWN</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {character.transformation.transformationStages.map((stage, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all ${
                isSimulating && currentStage?.stage === stage.stage
                  ? 'bg-red-950/70 border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.5)] scale-[1.02]'
                  : 'bg-neutral-950 border-neutral-800'
              }`}
            >
              <span className="text-[10px] font-cinzel text-amber-400 font-bold block mb-1">
                {stage.second}
              </span>
              <h5 className="font-cinzel text-xs font-black text-white mb-1">
                {stage.stage}
              </h5>
              <p className="text-[11px] text-neutral-300 font-light leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Online Reference Inspiration Prompt */}
      <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-400 leading-relaxed font-sans">
        <strong className="text-red-400 font-cinzel block mb-1">
          ANIMATION STYLE & CAMERA REFERENCE INSPIRATION:
        </strong>
        {character.transformation.videoReferencePrompt}
      </div>
    </div>
  );
};
