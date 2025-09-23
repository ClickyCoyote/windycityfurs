<script setup lang="ts">
import Accordion from '../volt/Accordion.vue'
import AccordionPanel from '../volt/AccordionPanel.vue'
import AccordionHeader from '../volt/AccordionHeader.vue'
import AccordionContent from '../volt/AccordionContent.vue'
import BlueSkyLink from '../components/BlueSkyLink.vue'
import TelegramAnnouncementsLink from '../components/TelegramAnnouncementsLink.vue'
</script>

<template>
  <div class="card mb-4">
    <BlueSkyLink />
    <TelegramAnnouncementsLink />
  </div>
  <div class="card">
    <Accordion value="0" class="max-w-full">
      <AccordionPanel value="0">
        <AccordionHeader><h2>Our Group</h2></AccordionHeader>
        <AccordionContent>
          <p>
            Windy City Furs is a 21+ furry meetup group based in the great city
            of Chicago! We host meetups at arcades, bars, breweries, and more!
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel value="1">
        <AccordionHeader><h2>Code of Conduct</h2></AccordionHeader>
        <AccordionContent class="">
          <ul>
            <li>
              Windy City Furs does not tolerate hate of any kind, including
              racism, sexism, homophobia, transphobia, ableism, etc.
            </li>
            <li>
              Harassment of any kind to members will result in a removal from
              the group.
            </li>
            <li>
              Weapons of any kind, including guns, knives, etc. are strictly
              prohibited from all meetups.
            </li>
            <li>Members must be at least 21 years of age.</li>
            <li>This is a work in progress, more to come</li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>

<style scoped>
p,
ul,
ol {
  text-align: left;
}

ol {
  list-style: decimal;
}

ul {
  list-style: disc;
}
</style>
