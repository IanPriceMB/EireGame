import { useEffect, useState } from 'react';
import { TBattleData } from '../../battles/types';
import { TCharacter, TEnemy, TItem } from '../../GlobalTypes';
import { transformCharacter, transformEnemy } from './utils';

export type TUseBattlers = {
  battleData: TBattleData
}

export type THandleAttack = {
  enemy: TEnemy
}

export type THandleItem = {
  item: TItem
}

export const useBattlers = ({ battleData }:TUseBattlers) => {
  const [allies, setAllies] = useState<TCharacter[]>([]);
  const [enemies, setEnemies] = useState<TEnemy[]>([]);

  useEffect(() => {
    const battleReadyCharacters = battleData.characters.map(
      (character:string) => transformCharacter({ character }),
    );
    const battleReadyEnemies = battleData.enemies.map((enemy:string) => transformEnemy({ enemy }));
    setAllies(battleReadyCharacters);
    setEnemies(battleReadyEnemies);
  }, [battleData.allies, battleData.characters, battleData.enemies]);

  const handleAttack = ({ enemy }:THandleAttack) => console.log(enemy);

  const handleDefend = () => null;

  const handleItem = ({ item }:THandleItem) => console.log(item);

  return {
    allies,
    enemies,
    handleAttack,
    handleDefend,
    handleItem,
  };
};
