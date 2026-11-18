function positionStyle(position) {
  return Object.entries(position)
    .map(([property, value]) => `--${property}: ${value}`)
    .join('; ')
}

function characterMarkup(character) {
  return `
    <button
      class="scene-character"
      type="button"
      style="${positionStyle(character.position)}"
      data-dialogue-id="${character.dialogueId}"
      aria-label="和${character.name}对话，${character.role}"
    >
      <span class="scene-character__sprite" aria-hidden="true">
        <span class="scene-character__hair"></span>
        <span class="scene-character__face"></span>
        <span class="scene-character__body"></span>
        <span class="scene-character__paper"></span>
      </span>
      <span class="scene-character__name">${character.name}</span>
    </button>
  `
}

function hotspotMarkup(hotspot) {
  return `
    <button
      class="scene-hotspot"
      type="button"
      style="${positionStyle(hotspot.position)}"
      data-dialogue-id="${hotspot.dialogueId}"
      aria-label="调查${hotspot.label}"
    >
      <span class="scene-hotspot__marker" aria-hidden="true">＋</span>
      <span class="scene-hotspot__label">${hotspot.label}</span>
    </button>
  `
}

export function archiveRoomScreen(content) {
  const { scene, characters, hotspots } = content

  return `
    <main class="game-shell room-screen" aria-labelledby="room-title">
      <header class="room-header">
        <button class="header-button" type="button" data-navigate="home">← 大厅</button>
        <div class="room-heading">
          <h1 id="room-title">${scene.title}</h1>
          <p>${scene.subtitle}</p>
        </div>
        <div class="room-actions" aria-label="后续功能入口">
          <button class="header-button" type="button" disabled>手册</button>
          <button class="header-button" type="button" disabled>设置</button>
        </div>
      </header>

      <section class="archive-room" aria-label="可互动的档案室场景">
        <div class="archive-room__wall">
          <div class="wall-sign wall-sign--room">会计档案室</div>
          <div class="window window--room"><span></span><span></span></div>
          <div class="shelf shelf--left">
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="shelf shelf--middle">
            <span></span><span></span><span></span>
          </div>
          <div class="notice-board">待开放<br>章节资料</div>
          <div class="desk desk--room"><span>资料台账</span></div>
          <div class="plant plant--room"></div>
        </div>

        <div class="scene-interactions" aria-label="场景互动区域">
          ${characters.map(characterMarkup).join('')}
          ${hotspots.map(hotspotMarkup).join('')}
        </div>

        <div class="scene-status" role="status">
          <span class="scene-status__badge">第 2 天</span>
          <div>
            <strong>${scene.statusTitle}</strong>
            <p>${scene.statusText}</p>
          </div>
        </div>

        <section class="dialogue-panel" data-dialogue-panel role="dialog" aria-label="场景对话" hidden>
          <button class="dialogue-panel__close" type="button" data-dialogue-close aria-label="关闭对话">×</button>
          <strong class="dialogue-panel__speaker" data-dialogue-speaker></strong>
          <p class="dialogue-panel__text" data-dialogue-text></p>
          <button class="dialogue-panel__next" type="button" data-dialogue-next>继续</button>
        </section>
      </section>

      <footer class="room-footer">
        <span>${scene.footerLeft}</span>
        <span>${scene.footerRight}</span>
      </footer>
    </main>
  `
}
