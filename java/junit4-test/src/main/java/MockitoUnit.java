public class MockitoUnit {
    private Foo foo = new Foo();

    public MockitoUnit() {

    }

    public String mockTest() {
        return foo.get();
    }
}
