#include "meal.h"

Meal::Meal():
    type_(""),
    size_(0.0),
    raw_meal_(true) {
}

Meal::~Meal() {
}
 
void Meal::prepare(std::string type, double size) {
  type_ = type;
  size_ = size;
  raw_meal_ = true;
}

void Meal::prepare(std::string type) {
  this->prepare(type, 1.0);
}

v8::Handle<v8::Promise> Meal::cook(const std::string& chefName, v8::Isolate* isolate) {
  using ResolverPersistent = Nan::Persistent<v8::Promise::Resolver>;

  auto period = 3000; // In ms
  auto resolver = v8::Promise::Resolver::New(isolate);
  auto persistent = new ResolverPersistent(resolver);

  struct MealData {
  	Meal* myself;
  	ResolverPersistent* persistent;
  };

  uv_timer_t* handle = new uv_timer_t;
  handle->data = new MealData{this, persistent};
  uv_timer_init(uv_default_loop(), handle);

  // use capture-less lambda for c-callback
  auto timercb = [](uv_timer_t* handle) -> void {
    Nan::HandleScope scope;

    auto persistent = static_cast<MealData*>(handle->data)->persistent;
    auto myself = static_cast<MealData*>(handle->data)->myself;
    delete static_cast<MealData*>(handle->data);

    uv_timer_stop(handle);
    uv_close(reinterpret_cast<uv_handle_t*>(handle),
             [](uv_handle_t* handle) -> void {delete handle;});

    myself->raw_meal_ = false;
  
    auto resolver = Nan::New(*persistent);
    resolver->Resolve(Nan::New("Microwave Ding").ToLocalChecked());

    persistent->Reset();
    delete persistent;
  };
  uv_timer_start(handle, timercb, period, 0);

  return resolver->GetPromise();
}
