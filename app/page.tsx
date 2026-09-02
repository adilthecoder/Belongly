'use client';
import { useState } from 'react';

const belongings = [
  { icon: '⌁', name: 'Impact Drill', place: 'With Ahmed', meta: 'Due Saturday', tone: 'cyan' },
  { icon: '◇', name: 'Passport', place: 'Bedroom cabinet', meta: 'Top drawer', tone: 'gold' },
];

export default function Home() {
  const [query, setQuery] = useState('');
  const [menu, setMenu] = useState(false);
  const match = belongings.find(x => x.name.toLowerCase().includes(query.toLowerCase()));
  return <main>
    <nav className="nav shell">
      <a className="brand" href="#top"><span className="mark"><i/></span>Belongly</a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-expanded={menu}>Menu</button>
      <div className={`links ${menu?'open':''}`}><a href="#how">How it works</a><a href="#privacy">Privacy</a><a href="#future">What’s next</a><a className="navCta" href="#access">Get early access ↗</a></div>
    </nav>

    <section className="hero shell" id="top">
      <div className="heroCopy rise">
        <span className="eyebrow"><i/> BUILT FOR ANDROID · COMING SOON</span>
        <h1>Your things.<br/><em>Remembered.</em></h1>
        <p>Belongly remembers where you put things, who has them, and when they should come back.</p>
        <div className="actions"><a className="primary" href="#access">Get early access ↗</a><a href="#how">See how it works ↓</a></div>
        <div className="trust"><span>✦ No account</span><span>✦ Works offline</span><span>✦ Stays local</span></div>
      </div>
      <div className="stage rise delay">
        <div className="orbit one"/><div className="orbit two"/>
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

    <section className="statement shell"><small>THE PROBLEM ISN’T OWNING TOO MUCH.</small><h2>It’s remembering where<br/>everything <em>went.</em></h2></section>

    <section className="features shell" id="how">
      <article className="feature wide"><div className="copy"><small>01</small><h3>You put it somewhere.<br/>Belongly remembers where.</h3><p>Save a photo, give it a name, and tell Belongly where it lives. Find it in seconds—even months later.</p></div><div className="map"><div><span>◇</span><b>Passport</b></div><i/><div className="muted"><span>⌂</span><b>Bedroom</b></div><i/><div className="active"><span>▤</span><p><b>Top drawer</b><small>Bedside cabinet</small></p><strong>✓</strong></div></div></article>
      <article className="feature"><div className="copy"><small>02</small><h3>Lent something?<br/>Remember the person.</h3><p>Know what’s out, who has it, and when it should come back.</p></div><div className="loan"><div className="loanHead"><span className="itemIcon cyan">⌁</span><div><small>IMPACT DRILL</small><b>With Ahmed</b></div></div><div className="dates"><span><small>GIVEN</small><b>28 Aug</b></span><span><small>EXPECTED</small><b>Saturday</b></span></div><button>✓ Mark returned</button></div></article>
      <article className="feature"><div className="copy"><small>03</small><h3>One less thing<br/>to keep in your head.</h3><p>Search by name, person, place, category, or status. Belongly connects the dots.</p></div><div className="attention"><small>NEEDS ATTENTION</small><div><span>!</span><p><b>Passport</b><small>Misplaced · whereabouts unknown</small></p></div><div><span>!</span><p><b>Earbuds</b><small>Lost · last seen at office</small></p></div></div></article>
    </section>

    <section className="privacy" id="privacy"><div className="shell privacyGrid"><div className="symbol"><div className="shield">⌂<i/></div><span/></div><div className="privacyCopy"><small>PRIVATE BY DEFAULT</small><h2>Your things are<br/>your business.</h2><p>Belongly starts local-first. No account, no cloud dependency, no unnecessary tracking. Your personal belongings stay on your device.</p><div className="points"><span><b>01</b> On-device storage</span><span><b>02</b> Manual backups</span><span><b>03</b> Works offline</span></div></div></div></section>

    <section className="future shell" id="future"><small>THE ROAD AHEAD</small><h2>And we’re teaching<br/>Belongly to <em>listen.</em></h2><p>Coming later: tell Belongly where something is, in your own words.</p><div className="voice"><div className="wave">{[12,25,38,18,46,30,53,22,41,16,31,12].map((h,i)=><i key={i} style={{height:h}}/>)}</div><blockquote>“I put my GoPro in the second drawer under the TV.”</blockquote><span>COMING LATER</span><div className="extract"><small>GO PRO</small><b>TV console · Second drawer</b><strong>✓</strong></div></div></section>

    <section className="access shell" id="access"><div><small>BE FIRST TO REMEMBER</small><h2>Stop wondering.<br/>Start <em>remembering.</em></h2><p>Belongly is coming first to Android. Join the early-access list and help shape what comes next.</p></div><form onSubmit={e=>e.preventDefault()}><label>Email address<input type="email" required placeholder="you@example.com"/></label><button>Join early access ↗</button><small>No spam. Just launch updates.</small></form></section>

    <footer className="shell"><a className="brand" href="#top"><span className="mark"><i/></span>Belongly</a><p>Your things. Remembered.</p><div><a href="#privacy">Privacy</a><a href="mailto:hello@belongly.app">Support</a><span>© 2026 Belongly</span></div></footer>
  </main>;
}
