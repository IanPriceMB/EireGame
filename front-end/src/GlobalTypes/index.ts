import { Dispatch, SetStateAction } from 'react';

export type StatusOption = 'poison' | 'dazed'

export type CombatActionClick = (
  e: React.MouseEvent<HTMLButtonElement>,
  state: Omit<CombatAction, 'handleClick'|'image'>
) => void;

export type CardSelectState = Omit<Combatant, 'fullArtSrc'|'onCardSelect'|'inTargetingMode'>

export type CardSelect = (
  e: React.MouseEvent<HTMLButtonElement>,
  state: CardSelectState,
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

export type DetailedCombatAction = {
  detailedInfo?: string,
} & CombatAction

export type ActiveAbility = Omit<CombatAction, 'handleClick' | 'image'| 'identifier'> & {
  identifier: string|Characters
} | undefined

export interface Combatant {
  statuses?: StatusOption[];
  name: string;
  identifier: string;
  currentHealth: number;
  maxHealth: number;
  isEnemy: boolean;
  onCardSelect: CardSelect,
  inTargetingMode: boolean,
  fullArtSrc: string;
}

export interface Enemy extends Combatant {
  oghams?: DetailedCombatAction[],
  feats?: DetailedCombatAction[],
  enchantments?: DetailedCombatAction[],
}

export interface Ally extends Enemy {
  tinctures?: DetailedCombatAction[],
  attackConfig: CombatAction
  handleBack?: () => void,
  isOpen?: boolean;
  handleCancel: () => void
}

export enum Characters {
  'Artemis' = 'artemis',
  'Saoirse' = 'saoirse',
  'Bea' = 'bea',
  'Mordred' = 'mordred',
  'Fang' = 'fang',
}

export type EnemyData = {
  statuses?: StatusOption[]
  name: string;
  identifier: string,
  currentHealth: number;
  maxHealth: number;
  isEnemy: boolean,
  oghams?: Oghams[];
  enchantments?: string[];
  feats?: string[];
  fullArtSrc: string;
}

export type CharacterData = Omit<EnemyData, 'name'|'identifier'> & {
  tinctures?: string[];
  attackIcon: string;
  name: Characters;
  identifier: Characters,
}

export type CombatantProps<D, I> = {
  inTargetingMode: boolean,
  setActiveAbility: Dispatch<SetStateAction<ActiveAbility>>,
  setTarget: Dispatch<SetStateAction<CardSelectState | undefined>>,
  resolution?: CardSelectState,
  handleKnockout: (identifier:I) => void;
  activeEnemy?: string|undefined;
  isPlayerTurn?: boolean;
  data: D
}

export enum Oghams {
  'Birch' = 'Birch',
  'Rowan' = 'Rowan',
  'Alder' = 'Alder',
  'Willow' = 'Willow',
  'Ash' = 'Ash',
  'Hawthorn' = 'Hawthorn',
  'Oak' = 'Oak',
  'Holly' = 'Holly',
  'Hazel' = 'Hazel',
  'Apple' = 'Apple',
  'Vine' = 'Vine',
  'Ivy' = 'Ivy',
  'Reed' = 'Reed',
  'Blackthorn' = 'Blackthorn',
  'Elder' = 'Elder',
  'Fir' = 'Fir',
  'Gorse' = 'Gorse',
  'Heather' = 'Heather',
  'Poplar' = 'Poplar',
  'Yew' = 'Yew',
  'Grove' = 'Grove',
  'Spindle' = 'Spindle',
  'Honeysuckle' = 'Honeysuckle',
  'Gooseberry' = 'Gooseberry',
  'WitchHazel' = 'WitchHazel',
}
