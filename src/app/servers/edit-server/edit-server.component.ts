import { Component, inject, Input, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

  private serversService = inject(ServersService);
  private router = inject(Router);

  @Input() id!: string;

  constructor() {}

  ngOnInit() {
    this.server = this.serversService.getServer(Number(this.id));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });

    this.router.navigate(['/server', this.id], {
      queryParams: { status: this.serverStatus, name: this.serverName },
    });
  }
}
