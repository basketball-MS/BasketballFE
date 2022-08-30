import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coach-home',
  templateUrl: './coach-home.component.html',
  styleUrls: ['./coach-home.component.css']
})
export class CoachHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   
  
    selectedRowIds: Set<number> = new Set<number>();
  
    playersList: any[] = [
      {playerId: 1, firstname:'Lebron', lastname: 'James', position: 'SF', time:'30'},
      {playerId: 2, firstname:'Kyrie', lastname: 'Irving', position: 'PG', time:'30'}
     
    ];
  
    selectedId: string;
  
    onRowClick(id: number) {
      if(this.selectedRowIds.has(id)) {
       this.selectedRowIds.delete(id);
      }
      else {
        this.selectedRowIds.add(id);
      }
    }
  
    rowIsSelected(id: number) {
      return this.selectedRowIds.has(id);
    }
  
    getSelectedRows(){
      return this.playersList.filter(x => this.selectedRowIds.has(x.id));
    }
  
    onLogClick() {
      console.log(this.getSelectedRows());
    }



}
