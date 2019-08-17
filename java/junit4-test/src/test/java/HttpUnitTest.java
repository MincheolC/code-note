import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.experimental.runners.Enclosed;
import org.junit.rules.ExpectedException;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;
import java.util.Collection;

import static org.hamcrest.CoreMatchers.isA;
import static org.junit.Assert.assertThat;

@RunWith(Enclosed.class)
public class HttpUnitTest {
    @RunWith(Parameterized.class)
    public static class TheParameterizedPart {

        @Parameterized.Parameters
        public static Collection<Object[]> data() {
            return Arrays.asList(new Object[][] {
                    { null }, { "" }, { "wrongUrl" }
            });
        }

        @Parameterized.Parameter
        public String wrongUrl;

        @Rule
        public ExpectedException thrown = ExpectedException.none();

        @Test
        public void testBuildUrlWithWrongParam() throws MalformedURLException {
            HttpUnit httpUnit = new HttpUnit();

            thrown.expect(MalformedURLException.class);
            httpUnit.buildUrl(wrongUrl);
        }

    }

    public static class NotParameterizedPart {
        @Test
        public void testBuildUrlWithRightParam() throws MalformedURLException {
            HttpUnit httpUnit = new HttpUnit();
            String rightUrl = "http://www.google.com";
            assertThat(httpUnit.buildUrl(rightUrl), isA(URL.class));
        }
    }
}