<script setup lang="ts">
import Accordion from "@/volt/Accordion.vue";
import AccordionPanel from "@/volt/AccordionPanel.vue";
import AccordionHeader from "@/volt/AccordionHeader.vue";
import AccordionContent from "@/volt/AccordionContent.vue";
import BlueSkyLink from "@/components/BlueSkyLink.vue";
import TelegramAnnouncementsLink from "@/components/TelegramAnnouncementsLink.vue";
</script>

<template>
  <div class="card">
    <BlueSkyLink />
    <TelegramAnnouncementsLink />
  </div>
  <div class="card">
    <Accordion value="0" class="max-w-full">
      <AccordionPanel value="0">
        <AccordionHeader>Our Group</AccordionHeader>
        <AccordionContent>
          <p>
            Windy City Furs is a 21+ furry meetup group based in the great city
            of Chicago! We host meetups at arcades, bars, breweries, and more!
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader>Code of Conduct</AccordionHeader>
        <AccordionContent>
          <p></p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped></style>
