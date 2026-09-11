# Proguard rules for WebView optimization
-dontwarn android.webkit.**
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keepattributes JavascriptInterface
-keep class de.bilanz.republik.** { *; }
-optimizations !code/simplification/arithmetic,!code/simplification/cast,!field/*,!class/merging/*
