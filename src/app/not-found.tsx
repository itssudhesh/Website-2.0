import Image from 'next/image';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: '#888' }}>
      <Image 
        src="/bunny-cable.jpg" 
        alt="Bunny chewing cable" 
        width={600} 
        height={400} 
        style={{ maxWidth: 600, width: '100%', marginBottom: 32, borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }} 
        priority
      />
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Page not found. Come later.</h1>
    </div>
  );
} 