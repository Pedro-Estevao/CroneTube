import { React, useState } from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsForm) {
    const [values, setValues] = useState(propsForm.initialValues);

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {titulo: "Teste", url: "https://youtube.com/"}
    });
    const [formVisivel, setFormVisivel] = useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel && (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input name="titulo" placeholder="Título do Vídeo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} />
                        <input name="url" placeholder="URL do Vídeo" value={formCadastro.values.url} onChange={formCadastro.handleChange} />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )
}