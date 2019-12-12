import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Nodes } from './../../../Classes/Nodes.class';
import { Utility } from './../../../Libraries/Utility';

declare var $: any;

@Component({
    selector: 'NodeEntryFrom',
    templateUrl: './NodeEntryFrom.html'
})
export class NodeEntryFrom implements OnInit {

    @Input() displayForm: boolean = true;
    @Input() nodeLevel: number = 0;
    @Input() parentName: string = "";

    @Output() newNodeNameEmitter = new EventEmitter<string>();

    childNode: Nodes = new Nodes();

    constructor() { 
        this.reset();
    }


    ngOnInit() {
        this.reset();
    }


    onNewEntry() {
        if(Utility.isNullOrUndefined(this.childNode.Name)) return;
        this.childNode.ParentName = this.parentName;
        this.newNodeNameEmitter.emit(JSON.stringify(this.childNode));
        this.reset();
    }


    reset(){
        this.childNode.Name = "";
        this.childNode.Level = this.nodeLevel;
        this.childNode.ParentName = this.parentName;
    }


}