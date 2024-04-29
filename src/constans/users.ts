import { User } from "../types";

export const users: User[] = [
  {
    id: 1,
    email: 'admin@admin.com',
    password: 111111,
    rol: 'admin',
    sex: 'femenino',
  },
  {
    id: 2,
    email: 'invitado@invitado.com',
    password: 222222,
    rol: 'invitado',
    sex: 'femenino',
  },
  {
    id: 3,
    email: 'usuario@usuario.com',
    password: 333333,
    rol: 'usuario',
    sex: 'masculino',
  },
  {
    id: 4,
    email: 'anonimo@anonimo.com',
    password: 444444,
    rol: 'usuario',
    sex: 'masculino',
  },
  {
    id: 5,
    email: 'tester@tester.com',
    password: 555555,
    rol: 'tester',
    sex: 'femenino',
  },
];
