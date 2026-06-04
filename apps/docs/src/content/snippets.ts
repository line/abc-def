/**
 * Copyright 2025 LY Corporation
 *
 * LY Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

import type { ComponentDoc } from "./components";

export function reactImportSnippet(component: ComponentDoc) {
  const exports = [component.primaryExport, ...component.relatedExports].join(", ");
  return `import { ${exports} } from "@line/abc-def-react/${component.slug}";`;
}

export function vueImportSnippet(component: ComponentDoc) {
  const exports = [component.primaryExport, ...component.relatedExports].join(", ");
  return `<script setup lang="ts">
import { ${exports} } from "@line/abc-def-vue/${component.slug}";
</script>`;
}

export function basicReactSnippet(component: ComponentDoc) {
  switch (component.slug) {
    case "alert":
      return `import { Alert, AlertDescription, AlertTitle } from "@line/abc-def-react/alert";

export function Example() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>Use alerts for short contextual feedback.</AlertDescription>
    </Alert>
  );
}`;
    case "button":
      return `import { Button } from "@line/abc-def-react/button";

export function Example() {
  return <Button variant="outline">Save changes</Button>;
}`;
    case "card":
      return `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@line/abc-def-react/card";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project status</CardTitle>
        <CardDescription>Updated just now</CardDescription>
      </CardHeader>
      <CardContent>Ready for review.</CardContent>
    </Card>
  );
}`;
    case "input":
      return `import { Input } from "@line/abc-def-react/input";
import { Label } from "@line/abc-def-react/label";

export function Example() {
  return (
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
  );
}`;
    default:
      return `${reactImportSnippet(component)}

export function Example() {
  return <${component.primaryExport} />;
}`;
  }
}

export function basicVueSnippet(component: ComponentDoc) {
  switch (component.slug) {
    case "alert":
      return `<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from "@line/abc-def-vue/alert";
</script>

<template>
  <Alert>
    <AlertTitle>Heads up</AlertTitle>
    <AlertDescription>Use alerts for short contextual feedback.</AlertDescription>
  </Alert>
</template>`;
    case "button":
      return `<script setup lang="ts">
import { Button } from "@line/abc-def-vue/button";
</script>

<template>
  <Button variant="outline">Save changes</Button>
</template>`;
    case "card":
      return `<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@line/abc-def-vue/card";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Project status</CardTitle>
      <CardDescription>Updated just now</CardDescription>
    </CardHeader>
    <CardContent>Ready for review.</CardContent>
  </Card>
</template>`;
    case "input":
      return `<script setup lang="ts">
import { Input } from "@line/abc-def-vue/input";
import { Label } from "@line/abc-def-vue/label";
</script>

<template>
  <div class="grid gap-2">
    <Label for="email">Email</Label>
    <Input id="email" type="email" placeholder="name@example.com" />
  </div>
</template>`;
    default:
      return `${vueImportSnippet(component)}

<template>
  <${component.primaryExport} />
</template>`;
  }
}
