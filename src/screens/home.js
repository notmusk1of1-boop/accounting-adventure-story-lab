function pixelCharacter(className, label) {
  return `
    <div class="pixel-character ${className}" role="img" aria-label="${label}">
      <span class="pixel-character__hair"></span>
      <span class="pixel-character__face"></span>
      <span class="pixel-character__body"></span>
      <span class="pixel-character__paper"></span>
      <span class="pixel-character__legs"></span>
    </div>
  `
}

export function homeScreen() {
  return `
    <main class="game-shell home-screen" aria-labelledby="game-title">
      <div class="room-illustration room-illustration--home" aria-hidden="true">
        <div class="wall-sign">会计档案室</div>
        <div class="tall-cabinet"></div>
        <div class="filing-cabinet"></div>
        <div class="window window--home"><span></span><span></span></div>
        <div class="ledger-desk">资料台账</div>
        <div class="plant"></div>
      </div>

      <section class="home-card">
        <p class="lab-badge">独立副本 · 剧情实验室</p>
        <p class="eyebrow">中级会计实务 · 文字冒险</p>
        <h1 id="game-title">会计行者</h1>
        <p class="home-card__subtitle">档案室冒险 · 轻量 RPG</p>
        <p class="chapter-label">中级会计 · 实务篇</p>

        <div class="character-pair" aria-label="出纳与老会计">
          ${pixelCharacter('pixel-character--student', '年轻出纳')}
          ${pixelCharacter('pixel-character--mentor', '老会计')}
        </div>

        <p class="home-card__intro">
          你是一名出纳。推开档案室的门，跟着老会计，走过二十五间屋子。
          一间一章，只管逛，不用赶路。
        </p>

        <button class="primary-button" type="button" data-navigate="room">
          开始新的旅程
        </button>
        <button class="text-button" type="button" disabled title="手册将在后续计划中开放">
          先翻翻随身手册
        </button>
        <p class="save-note">进度功能将在第 5 天加入 · 当前为第 1 天场景骨架</p>
      </section>
    </main>
  `
}
