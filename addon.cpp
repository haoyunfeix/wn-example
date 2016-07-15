#include <node.h>
#include <nan.h>

#include <sstream>
#include <iostream>
#include <iomanip>
#include <thread>
#include <algorithm>
#include <chrono>
#include <tuple>

#include "nan__meal.h"

#include "nan__log_severity.h"
#include "nan__distortion.h"
#include "nan__preset.h"
#include "nan__stream.h"
#include "nan__format.h"
#include "nan__option.h"

NAN_METHOD(HelloWorld) {
  printf("Old fashion way to say hello in C\n");
}

// Returns a simple type value to JavaScript
NAN_METHOD(ReturnValueToJS) {
  // info is the default parameter name defined in <nan.h>:1297
  info.GetReturnValue().Set(Nan::New("Hello from C++").ToLocalChecked());
}


void initModule(v8::Local<v8::Object> exports) {
  Nan::Export(exports, "helloWorld", HelloWorld);
  Nan::Export(exports, "returnValueToJS", ReturnValueToJS);

  NanMeal::Init(exports);

  Nanlog_severity::Init(exports);
  Nandistortion::Init(exports);
  Nanpreset::Init(exports);
  Nanstream::Init(exports);
  Nanformat::Init(exports);
  Nanoption::Init(exports);
}

NODE_MODULE(exampleAddon1, initModule);
