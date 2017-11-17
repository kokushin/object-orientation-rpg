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
    this.showStatus()
    this.showSkills()
  }

  showStatus () {
    document.getElementById(this.status.type).insertAdjacentHTML('beforeend', `
      <p>${this.status.name} / Lv: ${this.status.lv} / Exp: ${this.status.exp}</p>
      <p>HP: <span id="${this.status.type}-hp">${this.status.hp}</span> / MP: <span id="${this.status.type}-mp">${this.status.mp}</span></p>
    `)
  }

  showSkills () {
    for (let i = 0; i < Object.keys(this.skills).length; i++) {
      document.getElementById(this.status.type).insertAdjacentHTML('beforeend', `
        <button data-skill-id="${i}" data-status-type="${this.status.type}" onclick="system.useSkill(this)">${this.skills[i].name}</button>
      `)
    }
  }

}