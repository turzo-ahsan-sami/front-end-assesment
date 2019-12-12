import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NODES } from './tree/mock-nodes';

import { TreeNode } from './tree/tree-node';

import { LocalStorage } from './../../Libraries/LocalStorage';
import { Utility } from './../../Libraries/Utility';

@Component({
    selector: 'ProgrammingTree',
    templateUrl: './ProgrammingTree.html'
})

export class ProgrammingTree {

    token = 'nodes';
    nodes = NODES;

    nodeName: string = "";
    

    constructor() { }


    ngOnInit() {
        this.setStoredNodes();
        this.loadStoredNodes();
    }

    newNodeEntry(){
        if(Utility.isNullOrUndefined(this.nodeName)) return;

        let node: TreeNode = new TreeNode();
        node.level = 1;
        node.name = this.nodeName;
        node.children = [];
        node.showChildren = false;        
        this.nodes.push(node);
        this.nodeName = "";
        
        this.setStoredNodes();
    }

    loadStoredNodes() {
        this.nodes = LocalStorage.getLocalStorageItem(this.token);
    }

    setStoredNodes() {
        LocalStorage.setLocalStorageItem(this.token, JSON.stringify(this.nodes));
    }
}
