import React, { forwardRef } from 'react';
import { CombatCharacter } from '../../components/CombatCharacter';
import {
  CharacterData, Characters, CombatantProps, Oghams, StatusOption,
} from '../../GlobalTypes';
import { useCharacter } from '../../hooks';

const characterMap = {
  [Characters.Artemis]: {
    statuses: ['poison'] as StatusOption[],
    name: Characters.Artemis,
    identifier: Characters.Artemis,
    currentHealth: 20,
    maxHealth: 20,
    isEnemy: false,
    oghams: [Oghams.Alder, Oghams.Apple, Oghams.Ash],
    enchantments: ['fire arrow', 'ice arrow', 'dark arrow'],
    feats: ['ability'],
    tinctures: ['tincture'],
    attackIcon: 'rangedAttack',
    fullArtSrc: `${process.env.PUBLIC_URL}
      /images/expressions/${Characters.Artemis}/${Characters.Artemis}.png`,
  },
  [Characters.Bea]: {
    statuses: [] as StatusOption[],
    name: Characters.Bea,
    identifier: Characters.Bea,
    currentHealth: 20,
    maxHealth: 20,
    isEnemy: false,
    oghams: [Oghams.Birch, Oghams.Blackthorn],
    enchantments: ['metal', 'oak', 'birch'],
    feats: ['ability', 'ability2'],
    tinctures: ['alchohol', 'potion', 'elixer'],
    attackIcon: 'meleeAttack',
    fullArtSrc: `${process.env.PUBLIC_URL}
      /images/expressions/${Characters.Bea}/${Characters.Bea}.png`,
  },
  [Characters.Fang]: {
    statuses: [] as StatusOption[],
    name: Characters.Fang,
    identifier: Characters.Fang,
    currentHealth: 20,
    maxHealth: 20,
    isEnemy: false,
    oghams: [Oghams.Yew],
    enchantments: ['metal', 'oak', 'birch'],
    feats: ['ability', 'ability2'],
    tinctures: ['alchohol', 'potion', 'elixer'],
    attackIcon: 'meleeAttack',
    fullArtSrc: `${process.env.PUBLIC_URL}
      /images/expressions/${Characters.Fang}/${Characters.Fang}.png`,
  },
  [Characters.Mordred]: {
    statuses: ['poison'] as StatusOption[],
    name: Characters.Mordred,
    identifier: Characters.Mordred,
    currentHealth: 20,
    maxHealth: 20,
    isEnemy: false,
    oghams: [Oghams.WitchHazel],
    enchantments: [],
    feats: ['ability'],
    tinctures: ['tincture'],
    attackIcon: 'rangedAttack',
    fullArtSrc: `${process.env.PUBLIC_URL}
      /images/expressions/${Characters.Mordred}/${Characters.Mordred}.png`,
  },
  [Characters.Saoirse]: {
    statuses: [] as StatusOption[],
    name: Characters.Saoirse,
    identifier: Characters.Saoirse,
    currentHealth: 20,
    maxHealth: 20,
    isEnemy: false,
    oghams: [Oghams.Gorse],
    enchantments: [],
    feats: ['ability', 'ability2'],
    tinctures: [],
    attackIcon: 'meleeAttack',
    fullArtSrc: `${process.env.PUBLIC_URL}
      /images/expressions/${Characters.Saoirse}/${Characters.Saoirse}.png`,
  },
} as {
  [Characters.Artemis]: CharacterData
  [Characters.Bea]: CharacterData
  [Characters.Saoirse]: CharacterData
  [Characters.Mordred]: CharacterData
  [Characters.Fang]: CharacterData
};

type BattleCharacterProps = Omit<CombatantProps<CharacterData, Characters>, 'data'> & {
  character: Characters
}

export const BattleCharacter = forwardRef((
  { character, ...rest }:BattleCharacterProps,
  ref:React.Ref<HTMLButtonElement> | undefined,
):JSX.Element => {
  const result = useCharacter({ data: characterMap[character], ...rest });
  return <CombatCharacter {...result} {...rest} ref={ref} />;
});

BattleCharacter.defaultProps = {
  resolution: undefined,
};
