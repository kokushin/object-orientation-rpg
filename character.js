class Character {
  constructor (data) {
    this.status = {
      name: data.name,
      type: data.type,
      lv: data.lv,
      exp: data.exp,
      hp: data.hp,
      mp: data.mp
    }
    this.skills = data.skills

    this.init()
  }

  init () {
    this.displayStatus()
    this.displaySkills()
  }

  displayStatus () {
    document.getElementById(this.status.type).insertAdjacentHTML('beforeend', `
      <p>${this.status.name} / Lv: ${this.status.lv} / Exp: ${this.status.exp}</p>
      <p>HP: ${this.status.hp} / MP: ${this.status.mp}</p>
    `)
  }

  displaySkills () {
    for (let i = 0; i < Object.keys(this.skills).length; i++) {
      document.getElementById(this.status.type).insertAdjacentHTML('beforeend', `
        <button data-skill-id="${i}" data-status-type="${this.status.type}" onclick="system.useSkill(this)">${this.skills[i].name}</button>
      `)
    }
  }
}