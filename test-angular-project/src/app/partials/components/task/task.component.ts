import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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

    console.log(JSON.stringify(this.taskList));
    this.dataSource = new MatTableDataSource(this.taskList);
    this.dataSource.filterPredicate = (data: any, filtersJson: string) => {
      const matchFilter = [];
      const filters = JSON.parse(filtersJson);

      filters.forEach(filter => {
        // check for null values!
        const val = data[filter.id] === null ? '' : data[filter.id];
        matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
      });

      // Choose one
       return matchFilter.every(Boolean); // AND condition
      // return matchFilter.some(Boolean); // OR condition
    };
  }

  applyFilters() {
    this.filters = [];
    if (this.filterStatus.value) {
      for (let i = 0; i < this.filterStatus.value.length; i++) {
        this.filters.push({
          'columnId': 'status',
          'value': this.filterStatus.value[i]
        });
      }
    }
    if (this.filterDate.value) {
      let dateArray = [];
      dateArray = this.filterDate.value.toLocaleDateString().split('/');
      let date = '';
      const day = dateArray[1];
      const month = (dateArray[0] < 10) ? '0' + dateArray[0] : dateArray[0];
      const year = dateArray[2];
      date = day + '/' + month + '/' + year;
      console.log(date);
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

}

export interface Task {
  id: string;
  name: string;
  status: string;
  deadLine: string;
}
