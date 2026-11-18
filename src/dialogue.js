function showLine(panel, line, index, total) {
  panel.querySelector('[data-dialogue-speaker]').textContent = line.speaker
  panel.querySelector('[data-dialogue-text]').textContent = line.text

  const nextButton = panel.querySelector('[data-dialogue-next]')
  nextButton.textContent = index === total - 1 ? '结束' : '继续'
  nextButton.setAttribute('aria-label', `${nextButton.textContent}，第 ${index + 1} 句，共 ${total} 句`)
}

export function setupDialogue(root, dialogues) {
  const panel = root.querySelector('[data-dialogue-panel]')
  if (!panel) return

  let activeLines = []
  let activeIndex = 0
  let trigger = null

  function closeDialogue() {
    panel.hidden = true
    activeLines = []
    trigger?.focus()
    trigger = null
  }

  function openDialogue(dialogueId, source) {
    const lines = dialogues[dialogueId]
    if (!Array.isArray(lines) || lines.length === 0) return

    activeLines = lines
    activeIndex = 0
    trigger = source
    panel.hidden = false
    showLine(panel, activeLines[activeIndex], activeIndex, activeLines.length)
    panel.querySelector('[data-dialogue-next]').focus()
  }

  root.querySelectorAll('[data-dialogue-id]').forEach((element) => {
    element.addEventListener('click', () => openDialogue(element.dataset.dialogueId, element))
  })

  panel.querySelector('[data-dialogue-next]').addEventListener('click', () => {
    if (activeIndex >= activeLines.length - 1) {
      closeDialogue()
      return
    }

    activeIndex += 1
    showLine(panel, activeLines[activeIndex], activeIndex, activeLines.length)
  })

  panel.querySelector('[data-dialogue-close]').addEventListener('click', closeDialogue)

  root.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) closeDialogue()
  })
}
