function handleClicks() {
    const target = $(this).data("target");
    const button = $(this);

    // Toggle the visibility of the target element
    $(target).toggle();

    // Toggle the text content of the button
    const buttonText = button.text() === "+" ? "−" : "+";
    button.text(buttonText);

    // Toggle the "active" class based on the current text content
    button.toggleClass("button", buttonText === "−");

    // Toggle the "button-minus" class based on the current text content
    button.toggleClass("button-minus", buttonText === "−");
  }

  $(".toggle-button").each(function () {
    $(this).click(handleClicks);
  });