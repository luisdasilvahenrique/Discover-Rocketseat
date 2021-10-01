    const Modal = {
      open(){
        //abrir modal
        //ativar a classe active do modal
        document
        .querySelector('.modal-overlay')
        .classList.add('active')
        },
      close(){
          //fechar modal
          //remover a classe active do modal
          document
          .querySelector('.modal-overlay')
          classList.remove('active')
        }
        //teste
    }
    const transaction = [{
      id: 1,
      description: 'Luz',
      amount: -50012,
      date: "23/01/2021",
    },
    {
      id: 2,
      description: 'Website',
      amount: -50003,
      date: "23/01/2021",
    },
    {
      id: 3,
      description: 'Internet',
      amount: -20000,
      date: "23/01/2021",
    },
    {
      id: 4,
      description: 'Botijão',
      amount: 10000,
      date: "23/01/2021",
    },
    {
      id: 5,
      description: 'Botijão',
      amount: 20000,
      date: "23/01/2021",
    }
  ]

    const Transaction = {
      incomes(){
        //pegar todas as transações
        //verificar se a transação é maior que zero
        //somar a uma váriavel e retornar a variável
        // 1:23:00
        return 'Cheguei'
      },
      expenses(){
        return 'Aqui'
      },
      total(){
        return 'Discover'
      }
    }

    const DOM = {
      transactionContainer: document.querySelector('#data-table tbody'),

      addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionContainer.appendChild(tr)

      },
        innerHTMLTransaction(transaction) {
          const CssClass = transaction.amount > 0 ? "income" : "expense"

          const amount = Utils.formatCurrency(transaction.amount)

          const html = `
          <td class=description>${transaction.description}</td>
          <td class="${CssClass}">${amount}</td>
          <td class="date">${transaction.date}</td>
          <td>
            <img src="./assets/minus.svg" alt="Remover transação">
          </td>
          `
          return html
      },

      updateBalance() {
          document
          .getElementById('incomeDisplay')
          .innerHTML = Transaction.incomes()
              
          document
          .getElementById('expenseDisplay')
          .innerHTML = Transaction.expenses()
          document
          .getElementById('totalDisplay')
          .innerHTML = Transaction.total()

      },

    }

// formantando moeda
    const Utils = {
      formatCurrency(value){
        const signal  = Number(value) < 0 ? "-" : ""
      
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })

        return signal + value
      }
    }

    transaction.forEach(function(transation){
      DOM.addTransaction(transation)
    })

    DOM.updateBalance()
    
