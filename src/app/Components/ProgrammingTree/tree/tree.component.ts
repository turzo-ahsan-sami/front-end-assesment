import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TreeNode } from './tree-node';

import { Utility } from './../../../Libraries/Utility';
import { LocalStorage } from './../../../Libraries/LocalStorage';

declare var $: any;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: []
})
export class TreeComponent implements OnInit {

  @Input() treeData: TreeNode[];

  token = 'nodes';

  nodeName: string = "";
  parentName: string = "";
  level: number = 0;
  selectedNode: any;

  ngOnInit() {
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }


  openEntryForm(node: any = null) {
    
    if (Utility.isNullOrUndefined(node)) {
      this.level = 1;
      this.parentName = '';
    }
    else {
      this.level = node.level + 1;
      this.parentName = node.name;
    }
    this.level = 1;
    this.parentName = '';
    this.nodeName = "";   
  }

  onNewEntry() {
    if (Utility.isNullOrUndefined(this.nodeName)) return;

    let node: TreeNode = new TreeNode();
    node.level = this.level;
    node.name = this.nodeName;
    node.children = [];
    node.showChildren = false;
    
        
    if (this.level == 1) this.treeData.push(node);

    if (this.level == 2) {
      this.treeData.forEach(element => {
        if (element.name == this.parentName) element.children.push(node)
      });
    }

    else if (this.level == 3) {
      this.treeData.forEach(element => {
        element.children.forEach(element2 => {
          if (element2.name == this.parentName) element2.children.push(node)
        })
      });
    }


    this.setStoredNodes();
    this.closeModal();
  }


  deleteNode(node){
    this.level = node.level;

    let index =  this.treeData.findIndex(x => x.name == node.name);
    this.treeData.splice(index, 1);  
  }



  loadStoredNodes() {
    this.treeData = LocalStorage.getLocalStorageItem(this.token);
  }

  setStoredNodes() {
    LocalStorage.setLocalStorageItem(this.token, JSON.stringify(this.treeData));
  }

  closeModal() {
    $('#btnCloseModal').click();
  }



}
