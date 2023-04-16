/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 *
 * https://leetcode.cn/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (34.77%)
 * Likes:    771
 * Dislikes: 0
 * Total Accepted:    211.4K
 * Total Submissions: 609.3K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]'
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
 * 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 * 
 * 在链表类中实现这些功能：
 * 
 * 
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index
 * 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 * linkedList.get(1);            //返回2
 * linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 * linkedList.get(1);            //返回3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= index, val <= 1000
 * 请不要使用内置的 LinkedList 库。
 * get, addAtHead, addAtTail, addAtIndex 和 deleteAtIndex 的操作次数不超过 2000。
 * 
 * 
 */

// @lc code=start
function Link(val, next = null) {
  this.val = val;
  this.next = next;
}

var MyLinkedList = function() {
  this.node = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let node = this.node;
  for (let i = 0; i < index; i++) {
    if (node) {
      node = node.next;
    }
  }
  
  return node ? node.val : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  this.node = new Link(val, this.node);
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let node = this.node;

  if (!node) {
    return this.addAtHead(val);
  }

  while(node.next) {
    node = node.next;
  }

  node.next = new Link(val);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index <= 0) {
    return this.addAtHead(val);
  }

  let node = this.node;
  for (let i = 0; i < index - 1; i++) {
    if (node) {
      node = node.next;
    }
  }
  
  if (node) {
    node.next = new Link(val, node.next);
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index <= 0) {
    return this.node = this.node.next;
  }
  let node = this.node;

  for (let i = 0; i < index - 1; i++) {
    if (node) {
      node = node.next;
    }
  }

  if (node && node.next) {
    node.next = node.next.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

