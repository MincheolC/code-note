import java.net.MalformedURLException;
import java.net.URL;

public class HttpUnit {
    public HttpUnit() {

    }

    public URL buildUrl(String url) throws MalformedURLException {
        return new URL(url);
    }

    public void sendGet(String wrongUrl) {
    }
}
