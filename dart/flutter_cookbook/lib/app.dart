import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'package:cookbook/router.dart';

import 'colors.dart';
import 'model/email_store.dart';
import 'model/router_provider.dart';

class CookBookApp extends StatefulWidget {
  const CookBookApp({Key? key}) : super(key: key);

  @override
  _CookBookAppState createState() => _CookBookAppState();
}

class _CookBookAppState extends State<CookBookApp> {
  final RouterProvider _cookBookState = RouterProvider(const CookBookHomePath());
  final CookBookRouteInformationParser _routeInformationParser = CookBookRouteInformationParser();
  late final CookBookRouterDelegate _routerDelegate;

  @override
  void initState() {
    super.initState();
    _routerDelegate = CookBookRouterDelegate(cookBookState: _cookBookState);
  }

  @override
  void dispose() {
    _routerDelegate.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<EmailStore>.value(value: EmailStore()),
      ],
      child: Selector<EmailStore, ThemeMode>(
          selector: (context, emailStore) => emailStore.themeMode,
          builder: (context, themeMode, child) {
            return MaterialApp.router(
              routeInformationParser: _routeInformationParser,
              routerDelegate: _routerDelegate,
              themeMode: themeMode,
              title: 'Reply',
              darkTheme: _buildReplyDarkTheme(context),
              theme: _buildReplyLightTheme(context),
            );
          }),
    );
  }
}


ThemeData _buildReplyLightTheme(BuildContext context) {
  final base = ThemeData.light();
  return base.copyWith(
    bottomAppBarColor: CookBookColors.blue700,
    bottomSheetTheme: BottomSheetThemeData(
      backgroundColor: CookBookColors.blue700,
      modalBackgroundColor: Colors.white.withOpacity(0.7),
    ),
    cardColor: CookBookColors.white50,
    chipTheme: _buildChipTheme(
      CookBookColors.blue700,
      CookBookColors.lightChipBackground,
      Brightness.light,
    ),
    colorScheme: const ColorScheme.light(
      primary: CookBookColors.blue700,
      secondary: CookBookColors.orange500,
      surface: CookBookColors.white50,
      error: CookBookColors.red400,
      onPrimary: CookBookColors.white50,
      onSecondary: CookBookColors.black900,
      onBackground: CookBookColors.black900,
      onSurface: CookBookColors.black900,
      onError: CookBookColors.black900,
      background: CookBookColors.blue50,
    ),
    textTheme: _buildReplyLightTextTheme(base.textTheme),
    scaffoldBackgroundColor: CookBookColors.blue50,
  );
}

ThemeData _buildReplyDarkTheme(BuildContext context) {
  final base = ThemeData.dark();
  return base.copyWith(
    bottomAppBarColor: CookBookColors.darkBottomAppBarBackground,
    bottomSheetTheme: BottomSheetThemeData(
      backgroundColor: CookBookColors.darkDrawerBackground,
      modalBackgroundColor: Colors.black.withOpacity(0.7),
    ),
    cardColor: CookBookColors.darkCardBackground,
    chipTheme: _buildChipTheme(
      CookBookColors.blue200,
      CookBookColors.darkChipBackground,
      Brightness.dark,
    ),
    colorScheme: const ColorScheme.dark(
      primary: CookBookColors.blue200,
      secondary: CookBookColors.orange300,
      surface: CookBookColors.black800,
      error: CookBookColors.red200,
      onPrimary: CookBookColors.black900,
      onSecondary: CookBookColors.black900,
      onBackground: CookBookColors.white50,
      onSurface: CookBookColors.white50,
      onError: CookBookColors.black900,
      background: CookBookColors.black900,
    ),
    textTheme: _buildReplyDarkTextTheme(base.textTheme),
    scaffoldBackgroundColor: CookBookColors.black900,
  );
}

ChipThemeData _buildChipTheme(
    Color primaryColor,
    Color chipBackground,
    Brightness brightness,
    ) {
  return ChipThemeData(
    backgroundColor: primaryColor.withOpacity(0.12),
    disabledColor: primaryColor.withOpacity(0.87),
    selectedColor: primaryColor.withOpacity(0.05),
    secondarySelectedColor: chipBackground,
    padding: const EdgeInsets.all(4),
    shape: const StadiumBorder(),
    labelStyle: GoogleFonts.workSansTextTheme().bodyText2!.copyWith(
      color: brightness == Brightness.dark
          ? CookBookColors.white50
          : CookBookColors.black900,
    ),
    secondaryLabelStyle: GoogleFonts.workSansTextTheme().bodyText2!,
    brightness: brightness,
  );
}

TextTheme _buildReplyLightTextTheme(TextTheme base) {
  return base.copyWith(
    headline4: GoogleFonts.workSans(
      fontWeight: FontWeight.w600,
      fontSize: 34,
      letterSpacing: 0.4,
      height: 0.9,
      color: CookBookColors.black900,
    ),
    headline5: GoogleFonts.workSans(
      fontWeight: FontWeight.bold,
      fontSize: 24,
      letterSpacing: 0.27,
      color: CookBookColors.black900,
    ),
    headline6: GoogleFonts.workSans(
      fontWeight: FontWeight.w600,
      fontSize: 20,
      letterSpacing: 0.18,
      color: CookBookColors.black900,
    ),
    subtitle2: GoogleFonts.workSans(
      fontWeight: FontWeight.w600,
      fontSize: 14,
      letterSpacing: -0.04,
      color: CookBookColors.black900,
    ),
    bodyText1: GoogleFonts.workSans(
      fontWeight: FontWeight.normal,
      fontSize: 18,
      letterSpacing: 0.2,
      color: CookBookColors.black900,
    ),
    bodyText2: GoogleFonts.workSans(
      fontWeight: FontWeight.normal,
      fontSize: 14,
      letterSpacing: -0.05,
      color: CookBookColors.black900,
    ),
    caption: GoogleFonts.workSans(
      fontWeight: FontWeight.normal,
      fontSize: 12,
      letterSpacing: 0.2,
      color: CookBookColors.black900,
    ),
  );
}

TextTheme _buildReplyDarkTextTheme(TextTheme base) {
  return base.copyWith(
    headline4: GoogleFonts.workSans(
      fontWeight: FontWeight.w600,
      fontSize: 34,
      letterSpacing: 0.4,
      height: 0.9,
      color: CookBookColors.white50,
    ),
    headline5: GoogleFonts.workSans(
      fontWeight: FontWeight.bold,
      fontSize: 24,
      letterSpacing: 0.27,
      color: CookBookColors.white50,
    ),
    headline6: GoogleFonts.workSans(
      fontWeight: FontWeight.w600,
      fontSize: 20,
      letterSpacing: 0.18,
      color: CookBookColors.white50,
    ),
    subtitle2: GoogleFonts.workSans(
      fontWeight: FontWeight.w600,
      fontSize: 14,
      letterSpacing: -0.04,
      color: CookBookColors.white50,
    ),
    bodyText1: GoogleFonts.workSans(
      fontWeight: FontWeight.normal,
      fontSize: 18,
      letterSpacing: 0.2,
      color: CookBookColors.white50,
    ),
    bodyText2: GoogleFonts.workSans(
      fontWeight: FontWeight.normal,
      fontSize: 14,
      letterSpacing: -0.05,
      color: CookBookColors.white50,
    ),
    caption: GoogleFonts.workSans(
      fontWeight: FontWeight.normal,
      fontSize: 12,
      letterSpacing: 0.2,
      color: CookBookColors.white50,
    ),
  );
}
