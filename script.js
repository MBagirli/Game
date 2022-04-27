let fronts = document.querySelectorAll('.Container__Cell__Front');
let backs = document.querySelectorAll('.Container__Cell__Back');
let popup = document.querySelector('.PopUp__Container');
let popup__btn = document.querySelector('.PopUp__Container__Block__Button');
let array1 = [];
let ArrayofCells = [];
let ArrayofIndexes = [];
let SelectedIndexes = [];
let TotalCount = 0;
let count = 0;
let firstback;
let firstfront;
let secondback;
let secondfront;
let WinCount = 0;
backs.forEach(function (cell, index) {
  ArrayofCells.push(cell);
  ArrayofIndexes.push(index);
});
fronts.forEach(function (element) {
  array1.push(element);
});

//Game Installation
GameInstallation(count);

function GameInstallation(count) {
  for (let i = 0; i < backs.length; i++) {
    let index;
    if (count == 0 || count == 1) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "pagani";
      SelectedIndexes.push(index);
      count++;
    }
    if (count == 2 || count == 3) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "ferrari";
      SelectedIndexes.push(index);
      count++;
    }
    if (count == 4 || count == 5) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "bugatti";
      SelectedIndexes.push(index);
      count++;
    }
    if (count == 6 || count == 7) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "porshe";
      SelectedIndexes.push(index);
      count++;
    }
    if (count == 8 || count == 9) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "mercedes";
      SelectedIndexes.push(index);
      count++;
    }
    if (count == 10 || count == 11) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "camaro";
      SelectedIndexes.push(index);
      count++;
    }
    if (count == 12 || count == 13) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "bmw";
      SelectedIndexes.push(index);
      count++;
    }
    if (count == 14 || count == 15) {
      do {
        index = Math.floor(Math.random() * 16);
      } while (SelectedIndexes.includes(index));
      backs[index].id = "lexus";
      SelectedIndexes.push(index);
      count++;
    }
  }
}

//GamePlay
document.querySelector('.Container').addEventListener('click', function (e) {
  if (e.target.classList.contains('Container__Cell__Front')) {
    e.target.classList.add('Container__Cell__Front__Clicked');
    ArrayofCells[array1.indexOf(e.target)].classList.add('Container__Cell__Back__Clicked');
    if (TotalCount == 0) {
      firstback = ArrayofCells[array1.indexOf(e.target)];
      firstfront = e.target;
      TotalCount++;
    } else {
      secondback = ArrayofCells[array1.indexOf(e.target)];
      secondfront = e.target;
      TotalCount = 0;
      OpenorNot(firstback, secondback, firstfront, secondfront);
    }
  }
});

function OpenorNot(element1, element2, element3, element4) {
  if (element1.id == element2.id) {
    WinCount++;
    if (WinCount == 8) {
      popup.style.display = 'flex';
      popup__btn.addEventListener('click', function () {
        popup.style.display = 'none';
        SelectedIndexes = [];
        TotalCount = 0;
        count = 0;
        WinCount = 0;
        backs.forEach(function (element) {
          element.classList.remove('Container__Cell__Back__Clicked');
          element.removeAttribute('id');
        });
        fronts.forEach(function (element) {
          element.classList.remove('Container__Cell__Front__Clicked');
          element.removeAttribute('id');
        });
        GameInstallation(count);
      });
    }
  } else {
    setTimeout(function () {
      element1.classList.remove('Container__Cell__Back__Clicked');
      element2.classList.remove('Container__Cell__Back__Clicked');
      element3.classList.remove('Container__Cell__Front__Clicked');
      element4.classList.remove('Container__Cell__Front__Clicked');
    }, 1500);
  }
}