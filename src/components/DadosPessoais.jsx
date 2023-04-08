

function DadosPessoais(){
    
    return (

        <div>
            <div className="col-12">
                <label className="form-label" htmlFor="nome">Nome</label>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="nome" id="nome" placeholder="Informe seu nome" required/>
                </div>
            </div>


            <div className="col-12">
                <label className="form-label" htmlFor="email">E-mail</label>

                <div className="input-group mb-3">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Informe seu e-mail" required/>
                </div>
            </div>
        </div>
    )
}

export default DadosPessoais