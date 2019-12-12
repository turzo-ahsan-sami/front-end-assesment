import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { LocalStorage } from './../../Libraries/LocalStorage';
import { Nodes } from './../../Classes/Nodes.class';
import { Utility } from './../../Libraries/Utility';

declare var $: any;

@Component({
    selector: 'Programming',
    templateUrl: './Programming.html'
})
export class Programming implements OnInit {

    token: string = 'parentLevelNodes';
    parentLevelNodes: Nodes[] = new Array<Nodes>();

    nodeLevel: number = 0;
    parentName: string = "";

    constructor() { }


    ngOnInit() {
        this.loadStoredNodes();
    }

    loadStoredNodes() {
        this.parentLevelNodes = LocalStorage.getLocalStorageItem(this.token);
        if(Utility.isNullOrUndefined(this.parentLevelNodes)) this.parentLevelNodes = [{ Name: '', Level: this.nodeLevel, ParentName: this.parentName }]
    }

    setStoredNodes() {
        LocalStorage.setLocalStorageItem(this.token, JSON.stringify(this.parentLevelNodes));
    }

    openEntryForm(level){
        this.nodeLevel = level; 
        this.parentName = "";
    }
     

    addNewNode(formValue: string): void {
        let value = (JSON.parse(formValue));        
        $('#btnCloseModal').click();
        
        this.parentLevelNodes.push({
            Name: value.Name,
            Level : value.Level,
            ParentName : ""
        });

        this.setStoredNodes();
    }
   

    removeNode(nodeName: string) {
        let index = this.parentLevelNodes.findIndex(i => i.Name == nodeName);
        this.parentLevelNodes.splice(index, 1);

        this.setStoredNodes();
    }



    openFirstChildForm(node){
        this.parentName = node.Name;
    }

}