import { Dispatch, SetStateAction } from 'react';

export type StatusOption = 'poison' | 'dazed'

export type CombatActionClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  state: Omit<CombatAction, 'handleClick'|'image'>
) => void;

export type CardSelect = (
  e: React.MouseEvent<HTMLButtonElement>,
  state: Combatant,
) => void;

export type CombatAction = {
  name: string,
  id: string,
  handleClick: CombatActionClick;
  image: string,
  apCost?: number,
  remainingUses?: number
  identifier: Characters
}

export type ActiveAbility = Omit<CombatAction, 'handleClick' | 'image'> | undefined

export interface Combatant {
  statuses?: StatusOption[];
  name: string;
  key: string;
  currentHealth: number;
  maxHealth: number;
  isEnemy: boolean;
}

export interface Enemy extends Combatant {
  oghams?: CombatAction[],
  abilities?: CombatAction[],
}

export interface Ally extends Enemy {
  tinctures?: CombatAction[],
  attackConfig: CombatAction
  handleBack?: () => void,
  isOpen?: boolean;
  onCardSelect: CardSelect,
  inTargetingMode: boolean,
  handleCancel: () => void
}

export enum Characters {
  'Artemis' = 'artemis',
  'Saoirse' = 'saoirse',
  'Bea' = 'bea',
  'Mordred' = 'mordred',
  'Spacey' = 'spacey',
  'Grania' = 'grania',
  'Fang' = 'fang',
}

export type CharacterData = {
  statuses?: StatusOption[]
  name: Characters;
  key: Characters,
  currentHealth: number;
  maxHealth: number;
  isEnemy: boolean,
  oghams: string[];
  abilities: string[];
  tinctures: string[];
  attackIcon: string
}

export type BattleCharacterProps = {
  inTargetingMode: boolean,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
  setTarget: Dispatch<SetStateAction<Combatant | undefined>>,
  resolution?: Combatant,
  characterData: CharacterData
}
