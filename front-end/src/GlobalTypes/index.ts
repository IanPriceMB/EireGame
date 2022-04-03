export type TEnemy = {
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

export type TCharacter = TEnemy & {
  experiencePoints: number,
  level: number,
  spells: TSpell[]
}

export type TSpell = {
  name: string;
  effect: () => void,
}

export type TTurnOrder = (TCharacter | TEnemy)[]

export type TBattler = (TCharacter | TEnemy)
