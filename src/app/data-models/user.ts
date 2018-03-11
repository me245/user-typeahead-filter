import { UserJSON } from './userJSON';

export class User {
  id: number = void 0;
  email: string = void 0;
  fname: string = void 0;
  lname: string = void 0;
  isCompany: boolean = void 0;
  company?: string = void 0;
  created: Date = void 0;

  static fromJSON(json: UserJSON): User {
    if (typeof json === 'string') {
      return JSON.parse(json, User.reviver);
    } else {
      const user = Object.create(User.prototype);
      return Object.assign(user, json, {
        created: new Date(json.created),
        isCompany: json.isCompany > 0 ? true : false
      });
    }
  }

  static reviver(key: string, value: any): any {
    return key === '' ? User.fromJSON(value) : value;
  }

  toJSON(): UserJSON {
    return Object.assign({}, this, {
      created: this.created.toString(),
      isCompany: this.isCompany ? 1 : 0
    });
  }
}
