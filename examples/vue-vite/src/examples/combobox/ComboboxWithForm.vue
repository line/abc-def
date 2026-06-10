<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
import { Card, CardContent, CardFooter } from "@line/abc-def-vue/card";
import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxViewport,
} from "@line/abc-def-vue/combobox";
import { Field, FieldGroup, FieldLabel } from "@line/abc-def-vue/field";
import { toast } from "vue-sonner";

import { Example } from "@/registry/bases/reka/components/example";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

function handleSubmit(event: Event) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const framework = formData.get("framework") as string;
  toast(`You selected ${framework} as your framework.`);
}
</script>

<template>
  <Example title="Form with Combobox">
    <Card class="w-full max-w-sm" size="sm">
      <CardContent>
        <form id="form-with-combobox" class="w-full" @submit="handleSubmit">
          <FieldGroup>
            <Field>
              <FieldLabel html-for="framework"> Framework </FieldLabel>
              <Combobox :items="frameworks">
                <ComboboxInput
                  id="framework"
                  name="framework"
                  placeholder="Select a framework"
                  required
                />
                <ComboboxList>
                  <ComboboxViewport>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxItem
                      v-for="item in frameworks"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </ComboboxItem>
                  </ComboboxViewport>
                </ComboboxList>
              </Combobox>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="form-with-combobox"> Submit </Button>
      </CardFooter>
    </Card>
  </Example>
</template>
