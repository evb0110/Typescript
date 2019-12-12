class Foo {
    private bar: string = 'bar';

    public static sayBar() {
        console.log(this.prefix + 'bar');
    }

    private static prefix: string = 'The prefix: '
}

Foo.sayBar();