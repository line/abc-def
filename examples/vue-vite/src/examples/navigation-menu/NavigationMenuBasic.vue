<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@line/abc-def-vue/navigation-menu";

import { Example } from "@/components/example";
</script>

<template>
  <Example title="Basic Navigation Menu">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"
            >
              <li class="row-span-3">
                <NavigationMenuLink as-child>
                  <a
                    class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                    href="/"
                  >
                    <div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                    <p class="text-muted-foreground text-sm leading-tight">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">
                      Introduction
                    </div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/installation"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">
                      Installation
                    </div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      How to install dependencies and structure your app.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/primitives/typography"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">
                      Typography
                    </div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]"
            >
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/primitives/alert-dialog"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">
                      Alert Dialog
                    </div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      A modal dialog that interrupts the user with important
                      content.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/primitives/hover-card"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">
                      Hover Card
                    </div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      For sighted users to preview content available behind a
                      link.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/primitives/progress"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">Progress</div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      Displays an indicator showing the completion progress.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/primitives/scroll-area"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">
                      Scroll-area
                    </div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      Visually or semantically separates content.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/primitives/tabs"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">Tabs</div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      A set of layered sections of content—known as tab panels.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink as-child>
                  <a
                    href="/docs/primitives/tooltip"
                    class="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none"
                  >
                    <div class="text-sm leading-none font-medium">Tooltip</div>
                    <p
                      class="text-muted-foreground line-clamp-2 text-sm leading-snug"
                    >
                      A popup that displays information related to an element.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs"
            class="group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </Example>
</template>
