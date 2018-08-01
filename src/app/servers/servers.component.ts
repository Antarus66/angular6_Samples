import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No servers were created';
  newServerName: string = 'TestServer';

  constructor() {
      setTimeout(() => {
         this.allowNewServer = true;
      }, 2000);
  }

  ngOnInit() {
  }

  onServerCreate() {
      this.serverCreationStatus = 'Server was created. The name is ' + this.newServerName;
  }
}
