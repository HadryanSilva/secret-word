import './StartScreen.css'

const StartScreen = ({ StartScreen }) => {
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar a jogar</p>
            <button onClick={StartScreen}>Iniciar o jogo</button>
        </div>
    );
};

export default StartScreen;