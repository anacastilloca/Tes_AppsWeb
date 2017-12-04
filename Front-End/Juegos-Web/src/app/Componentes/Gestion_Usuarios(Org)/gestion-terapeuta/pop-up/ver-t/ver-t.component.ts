import {Component, Input, OnInit} from '@angular/core';
import {TerapeutaClass} from "../../../../../Modelos/TerapeutaClass";

@Component({
  selector: 'app-ver-t',
  templateUrl: './ver-t.component.html',
  styleUrls: ['./ver-t.component.css']
})
export class VerTComponent implements OnInit {

  @Input() terapeuta:TerapeutaClass;

  constructor() { }

  ngOnInit() {
  }

}
