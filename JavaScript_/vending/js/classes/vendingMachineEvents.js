class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector('.section1');
    this.balance = vMachine.querySelector('.bg-box p');
    this.itemList = vMachine.querySelector('.cola-list');
    this.inputCostEl = vMachine.querySelector('#input-money');
    this.btnPut = vMachine.querySelector('#input-money+.btn');
    this.btnReturn = vMachine.querySelector('.bg-box+.btn');
    this.btnGet = vMachine.querySelector('.btn-get');
    this.stagedList = vMachine.querySelector('.get-list');

    const myinfo = document.querySelector('.section2');
    this.myMoney = myinfo.querySelector('.bg-box strong');

    const getinfo = document.querySelector('.section3');
    this.getList = getinfo.querySelector('.get-list');
    this.txtTotal = getinfo.querySelector('.total-price');
  }

  // 장바구니 콜라 생성 함수
  stagedItemGenerator(target) {
    const stagedItem = document.createElement('li');
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `
      <img src="./img/${target.dataset.img}" alt="">
      ${target.dataset.item}
      <strong>1
        <span class="a11y-hidden">개</span>
      </strong>
    `;
    this.stagedList.append(stagedItem);
  }

  bindEvent() {
    /**
    * 1. 입금 버튼 기능
    * 입금 버튼을 누르면 
    * 1) 소지금 === 소지금 - 입금액
    * 2) 잔액 === 기존 잔액 + 입금액
    * 3) 입금액이 소지금보다 많으면 경고창 출력
    * 4) 입금액이 정상적으로 입금되면 입금창은 초기화
    */
    this.btnPut.addEventListener('click', () => {
      const inputCost = parseInt(this.inputCostEl.value); // 입력값
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));  // 소지금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));  // 잔액

      if (inputCost) {
        if (inputCost <= myMoneyVal && inputCost > 0) { // 입금액이 소지금 보다 적거나 같다면
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';
          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';
        } else {  // 입금액이 소지금보다 많다!
          alert('소지금이 부족합니다.');
        }

        this.inputCostEl.value = null;
      }
    });

    /**
    * 2. 거스름돈 반환 버튼
    * 1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
    * 2) 반환버튼을 누르면 잔액창이 초기화
    */
    this.btnReturn.addEventListener('click', () => {
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));  // 소지금
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));  // 잔액

      if (balanceVal) {
        this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
        this.balance.textContent = null;
      }
    });

    /**
    * 3. 자판기 장바구니 채우기
    * 1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
    * 2) 아이템 가격이 잔액보다 크다면 경고메세지를 줍니다.
    * 3) 아이템이 장바구니에 들어갑니다.
    * 4) 아이템의 count가 -1이 됩니다. 아이템의 카운트가 0이되면 품절 표시를 합니다.
    */
    this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

    this.btnsCola.forEach((item) => {
      item.addEventListener('click', (event) => {
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
        const targetEl = event.currentTarget
        const targetElPrice = parseInt(targetEl.dataset.price);
        const stagedListitem = this.stagedList.querySelectorAll('li');
        let isStaged = false

        if (balanceVal >= targetElPrice) {
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

          //장바구니 콜라 생성
          for (const item of stagedListitem) {
            // 클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교!
            if (targetEl.dataset.item === item.dataset.item) {
              item.querySelector('strong').firstChild.textContent = parseInt(item.querySelector('strong').firstChild.textContent) + 1;

              isStaged = true;
              break
            }
          }

          // 처음 선택했을 경우에만 장바구니에 콜라를 생성한다
          if (!isStaged) {
            this.stagedItemGenerator(event.currentTarget);
          }
          //자판기 콜라 개수 차감
          targetEl.dataset.count--;

          if (!parseInt(targetEl.dataset.count)) {
            targetEl.insertAdjacentHTML('beforeend', `
              <strong class="soldout">
                <span>품절</span>
              </strong>
              `
            );

            targetEl.disabled = "disabled"
          }
        } else {
          alert('입금한 금액이 부족합니다.');
        }
      })
    });

    /**
    * 4. 획득 버튼 기능
    * 1) 장바구나에 있는 음료수 목록이 획득한 음료로 이동
    * 2) 획득한 음료의 모든 금액을 합하여 총 금액을 업데이트
    */
    this.btnGet.addEventListener('click', () => {
      const itemStagedList = this.stagedList.querySelectorAll('li');
      const itemGetList = this.getList.querySelectorAll('li');
      let totalPrice = 0;
      
      for(const itemStaged of itemStagedList){
        let isGet = false; // 이미 획득 했나?
        for(const itemGet of itemGetList){
          // 장바구니의 콜라가 이미 획득한 목록에 있다면
          if(itemStaged.dataset.item === itemGet.dataset.item){
            itemGet.querySelector('strong').firstChild.textContent = parseInt(itemGet.querySelector('strong').firstChild.textContent) + parseInt(itemStaged.querySelector('strong').firstChild.textContent);

            isGet = true;
            break;
          }
        }
        if (!isGet){
          this.getList.append(itemStaged);
        }
      }

      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트의 총 금액 계산
      this.getList.querySelectorAll('li').forEach((itemGet) => {
        totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector('strong').firstChild.textContent);
      });
      this.txtTotal.textContent = `총금액 : ${new Intl.NumberFormat().format(totalPrice)} 원`
    });
  }
}

export default VendingMachineEvents;