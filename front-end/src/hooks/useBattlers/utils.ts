import { TCharacter, TBattleNPC } from '../../GlobalTypes';

export const transformCharacter = ({ character }:{ character: string}):TCharacter => ({
  name: character,
  picture: `/images/talkingHeads/${character}/${character.toLowerCase()}Huffy.png`,
  altPicText: `${character} battle card picture`,
  atkValue: 1,
  healthValue: 10,
  enemyFlag: false,
  experiencePoints: 0,
  level: 1,
  spells: [],
});
// export const transformAlly = ({ ally }:{ ally: string}) => ({
//   name: ally,
//   picture: `/images/allies/${ally.toLowerCase()}.jpg`,
//   altPicText: `${ally} battle card picture`,
//   atkValue: 1,
//   healthValue: 10,
// });
export const transformEnemy = ({ enemy }:{ enemy: string }):TBattleNPC => ({
  name: enemy,
  picture: `/images/enemies/${enemy.toLowerCase()}.jpg`,
  altPicText: `${enemy} battle card picture`,
  atkValue: 1,
  healthValue: 10,
  enemyFlag: true,
});
