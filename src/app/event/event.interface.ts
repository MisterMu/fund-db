export interface IEventModel {
  name: string;
  time: string;
  hall: string;
}

export interface IEventsCategory {
  title: string;
  today: IEventModel[];
  yesterday: IEventModel[];
}
