import { Component, inject, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];
  public serversService = inject(ServersService);
  public route = inject(ActivatedRoute);
  public router = inject(Router);

  constructor() {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
