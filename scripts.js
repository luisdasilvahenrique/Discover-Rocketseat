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
  FormatAmount(value){
    value = Number(value) * 100
    
    return value
  },

  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : ""

    value = String(value).replace(/\D/g, " ")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })

    return signal + value
  },

  FormatDate(date){
      const splittedDate = date.split("-")
      return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
      
  }
}

const Form = {
  description: document.querySelector('input#description'),
  amount: document.querySelector('input#amount'),
  date: document.querySelector('input#date'),

  getValues(){
    return{
      description: Form.description.value,
      amount: Form.amount.value,
      date: Form.date.value
    }
  },

  validateFields(){

      const { description, amount, date } = Form.getValues()
      
      if (description.trim() === "" || 
          amount.trim() === "" ||
          date.trim() === "") {
           throw new Error('Preencha todos os campos por favor!')
      }
  },

  formatValues(){

    let { description, amount, date } = Form.getValues()

    amount = Utils.FormatAmount(amount)

    date = Utils.FormatDate(date)

    console.log(date)

    return {
      description,
      amount,
      date
    }
    
  },

  SaveData(){
      console.log('Salvar dado')
  },

  DeleteData(){
    console.log('Deletar dado')
  },

  submit(event){
    event.preventDefault()
    try {
    // verificar se todas as informações foram preenchidas
    // Form.validateFields()
    // Formatar os dados para salvar
    Form.formatValues()
    // salvar
    Form.SaveData()
    // apagar os daodos do form
    Form.DeleteData()
    // modal feche
    // atualizar a aplicação
    } catch (error) {
      alert(error.message)
    }
    
    
   
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

