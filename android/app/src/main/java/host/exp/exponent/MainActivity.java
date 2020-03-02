package host.exp.exponent;

import android.os.Bundle;

import com.facebook.react.ReactPackage;

import org.unimodules.core.interfaces.Package;

import java.util.List;

import host.exp.exponent.experience.DetachActivity;
import host.exp.exponent.generated.DetachBuildConstants;

public class MainActivity extends DetachActivity {

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@id-app-au/mobile-encrytion";
  }

  @Override
  public String developmentUrl() {
    //return DetachBuildConstants.DEVELOPMENT_URL;
    return "exp6b9290f311e745229fcaff4c4cfbe096://192.168.1.30:19000";
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public List<Package> expoPackages() {
    return ((MainApplication) getApplication()).getExpoPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }
}
