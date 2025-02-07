import { Component, inject, Input, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  private serversService = inject(ServersService);

  @Input() id!: string;

  constructor() {}

  ngOnInit() {
    this.server = this.serversService.getServer(Number(this.id));
  }
}
