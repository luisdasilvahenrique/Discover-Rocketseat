const Modal = {
  open() {
    //abrir modal
    //ativar a classe active do modal
    document
      .querySelector('.modal-overlay')
      .classList.add('active')
  },
  close() {
    //fechar modal
    //remover a classe active do modal
    document
      .querySelector('.modal-overlay')
    classList.remove('active')
  }
  //teste
}

// Pode haver erro no "expenses" na saída e soma dos valores
const Transaction = {
  all: [
    {
      description: 'Luz',
      amount: -30012,
      date: "23/01/2021",
    },
    {
      description: 'Website',
      amount: -30003,
      date: "24/11/2021",
    },
    {
      description: 'Internet',
      amount: -20000,
      date: "05/03/2021",
    },
    {
      description: 'Botijão',
      amount: 10000,
      date: "11/11/2021",
    },
    {
      description: 'Botijão',
      amount: 20000,
      date: "14/06/2021",
    },
    {
      description: 'Comida',
      amount: 60000,
      date: "01/03/2021",
    },
  
  ],

  add(transaction) {
    Transaction.all.push(transaction)

    App.reload()
  },

  remove(index){
    Transaction.all.splice(index, 1)

    App.reload()
  },

  incomes() {
    let income = 0;
    //pegar todas as transações
    //para cada transação
    Transaction.all.forEach(transaction => {
      //somar a uma váriavel e retornar a variável
      if (transaction.amount > 0) {
        income = income + transaction.amount;
      }
    })
    //para cada transação, se for maior que zero
    return income;
  },

  expenses() {
    let expense = 0;
    Transaction.all.forEach(transaction => {
      if (transaction < 0) {
        expense += transaction.amount;
      }
    })
    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  }
}

const DOM = {
  transactionContainer: document.querySelector('#data-table tbody'),

  addTransaction(transaction, index) {
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
      .innerHTML = Utils.formatCurrency(Transaction.incomes())

    document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses())
    document
      .getElementById('totalDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total())

  },

  clearTransaction() {
    DOM.transactionContainer.innerHTML = ''
  }
}

// formantando moeda
const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, " ")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return signal + value
  }
}

const Form = {
  submit(event){
    event.preventDefault()
    // 2:05:30 sec
    // verificar se todas as informações foram preenchidas
    // Formatar os dados para salvar
    // salvar
    // apagar os daodos do form
    // modal feche
    // atualizar a aplicação
  }
}

const App = {
  init() {
    Transaction.all.forEach(transation => {
      DOM.addTransaction(transation);
    })

    DOM.updateBalance()
  },

  reload() {
    DOM.clearTransaction()
    App.init()
  }
}
App.init()

