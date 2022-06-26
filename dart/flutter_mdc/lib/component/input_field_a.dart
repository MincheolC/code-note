import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:mdc/style/colors.dart';

class InputFieldA extends StatelessWidget {
  final String labelText;
  final bool obscureText;

  const InputFieldA({
    Key? key,
    required this.labelText,
    this.obscureText = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const backgroundColor = MdcColors.black252;
    const borderRadius = 15.0;

    return TextFormField(
      style: const TextStyle(color: MdcColors.white50),
      cursorColor: MdcColors.white50,
      obscureText: obscureText,
      decoration: InputDecoration(
        filled: true,
        fillColor: backgroundColor,
        hintText: labelText,
        hintStyle: const TextStyle(color: MdcColors.grey8F8),
        enabledBorder: const OutlineInputBorder(
          borderRadius:  BorderRadius.all(Radius.circular(borderRadius)),
          borderSide: BorderSide(
            color: backgroundColor
          )
        ),
        focusedBorder: const OutlineInputBorder(
            borderRadius:  BorderRadius.all(Radius.circular(borderRadius)),
            borderSide: BorderSide(
                color: backgroundColor
            )
        ),
      ),
    );
  }
}