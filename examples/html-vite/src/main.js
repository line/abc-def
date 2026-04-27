const syncCheckbox = (checkbox) => {
  const checked = checkbox.dataset.state === "checked";
  const indicator = checkbox.querySelector('[data-slot="checkbox-indicator"]');

  checkbox.setAttribute("aria-checked", String(checked));

  if (checked) {
    checkbox.setAttribute("data-checked", "");
  } else {
    checkbox.removeAttribute("data-checked");
  }

  if (indicator) {
    indicator.hidden = !checked;
  }
};

const syncSwitch = (switchRoot) => {
  const checked = switchRoot.dataset.state === "checked";
  const thumb = switchRoot.querySelector('[data-slot="switch-thumb"]');

  switchRoot.setAttribute("aria-checked", String(checked));

  if (checked) {
    switchRoot.setAttribute("data-checked", "");
  } else {
    switchRoot.removeAttribute("data-checked");
  }

  if (thumb) {
    thumb.dataset.state = checked ? "checked" : "unchecked";
  }
};

const syncRadioItem = (item) => {
  const checked = item.dataset.state === "checked";
  const indicator = item.querySelector('[data-slot="radio-group-indicator"]');

  item.setAttribute("aria-checked", String(checked));

  if (checked) {
    item.setAttribute("data-checked", "");
  } else {
    item.removeAttribute("data-checked");
  }

  if (indicator) {
    indicator.hidden = !checked;
  }
};

const setAccordionItem = (item, open) => {
  const trigger = item.querySelector("[data-accordion-trigger]");
  const content = item.querySelector("[data-accordion-content]");

  if (!trigger || !content) {
    return;
  }

  trigger.dataset.state = open ? "open" : "closed";
  trigger.setAttribute("aria-expanded", String(open));
  content.dataset.state = open ? "open" : "closed";
  content.hidden = !open;
};

document.querySelectorAll("[data-demo-checkbox]").forEach((checkbox) => {
  syncCheckbox(checkbox);

  checkbox.addEventListener("click", () => {
    if (checkbox.disabled || checkbox.dataset.disabled === "true") {
      return;
    }

    checkbox.dataset.state =
      checkbox.dataset.state === "checked" ? "unchecked" : "checked";
    syncCheckbox(checkbox);
  });
});

document.querySelectorAll("[data-demo-switch]").forEach((switchRoot) => {
  syncSwitch(switchRoot);

  switchRoot.addEventListener("click", () => {
    if (switchRoot.disabled || switchRoot.dataset.disabled === "true") {
      return;
    }

    switchRoot.dataset.state =
      switchRoot.dataset.state === "checked" ? "unchecked" : "checked";
    syncSwitch(switchRoot);
  });
});

document.querySelectorAll("[data-demo-radio-group]").forEach((group) => {
  const items = Array.from(group.querySelectorAll("[data-demo-radio-item]"));

  items.forEach((item) => {
    syncRadioItem(item);

    item.addEventListener("click", () => {
      if (item.disabled || item.dataset.disabled === "true") {
        return;
      }

      items.forEach((candidate) => {
        candidate.dataset.state = candidate === item ? "checked" : "unchecked";
        syncRadioItem(candidate);
      });
    });
  });
});

document.querySelectorAll("[data-demo-accordion]").forEach((accordion) => {
  const items = Array.from(accordion.querySelectorAll("[data-accordion-item]"));
  const single = accordion.dataset.type !== "multiple";

  items.forEach((item) => {
    const trigger = item.querySelector("[data-accordion-trigger]");

    if (!trigger) {
      return;
    }

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      if (single) {
        items.forEach((candidate) => {
          if (candidate !== item) {
            setAccordionItem(candidate, false);
          }
        });
      }

      setAccordionItem(item, !isOpen);
    });
  });
});

document.querySelectorAll("[data-demo-select]").forEach((selectRoot) => {
  const trigger = selectRoot.querySelector("[data-slot='select-trigger']");
  const content = selectRoot.querySelector("[data-slot='select-content']");
  const value = selectRoot.querySelector("[data-select-value]");
  const items = Array.from(selectRoot.querySelectorAll("[data-select-item]"));

  if (!trigger || !content || !value) {
    return;
  }

  const setOpen = (open) => {
    trigger.setAttribute("aria-expanded", String(open));
    content.dataset.state = open ? "open" : "closed";
    content.hidden = !open;
  };

  const selectItem = (item) => {
    const label =
      item.querySelector("[data-slot='select-item-text']")?.textContent?.trim() ??
      item.textContent?.trim() ??
      "";

    value.textContent = label;
    trigger.removeAttribute("data-placeholder");

    items.forEach((candidate) => {
      const indicator = candidate.querySelector(".select-item-indicator");
      const selected = candidate === item;

      candidate.setAttribute("aria-selected", String(selected));

      if (indicator) {
        indicator.hidden = !selected;
      }
    });

    setOpen(false);
  };

  trigger.addEventListener("click", () => {
    const expanded = trigger.getAttribute("aria-expanded") === "true";
    setOpen(!expanded);
  });

  items.forEach((item) => {
    item.setAttribute("aria-selected", "false");

    item.addEventListener("click", () => {
      selectItem(item);
    });
  });

  document.addEventListener("click", (event) => {
    if (!selectRoot.contains(event.target)) {
      setOpen(false);
    }
  });
});
