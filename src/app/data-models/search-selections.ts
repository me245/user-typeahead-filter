import { User } from './user';

export enum SearchSelection {
  ID,
  Email,
  FirstName,
  LastName,
  CompanyName,
  Created,
}
export namespace SearchSelection {
  export function getKeyValuePairs(): { [key: string]: string }[] {
    const pairs: { [key: string]: string }[] = [];
    const keys = Object.keys(SearchSelection);
    keys.forEach(key => {
      const isEnumValue = parseInt(key, 10) >= 0;
      if (isEnumValue) {
        pairs.push({ [key]: SearchSelection[key] });
      }
    });
    return pairs;
  }
  export function mapToUserProperties(value: number): keyof User {
    switch (value) {
      case SearchSelection.ID:
        return 'id';
      case SearchSelection.Email:
        return 'email';
      case SearchSelection.FirstName:
        return 'fname';
      case SearchSelection.LastName:
        return 'lname';
      case SearchSelection.CompanyName:
        return 'company';
      case SearchSelection.Created:
        return 'created';
      default:
        break;
    }
  }
}
