package com.alarmarobo

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
          SplashScreen.show(this)
          super.onCreate(null)
     }

    override fun getMainComponentName(): String = "AlarmaRobo"

    override fun createReactActivityDelegate(): ReactActivityDelegate {
      return DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
    }
}
