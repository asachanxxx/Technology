import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

class ColumnContainer {

  add(any) {

  }

}


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  _ungroupedData;
  ngOnInit() {
  }
  
  @Input('data') data:any;
  set ungroupedData(ungroupedData: any[]) {
    this._ungroupedData = null;
    this.groupedData = [];
    this._ungroupedData = ungroupedData;
    this.columnManager = [];
    this.cdr.detectChanges();

    if (ungroupedData) {
      this.jsonKeys = Object.keys(this.ungroupedData[0]);
      let groupBy: string = this.jsonKeys[0] ? this.jsonKeys[0] : "";

      if (this.groupingColumn && this.groupingColumn.length > 0) {
        groupBy = this.groupingColumn;
      }

      // this.groupedData = this.groupStructural(groupBy, this.ungroupedData);
      this.groupKeys = Object.keys(this.groupedData);

      // Fill columnContainer
      for (var groupKey of this.groupKeys) {
        var x: ColumnContainer = new ColumnContainer();

        x.add([{
          jsonKey: this.displayColumn,
          name: groupKey,
          width: 90,
          type: "EColumnType.text",
          clickable: "EColumnClickable.clickable",
          routerURL: '/bulletin-officiel/access-chronologique/detail/',
          routerKey: 'tid',
          sortable: false,
          order: 0
        },
        {
          jsonKey: "pdf",
          name: "PDF",
          width: 10,
          type: "EColumnType.icon",
          clickable: "EColumnClickable.clickable",
          imageURL: "/assets/projets/images/pdf.png",
          sortable: false,
          order: 1
        }]);

        this.columnManager.push(x);
      }
    } else {
      this._ungroupedData = null;
    }
    this.cdr.detectChanges();
  }

  @Input('groupBy') groupingColumn: string;
  @Input('display') displayColumn: string;

  private _groupedData: any;
  public get groupedData() {
    return this._groupedData
  };
  public set groupedData(newData: any) {
    this._groupedData = [];
    this.cdr.detectChanges();
    this._groupedData = newData;
  }
  public jsonKeys: string[];
  public groupKeys: string[];

  private columnManager: ColumnContainer[];

  constructor(private cdr: ChangeDetectorRef) {
    this.columnManager = [];
  }

}
