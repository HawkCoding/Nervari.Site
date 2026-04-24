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
          ctx.strokeStyle = `rgba(91,93,225,${(1 - d / 220) * 0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(nodes[i].x * w, nodes[i].y * h); ctx.lineTo(nodes[j].x * w, nodes[j].y * h); ctx.stroke();
        }
      }
      nodes.forEach(n => {
        const p = Math.sin(n.t) * 0.3 + 0.7;
        const x = n.x * w, y = n.y * h;
        const g = ctx.createRadialGradient(x, y, 0, x, y, n.r * 7);
        g.addColorStop(0, `rgba(91,93,225,${0.28 * p})`); g.addColorStop(1, 'rgba(91,93,225,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, n.r * 7, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(168,216,244,${0.85 * p})`; ctx.beginPath(); ctx.arc(x, y, n.r, 0, Math.PI * 2); ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity }} />;
};

// ── SiteNav ───────────────────────────────────────────────────
const SiteNav = ({ active }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [logoHover, setLogoHover] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn); fn();
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { label: 'Home', href: 'index.html' },
    { label: 'Pre-Built', href: 'pre-built.html' },
    { label: 'Custom', href: 'custom.html' },
    { label: 'Who We Are', href: 'who-we-are.html' },
    { label: 'Talk to Us', href: 'contact.html' },
  ];
  const letters = 'Nervari'.split('');
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(12,8,33,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      transition: 'background 0.35s, border-color 0.35s',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <a href="index.html" style={{ textDecoration: 'none', position: 'relative', display: 'inline-flex', alignItems: 'center' }}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}>
          <span style={{ position: 'absolute', left: -10, top: '50%', transform: 'translateY(-52%)', fontFamily: 'Space Grotesk,sans-serif', fontSize: 60, fontWeight: 800, color: '#5B5DE1', opacity: logoHover ? 0.28 : 0.14, lineHeight: 1, pointerEvents: 'none', animation: 'logoLetterPulse 3s ease-in-out infinite', letterSpacing: -2, transition: 'opacity 0.3s' }}>N</span>
          <span style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 26, letterSpacing: -0.5, position: 'relative', zIndex: 1, paddingLeft: 18, display: 'inline-flex' }}>
            {letters.map((ch, i) => (
              <span key={i} style={{
                display: 'inline-block',
                color: logoHover ? (i % 2 === 0 ? '#5B5DE1' : '#A8D8F4') : '#fff',
                transform: logoHover ? `translateY(${Math.sin(i * 1.1) * -5}px)` : 'translateY(0)',
                transition: `color 0.2s ${i * 0.04}s, transform 0.25s ${i * 0.04}s`,
                textShadow: logoHover ? `0 0 18px rgba(91,93,225,0.7)` : 'none',
              }}>{ch}</span>
            ))}
          </span>
        </a>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'Inter,sans-serif', fontSize: 17, fontWeight: 500,
              color: active === l.label ? '#fff' : 'rgba(255,255,255,0.5)',
              textDecoration: 'none', paddingBottom: 2,
              borderBottom: active === l.label ? '2px solid #5B5DE1' : '2px solid transparent',
              transition: 'color 0.2s',
            }}>{l.label}</a>
          ))}
          <a href="contact.html" className="btn-primary" style={{
            fontFamily: 'Inter,sans-serif', fontSize: 16, fontWeight: 600,
            background: '#5B5DE1', color: '#fff', padding: '9px 22px',
            borderRadius: 8, textDecoration: 'none',
            boxShadow: '0 0 22px rgba(91,93,225,0.35)',
          }}>Book a Call →</a>
        </div>
      </div>
    </nav>
  );
};

// ── SiteFooter ────────────────────────────────────────────────
const SiteFooter = () => (
  <footer style={{ background: '#070519', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 32px 32px' }}>
    <div style={{ maxWidth: 1140, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: 'Space Grotesk,sans-serif', fontWeight: 800, fontSize: 28, color: '#fff', marginBottom: 14, letterSpacing: -0.5 }}>Nervari</div>
          <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 17, color: 'rgba(255,255,255,0.58)', lineHeight: 1.7, maxWidth: 260 }}>Smart systems for businesses that are done doing things the hard way.</div>
          <div style={{ marginTop: 16, fontFamily: 'Inter,sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.3)' }}>contact@placeholder.com</div>
        </div>
        {[{ title: 'Solutions', links: ['Pre-Built Solutions', 'Custom Solutions', 'All Packages'] }, { title: 'Company', links: ['Who We Are', 'How It Works', 'Contact Us'] }, { title: 'Legal', links: ['Terms & Conditions', 'Privacy Policy'] }].map(col => (
          <div key={col.title}>
            <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: 2.5, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginBottom: 18 }}>{col.title}</div>
            {col.links.map(l => <a key={l} href="#" style={{ display: 'block', fontFamily: 'Inter,sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 10, textDecoration: 'none' }}>{l}</a>)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, fontFamily: 'Inter,sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>© 2025 Nervari. All rights reserved.</div>
    </div>
  </footer>
);

// ── Atoms ─────────────────────────────────────────────────────
const SBtn = ({ children, variant = 'primary', href, onClick, style: s }) => {
  const base = { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Inter,sans-serif', fontWeight: 600, fontSize: 17, borderRadius: 8, cursor: 'pointer', textDecoration: 'none', padding: '13px 30px', transition: 'all 0.2s', border: 'none' };
  const v = {
    primary: { background: '#5B5DE1', color: '#fff', boxShadow: '0 0 28px rgba(91,93,225,0.4)' },
    outline: { background: 'transparent', color: '#5B5DE1', border: '1.5px solid #5B5DE1' },
    ghost: { background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' },
  };
  const Tag = href ? 'a' : 'button';
  return <Tag href={href} onClick={onClick} className={`site-btn site-btn-${variant}`} style={{ ...base, ...v[variant], ...s }}>{children}</Tag>;
};

const SLabel = ({ children, color }) => (
  <div style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: color || '#5B5DE1', marginBottom: 14 }}>{children}</div>
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
      <div onClick={e => e.stopPropagation()} style={{ background:'#13102a', border:'1px solid rgba(91,93,225,0.3)', borderRadius:22, maxWidth:520, width:'100%', padding:'44px 40px', boxShadow:'0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(91,93,225,0.1)', animation:'slideUp 0.22s ease' }}>
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
            <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
            <div style={{ fontFamily:'Space Grotesk,sans-serif', fontWeight:700, fontSize:22, color:'#fff', marginBottom:10 }}>You're booked in.</div>
            <div style={{ fontSize:16, color:'rgba(255,255,255,0.5)', lineHeight:1.7 }}>We'll be in touch within one business day. Keep an eye on your email.</div>
            <button onClick={onClose} style={{ marginTop:24, background:'rgba(91,93,225,0.15)', border:'1px solid rgba(91,93,225,0.3)', color:'#5B5DE1', borderRadius:10, padding:'11px 28px', fontFamily:'Inter,sans-serif', fontWeight:600, fontSize:16, cursor:'pointer' }}>Close</button>
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
            <button type="submit" style={{ background:'#5B5DE1', color:'#fff', border:'none', borderRadius:10, padding:'15px', fontFamily:'Inter,sans-serif', fontWeight:700, fontSize:17, cursor:'pointer', boxShadow:'0 0 28px rgba(91,93,225,0.4)', marginTop:4, transition:'all 0.2s' }}>Book My Call →</button>
            <div style={{ textAlign:'center', fontSize:14, color:'rgba(255,255,255,0.22)' }}>No commitment. We'll confirm within 1 business day.</div>
          </form>
        )}
      </div>
    </div>
  );
};

Object.assign(window, { NodeCanvas, SiteNav, SiteFooter, SBtn, SLabel, FadeUp, useCounter, BookingPopup });
