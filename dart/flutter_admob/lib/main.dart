// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import 'package:flutter_admob/app_theme.dart';
import 'package:flutter_admob/game_route.dart';
import 'package:flutter_admob/home_route.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
    statusBarColor: Colors.transparent,
    statusBarIconBrightness: Brightness.dark,
  ));

  runApp(
    MaterialApp(
      routes: <String, WidgetBuilder>{
        '/': (BuildContext context) => const HomeRoute(),
        '/game': (BuildContext context) => const GameRoute()
      },
      theme: ThemeData(
        primaryColor: AppTheme.primary,
        primaryColorDark: AppTheme.primaryDark,
        // primarySwatch 속성 값을 통해 전체적인 Theme을 설정할 수 있음
        primarySwatch: Colors.green,
        textTheme: GoogleFonts.acmeTextTheme().copyWith(
            button: GoogleFonts.ubuntuMono(
          fontSize: 16,
          fontWeight: FontWeight.bold,
        )),
      ),
    ),
  );
}
