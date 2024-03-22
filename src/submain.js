document.addEventListener("DOMContentLoaded", function () {
  // Find the element with the shadow DOM
  var shadowHost = document.getElementById("loom-companion-mv3");

  if (shadowHost) {
    // Check if shadow DOM is supported
    if (shadowHost.attachShadow) {
      // Create a new shadow root
      var newShadowRoot = shadowHost.attachShadow({ mode: "open" });

      // Create a content element to insert everything from the light DOM back into the shadow DOM
      var content = document.createElement("content");

      // Append content to the new shadow root
      newShadowRoot.appendChild(content);

      // Remove the old shadow root
      var oldShadowRoot = shadowHost.shadowRoot;
      if (oldShadowRoot) {
        oldShadowRoot.replaceWith(newShadowRoot);
      }
    } else {
      console.error("Shadow DOM is not supported in this browser.");
    }
  } else {
    console.error("Element with ID 'shadow-host-companion' not found.");
  }
});
