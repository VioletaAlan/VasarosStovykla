export class Registration{
    public id:string|null=null;
    constructor (
        public name?:string,
        public surname?:string,
        public year?:number,
        public exampleinputEmail?:string,
        public gender?:string,
        public phone?:string,
        public className?:string,
        
    ) {        
    }
}

