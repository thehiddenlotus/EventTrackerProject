export class Entry {

  id: number;
  title: string;
  date: string;
  mood: number;
  gratitude: string;
  note: string;

  constructor(id?: number, title?: string, date?: string, mood?: number, gratitude?: string, note?: string){
    this.id = id;
    this.title = title;
    this.date = date;
    this.gratitude = gratitude;
    this.mood = mood;
    this.note = note;
  }

}
