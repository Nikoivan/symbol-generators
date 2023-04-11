class Team {
  constructor(...player) {
    this.team = [...player];
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.team.length; i += 1) {
      yield this.team[i];
    }
  }
}

export default Team;
