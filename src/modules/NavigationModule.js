function NavigationModule(navigation) {
  function GoTo(view) {
    navigation.push(view);
  }

  function GoBack() {
    navigation.pop();
  }

  return {
    GoTo,
    GoBack,
  };
}

export default NavigationModule;
