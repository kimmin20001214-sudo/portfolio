import { useEffect, useSyncExternalStore } from 'react'
import './App.css'

const sections = [
  { id: 'about', label: '플레이어 소개' },
  { id: 'interests', label: '관심사' },
  { id: 'skills', label: '성장 기록' },
  { id: 'works', label: '활동' },
  { id: 'goals', label: '다음 목표' },
]

function subscribe(onChange) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function App() {
  const hash = useSyncExternalStore(subscribe, () => window.location.hash)
  const activeSection = hash.startsWith('#/portfolio') ? 'works' : hash === '#/about' ? 'about' : hash.slice(1) || 'home'

  useEffect(() => {
    document.title = '나의 포트폴리오'
    const target = document.getElementById(activeSection)
    if (hash && target) {
      target.scrollIntoView({ block: 'start' })
      target.focus({ preventScroll: true })
    }
  }, [hash, activeSection])

  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="나의 포트폴리오 홈"><span className="brand-icon" aria-hidden="true">0</span> my portfolio<span className="brand-dot">.</span></a>
          <nav aria-label="소개 페이지 메뉴">
            {sections.map(({ id, label }) => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>)}
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="home" tabIndex={-1} aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> PLAYER PROFILE / 플레이어 소개</p>
            <h1 id="hero-title">나의 세계에<br /><span>접속한 걸 환영해!</span></h1>
            <p className="hero-name">플레이어 <strong>침팬치0호</strong></p>
            <p className="hero-description">리그 오브 레전드를 좋아하는 침팬치0호예요.<br />요즘은 특히 증강 칼바람을 좋아해요.</p>
            <div className="hero-actions"><a className="button button-primary" href="#about">소개 시작하기 <span aria-hidden="true">↗</span></a><a className="text-link" href="#works">활동 둘러보기 <span aria-hidden="true">→</span></a></div>
            <p className="hero-note">닉네임으로 만나는 나의 소개 페이지</p>
          </div>
          <div className="player-card">
            <div className="card-top"><span>플레이어 카드</span><span className="badge">프로필</span></div>
            <div className="avatar" aria-hidden="true"><div className="avatar-face"><span /><span /><i /></div><span className="avatar-spark">✦</span></div>
            <p className="card-kicker">반가워요!</p><h2>침팬치0호</h2><p className="card-description">리그 오브 레전드 · 증강 칼바람</p>
            <div className="card-bottom"><span>나의 이야기</span><span>이제 시작 <span aria-hidden="true">↗</span></span></div>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">나를 알아가는 중 <span>✦</span> 리그 오브 레전드 · 증강 칼바람 <span>✦</span> 새로운 이야기를 준비 중 <span>✦</span></div>
        <div className="page-width content">
          <section className="intro-section" id="about" tabIndex={-1} aria-labelledby="about-title">
            <div><p className="eyebrow">01 / 플레이어 소개</p><h2 id="about-title">안녕, 나는<br /><span>침팬치0호!</span></h2></div>
            <div className="intro-copy"><span className="badge">나의 한 줄 소개</span><h3>리그 오브 레전드, 특히 증강 칼바람을 좋아해요.</h3><p>친구와 선생님에게 나를 소개하는 공간이에요. 좋아하는 것부터 시작해서, 나만의 이야기를 하나씩 채워 갈 예정이에요.</p><div className="tags"><span># 침팬치0호</span><span># 리그 오브 레전드</span><span># 증강 칼바람</span></div></div>
          </section>
          <section className="section-block" id="interests" tabIndex={-1} aria-labelledby="interests-title">
            <div className="section-heading"><div><p className="eyebrow">02 / 관심사와 취미</p><h2 id="interests-title">내가 관심 있는 세계<span>.</span></h2></div><p>좋아하는 것에서 시작하는 소개</p></div>
            <div className="interest-grid">
              <article className="panel interest-panel"><span className="panel-icon" aria-hidden="true">＋</span><span className="small-label">관심사 01</span><h3>리그 오브 레전드</h3><p>리그 오브 레전드를 좋아해요.</p><p className="muted-note">요즘 특히 좋아하는 모드는 증강 칼바람이에요.</p></article>
              <article className="panel interest-panel"><span className="panel-icon purple" aria-hidden="true">⌘</span><span className="small-label">관심사 02</span><h3>디지털 활동</h3><p>디지털 활동에도 관심이 있어요.</p><p className="muted-note">어떤 활동을 즐기는지 차근차근 채워 갈게요.</p></article>
            </div>
          </section>
          <section className="section-block" id="skills" tabIndex={-1} aria-labelledby="skills-title">
            <div className="section-heading"><div><p className="eyebrow">03 / 성장 기록</p><h2 id="skills-title">나의 능력치를 알아가는 중<span>.</span></h2></div></div>
            <div className="interest-grid"><article className="panel"><span className="badge">준비 중</span><h3>내가 잘하는 것</h3><p>나의 강점은 아직 소개를 준비하고 있어요.</p></article><article className="panel"><span className="badge">준비 중</span><h3>배우고 싶은 것</h3><p>새롭게 배우고 싶은 것을 정하면 여기에 담을게요.</p></article></div>
          </section>
          <section className="section-block" id="works" tabIndex={-1} aria-labelledby="works-title">
            <div className="section-heading"><div><p className="eyebrow">04 / 활동과 작품</p><h2 id="works-title">나의 플레이 기록<span>.</span></h2></div><span className="badge">공개된 활동 0개</span></div>
            <div className="empty-state"><span className="empty-symbol" aria-hidden="true">＋</span><h3>첫 번째 이야기를 기다리고 있어요</h3><p>소개할 활동이나 작품을 정하면 이곳에 추가할 예정이에요.<br />사진이 없어도 제목과 짧은 설명부터 시작할 수 있어요.</p><span className="small-label">사진 · 작품 · 활동 설명은 나중에 추가</span></div>
          </section>
          <section className="goal-section" id="goals" tabIndex={-1} aria-labelledby="goals-title"><div><p className="eyebrow">05 / 앞으로의 목표</p><h2 id="goals-title">다음 퀘스트는<span>?</span></h2><p>앞으로 이루고 싶은 목표는 아직 생각 중이에요.<br />나에게 맞는 목표를 정하면 여기에서 소개할게요.</p></div><span className="quest-symbol" aria-hidden="true">?</span></section>
        </div>
      </main>
      <footer className="site-footer page-width"><a className="wordmark" href="#home">my portfolio<span className="brand-dot">.</span></a><p>나의 이야기는 계속 업데이트됩니다.</p><a className="text-link" href="#home">처음으로 <span aria-hidden="true">↑</span></a></footer>
    </>
  )
}

export default App
