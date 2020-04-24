import { EntryService } from './../../services/entry.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Entry } from 'src/app/models/entry';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  title = 'Entries';
  entries: Entry[] = [];
  selected: Entry = null;
  newEntry: Entry = new Entry();
  editEntry: Entry = null;

  constructor(
    private entryService: EntryService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (!this.selected && this.currentRoute.snapshot.paramMap.get('id')) {
      this.entryService.show(this.currentRoute.snapshot.paramMap.get('id')).subscribe(
        yay => {
          this.selected = yay;
        },
        nay => {
          this.router.navigateByUrl('notFound')
        }
      )
    }
    else{
      this.reload();
    }
  }

  reload() {
    this.entryService.index().subscribe(
      data => {
        this.entries = data;
      },
      err => {
        console.error('Component.reload error');
        console.error(err);
      }
    )
  }

  getEntryCount(): number {
    let count = 0;
    this.entries.forEach(todo => {
        ++count;
    });
    return count;
  }

  displayEntry(entry: Entry): void {
    this.selected = entry;
    // this.router.navigateByUrl(`/todo/${todo.id}`)
  }

  displayTable(): void {
    this.selected = null;
  }

  addEntry(entry: Entry) {
    console.log(entry);
    this.entryService.create(entry).subscribe(
      data => {
        this.reload();
        this.newEntry = new Entry();
      },
      bad => {
        console.error('Component.addtodo error');
        console.error(bad);
      }
    )

  }
  setEditEntry() {
    this.editEntry = Object.assign({}, this.selected);
  }

  // changeTodoCompleted(todo: Todo){
  //   return todo.completed ? 'complete' : '';
  // }

  updateEntry(entry: Entry) {
    console.log(entry);
    // if (entry.completed === true) {
    //   entry.completeDate = this.datePipe.transform(Date.now(), 'shortDate'); // 8/24/1999
    // }else{
    //   entry.completeDate = "";
    // }
    this.entryService.update(entry).subscribe(
      data => {
        this.reload();
        this.selected = data;
        this.editEntry = null;
      },
      bad => {
        console.error('Component.update error');
        console.error(bad);
      }
    )
  }

  deleteEntry(id: number) {
    console.log(id);
    this.entryService.destroy(id).subscribe(
      data => {
        this.reload();
      },
      bad => {
        console.error('Component.deletetodo error');
        console.error(bad);
      }
    )
  }

}
