import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  displayedColumns = ['taskno', 'name', 'status', 'due'];
  taskList: Task[] = [];
  filters = [];
  statusList = [];
  filterStatus = new FormControl();
  filterDate = new FormControl();
  dataSource = new MatTableDataSource(this.taskList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    for (let index = 0; index < 30; index++) {
      if (index % 2 === 0) {
        this.taskList.push({
          id: 'task67' + index,
          name: 'Create an ui for sossssssssssssssssssssmething something ' + index,
          status: 'new',
          deadLine: index + '/06/2018'
        });
      } else if ((index % 3) === 0) {
        this.taskList.push({
          id: 'task67' + index,
          name: 'Create an ui for sossssssssssssssssssssmething something ' + index,
          status: 'done',
          deadLine: index + '/06/2018'
        });
      } else if ((index / 2) > 0) {
        this.taskList.push({
          id: 'task67' + index,
          name: 'Create an ui for sossssssssssssssssssssmething something ' + index,
          status: 'inprogress',
          deadLine: index + '/06/2018'
        });
      } else {
        this.taskList.push({
          id: 'task67' + index,
          name: 'Create an ui for sossssssssssssssssssssmething something ' + index,
          status: 'onhold',
          deadLine: index + '/06/2018'
        });
      }
    }

    this.statusList = ['new', 'done', 'inprogress', 'onhold'];
    this.dataSource = new MatTableDataSource(this.taskList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: any, filtersJson: string) => {
      const matchFilter = [];
      const filters = JSON.parse(filtersJson);

      filters.forEach(filter => {
        // check for null values!
        const val = data[filter.id] === null ? '' : data[filter.id];
        if (filter.id === 'deadLine') {
          matchFilter.push(val.toLowerCase() === filter.value.toLowerCase());
        } else if (filter.id === 'status') {
          matchFilter.push(filter.value.toLowerCase().indexOf(val.toLowerCase()) >= 0);
        } else {
          matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
        }
      });

      // Choose one
       return matchFilter.every(Boolean); // AND condition
      // return matchFilter.some(Boolean); // OR condition
    };
  }

  applyFilters() {
    this.filters = [];
    let status = '';
    if (this.filterStatus.value) {
      for (let i = 0; i < this.filterStatus.value.length; i++) {
        status = status + '' + this.filterStatus.value[i];
      }
    }
    this.filters.push({
      'columnId': 'status',
      'value': status
    });
    if (this.filterDate.value) {
      let dateArray = [];
      dateArray = this.filterDate.value.toLocaleDateString().split('/');
      let date = '';
      const day = dateArray[1];
      const month = (dateArray[0] < 10) ? '0' + dateArray[0] : dateArray[0];
      const year = dateArray[2];
      date = day + '/' + month + '/' + year;
      this.filters.push({
        'columnId': 'deadLine',
        'value': date
      });
    }
    const tableFilters = [];
    this.filters.forEach((filter) => {
      tableFilters.push({
        id: filter.columnId,
        value: filter.value
      });
    });
    this.dataSource.filter = JSON.stringify(tableFilters);
  }

  clearFilters() {
    this.filterStatus.reset();
    this.filterDate.reset();
    this.dataSource.filter = JSON.stringify([]);
  }

}

export interface Task {
  id: string;
  name: string;
  status: string;
  deadLine: string;
}
