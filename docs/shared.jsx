// shared.jsx — global components exported to window

// ── Node Canvas ───────────────────────────────────────────────
const NodeCanvas = ({ count = 24, opacity = 1 }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const nodes = Array.from({ length: count }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00025,
      vy: (Math.random() - 0.5) * 0.00025,
      r: Math.random() * 2 + 1.5,
      t: Math.random() * Math.PI * 2,
    }));
    const draw = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      nodes.forEach(n => { n.x = ((n.x + n.vx) + 1) % 1; n.y = ((n.y + n.vy) + 1) % 1; n.t += 0.012; });
      for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) {
        const dx = (nodes[i].x - nodes[j].x) * w, dy = (nodes[i].y - nodes[j].y) * h;
        const d = Math.hypot(dx, dy);
        if (d < 220) {
          ctx.strokeStyle = `rgba(24,89,209,${(1 - d / 220) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(nodes[i].x * w, nodes[i].y * h); ctx.lineTo(nodes[j].x * w, nodes[j].y * h); ctx.stroke();
        }
      }
      nodes.forEach(n => {
        const p = Math.sin(n.t) * 0.3 + 0.7;
        const x = n.x * w, y = n.y * h;
        const g = ctx.createRadialGradient(x, y, 0, x, y, n.r * 7);
        g.addColorStop(0, `rgba(24,89,209,${0.28 * p})`); g.addColorStop(1, 'rgba(24,89,209,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, n.r * 7, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(119,218,251,${0.85 * p})`; ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }} />;
};

// ── ElectricLogo ─────────────────────────────────────────────
const ElectricLogo = () => {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);

  // Brain constellation nodes (relative 0-1 coords)
  const BRAIN_NODES = [
    [0.38,0.04],[0.52,0.02],[0.65,0.07],[0.75,0.15],[0.80,0.26],
    [0.82,0.38],[0.78,0.50],[0.82,0.60],[0.76,0.70],
    [0.65,0.76],[0.54,0.80],[0.50,0.88],[0.44,0.92],
    [0.38,0.88],[0.32,0.92],[0.26,0.88],
    [0.16,0.78],[0.08,0.68],[0.06,0.56],
    [0.10,0.44],[0.06,0.32],[0.12,0.20],[0.22,0.10],[0.30,0.05],
    [0.38,0.20],[0.52,0.18],[0.64,0.26],[0.70,0.40],[0.66,0.54],
    [0.54,0.60],[0.40,0.62],[0.28,0.58],[0.20,0.44],[0.24,0.30],
    [0.36,0.38],[0.50,0.36],[0.58,0.44],[0.44,0.50],
    [0.38,0.46],[0.38,0.60],
  ];

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let t = 0;
    const S = 44; // canvas size
    canvas.width = S;
    canvas.height = S;

    const draw = () => {
      ctx.clearRect(0, 0, S, S);
      const cx = S / 2, cy = S / 2, ringR = S * 0.46;
      const pulse = 0.82 + 0.18 * Math.sin(t * 0.04);

      // outer glow
      const glow = ctx.createRadialGradient(cx, cy, ringR * 0.2, cx, cy, ringR * 1.5);
      glow.addColorStop(0, `rgba(91,93,225,${0.22 * pulse})`);
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(cx, cy, ringR * 1.5, 0, Math.PI * 2); ctx.fill();

      // blue ring
      ctx.save();
      ctx.shadowBlur = 8 * pulse;
      ctx.shadowColor = '#4af0ff';
      ctx.strokeStyle = `rgba(74,200,255,${0.9 * pulse})`;
      ctx.lineWidth = 1.8;
      ctx.beginPath(); ctx.arc(cx, cy, ringR, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      // purple ring inner
      ctx.save();
      ctx.shadowBlur = 6 * pulse;
      ctx.shadowColor = '#b040ff';
      ctx.strokeStyle = `rgba(168,60,255,${0.7 * pulse})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(cx, cy, ringR * 0.91, 0, Math.PI * 2); ctx.stroke();
      ctx.restore();

      // clip brain to circle
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, ringR * 0.86, 0, Math.PI * 2); ctx.clip();

      const bW = ringR * 1.55, bH = ringR * 1.55;
      const bX = cx - bW * 0.5, bY = cy - bH * 0.5;
      const nodes = BRAIN_NODES.map(([rx, ry]) => ({ x: bX + rx * bW, y: bY + ry * bH }));

      // edges
      const thresh = ringR * 0.72;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < thresh) {
            ctx.strokeStyle = `rgba(100,200,255,${(1 - d / thresh) * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke();
          }
        }
      }

      // dots
      nodes.forEach((n, idx) => {
        const dp = 0.7 + 0.3 * Math.sin(t * 0.05 + idx * 0.7);
        const r = Math.max(0.1, 1.4 * dp);
        ctx.save();
        ctx.shadowBlur = 5; ctx.shadowColor = '#77DAFB';
        ctx.fillStyle = `rgba(190,240,255,${0.9 * dp})`;
        ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });

      ctx.restore();
      t++;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <a href="index.html"
      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
      <canvas ref={canvasRef} style={{ width: 44, height: 44, flexShrink: 0 }} />
      <span style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 26, letterSpacing: -0.5, color: '#fff', userSelect: 'none' }}>Nervari</span>
    </a>
  );
};

// ── SiteNav ───────────────────────────────────────────────────
const SiteNav = ({ active }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn); fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { label: 'Home', href: 'index.html' },
    { label: 'Pre-Built Solutions', href: 'pre-built.html' },
    { label: 'Custom Solutions', href: 'custom.html' },
    { label: 'Who We Are', href: 'who-we-are.html' },
    { label: 'Free Gift', href: 'free-gift.html', special: true },
    { label: 'Talk to Us', href: 'contact.html' },
  ];
  return (
    <React.Fragment>
    <style>{`@keyframes giftIconGlow{0%,100%{filter:drop-shadow(0 0 4px rgba(255,216,107,0.55)) drop-shadow(0 0 9px rgba(255,179,71,0.35));transform:scale(1) rotate(-2deg)}50%{filter:drop-shadow(0 0 9px rgba(255,216,107,0.95)) drop-shadow(0 0 18px rgba(255,140,60,0.6));transform:scale(1.08) rotate(2deg)}}`}</style>
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(6,7,37,0.92)' : 'rgba(6,7,37,0.78)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(255,255,255,0.04)',
      transition: 'background 0.35s, border-color 0.35s',
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto', padding: '0 32px',
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center', height: 76, gap: 24,
      }}>
        {/* Left — logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ElectricLogo />
        </div>

        {/* Center — nav links */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 4,
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 999,
          padding: '6px 8px',
        }}>
          {links.map(l => {
            if (l.special) {
              return (
                <a key={l.href} href={l.href} style={{
                  fontFamily: 'Inter,sans-serif', fontSize: 13.5, fontWeight: 600,
                  color: '#FFD86B', textDecoration: 'none',
                  padding: '9px 16px', borderRadius: 999,
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  letterSpacing: 0.1,
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,216,107,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    animation: 'giftIconGlow 2.4s ease-in-out infinite',
                    marginTop: -3,
                    marginBottom: 1,
                  }}>
                    <GiftIcon size={20}/>
                  </span>
                  {l.label}
                </a>
              );
            }
            const isActive = active === l.label;
            return (
              <a key={l.href} href={l.href} style={{
                fontFamily: 'Inter,sans-serif',
                fontSize: 13.5,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#fff' : 'rgba(255,255,255,0.58)',
                textDecoration: 'none',
                padding: '9px 16px',
                borderRadius: 999,
                whiteSpace: 'nowrap',
                letterSpacing: 0.1,
                transition: 'color 0.2s, background 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.58)'; }}
              >{l.label}</a>
            );
          })}
        </div>

        {/* Right — CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <a href="contact.html" style={{
            fontFamily: 'Inter,sans-serif', fontSize: 13.5, fontWeight: 600,
            background: '#1859D1', color: '#fff',
            padding: '11px 22px',
            borderRadius: 999,
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            letterSpacing: 0.1,
            whiteSpace: 'nowrap',
            boxShadow: '0 6px 22px rgba(24,89,209,0.35)',
            transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#2A6FE8'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(24,89,209,0.55)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#1859D1'; e.currentTarget.style.boxShadow = '0 6px 22px rgba(24,89,209,0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >Book a Call <span style={{ fontSize: 15, lineHeight: 1, opacity: 0.85 }}>→</span></a>
        </div>
      </div>
    </nav>
    </React.Fragment>
  );
};

// ── SiteFooter ────────────────────────────────────────────────
const SiteFooter = () => (
  <footer style={{ background: '#060725', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 32px 32px' }}>
    <div style={{ maxWidth: 1140, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 14, letterSpacing: -0.5 }}>Nervari</div>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, maxWidth: 260 }}>Smart systems for businesses that are done doing things the hard way.</div>
          <div style={{ marginTop: 16, fontFamily: 'Inter,sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.3)' }}><a href="mailto:sales@nervari.co.za" style={{ color:'inherit', textDecoration:'none' }}>sales@nervari.co.za</a></div>
        </div>
        {[
          { title: 'Solutions', links: [
            { label:'Pre-Built Solutions', href:'pre-built.html' },
            { label:'Custom Solutions',    href:'custom.html'    },
            { label:'All Packages',        href:'pre-built.html' },
          ]},
          { title: 'Company',   links: [
            { label:'Who We Are',   href:'who-we-are.html'    },
            { label:'How It Works', href:'how-it-works.html'  },
            { label:'Contact Us',   href:'contact.html'       },
          ]},
          { title: 'Legal',     links: [
            { label:'Terms & Conditions', href:'#' },
            { label:'Privacy Policy',     href:'#' },
          ]},
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: 18 }}>{col.title}</div>
            {col.links.map(l => <a key={l.label} href={l.href} style={{ display: 'block', fontFamily: 'Inter,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 10, textDecoration: 'none' }}>{l.label}</a>)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>© 2025 Nervari. All rights reserved.</div>
    </div>
  </footer>
);

// ── Atoms ─────────────────────────────────────────────────────
const SBtn = ({ children, variant = 'primary', href, onClick, style: s }) => {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 17, borderRadius: 8, cursor: 'pointer', textDecoration: 'none', padding: '13px 30px', transition: 'all 0.2s', border: 'none', whiteSpace: 'nowrap' };
  const v = {
    primary: { background: '#1859D1', color: '#F7EFFD', boxShadow: '0 0 28px rgba(24,89,209,0.5)' },
    outline: { background: 'transparent', color: '#77DAFB', border: '1.5px solid #77DAFB' },
    ghost: { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' },
  };
  const Tag = href ? 'a' : 'button';
  return <Tag href={href} onClick={onClick} className={`site-btn site-btn-${variant}`} style={{ ...base, ...v[variant], ...s }}>{children}</Tag>;
};

const SLabel = ({ children, color }) => (
  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: color || '#77DAFB', marginBottom: 14 }}>{children}</div>
);

const FadeUp = ({ children, delay = 0 }) => (
  <div style={{ animation: `fadeInUp 0.7s ease ${delay}s both` }}>{children}</div>
);

const useCounter = (target, dur = 1800) => {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.disconnect();
      const t0 = performance.now();
      const tick = now => { const p = Math.min((now - t0) / dur, 1); setVal(Math.round((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, dur]);
  return [val, ref];
};

// ── BOOKING POPUP ─────────────────────────────────────────────
const BookingPopup = ({ onClose }) => {
  const [form, setForm] = React.useState({ name:'', email:'', phone:'', notes:'' });
  const [submitted, setSubmitted] = React.useState(false);
  const set = k => v => setForm(f => ({ ...f, [k]: v }));

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const sessionKey = 'nervari_booked_' + new Date().toDateString();
    if (!sessionStorage.getItem(sessionKey)) sessionStorage.setItem(sessionKey, '1');
    setSubmitted(true);
  };

  const inputStyle = { width:'100%', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.13)', borderRadius:10, padding:'13px 16px', fontFamily:'Inter,sans-serif', fontSize:16, color:'#fff', outline:'none' };
  const labelStyle = { display:'block', fontFamily:'Inter,sans-serif', fontSize:13, fontWeight:600, letterSpacing:1.5, textTransform:'uppercase', color:'rgba(255,255,255,0.38)', marginBottom:7 };

  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, background:'rgba(10,6,28,0.88)', zIndex:500, display:'flex', alignItems:'center', justifyContent:'center', padding:24, backdropFilter:'blur(10px)', animation:'fadeIn 0.18s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ background:'#0F0D3D', border:'1px solid rgba(24,89,209,0.35)', borderRadius:22, maxWidth:520, width:'100%', padding:'44px 40px', boxShadow:'0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(70,13,151,0.25)', animation:'slideUp 0.22s ease' }}>
        {/* header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:28 }}>
          <div>
            <SLabel>Book a Call</SLabel>
            <div style={{ fontFamily:'Space Grotesk,sans-serif', fontWeight:800, fontSize:24, color:'#fff', lineHeight:1.15 }}>Let's talk about your business.</div>
          </div>
          <button onClick={onClose} style={{ background:'rgba(255,255,255,0.07)', border:'none', color:'rgba(255,255,255,0.5)', cursor:'pointer', width:34, height:34, borderRadius:8, fontSize:20, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:2 }}>×</button>
        </div>

        {submitted ? (
          <div style={{ textAlign:'center', padding:'32px 0' }}>
            <div style={{ width:64, height:64, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,0.3)', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', color:'rgba(255,255,255,0.55)' }}>
              <LineIcon name="check" size={28} stroke={1.6}/>
            </div>
            <div style={{ fontFamily:'Space Grotesk,sans-serif', fontWeight:700, fontSize:22, color:'#fff', marginBottom:10 }}>You're booked in.</div>
            <div style={{ fontSize:16, color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>We'll be in touch within one business day. Keep an eye on your email.</div>
            <button onClick={onClose} style={{ marginTop:24, background:'rgba(24,89,209,0.15)', border:'1px solid rgba(24,89,209,0.3)', color:'#77DAFB', borderRadius:10, padding:'11px 28px', fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:16, cursor:'pointer' }}>Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <div>
              <label style={labelStyle}>Name *</label>
              <input required value={form.name} onChange={e => set('name')(e.target.value)} placeholder="Your name" style={inputStyle}/>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              <div>
                <label style={labelStyle}>Email *</label>
                <input required type="email" value={form.email} onChange={e => set('email')(e.target.value)} placeholder="your@email.com" style={inputStyle}/>
              </div>
              <div>
                <label style={labelStyle}>Phone / WhatsApp *</label>
                <input required value={form.phone} onChange={e => set('phone')(e.target.value)} placeholder="+27 ..." style={inputStyle}/>
              </div>
            </div>
            <div>
              <label style={labelStyle}>Biggest bottleneck <span style={{ textTransform:'none', letterSpacing:0, fontWeight:400, opacity:0.5 }}>(optional)</span></label>
              <textarea value={form.notes} onChange={e => set('notes')(e.target.value)} rows={3} placeholder="What's slowing you down?" style={{ ...inputStyle, resize:'vertical' }}/>
            </div>
            <button type="submit" style={{ background:'#1859D1', color:'#F7EFFD', border:'none', borderRadius:10, padding:'15px', fontFamily:'Inter,sans-serif', fontWeight:700, fontSize:17, cursor:'pointer', boxShadow:'0 0 28px rgba(24,89,209,0.5)', marginTop:4, transition:'all 0.2s' }}>Book My Call →</button>
            <div style={{ textAlign:'center', fontSize:14, color:'rgba(255,255,255,0.22)' }}>No commitment. We'll confirm within 1 business day.</div>
          </form>
        )}
      </div>
    </div>
  );
};

// ── GiftIcon ──────────────────────────────────────────────────
// Premium yellow gift box with red ribbon + bow.
const GiftIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ display:'block', flexShrink:0 }}>
    <defs>
      <linearGradient id="giftLidFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FFE382"/>
        <stop offset="0.55" stopColor="#FBC93A"/>
        <stop offset="1" stopColor="#E1A40D"/>
      </linearGradient>
      <linearGradient id="giftBodyFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FBC93A"/>
        <stop offset="1" stopColor="#C68A05"/>
      </linearGradient>
      <linearGradient id="ribbonFill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#FF4655"/>
        <stop offset="1" stopColor="#C40C20"/>
      </linearGradient>
    </defs>
    {/* body */}
    <rect x="3.6" y="10.6" width="16.8" height="10.4" rx="0.9" fill="url(#giftBodyFill)" stroke="#8A5A04" strokeWidth="0.4"/>
    {/* lid */}
    <rect x="2.8" y="7.6" width="18.4" height="3.6" rx="0.7" fill="url(#giftLidFill)" stroke="#8A5A04" strokeWidth="0.4"/>
    {/* lid highlight */}
    <rect x="3.3" y="8" width="17.4" height="0.7" rx="0.35" fill="#FFF1B0" opacity="0.7"/>
    {/* vertical ribbon */}
    <rect x="10.7" y="7.6" width="2.6" height="13.4" fill="url(#ribbonFill)"/>
    <rect x="10.7" y="7.6" width="0.55" height="13.4" fill="#FF8A99" opacity="0.6"/>
    {/* horizontal ribbon across body */}
    <rect x="3.6" y="13.6" width="16.8" height="1.8" fill="url(#ribbonFill)"/>
    {/* bow — left loop */}
    <path d="M12 7.6 C9.2 5.3, 6.4 4.9, 6.4 6.5 C6.4 7.7, 9 7.9, 12 7.6 Z" fill="url(#ribbonFill)" stroke="#7A0613" strokeWidth="0.25"/>
    {/* bow — right loop */}
    <path d="M12 7.6 C14.8 5.3, 17.6 4.9, 17.6 6.5 C17.6 7.7, 15 7.9, 12 7.6 Z" fill="url(#ribbonFill)" stroke="#7A0613" strokeWidth="0.25"/>
    {/* bow knot */}
    <ellipse cx="12" cy="7.5" rx="1.35" ry="1.1" fill="#C40C20" stroke="#7A0613" strokeWidth="0.25"/>
    <ellipse cx="12" cy="7.15" rx="0.7" ry="0.35" fill="#FF8A99" opacity="0.7"/>
    {/* ribbon tails */}
    <path d="M11.2 8.4 L9.8 10.4 L11.4 9.9 Z" fill="#C40C20"/>
    <path d="M12.8 8.4 L14.2 10.4 L12.6 9.9 Z" fill="#C40C20"/>
  </svg>
);

// ── LineIcon ──────────────────────────────────────────────────
// Monochrome line/stroke SVG icons. Use instead of colored emoji.
// Default color follows currentColor so parent text color drives tint.
const LINE_ICONS = {
  phone:        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.8 12.8 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  target:       <g><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></g>,
  search:       <g><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></g>,
  map:          <g><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></g>,
  gear:         <g><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></g>,
  rocket:       <g><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 9c0-1.1-.9-2-2-2"/></g>,
  shield:       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
  clock:        <g><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></g>,
  trendDown:    <g><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></g>,
  trendUp:      <g><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></g>,
  refresh:      <g><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></g>,
  check:        <polyline points="20 6 9 17 4 12"/>,
  xmark:        <g><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></g>,
  megaphone:    <g><polygon points="3 11 3 13 5 13 11 19 11 5 5 11 3 11"/><path d="M15 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14"/></g>,
  clipboard:    <g><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></g>,
  asterisk:     <g><line x1="12" y1="2" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="19.07" y2="4.93"/></g>,
  bolt:         <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
  wrench:       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>,
  bag:          <g><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></g>,
  briefcase:    <g><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></g>,
  utensils:     <g><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2"/><path d="M5 11v11"/><path d="M19 22V8s0-6-2-6-2 4-2 6v6h4z"/></g>,
  link:         <g><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g>,
  user:         <g><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></g>,
  users:        <g><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></g>,
  building:     <g><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22V12h6v10"/><line x1="9" y1="6" x2="9.01" y2="6"/><line x1="15" y1="6" x2="15.01" y2="6"/><line x1="9" y1="10" x2="9.01" y2="10"/><line x1="15" y1="10" x2="15.01" y2="10"/></g>,
  buildingTall: <g><rect x="3" y="2" width="8" height="20"/><rect x="13" y="8" width="8" height="14"/></g>,
  dollar:       <g><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></g>,
  package:      <g><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></g>,
  lock:         <g><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></g>,
  calendar:     <g><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></g>,
  ear:          <path d="M6 8.5a6.5 6.5 0 0 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 0 1-2 2"/>,
  graduation:   <g><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></g>,
  handshake:    <g><path d="M11 17l2 2 4-4"/><path d="M2 10l4-4 6 6 6-6 4 4-10 10z"/></g>,
};

const LineIcon = ({ name, size = 22, color = 'currentColor', stroke = 1.5, style }) => {
  const inner = LINE_ICONS[name];
  if (!inner) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
      {inner}
    </svg>
  );
};

Object.assign(window, { NodeCanvas, SiteNav, SiteFooter, SBtn, SLabel, FadeUp, useCounter, BookingPopup, LineIcon, GiftIcon });
