

function Agradecimento() {

    return(
        <div>

            <h3>Obrigada pelo seu cadastro</h3>

            {/*nova linha*/}
            <div className="row">
                <h4>Conte-nos onde nos conheceu?</h4>
                <div className="col-12"> {/*vai ocupar as 12 colunas do grid*/}
                    <select id="redes-sociais" className="form-select" aria-label="defaultValue">
                        <option value="defaultValue">-- Selecione onde nos conheceu --</option>
                        <option value="website">Website</option>
                        <option value="instagram">Instagram</option>
                        <option value="linkedin">Linkedin</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

 export default Agradecimento