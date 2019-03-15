export class Customer
{
    id: number;
    username: string;
    password: string;
    name: string;
    savings: string;
    current: string;

    constructor(acn, us, pass, name)
    {
        this.id = acn;
        this.username = us;
        this.password = pass;
        this.name = name;
        this.savings = '0';
        this.current = '0';
    }
}