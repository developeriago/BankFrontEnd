import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public nome: String = '';

    ngOnInit(): void {

        let nome: string = localStorage.getItem('nome')!;
        this.nome = nome;

    }

}
