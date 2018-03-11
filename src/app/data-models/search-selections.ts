export enum SearchSelection {
  ID,
  Email,
  FirstName,
  LastName,
  CompanyName,
  Created
}
export namespace SearchSelection {
  export function getKeyValuePairs(): { [key: string]: string }[] {
    const pairs: { [key: string]: string }[] = [];
    const keys = Object.keys(SearchSelection);
    keys.forEach(key => {
      const isEnumValue = parseInt(key, 10) >= 0;
      if (isEnumValue) {
        pairs.push({ [key]: SearchSelection[key]});
      }
    });
    return pairs;
  }
}
