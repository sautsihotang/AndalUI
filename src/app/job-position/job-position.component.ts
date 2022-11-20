import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Position } from '../models/position.model';
import { PositionsService } from '../service/positions.service';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.scss']
})
export class JobPositionComponent implements OnInit {
  position = 'positions';
  positions: Position[] = [];

  constructor(private positionsService: PositionsService) { }

  ngOnInit(): void {
    this.getAllPositions();
  }

  getAllPositions(){
    this.positionsService.getAllPositions()
    .subscribe(
      response =>{
        this.positions = response;
        console.log("Posiotion Data ", response);
      }
    )
  }

  sampleDatasource = [
    {
      id: 1,
      code: 25,
      name: 'Test 1',      
    },
    {
      id: 2,
      code: 26,
      name: 'Test 2',      
    },
    {
      id: 3,
      code: 27,
      name: 'Test 3',      
    },
    {
      id: 4,
      code: 28,
      name: 'Test 4',      
    },
    {
      id: 1,
      code: 23,
      name: 'Test 5',      
    }
  ];

  @ViewChild('gridContainer') gridContainer!: DxDataGridComponent;

  save(){
    this.gridContainer.instance.saveEditData();
  }

  cancel(){
    this.gridContainer.instance.cancelEditData();
  }

  edit(e: any){
    const indexRow = this.gridContainer.instance.getRowIndexByKey(e.id);
    this.gridContainer.instance.editRow(indexRow);
  }

  delete(e: any){
    const indexRow = this.gridContainer.instance.getRowIndexByKey(e.id);
    this.gridContainer.instance.deleteRow(indexRow);
  }

  addRow(){
    this.gridContainer.instance.addRow();
  }

}
