import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { LocalStorage } from './../../../Libraries/LocalStorage';
import { Nodes } from './../../../Classes/Nodes.class';
import { Utility } from './../../../Libraries/Utility';

declare var $: any;

@Component({
    selector: 'SecondLevelNodes',
    templateUrl: './SecondLevelNodes.html'
})
export class SecondLevelNodes implements OnInit {

    @Input() displayForm: boolean = true;
    @Input() parentName: string = "";
    
    nodeLevel: number = 2;
    token: string = 'secondLevelNodes';
    secondLevelNodes: Nodes[] = new Array<Nodes>();


    constructor() { }


    ngOnInit() {
        this.loadStoredNodes();
    }

    loadStoredNodes() {
        this.secondLevelNodes = LocalStorage.getLocalStorageItem(this.token);
        if (Utility.isNullOrUndefined(this.secondLevelNodes)) this.secondLevelNodes = [{ Name: '', Level: this.nodeLevel, ParentName: this.parentName }]
    }

    setStoredNodes() {
        LocalStorage.setLocalStorageItem(this.token, JSON.stringify(this.secondLevelNodes));
    }

    openEntryForm(level){
        this.nodeLevel = level; 
        this.parentName = this.parentName;
    }

    addNewFirstNode(formValue: string): void {
        let value = (JSON.parse(formValue));
        $('#btnCloseModal3').click();
        
        this.secondLevelNodes.push({
            Name: value.Name,
            Level: value.Level,
            ParentName: value.ParentName
        });

        this.setStoredNodes();
    }


    removeNode(nodeName: string) {
        let index = this.secondLevelNodes.findIndex(i => i.Name == nodeName);
        this.secondLevelNodes.splice(index, 1);
    }



    openFirstChildForm(level, node) {
        this.nodeLevel = level;
        this.parentName = node.Name;
    }



    checkDisplayCondition(node): boolean{
        let isValid = false;        
        if(node.ParentName == this.parentName) isValid = true;
        return isValid;
    }

}