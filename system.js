class System {

  constructor (player, mob) {
    this.phase = {
      count: 1,
      target: 'player'
    }
    this.player = player
    this.mob = mob

    this.init()
  }

  init () {
    this.log(`${this.mob.status.name}[Lv${this.mob.status.lv}] が現れた！`)
    this.log(`===== [Phase${this.phase.count}] Start =====`, 1000)
    this.log(`${this.player.status.name} はどうする？`, 2000)
  }

  log (message, timer = 0) {
    setTimeout (() => {
      document.getElementById('log').insertAdjacentHTML('afterbegin', `
        <li>${message}</li>
      `)
    }, timer)
  }

  useSkill (e) {
    const id = Number(e.getAttribute('data-skill-id'))
    const type = e.getAttribute('data-status-type')
    let skillName = ''
    let skillType = ''
    let skillTarget = ''
    let skillMp = 0
    let skillPower = {}

    switch (type) {
      case 'player':
        skillName = this.player.skills[id].name
        skillType = this.player.skills[id].type
        skillTarget = this.player.skills[id].target
        skillMp = this.player.skills[id].mp
        skillPower = this.player.skills[id].power

        this.mpCalculation(type, skillMp)

        this.log(`${this.player.status.name} の ${skillName}！！`)
        break;
      case 'mob':
        skillName = this.mob.skills[id].name
        skillType = this.mob.skills[id].type
        skillTarget = this.mob.skills[id].target
        skillMp = this.mob.skills[id].mp
        skillPower = this.mob.skills[id].power

        this.mpCalculation(type, skillMp)

        this.log(`${this.mob.status.name} の ${skillName}！！`)
        break;
    }

    this.damageCalculation(skillName, skillType, skillTarget, skillMp, skillPower)
  }

  damageCalculation (skillName, skillType, skillTarget, skillMp, skillPower) {
    console.log(skillName, skillType, skillTarget, skillMp, skillPower)
  }

  mpCalculation (type, skillMp) {
    switch (type) {
      case 'player':
        this.player.status.mp = this.player.status.mp - skillMp
        document.getElementById('player-mp').innerHTML = this.player.status.mp
        break;
      case 'mob':
        this.mob.status.mp = this.mob.status.mp - skillMp
        document.getElementById('mob-mp').innerHTML = this.mob.status.mp
        break;
    }
  }

}