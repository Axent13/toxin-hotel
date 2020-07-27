const dataFromSomewhere = {
  currentPage: 1,
  totalPages: 15,
  paginationLengthLeft: 2,
  paginationLengthRight: 1,
};

class Pagination {
  constructor(options) {
    this.currentPage = options.currentPage;
    this.totalPages = options.totalPages;
    this.paginationLengthLeft = options.paginationLengthLeft;
    this.paginationLengthRight = options.paginationLengthRight;
  }

  getPaginationOptions() {
    // eslint-disable-next-line max-len
    return [this.currentPage, this.totalPages, this.paginationLengthLeft, this.paginationLengthRight];
  }

  drawPagination() {
    let pageIndex = this.currentPage;
    const $paginationButtonsContainer = $('.pagination__buttons');

    // Добавлем первую кнопку
    const $newFirstButton = document.createElement('button');
    if (this.currentPage === 1) {
      $newFirstButton.classList.add('pagination__page-button', 'pagination__page-button_active');
      $newFirstButton.innerText = '1';
      pageIndex += 1;
    } else {
      $newFirstButton.classList.add('pagination__arrow-button');
      $newFirstButton.innerText = '<-';
    }
    $paginationButtonsContainer.append($newFirstButton);

    // Добавляем левую часть
    for (let lengthIndex = 0; lengthIndex < this.paginationLengthLeft; lengthIndex += 1) {
      // Если страницы закончились - досрочно выходим из цикла
      if (pageIndex + 1 > this.totalPages) {
        break;
      }
      const $newPageButton = document.createElement('button');
      $newPageButton.classList.add('pagination__page-button');
      $newPageButton.innerText = pageIndex;
      if (this.currentPage === pageIndex) {
        $newPageButton.classList.add('pagination__page-button_active');
      }
      $paginationButtonsContainer.append($newPageButton);
      pageIndex += 1;
    }

    // Если не все страницы будут отрисованы, то добавляем многоточие
    if (pageIndex + this.paginationLengthRight <= this.totalPages) {
      const $newRestButton = document.createElement('button');
      $newRestButton.classList.add('pagination__page-button');
      // Если всего лишь одна страница не влезла, то вместо многоточия пишем её номер
      if (pageIndex === this.totalPages - 1) {
        $newRestButton.innerText = pageIndex;
      } else {
        $newRestButton.innerText = '...';
      }
      $paginationButtonsContainer.append($newRestButton);
    }

    // Добавляем правую часть
    if (pageIndex <= this.totalPages) {
      // Начинаем отсчет с нужного номера страницы
      pageIndex = this.totalPages - this.paginationLengthRight + 1;
      for (let lengthIndex = 0; lengthIndex < this.paginationLengthRight; lengthIndex += 1) {
        // Если страницы закончились - досрочно выходим из цикла
        if (pageIndex > this.totalPages) {
          break;
        }
        const $newPageButton = document.createElement('button');
        $newPageButton.classList.add('pagination__page-button');
        $newPageButton.innerText = pageIndex;
        if (this.currentPage === pageIndex) {
          $newPageButton.classList.add('pagination__page-button_active');
        }
        $paginationButtonsContainer.append($newPageButton);
        pageIndex += 1;
      }
    }

    function nextButtonClick() {
      console.log('Click on NEXT button');
    }

    // Добавляем стрелку справа, если эта страница не последняя
    if (this.currentPage < this.totalPages) {
      const $newLastButton = $('<button class="pagination__arrow-button">-></button>');
      $paginationButtonsContainer.append($newLastButton);
      $newLastButton.on('click', nextButtonClick);
    }
  }
}

const pagination = new Pagination(dataFromSomewhere);
console.log(pagination.getPaginationOptions());
pagination.drawPagination();
