import 'package:flutter/material.dart';
import 'package:cookbook/router.dart';

class RouterProvider with ChangeNotifier {
  RouterProvider(CookBookHomePath this._routePath);

  CookBookRoutePath _routePath;
  CookBookRoutePath get routePath => _routePath;

  set routePath(CookBookRoutePath? route) {
    if (route != _routePath) {
      _routePath = route!;
      notifyListeners();
    }
  }
}
