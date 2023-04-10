import { ChangeEvent } from "react";

export interface IState {
  contacts: Array<IContact>;
  filter: string;
}

export interface IContact {
  id: string;
  name: string;
  number: string;
}
export interface IContactList {
  contacts: Array<IContact>;
  handleRemove: (a: string) => void;
}
export interface IContactsListItem {
  contact: IContact;
  handleRemove: (a: string) => void;
}
export interface IFilter {
  value: string;
  onChange: (a: ChangeEvent<HTMLInputElement>) => void;
}
export interface IContactForm{
  name: string;
  number: string;
}
export interface IForm {
  onSubmitData: (a:IContactForm) => void;
}
export interface IReset{
  resetForm: () => void;
}