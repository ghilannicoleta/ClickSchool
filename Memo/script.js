function Memo(id, text) {
  let body = text;
  let creationDate = new Date();
  let memoId = id;

  this.printInfo = function () {
    console.log(`Created : ${creationDate} id: ${memoId} \n 
        ${body}`);
  };

  this.getId = function () {
    return memoId;
  };

  this.setBody = function (newBody) {
    body = newBody;
  };
}

function MemoApp() {
  let memoService = new MemoService();

  this.create = function (text) {
    memoService.create(text);
  };

  this.showMemos = function () {
    let memos = memoService.getMemos();
    if (memos.length == 0) {
      console.log("No notes to display");
    } else {
      for (memo of memos) {
        memo.printInfo();
        console.log("======================\n");
      }
    }
  };

  this.edit = function (id, text) {
    memoService.editMemo(id, text);
  };

  this.delete = function (id) {
    memoService.deleteMemo(id);
  };
}

function MemoService() {
  let memos = [];
  let index = 1;

  this.create = function (text) {
    let id = index;
    memos.push(new Memo(id, text));
    index++;
  };

  this.getMemos = function () {
    return memos;
  };

  this.editMemo = function (id, newText) {
    for (memo of memos) {
      if (memo.getId() === id) {
        memo.setBody(newText);
      }
    }
    // iterati prin array de memos pina gasiti
    // memo cu id trimis si setati textul nou
  };

  this.deleteMemo = function (id) {
    console.log(`id ${id}`);

    memos = memos.filter((memo) => id !== memo.getId());
  };
}
