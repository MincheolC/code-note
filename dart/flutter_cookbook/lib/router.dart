import 'package:cookbook/page/home.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:cookbook/page/custom_transition_page.dart';

import 'model/router_provider.dart';

const String _homePageLocation = '/cook/home';
const String _searchPageLocation = '/cook/search';

class CookBookRouterDelegate extends RouterDelegate<CookBookRoutePath>
    with ChangeNotifier, PopNavigatorRouterDelegateMixin<CookBookRoutePath> {
  CookBookRouterDelegate({required this.cookBookState})
      : navigatorKey = GlobalObjectKey<NavigatorState>(cookBookState) {
    cookBookState.addListener(() {
      notifyListeners();
    });
  }

  @override
  final GlobalKey<NavigatorState> navigatorKey;

  RouterProvider cookBookState;

  @override
  void dispose() {
    cookBookState.removeListener(notifyListeners);
    super.dispose();
  }

  @override
  CookBookRoutePath get currentConfiguration => cookBookState.routePath;

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider<RouterProvider>.value(value: cookBookState),
      ],
      child: Selector<RouterProvider, CookBookRoutePath?>(
        selector: (context, routerProvider) => routerProvider.routePath,
        builder: (context, routePath, child) {
          return Navigator(
            key: navigatorKey,
            onPopPage: _handlePopPage,
            pages: [
              // TODO: Add Shared Z-Axis transition from search icon to search view page (Motion)
              const CustomTransitionPage(
                transitionKey: ValueKey('Home'),
                screen: HomePage(),
              ),
              if (routePath is CookBookSearchPath)
                const CustomTransitionPage(
                  transitionKey: ValueKey('Search'),
                  screen: HomePage(),
                ),
            ],
          );
        },
      ),
    );
  }

  bool _handlePopPage(Route<dynamic> route, dynamic result) {
    // _handlePopPage should not be called on the home page because the
    // PopNavigatorRouterDelegateMixin will bubble up the pop to the
    // SystemNavigator if there is only one route in the navigator.
    assert(route.willHandlePopInternally ||
        cookBookState.routePath is CookBookSearchPath);

    final bool didPop = route.didPop(result);
    if (didPop) cookBookState.routePath = const CookBookHomePath();
    return didPop;
  }

  @override
  Future<void> setNewRoutePath(CookBookRoutePath configuration) {
    cookBookState.routePath = configuration;
    return SynchronousFuture<void>(null);
  }
}

@immutable
abstract class CookBookRoutePath {
  const CookBookRoutePath();
}

class CookBookHomePath extends CookBookRoutePath {
  const CookBookHomePath();
}

class CookBookSearchPath extends CookBookRoutePath {
  const CookBookSearchPath();
}

// TODO: Add Shared Z-Axis transition from search icon to search view page (Motion)

class CookBookRouteInformationParser extends RouteInformationParser<CookBookRoutePath> {
  @override
  Future<CookBookRoutePath> parseRouteInformation(
      RouteInformation routeInformation) async {
    final url = Uri.parse(routeInformation.location!);

    if (url.path == _searchPageLocation) {
      return SynchronousFuture<CookBookSearchPath>(const CookBookSearchPath());
    }

    return SynchronousFuture<CookBookHomePath>(const CookBookHomePath());
  }

  @override
  RouteInformation? restoreRouteInformation(CookBookRoutePath configuration) {
    if (configuration is CookBookHomePath) {
      return const RouteInformation(location: _homePageLocation);
    }
    if (configuration is CookBookSearchPath) {
      return const RouteInformation(location: _searchPageLocation);
    }
    return null;
  }
}
