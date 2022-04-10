export type StatusOption = 'poison' | 'dazed'

export type CombatAction = {
  name: string,
  id: string,
  damage?: number,
  handleClick: (cb: (name: string) => void) => void,
  image: string,
  apCost?: number,
  remainingUses?: number
}

export interface Combatant extends Record<string, unknown> {
  statuses?: StatusOption[];
  name: string;
  key: string;
  currentHealth: number;
  maxHealth: number;
  attack?: CombatAction;
}

export interface Enemy extends Combatant {
  enchantments?: CombatAction[],
  abilities?: CombatAction[],
}

export interface Ally extends Enemy {
  tinctures?: CombatAction[],
}

export type Characters = 'Artemis' | 'Saoirse' | 'Bea' | 'Mordred' | 'Spacey' | 'Grania' | 'Fang'
