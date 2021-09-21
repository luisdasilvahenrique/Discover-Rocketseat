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
      amount: -50000,
      date: "23/01/2021",
    },
    {
      id: 2,
      description: 'Website',
      amount: -500000,
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
        //somar as entradas
      },
      expenses(){
        //  somar as saídas
      },
      total(){
        // somar entradas - saídas
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
          <td class="${CssClass}">${transaction.amount}</td>
          <td class="date">${transaction.date}</td>
          <td>
            <img src="./assets/minus.svg" alt="Remover transação">
          </td>
          `
          return html
        }
    }

// formantando moeda
    const Utils = {
      formatCurrency(value){
        const signal  = Number(value) < 0 ? "-" : ""
      }
    }

    transaction.forEach(function(transation){
      DOM.addTransaction(transation)
    })
    
