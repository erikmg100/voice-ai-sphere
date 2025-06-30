import { useState } from 'react';

export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSphereClick = () => {
    if (isListening) {
      setIsListening(false);
    } else if (!isSpeaking) {
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        setIsSpeaking(true);
        setTimeout(() => setIsSpeaking(false), 2000);
      }, 2000);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'black', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui'
    }}>
      <h1 style={{ marginBottom: '50px', fontSize: '3rem', fontWeight: '300' }}>
        Voice AI Sphere
      </h1>
      
      <div 
        onClick={handleSphereClick}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: isListening 
            ? 'radial-gradient(circle, rgba(0,255,136,0.2), rgba(0,255,136,0.05))' 
            : isSpeaking 
            ? 'radial-gradient(circle, rgba(255,107,107,0.2), rgba(255,107,107,0.05))'
            : 'radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          transform: isListening || isSpeaking ? 'scale(1.1)' : 'scale(1)'
        }}
      >
        <div style={{ fontSize: '2rem' }}>
          {isListening ? '🎤' : isSpeaking ? '🗣️' : '🌐'}
        </div>
      </div>

      <p style={{ marginTop: '30px', color: '#888' }}>
        {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Click to start'}
      </p>
    </div>
  );
}