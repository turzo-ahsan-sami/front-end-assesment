import { Component, OnInit, DoCheck, Input, Output, EventEmitter } from "@angular/core";

import { LocalStorage } from './../../../Libraries/LocalStorage';
import { Nodes } from './../../../Classes/Nodes.class';
import { Utility } from './../../../Libraries/Utility';

declare var $: any;

@Component({
    selector: 'FirstLevelNodes',
    templateUrl: './FirstLevelNodes.html'
})
export class FirstLevelNodes implements OnInit {

    @Input() displayForm: boolean = true;
    @Input() parentName: string = "";
    
    nodeLevel: number = 1;
    token: string = 'firstLevelNodes';
    firstLevelNodes: Nodes[] = new Array<Nodes>();


    constructor() { }


    ngOnInit() {
        this.loadStoredNodes();
    }

    loadStoredNodes() {
        this.firstLevelNodes = LocalStorage.getLocalStorageItem(this.token);
        if (Utility.isNullOrUndefined(this.firstLevelNodes)) this.firstLevelNodes = [{ Name: '', Level: this.nodeLevel, ParentName: this.parentName }]
    }

    setStoredNodes() {
        LocalStorage.setLocalStorageItem(this.token, JSON.stringify(this.firstLevelNodes));
    }

    openEntryForm(level){
        this.nodeLevel = level; 
        this.parentName = this.parentName;
    }

    addNewFirstNode(formValue: string): void {
        let value = (JSON.parse(formValue));
        $('#btnCloseModal2').click();
        
        this.firstLevelNodes.push({
            Name: value.Name,
            Level: value.Level,
            ParentName: value.ParentName
        });

        this.setStoredNodes();
    }


    removeNode(nodeName: string) {
        let index = this.firstLevelNodes.findIndex(i => i.Name == nodeName);
        this.firstLevelNodes.splice(index, 1);
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