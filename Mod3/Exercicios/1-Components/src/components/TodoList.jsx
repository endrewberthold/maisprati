import {List} from "./List.jsx";

const today = new Date();
const person = {
    name: 'Gregorio Y Zara',
    theme: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    }
};

function formatDate(date){
    return new Intl.DateTimeFormat(
        'pt-BR',
        {weekday: 'long'}
    ).format(date);
}

export default function TodoList(){
    return (
        <div style={{
            backgroundColor: 'black',
            color: 'pink',
            fontSize: '20px',
            justifyContent: 'center',
            textAlign: 'center',
            borderRadius: '20px',
            padding: '5px'
        }}>
            <h1> Foto de uma cientista</h1>
            <figure style={person.theme}>
                <img style={{borderRadius: '999px'}}
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y Zara"
                    className="photo"
                    width="200px"
                />
            </figure>
            <section>
                <h1>Lista do {person.name} para {formatDate(today)}</h1>
                <List />
            </section>
        </div>
    );
}