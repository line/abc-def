const BOUND_ATTR = "data-behavior-bound";

function isBound(element: Element): boolean {
  return element.getAttribute(BOUND_ATTR) === "true";
}

function markBound(element: Element): void {
  element.setAttribute(BOUND_ATTR, "true");
}

function syncCheckbox(checkbox: HTMLButtonElement): void {
  const checked = checkbox.dataset.state === "checked";
  const indicator = checkbox.querySelector<HTMLElement>(
    '[data-slot="checkbox-indicator"]',
  );

  checkbox.setAttribute("aria-checked", String(checked));

  if (checked) {
    checkbox.setAttribute("data-checked", "");
  } else {
    checkbox.removeAttribute("data-checked");
  }

  if (indicator) {
    indicator.hidden = !checked;
  }
}

function syncSwitch(switchRoot: HTMLButtonElement): void {
  const checked = switchRoot.dataset.state === "checked";
  const thumb = switchRoot.querySelector<HTMLElement>(
    '[data-slot="switch-thumb"]',
  );

  switchRoot.setAttribute("aria-checked", String(checked));

  if (checked) {
    switchRoot.setAttribute("data-checked", "");
  } else {
    switchRoot.removeAttribute("data-checked");
  }

  if (thumb) {
    thumb.dataset.state = checked ? "checked" : "unchecked";
  }
}

function syncRadioItem(item: HTMLButtonElement): void {
  const checked = item.dataset.state === "checked";
  const indicator = item.querySelector<HTMLElement>(
    '[data-slot="radio-group-indicator"]',
  );

  item.setAttribute("aria-checked", String(checked));

  if (checked) {
    item.setAttribute("data-checked", "");
  } else {
    item.removeAttribute("data-checked");
  }

  if (indicator) {
    indicator.hidden = !checked;
  }
}

function setAccordionItem(item: HTMLElement, open: boolean): void {
  const trigger = item.querySelector<HTMLButtonElement>(
    "[data-accordion-trigger]",
  );
  const content = item.querySelector<HTMLElement>("[data-accordion-content]");

  if (!trigger || !content) {
    return;
  }

  trigger.dataset.state = open ? "open" : "closed";
  trigger.setAttribute("aria-expanded", String(open));
  content.dataset.state = open ? "open" : "closed";
  content.hidden = !open;
}

function bindCheckboxes(root: ParentNode): void {
  root
    .querySelectorAll<HTMLButtonElement>("[data-demo-checkbox]")
    .forEach((checkbox) => {
      syncCheckbox(checkbox);
      if (isBound(checkbox)) return;
      markBound(checkbox);

      checkbox.addEventListener("click", () => {
        if (checkbox.disabled || checkbox.dataset.disabled === "true") {
          return;
        }
        checkbox.dataset.state =
          checkbox.dataset.state === "checked" ? "unchecked" : "checked";
        syncCheckbox(checkbox);
      });
    });
}

function bindSwitches(root: ParentNode): void {
  root
    .querySelectorAll<HTMLButtonElement>("[data-demo-switch]")
    .forEach((switchRoot) => {
      syncSwitch(switchRoot);
      if (isBound(switchRoot)) return;
      markBound(switchRoot);

      switchRoot.addEventListener("click", () => {
        if (switchRoot.disabled || switchRoot.dataset.disabled === "true") {
          return;
        }
        switchRoot.dataset.state =
          switchRoot.dataset.state === "checked" ? "unchecked" : "checked";
        syncSwitch(switchRoot);
      });
    });
}

function bindRadioGroups(root: ParentNode): void {
  root
    .querySelectorAll<HTMLElement>("[data-demo-radio-group]")
    .forEach((group) => {
      const items = Array.from(
        group.querySelectorAll<HTMLButtonElement>("[data-demo-radio-item]"),
      );

      items.forEach((item) => {
        syncRadioItem(item);
        if (isBound(item)) return;
        markBound(item);

        item.addEventListener("click", () => {
          if (item.disabled || item.dataset.disabled === "true") {
            return;
          }
          items.forEach((candidate) => {
            candidate.dataset.state =
              candidate === item ? "checked" : "unchecked";
            syncRadioItem(candidate);
          });
        });
      });
    });
}

function bindAccordions(root: ParentNode): void {
  root
    .querySelectorAll<HTMLElement>("[data-demo-accordion]")
    .forEach((accordion) => {
      if (isBound(accordion)) return;
      markBound(accordion);

      const items = Array.from(
        accordion.querySelectorAll<HTMLElement>("[data-accordion-item]"),
      );
      const single = accordion.dataset.type !== "multiple";

      items.forEach((item) => {
        const trigger = item.querySelector<HTMLButtonElement>(
          "[data-accordion-trigger]",
        );
        if (!trigger) return;

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
}

let documentClickAttached = false;
const selectRoots = new Set<HTMLElement>();

function bindSelects(root: ParentNode): void {
  root
    .querySelectorAll<HTMLElement>("[data-demo-select]")
    .forEach((selectRoot) => {
      if (isBound(selectRoot)) return;
      markBound(selectRoot);
      selectRoots.add(selectRoot);

      const trigger = selectRoot.querySelector<HTMLButtonElement>(
        "[data-slot='select-trigger']",
      );
      const content = selectRoot.querySelector<HTMLElement>(
        "[data-slot='select-content']",
      );
      const value = selectRoot.querySelector<HTMLElement>(
        "[data-select-value]",
      );
      const items = Array.from(
        selectRoot.querySelectorAll<HTMLButtonElement>("[data-select-item]"),
      );

      if (!trigger || !content || !value) return;

      const setOpen = (open: boolean) => {
        trigger.setAttribute("aria-expanded", String(open));
        content.dataset.state = open ? "open" : "closed";
        content.hidden = !open;
      };

      const selectItem = (item: HTMLButtonElement) => {
        const label =
          item
            .querySelector<HTMLElement>("[data-slot='select-item-text']")
            ?.textContent?.trim() ??
          item.textContent?.trim() ??
          "";

        value.textContent = label;
        trigger.removeAttribute("data-placeholder");

        items.forEach((candidate) => {
          const indicator =
            candidate.querySelector<HTMLElement>(".select-item-indicator");
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
    });

  if (!documentClickAttached) {
    documentClickAttached = true;
    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      selectRoots.forEach((selectRoot) => {
        if (!selectRoot.isConnected) {
          selectRoots.delete(selectRoot);
          return;
        }
        if (selectRoot.contains(target)) return;

        const trigger = selectRoot.querySelector<HTMLButtonElement>(
          "[data-slot='select-trigger']",
        );
        const content = selectRoot.querySelector<HTMLElement>(
          "[data-slot='select-content']",
        );
        if (!trigger || !content) return;

        trigger.setAttribute("aria-expanded", "false");
        content.dataset.state = "closed";
        content.hidden = true;
      });
    });
  }
}

export function attachInteractiveBehaviors(root: ParentNode): void {
  bindCheckboxes(root);
  bindSwitches(root);
  bindRadioGroups(root);
  bindAccordions(root);
  bindSelects(root);
}
