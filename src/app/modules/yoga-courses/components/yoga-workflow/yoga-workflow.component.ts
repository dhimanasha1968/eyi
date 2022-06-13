import { Component, Input, OnInit } from '@angular/core';
import { YogaWorkFlow } from '../../../../core/models';

@Component({
  selector: 'eyi-yoga-workflow',
  templateUrl: './yoga-workflow.component.html',
  styleUrls: ['./yoga-workflow.component.scss']
})
export class YogaWorkflowComponent implements OnInit {
  @Input() workflowInfo!: YogaWorkFlow;

  constructor() { }

  ngOnInit(): void {
  }

}
