#ifndef _MEAL_H_
#define _MEAL_H_
#include <string>
#include <node.h>
#include <nan.h>

#define DISALOW_COPY_ASSIGN(x)

class Meal {
  DISALOW_COPY_ASSIGN(Meal);

 public:
  explicit Meal();
  ~Meal();
 
  const std::string::value_type* get_type () const { return type_.c_str(); }
  void set_type (const std::string& new_value) { type_ = new_value; }

  double get_size () const { return size_; }
  void set_size (double new_value) { size_ = new_value; }

  bool get_isRawMeal() const { return raw_meal_; }

  void prepare(std::string type, double size);
  void prepare(std::string type);

  // void cook(std::string chefName);
  v8::Handle<v8::Promise> cook(const std::string& chefName, v8::Isolate* isolate);

 private:
  std::string type_;
  double size_;
  bool raw_meal_;

};

#endif // _MEAL_H_
