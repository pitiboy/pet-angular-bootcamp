import { Action } from '@ngrx/store';

import { ACK_ALL_SUCCESS, DATA_RECEIVED, DataReceivedAction } from './state';

export const ACK_POSITION = 'ACK_POSITION';
export class AckPositionAction implements Action {
  type = ACK_POSITION;
  constructor(public payload: string) { }
}

const defaultPositionState: PositionState = {
  newPositions: [],
  currentPositions: []
};

export interface PositionState {
  newPositions: string[];
  currentPositions: string[];
}

export function positionReducer(
  state: PositionState = defaultPositionState,
  action: Action): PositionState {

  switch (action.type) {
    case ACK_POSITION:
      return ackPosition((action as AckPositionAction).payload, state);
    case ACK_ALL_SUCCESS:
      return {
        currentPositions: [...state.currentPositions, ...state.newPositions],
        newPositions: []
      };
    case DATA_RECEIVED:
      const a = (action as DataReceivedAction);
      return a.data.positions;
    default:
      return state;
  }
}

function ackPosition(position: string, currentState: PositionState): PositionState {
  const newPositions = currentState.newPositions.filter(x => x !== position);
  const currentPositions = [...currentState.currentPositions, position];
  return { newPositions, currentPositions };
}
