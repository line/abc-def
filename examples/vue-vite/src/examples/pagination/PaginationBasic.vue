<script setup lang="ts">
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@line/abc-def-vue/pagination";
</script>

<template>
  <Pagination>
    <PaginationContent>
      <PaginationItem :size="'default'" as-child>
        <PaginationPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#"> 1 </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" :is-active="true"> 2 </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#"> 3 </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem :size="'default'" as-child>
        <PaginationNext href="#" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</template>
