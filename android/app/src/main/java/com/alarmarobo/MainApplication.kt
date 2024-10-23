package com.alarmarobo

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader

class MainApplication : Application(), ReactApplication {

  private val mReactNativeHost = object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                return PackageList(this).packages.apply {
                    // Remover la línea siguiente para evitar el conflicto
                    // add(SplashScreenReactPackage())
                }
            }

            override fun getJSMainModuleName(): String = "index"

            override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

            override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
            override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
        }

        override val reactNativeHost: ReactNativeHost
            get() = mReactNativeHost

        override val reactHost: ReactHost
            get() = getDefaultReactHost(applicationContext, reactNativeHost)

        override fun onCreate() {
            super.onCreate()
            SoLoader.init(this, false)
            if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
                load()
            }
        }
}
