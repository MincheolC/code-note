import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.fail;

public class ExceptionUnitTest {
    @Test(expected = IndexOutOfBoundsException.class)
    public void testExpected() {
        new ArrayList<Object>().get(0);
    }

    @Test
    public void testTryCatch() {
        try {
            new ArrayList<Object>().get(0);
            fail("Expected an IndexOutOfBoundsException to be thrown");
        } catch(IndexOutOfBoundsException anIndexOutOfBoundsException) {
            assertThat(anIndexOutOfBoundsException.getMessage(), is("Index: 0, Size: 0"));
        }
    }

    @Rule
    public ExpectedException thrown = ExpectedException.none();

    @Test
    public void testExpectedExceptionRule() {
        List<Object> list = new ArrayList<Object>();

        thrown.expect(IndexOutOfBoundsException.class);
        thrown.expectMessage("Index: 0, Size: 0");
        list.get(0);
    }
}