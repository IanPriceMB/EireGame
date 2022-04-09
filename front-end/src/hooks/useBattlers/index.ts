import { useEffect, useState } from 'react';
import { TBattleData } from '../../battles/types';
import { TCharacter, TBattleNPC } from '../../GlobalTypes';
import { transformCharacter, transformEnemy } from './utils';

export type TUseBattlers = {
  battleData: TBattleData
}

export const useBattlers = ({ battleData }:TUseBattlers) => {
  const [allies, setAllies] = useState<TCharacter[]>([]);
  const [enemies, setEnemies] = useState<TBattleNPC[]>([]);

  useEffect(() => {
    const battleReadyCharacters = battleData.characters.map(
      (character:string) => transformCharacter({ character }),
    );
    const battleReadyEnemies = battleData.enemies.map((enemy:string) => transformEnemy({ enemy }));
    setAllies(battleReadyCharacters);
    setEnemies(battleReadyEnemies);
  }, [battleData.allies, battleData.characters, battleData.enemies]);

  return {
    allies,
    enemies,
    setAllies,
    setEnemies,
  };
};
