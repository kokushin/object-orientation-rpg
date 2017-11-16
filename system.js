class System {
  constructor (player, mob) {
    this.player = player
    this.mob = mob

    this.init()
  }

  init () {
    this.start()
  }

  start () {
    this.log(`${this.mob.status.name} (Lv: ${this.mob.status.lv}) が現れた！`)
  }

  log (message) {
    document.getElementById('log').insertAdjacentHTML('afterbegin', `
      <li>${message}</li>
    `)
  }

  useSkill (e) {
    const id = Number(e.getAttribute('data-skill-id'))
    const type = e.getAttribute('data-status-type')

    switch (type) {
      case 'player':
        console.log(this.player.skills[id].name)
        break;
      case 'mob':
        console.log(this.mob.skills[id].name)
        break;
    }
  }
}