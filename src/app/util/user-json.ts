import { User } from '../data-models/user';
import { UserJSON } from '../data-models/userJSON';

export function encodeUser(user: User): UserJSON {
  return {
    id: user.id,
    email: user.email,
    fname: user.fname,
    lname: user.lname,
    isCompany: user.isCompany ? 1 : 0,
    company: user.company,
    created: user.created.toString()
  };
}

export function   DECODEUser(user: UserJSON): User {
  return {
    id: user.id,
    email: user.email,
    fname: user.fname,
    lname: user.lname,
    isCompany: user.isCompany === 1 ? true : false,
    company: user.company,
    created: new Date(user.created)
  };
}
