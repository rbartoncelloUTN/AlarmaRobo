import {getDefaultStatus, Status} from '../helper/statusStateFactory.ts';
import {create} from 'zustand';
import {User} from '../../types';

type State = {
  status: Status;
  token: string;
  user: User | undefined;
};

const initialState = {
  token: '',
  user: undefined,
  status: getDefaultStatus(),
};

type Action = {
  setToken: (token: string) => void;
  setUser: (user: User | undefined) => void;
  setStatus: (status: Status) => void;
};

export const useSessionStore = create<State & Action>(set => ({
  ...initialState,
  setToken: (token: string) => set(() => ({token})),
  setUser: (user: User | undefined) => set(() => ({user})),
  setStatus: (status: Status) => set(() => ({status})),
}));
