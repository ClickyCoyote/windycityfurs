<script setup lang="ts">
import AccordionHeader from 'primevue/accordionheader'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionContent from 'primevue/accordioncontent'
import { Card } from 'primevue'
</script>

<template>
  <Card class="text-left">
    <template #content>
      <Accordion :value="['0', '1', '2']" multiple class="max-w-full">
        <AccordionPanel value="0">
          <AccordionHeader><h2>Our Group</h2></AccordionHeader>
          <AccordionContent>
            <p class="p-1">
              Windy City Furs is a 21+ furry meetup group based in the great
              city of Chicago! We host meetups at arcades, bars, breweries, and
              more!
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader><h2>Code of Conduct</h2></AccordionHeader>
          <AccordionContent>
            <ul class="list-decimal p-2">
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
                prohibited from all meetups. This includes prop weapons as well.
                If you have to ask if it's a prop weapon it's likely not
                allowed.
              </li>
              <li>Members must be at least 21 years of age.</li>
              <li>
                Our meetups are often at locations where alcohol is served, we
                kindly ask that you do not over-indulge or you may be asked to
                leave. Bringing outside alcohol is strictly prohibited.
              </li>
              <li>This is a work in progress, more to come</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader><h2>Group Chat Rules</h2></AccordionHeader>
          <AccordionContent>
            <ul class="list-decimal p-2">
              <li>All previous rules from the Code of Conduct apply.</li>
              <li>
                Self-promotion is explicitly prohibited without prior-consent of
                the admin team.
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </template>
  </Card>
</template>

<style scoped></style>
