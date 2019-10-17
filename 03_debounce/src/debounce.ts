export default class Debounce {


    private timeout!: any;
    private timestamp!: number;


    constructor(public func: () => any, public wait: number) {
        this.debounced = this.debounced.bind(this);
        this.func = this.func.bind(this);
    }


    private debounced() {
        const func = this.func;
        const bindedFunc: () => any = func.bind(null, ...arguments)
        if (!this.timestamp || Date.now() - this.timestamp < this.wait) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(bindedFunc, this.wait);
        } else {
            this.timeout = setTimeout(bindedFunc, this.wait);
    }
        this.timestamp = Date.now();
    }

    static debounce(func: (args?: any) => any, wait: number) {
        const debounce = new Debounce(func, wait);
        return debounce.debounced;
    }
}
