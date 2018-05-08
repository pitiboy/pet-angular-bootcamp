import { Action } from '@ngrx/store';

import { ACK_ALL_SUCCESS, DATA_RECEIVED, DataReceivedAction } from './state';

export const ACK_EMPLOYEE = 'ACK_EMPLOYEE';
export class AckEmployeeAction implements Action {
  readonly type = ACK_EMPLOYEE;
  constructor(public readonly payload: string) { }
}

export interface EmployeeState {
  newEmployees: string[];
  currentEmployees: string[];
}

const defaultEmployeeState: EmployeeState = {
  newEmployees: [],
  currentEmployees: []
};

export function employeeReducer(
  state: EmployeeState = defaultEmployeeState,
  action: Action): EmployeeState {
  switch (action.type) {
    case ACK_EMPLOYEE:
      return ackEmployee(state, (action as AckEmployeeAction).payload);
    case ACK_ALL_SUCCESS:
      return {
        currentEmployees: [...state.currentEmployees, ...state.newEmployees],
        newEmployees: []
      };
    case DATA_RECEIVED:
      const a = (action as DataReceivedAction);
      return a.data.employees;
    default:
      return state;
  }
}

function ackEmployee(currentState: EmployeeState, employee: string): EmployeeState {
  const newEmployees = currentState.newEmployees.filter(x => x !== employee);
  const currentEmployees = [...currentState.currentEmployees, employee];
  return { newEmployees, currentEmployees };
}
