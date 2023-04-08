


function Endereco() {

    return (
        <div>
            <div className="col-12">
                <label className="form-label" htmlFor="logradouro">Logradouro</label>
            
                <div className="input-group mb-3 col-12">
                    <input type="text" className="form-control" name="logradouro" id="logradouro" placeholder="Logradouro" required/>
                </div>
            </div>

            {/*Nova linha*/}
          <div className="row"> 
            <div className="col-4"> {/*utilizando grid*/}
                <label className="form-label" htmlFor="numero">Número</label>

                <div className="input-group mb-3">
                    <input type="number" className="form-control" name="numero" id="numero" placeholder="N°" required/>
                </div>
            </div>

            <div className="col-8"> {/*Somando 12 colunas*/}
                <label className="form-label" htmlFor="complemento">Complemento</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="complemento" name="complemento" placeholder="Complemento"/> {/*Não obrigatório*/}
                </div>
            </div>
          </div> {/*fim row*/}

          {/*Nova linha*/}
          <div className="row">
            <div className="col-6">
                <label className="form-label" htmlFor="bairro">Bairro</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="bairro" id="bairro" placeholder="Bairro" required/>
                </div>
            </div>

            <div className="col-6">
                <label className="form-label" htmlFor="cidade">Cidade</label>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="cidade" id="cidade" placeholder="Cidade" required/>
                </div>
            </div>
          </div>

           {/*Nova linha*/}
           <div className="row">
                <div className="col-6">
                    <label className="form-label" htmlFor="cep">CEP</label>
                    <div className="input-group mb-3">
                        <input type="number" className="form-control" name="cep" id="cep" placeholder="CEP" required/>
                    </div>
                </div>

                <div className="col-6">
                    <label className="form-label" htmlFor="estado">Estado</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" name="estado" id="estado" placeholder="Estado" required/>
                    </div>
                </div>

           </div>

        </div>
    )
}

    export default Endereco
