#include <node.h>
#include <nan.h>

#include <sstream>
#include <iostream>
#include <iomanip>
#include <thread>
#include <algorithm>
#include <chrono>
#include <tuple>

#include "nanmeal.h"

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
}

NODE_MODULE(exampleAddon, initModule);
