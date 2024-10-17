import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnChanges {
  user: { id: number; name: string };

  @Input() id!: number;
  @Input() name!: string;

  constructor() {}

  ngOnInit() {
    this.user = { id: this.id, name: this.name };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] || changes['name'])
      this.user = { id: this.id, name: this.name };
  }
}
