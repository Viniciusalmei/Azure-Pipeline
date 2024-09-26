export enum PartTypes {
    "heads","torsos","arms","bases"
}

export class Part {
    id: number =0;//precisamos ter um valor inicial, caso nao tenha definimos como 0
    description: string = "";
    title: string = '';
    src: string = '';
    type: PartTypes =PartTypes.heads;              ///como precisamos de valor fixo , precisa criar um enum
    cost: number = 0.0;
}

export class PartsResponse {   //classe que tem uma estrutura de varios itens de Part,começando vazio
    heads: Array<Part> = [];
    arms: Array<Part> = [];
    bases: Array<Part> = [];
    torsos: Array<Part> = [];
    

}