export type TBattleNPC = {
  name: string,
  picture: string,
  altPicText: string,
  atkValue: number,
  healthValue: number,
  enemyFlag: boolean,
}

export type TItem = {
  name: string
}

export type TCharacter = TBattleNPC & {
  experiencePoints: number,
  level: number,
  spells: TSpell[]
}

export type TSpell = {
  name: string;
  effect: () => void,
}

export type TTurnOrder = (TCharacter | TBattleNPC)[]

export type TBattler = (TCharacter | TBattleNPC)
