import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;
import static org.mockito.Mockito.when;

public class MockitoUnitTest {
    @Mock
    private Foo foo;

    @InjectMocks
    private MockitoUnit mockitoUnit;

    @Before
    public void initialize() {
        System.out.println("initialized");
        MockitoAnnotations.initMocks(this);
    }
    @Test
    public void testMockTest() {
        // Real foo.get() returns "foo"
        when(foo.get()).thenReturn("woo");
        assertThat(mockitoUnit.mockTest(), is("woo"));
    }
}
