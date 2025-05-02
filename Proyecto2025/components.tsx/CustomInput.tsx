// tipo de propiedades que va a recibir, Props... nombre de un objeto tipo

type Props ={
label: string;
value: String;
type?: 'text' |'password' | 'email' | 'number';
//? significa volver una propiedad opcional - | operador or
onChange: (text: string) => void;
// onChange espera recibir valores - void es el tipo de respuesta de el metodo onChange
requered: boolean;

}
