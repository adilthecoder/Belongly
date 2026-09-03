'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const belongings = [
  { icon: '⌁', name: 'Impact Drill', place: 'With Ahmed', meta: 'Due Saturday', tone: 'cyan' },
  { icon: '◇', name: 'Passport', place: 'Bedroom cabinet', meta: 'Top drawer', tone: 'gold' },
];

const memoryStories = [
  { label: 'PUT AWAY', item: 'Passport', answer: 'Top drawer', detail: 'Bedroom cabinet', icon: '◇' },
  { label: 'LENT OUT', item: 'Impact Drill', answer: 'With Ahmed', detail: 'Due Saturday', icon: '⌁' },
  { label: 'FOUND FAST', item: 'GoPro', answer: 'TV console', detail: 'Second drawer', icon: '◉' },
];

const appScreens = [
  { src: '/app-screenshots/home.png', title: 'Remember at a glance', copy: 'See what you own and what changed recently.' },
  { src: '/app-screenshots/belongings.png', title: 'Find anything fast', copy: 'Search by item, person, place, or current status.' },
  { src: '/app-screenshots/add.png', title: 'Save the useful details', copy: 'Add what it is, where it lives, and anything worth remembering.' },
  { src: '/app-screenshots/manage.png', title: 'Keep your memory organized', copy: 'Manage places, appearance, lending, and private backups.' },
];

function BelonglyMark({ className = '' }: { className?: string }) {
  return <span className={`memoryLabelMark ${className}`} aria-hidden="true"><i/><b>B</b><em/></span>;
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState<'dark'|'light'>('dark');
  const [story, setStory] = useState(0);
  const match = belongings.find(x => x.name.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }), { threshold: 0.14 });
    document.querySelectorAll('.scrollReveal').forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const timer = window.setInterval(() => setStory(current => (current + 1) % memoryStories.length), 3600);
    return () => window.clearInterval(timer);
  }, []);
  const activeStory = memoryStories[story];
  return <main>
    <nav className="nav shell">
      <a className="brand" href="#top"><BelonglyMark/><span>Belongly</span></a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-expanded={menu}>Menu</button>
      <div className={`links ${menu?'open':''}`}><a href="#preview">App preview</a><a href="#how">How it works</a><a href="#privacy">Privacy</a><a href="#future">What’s next</a><button className="themeToggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle color theme">{theme==='dark'?'☼':'☾'}</button></div>
    </nav>

    <section className="hero shell" id="top">
      <div className="heroCopy rise">
        <span className="eyebrow"><i/> A MEMORY FOR YOUR PHYSICAL WORLD</span>
        <h1><span>Your things.</span><em>Remembered.</em></h1>
        <p>Belongly remembers where you put things, who has them, and when they should come back.</p>
        <div className="actions"><a className="primary" href="#how">See how it works <span>↓</span></a><span className="quietCta">Android first · No sign-up</span></div>
        <div className="trust"><span>✦ No account</span><span>✦ Works offline</span><span>✦ Stays local</span></div>
        <div className="memoryTicker" aria-live="polite"><span>{activeStory.icon}</span><small>{activeStory.item}</small><i>→</i><b>{activeStory.answer}</b></div>
      </div>
      <div className="stage rise delay">
        <div className="orbit one"/><div className="orbit two"/>
        <span className="orbitObject orbitKey">⌁</span><span className="orbitObject orbitBook">▥</span><span className="orbitObject orbitCam">◉</span>
        <div className="phone">
          <div className="phoneTop"><span>9:41</span><i/><span>● ◒</span></div>
          <header><div><small>GOOD EVENING</small><h2>Overview</h2></div><b>A</b></header>
          <label className="search"><span>⌕</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Where is something?" aria-label="Search preview"/></label>
          {query && match ? <div className="item result"><span className={`itemIcon ${match.tone}`}>{match.icon}</span><div><b>{match.name}</b><small>{match.place} · {match.meta}</small></div><span>›</span></div> : <>
            <div className="stats"><div><b>42</b><small>Belongings</small></div><div><b>4</b><small>Lent out</small></div><div><b>2</b><small>Due soon</small></div></div>
            <div className="sectionTitle"><b>Recently remembered</b><span>See all</span></div>
            <div className="items">{belongings.map(x=><div className="item" key={x.name}><span className={`itemIcon ${x.tone}`}>{x.icon}</span><div><b>{x.name}</b><small>{x.place} · {x.meta}</small></div><span>›</span></div>)}</div>
          </>}
          <button className="remember">＋ Remember something</button>
          <div className="phoneNav"><span>⌂ <small>Overview</small></span><i>◇</i><i>⇄</i><i>···</i></div>
        </div>
        <div className="floatCard person"><span>⌁</span><div><small>CURRENTLY WITH</small><b>Ahmed</b></div><i/></div>
        <div className="floatCard place"><span>◇</span><div><small>PASSPORT</small><b>Top drawer</b></div><strong>✓</strong></div>
      </div>
    </section>

    <section className="statement shell scrollReveal"><small>THE PROBLEM ISN’T OWNING TOO MUCH.</small><h2>It’s remembering where<br/>everything <em>went.</em></h2></section>

    <section className="storyRail shell scrollReveal" aria-label="How Belongly remembers">
      <div className="storyIntro"><small>A SMALL MOMENT. REMEMBERED.</small><p>Watch one belonging move through real life.</p></div>
      <div className="storySwitcher">
        {memoryStories.map((item,index)=><button key={item.label} className={story===index?'active':''} onClick={()=>setStory(index)}><small>{item.label}</small><span>{item.icon}</span><div><b>{item.item}</b><p>{item.answer}<em>{item.detail}</em></p></div><i/></button>)}
      </div>
    </section>

    <section className="appPreview shell scrollReveal" id="preview">
      <div className="appPreviewIntro"><small>THE REAL APP</small><h2>Built for the moments<br/>memory lets slip.</h2><p>From saving an item to finding it again, these are real screens from Belongly running on Android.</p></div>
      <div className="screenRail">
        {appScreens.map((screen, index) => <article className="screenCard" key={screen.title}>
          <div className="deviceFrame"><Image src={screen.src} width={1080} height={2340} sizes="(max-width: 700px) 78vw, (max-width: 1000px) 45vw, 22vw" alt={`${screen.title} in the Belongly Android app`} /></div>
          <span>0{index + 1}</span><h3>{screen.title}</h3><p>{screen.copy}</p>
        </article>)}
      </div>
    </section>

    <section className="features shell" id="how">
      <article className="feature wide scrollReveal"><div className="copy"><small>01</small><h3>You put it somewhere.<br/>Belongly remembers where.</h3><p>Save a photo, give it a name, and tell Belongly where it lives. Find it in seconds—even months later.</p></div><div className="map"><div><span>◇</span><b>Passport</b></div><i/><div className="muted"><span>⌂</span><b>Bedroom</b></div><i/><div className="active"><span>▤</span><p><b>Top drawer</b><small>Bedside cabinet</small></p><strong>✓</strong></div></div></article>
      <article className="feature scrollReveal"><div className="copy"><small>02</small><h3>Lent something?<br/>Remember the person.</h3><p>Know what’s out, who has it, and when it should come back.</p></div><div className="loan"><div className="loanHead"><span className="itemIcon cyan">⌁</span><div><small>IMPACT DRILL</small><b>With Ahmed</b></div></div><div className="dates"><span><small>GIVEN</small><b>28 Aug</b></span><span><small>EXPECTED</small><b>Saturday</b></span></div><button>✓ Mark returned</button></div></article>
      <article className="feature scrollReveal"><div className="copy"><small>03</small><h3>One less thing<br/>to keep in your head.</h3><p>Search by name, person, place, category, or status. Belongly connects the dots.</p></div><div className="attention"><small>NEEDS ATTENTION</small><div><span>!</span><p><b>Passport</b><small>Misplaced · whereabouts unknown</small></p></div><div><span>!</span><p><b>Earbuds</b><small>Lost · last seen at office</small></p></div></div></article>
    </section>

    <section className="privacy scrollReveal" id="privacy"><div className="shell privacyGrid"><div className="symbol"><div className="shield"><BelonglyMark className="large"/></div><span/></div><div className="privacyCopy"><small>PRIVATE BY DEFAULT</small><h2>Your things are<br/>your business.</h2><p>Belongly starts local-first. No account, no cloud dependency, no unnecessary tracking. Your personal belongings stay on your device.</p><div className="points"><span><b>01</b> On-device storage</span><span><b>02</b> Manual backups</span><span><b>03</b> Works offline</span></div></div></div></section>

    <section className="future shell scrollReveal" id="future"><small>THE ROAD AHEAD</small><h2>And we’re teaching<br/>Belongly to <em>listen.</em></h2><p>Coming later: tell Belongly where something is, in your own words.</p><div className="voice"><div className="wave">{[12,25,38,18,46,30,53,22,41,16,31,12].map((h,i)=><i key={i} style={{height:h,animationDelay:`${i*75}ms`}}/>)}</div><blockquote>“I put my GoPro in the second drawer under the TV.”</blockquote><span>COMING LATER</span><div className="extract"><small>GO PRO</small><b>TV console · Second drawer</b><strong>✓</strong></div></div></section>

    <section className="closing shell scrollReveal"><BelonglyMark className="closingMark"/><div><small>ANDROID FIRST · LOCAL FIRST</small><h2>One less thing<br/>to remember.</h2><p>Belongly is being built around a simple promise: your things should never disappear into your memory.</p></div><a href="#top">Back to top ↑</a></section>

    <footer className="shell"><a className="brand" href="#top"><BelonglyMark/><span>Belongly</span></a><p>Your things. Remembered.</p><div><a href="#privacy">Privacy</a><span>© 2026 Belongly</span></div></footer>
  </main>;
}
