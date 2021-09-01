export class Conta{
  nome: string;
  tipo: string;
  valor: number;
  data: Date;
  pagamento: Boolean;

  constructor(nome: string, tipo: string, valor: number, data: Date){
    this.nome = nome;
    this.tipo = tipo;
    this.valor = valor;
    this.data = data;
    this.pagamento = false;
  }

  get dadosConta(){
    var dados = [ this.nome, this.tipo, this.tipo, this.data, this.pagamento ];
    
    
    return dados;  
  }

  cadastrarConta(): void{

  }

  public static async atualizarConta(id: string){
    const id_int: number = parseInt(id);    
    const conta: object = await this.buscarDadosContaUni(id_int); 
    const dados: Array<string | number | boolean> = [];

    for( var [key, value] of Object.entries(conta) ) { dados.push(value) }
    
    return fetch(`http://localhost:3000/contas/${id}`, {
      method: 'PUT',
      headers: { 
          'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        nome:  dados[0],
        tipo:  dados[1],
        valor: dados[2],
        data:  dados[3],
        pagamento: true
      })
  })
  .then( resposta => {
      if(resposta.ok){ return resposta.json() }

      throw new Error('Não foi possível detalhar um cliente')
  })
}

  public static async buscarDadosContaUni(id: number): Promise<Object>{
    try { 
      const lista_contas: object = await this.buscarDadosContas();
      
      for( var [key, value] of Object.entries(lista_contas) ){
        if(value.id == id){
          return value;
        }
      }
    }
    catch(erro){
      console.log(erro)
    }
  
  }

  public static buscarDadosContas(): Object{
    return fetch(`http://localhost:3000/contas`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar as contas')
    })
  }

  deletarConta(): void{

  }
}
