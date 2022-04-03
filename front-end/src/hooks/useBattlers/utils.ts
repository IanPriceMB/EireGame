export const transformCharacter = ({ character }:{ character: string}) => ({
  name: character,
  picture: `/images/talkingHeads/${character}/${character.toLowerCase()}Huffy.png`,
  altPicText: `${character} battle card picture`,
  atkValue: 1,
  healthValue: 10,
});
// export const transformAlly = ({ ally }:{ ally: string}) => ({
//   name: ally,
//   picture: `/images/allies/${ally.toLowerCase()}.jpg`,
//   altPicText: `${ally} battle card picture`,
//   atkValue: 1,
//   healthValue: 10,
// });
export const transformEnemy = ({ enemy }:{ enemy: string }) => ({
  name: enemy,
  picture: `/images/enemies/${enemy.toLowerCase()}.jpg`,
  altPicText: `${enemy} battle card picture`,
  atkValue: 1,
  healthValue: 10,
});
